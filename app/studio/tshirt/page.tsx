import { CanvasEditor } from '@/components/CanvasEditor'
import { getUser } from '@/lib/auth'

export default async function TshirtStudioPage() {
  const user = await getUser()
  return (
    <div className="container-max py-12 space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">T‑Shirt Design Studio</h1>
        <p className="text-gray-600 dark:text-gray-300">Design high‑res transparent PNGs for print‑on‑demand.</p>
      </div>
      <CanvasEditor preset="tshirt" watermark={!user?.isPro} />
    </div>
  )
}
