import { EmojiFloat } from '@/components/EmojiFloat'
import { Pricing } from '@/components/Pricing'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="relative">
        <div className="container-max py-20 md:py-28 relative">
          <EmojiFloat />
          <div className="relative z-10 max-w-3xl">
            <span className="badge mb-4">Built for POD entrepreneurs</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Design faster: book covers, coloring pages, and t‑shirts
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              AIPOD Studio gives book makers, coloring artists, and t‑shirt designers the tools to create, preview, and export stunning designs. All in your browser.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn-primary">Open Dashboard</Link>
              <Link href="#pricing" className="btn-secondary">See Pricing</Link>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <FeatureCard emoji="📘" title="Book Covers" desc="Pre-sized templates for KDP and more, with typography presets." />
            <FeatureCard emoji="🖍️" title="Coloring Books" desc="Generate outlines, patterns, and clean vector-like strokes." />
            <FeatureCard emoji="👕" title="T‑Shirts" desc="High-resolution mockups with transparent backgrounds." />
          </div>
        </div>
      </section>
      <div id="pricing">
        <Pricing />
      </div>
    </div>
  )
}

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="card p-6">
      <div className="text-3xl mb-2">{emoji}</div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  )
}
