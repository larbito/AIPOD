import { Pricing } from '@/components/Pricing'
import Link from 'next/link'
import { NeonButton } from '@/components/NeonButton'
import { GlowCard } from '@/components/GlowCard'

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-max py-20 md:py-28 relative">
          <div className="relative z-10 max-w-4xl">
            <span className="badge mb-4">Next‑gen studio for POD creators</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
              <span className="text-gradient">Create stunning book covers, coloring pages, and tees</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Supercharged canvas with neon‑clean aesthetics, glass UI, and instant exports. Designed for book makers, coloring artists, and t‑shirt brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <NeonButton href="/dashboard" className="h-11">Open Dashboard</NeonButton>
              <Link href="#pricing" className="btn-secondary h-11">See Pricing</Link>
            </div>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <GlowCard>
              <div className="text-4xl mb-3">📘</div>
              <h3 className="font-semibold text-lg mb-1">Book Covers</h3>
              <p className="text-gray-600 dark:text-gray-300">Perfect trim presets, bleed guides, and typography kits.</p>
            </GlowCard>
            <GlowCard>
              <div className="text-4xl mb-3">🖍️</div>
              <h3 className="font-semibold text-lg mb-1">Coloring Pages</h3>
              <p className="text-gray-600 dark:text-gray-300">Clean outlines, vector‑like strokes, and pattern stamps.</p>
            </GlowCard>
            <GlowCard>
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-semibold text-lg mb-1">T‑Shirts</h3>
              <p className="text-gray-600 dark:text-gray-300">Transparent PNG exports and high‑density print sizes.</p>
            </GlowCard>
          </div>
        </div>
      </section>
      <div id="pricing">
        <Pricing />
      </div>
    </div>
  )
}
