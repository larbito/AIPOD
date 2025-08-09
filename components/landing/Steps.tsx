"use client"
import { motion } from 'framer-motion'

const steps = [
  { title: 'Describe', text: 'Write a short prompt or upload a reference.' },
  { title: 'Generate', text: 'AI creates multiple options. Tweak and refine.' },
  { title: 'Export', text: 'Download print‑ready assets for your store.' },
]

export function Steps() {
  return (
    <section className="container-max py-16 md:py-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How it works</h2>
        <p className="text-gray-400">Three quick steps to publish‑ready designs.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card p-6"
          >
            <div className="text-sm text-gray-400 mb-2">Step {i + 1}</div>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-400">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


