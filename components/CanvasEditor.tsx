"use client"
import { fabric } from 'fabric'
import { useEffect, useRef, useState } from 'react'

export type CanvasPreset = 'cover' | 'coloring' | 'tshirt'

const PRESETS: Record<CanvasPreset, { width: number; height: number; bg: string }> = {
  cover: { width: 1800, height: 2700, bg: '#ffffff' },
  coloring: { width: 2048, height: 2048, bg: '#ffffff' },
  tshirt: { width: 4500, height: 5400, bg: '#ffffff' },
}

export function CanvasEditor({ preset, watermark }: { preset: CanvasPreset; watermark?: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const cfg = PRESETS[preset]
    const c = new fabric.Canvas(ref.current, {
      backgroundColor: cfg.bg,
      width: cfg.width,
      height: cfg.height,
    })
    setCanvas(c)
    const resize = () => c.setZoom(Math.min(window.innerWidth * 0.8 / cfg.width, 1))
    resize()
    window.addEventListener('resize', resize)
    return () => { c.dispose(); window.removeEventListener('resize', resize) }
  }, [preset])

  const addText = () => {
    if (!canvas) return
    const text = new fabric.IText('Your text', { left: 100, top: 100, fill: '#111827', fontFamily: 'Inter', fontSize: 64 })
    canvas.add(text).setActiveObject(text)
    canvas.requestRenderAll()
  }

  const addRect = () => {
    if (!canvas) return
    const rect = new fabric.Rect({ left: 150, top: 150, fill: '#6366f1', width: 300, height: 200, rx: 16, ry: 16 })
    canvas.add(rect).setActiveObject(rect)
    canvas.requestRenderAll()
  }

  const uploadImage = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (!reader.result) return
      fabric.Image.fromURL(reader.result as string, (img) => {
        img.scaleToWidth(800)
        img.set({ left: 100, top: 100 })
        canvas?.add(img).setActiveObject(img)
        canvas?.requestRenderAll()
      })
    }
    reader.readAsDataURL(file)
  }

  const exportPNG = () => {
    if (!canvas) return
    if (watermark) {
      const mark = new fabric.Text('AIPOD • Demo', { fill: '#9CA3AF', fontSize: 72, opacity: 0.6, angle: -20 })
      mark.set({ left: canvas.getWidth()/2 - 200, top: canvas.getHeight()/2 })
      canvas.add(mark)
      canvas.requestRenderAll()
      setTimeout(() => doExport(), 50)
    } else {
      doExport()
    }
  }

  const doExport = () => {
    if (!canvas) return
    const dataUrl = canvas.toDataURL({ format: 'png' })
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `${preset}-design.png`
    a.click()
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-secondary" onClick={addText}>Add Text</button>
        <button className="btn-secondary" onClick={addRect}>Add Shape</button>
        <label className="btn-secondary cursor-pointer">
          Upload Image
          <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files && uploadImage(e.target.files[0])} />
        </label>
        <button className="btn-primary" onClick={exportPNG}>Export PNG</button>
      </div>
      <div className="overflow-auto border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 p-2">
        <canvas ref={ref} />
      </div>
    </div>
  )
}
