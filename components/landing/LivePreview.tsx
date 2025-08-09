"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export function LivePreview() {
  const [loading, setLoading] = useState(false)
  const [seed, setSeed] = useState(42)
  return (
    <section className="container-max py-16 md:py-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Live preview</h2>
        <p className="text-gray-400">Try a sample generator card.</p>
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
        <div className="card p-6 space-y-4">
          <label className="block text-sm font-medium">Prompt</label>
          <input className="w-full rounded-2xl border border-[hsl(var(--border))] bg-transparent px-3 py-2" placeholder="A friendly robot illustration" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Seed</label>
              <input type="number" value={seed} onChange={(e)=>setSeed(Number(e.target.value))} className="w-full rounded-2xl border border-[hsl(var(--border))] bg-transparent px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Count</label>
              <select className="w-full rounded-2xl border border-[hsl(var(--border))] bg-transparent px-3 py-2"><option>4</option><option>8</option><option>10</option></select>
            </div>
          </div>
          <button className="btn-primary" onClick={()=>{ setLoading(true); setTimeout(()=>setLoading(false), 800) }} disabled={loading}>{loading ? 'Generating…' : 'Generate'}</button>
        </div>
        <div className="card p-6 min-h-[240px] flex items-center justify-center text-gray-400">
          {loading ? 'Generating preview…' : 'Your results will appear here'}
        </div>
      </motion.div>
    </section>
  )
}


