import { Pricing } from '@/components/Pricing'
import Link from 'next/link'
import { NeonButton } from '@/components/NeonButton'
import { GlowCard } from '@/components/GlowCard'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { Steps } from '@/components/landing/Steps'
import { LivePreview } from '@/components/landing/LivePreview'

export default function HomePage() {
  return (
    <div>
      {/* About + Hero */}
      <section id="about" className="relative overflow-hidden">
        <div className="container-max py-20 md:py-28 relative">
          <div className="relative z-10 max-w-4xl">
            <span className="badge mb-4">For creators, authors, and merch brands</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
              <span className="text-gradient">Create print‑ready designs with AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              AIPOD Studio helps you generate ready‑to‑sell assets for KDP and print‑on‑demand. Modern canvas, fast exports, and AI‑assisted creation.
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
              <p className="text-gray-600 dark:text-gray-300">Trim presets for KDP & print, spine calculators, and type scales.</p>
            </GlowCard>
            <GlowCard>
              <div className="text-4xl mb-3">🖍️</div>
              <h3 className="font-semibold text-lg mb-1">Coloring Books</h3>
              <p className="text-gray-600 dark:text-gray-300">AI‑guided outlines, clean strokes, and instant page packs.</p>
            </GlowCard>
            <GlowCard>
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-semibold text-lg mb-1">T‑Shirts</h3>
              <p className="text-gray-600 dark:text-gray-300">Prompt‑to‑PNG with transparent backgrounds and print sizes.</p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* T‑Shirt Feature */}
      <section id="tshirt" className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge mb-3">T‑Shirt Designer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Generate tees from a prompt or an image</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Describe your idea or paste an image to remix. Generate up to 10 variants at once and export print‑ready transparent PNGs.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ Prompt or image‑to‑design</li>
              <li>✅ Batch generation (up to 10)</li>
              <li>✅ High‑density sizes for POD</li>
            </ul>
            <div className="flex gap-3">
              <NeonButton href="/studio/tshirt" className="h-11">Try T‑Shirt Studio</NeonButton>
              <Link href="/dashboard" className="btn-secondary h-11">Open Dashboard</Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 to-emerald-400/20 flex items-center justify-center text-6xl">
              👕
            </div>
          </div>
        </div>
      </section>

      {/* Coloring Book Feature */}
      <section id="coloring" className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1">
            <span className="badge mb-3">Coloring Book Studio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Design full coloring books from a prompt</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Provide a theme and page count, and let AI generate clean outlines and consistent styles across your book. Export pages or bundles instantly.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ Crisp outlines, vector‑like look</li>
              <li>✅ Style consistency across pages</li>
              <li>✅ Ready‑to‑upload page packs</li>
            </ul>
            <div className="flex gap-3">
              <NeonButton href="/studio/coloring" className="h-11">Try Coloring Studio</NeonButton>
              <Link href="/dashboard" className="btn-secondary h-11">Open Dashboard</Link>
            </div>
          </div>
          <div className="card p-6 order-1 md:order-2">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-pink-500/20 to-sky-400/20 flex items-center justify-center text-6xl">
              🖍️
            </div>
          </div>
        </div>
      </section>

      {/* Book Cover Feature */}
      <section id="covers" className="container-max py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge mb-3">Book Cover Studio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready‑to‑upload covers for KDP or print</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Pick your trim size, set bleed and spine, then generate or compose your cover ideas. Export compliant PDFs or high‑res PNGs for print.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
              <li>✅ KDP trim presets & spine calculator</li>
              <li>✅ Typography scales and grids</li>
              <li>✅ PDF and PNG exports</li>
            </ul>
            <div className="flex gap-3">
              <NeonButton href="/studio/cover" className="h-11">Try Cover Studio</NeonButton>
              <Link href="/dashboard" className="btn-secondary h-11">Open Dashboard</Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-amber-500/20 to-violet-400/20 flex items-center justify-center text-6xl">
              📘
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* Feature grid */}
      <FeatureGrid />

      {/* Steps */}
      <Steps />

      {/* Live preview */}
      <LivePreview />

      {/* Why Us */}
      <section id="why-us" className="container-max py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why choose AIPOD Studio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <GlowCard>
            <h3 className="font-semibold text-lg mb-2">Built for POD workflows</h3>
            <p className="text-gray-600 dark:text-gray-300">Presets for real marketplaces and printers so you skip guesswork.</p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold text-lg mb-2">Fast, modern, delightful</h3>
            <p className="text-gray-600 dark:text-gray-300">Glassmorphism UI, keyboard shortcuts, and instant previews.</p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold text-lg mb-2">Own your exports</h3>
            <p className="text-gray-600 dark:text-gray-300">High‑res assets with clear licensing when you upgrade.</p>
          </GlowCard>
        </div>
      </section>

      {/* Extra CTA */}
      <section id="cta" className="container-max py-12">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Start creating today</h3>
            <p className="text-gray-600 dark:text-gray-300">Jump into the dashboard and try all studios in minutes.</p>
          </div>
          <div className="flex gap-3">
            <NeonButton href="/dashboard" className="h-11">Open Dashboard</NeonButton>
            <Link href="/register" className="btn-secondary h-11">Create free account</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-max py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <details>
              <summary className="font-semibold cursor-pointer">Do I need any design experience?</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">No. The studios are guided and AI‑assisted. You can start from prompts or simple templates.</p>
            </details>
          </div>
          <div className="card p-6">
            <details>
              <summary className="font-semibold cursor-pointer">Are the exports ready for KDP or printers?</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Yes. Choose your trim size and we handle bleed, spine, and safe areas.</p>
            </details>
          </div>
          <div className="card p-6">
            <details>
              <summary className="font-semibold cursor-pointer">Can I generate multiple t‑shirt designs at once?</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Yes. Batch up to 10 variants per prompt for faster iteration.</p>
            </details>
          </div>
          <div className="card p-6">
            <details>
              <summary className="font-semibold cursor-pointer">What’s included in the free plan?</summary>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Access to all editors with basic, watermarked exports. Upgrade to remove limits.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
