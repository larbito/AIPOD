"use client"
import { motion } from 'framer-motion'
import { GlowCard } from '@/components/GlowCard'
import { Brush, BookOpen, Shirt, Sparkles, Layers, Image } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'AI Assist', text: 'Generate ideas and iterate fast.' },
  { icon: Shirt, title: 'T‑Shirts', text: 'Prompt or remix to print‑ready PNGs.' },
  { icon: BookOpen, title: 'Book Covers', text: 'KDP presets with spine and bleed.' },
  { icon: Brush, title: 'Coloring Pages', text: 'Clean outlines and consistent style.' },
  { icon: Layers, title: 'Batch', text: 'Generate multiple variants at once.' },
  { icon: Image, title: 'Exports', text: 'High‑res PNG and PDF outputs.' },
]

export function FeatureGrid() {
  return (
    <section className="container-max py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Everything you need</h2>
        <p className="text-gray-400">Built for speed, clarity, and great outputs.</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map(({ icon: Icon, title, text }) => (
          <GlowCard key={title}>
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-white/5 p-2">
                <Icon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-400">{text}</p>
              </div>
            </div>
          </GlowCard>
        ))}
      </motion.div>
    </section>
  )
}


