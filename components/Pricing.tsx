"use client"
import Link from 'next/link'
import type { ReactNode } from 'react'

type Tier = {
  name: string
  price: string
  features: string[]
  cta: ReactNode
  highlight?: boolean
}

export function Pricing() {
  const tiers: Tier[] = [
    {
      name: 'Free',
      price: '$0',
      features: ['Dashboard access', 'Preview editors', 'Basic exports (watermarked)'],
      cta: <Link href="/register" className="btn-secondary w-full">Get started</Link>,
    },
    {
      name: 'Pro',
      price: '$19/mo',
      features: ['All editors unlocked', 'Unlimited exports', 'Commercial license', 'Priority support'],
      cta: <form action="/api/checkout" method="post"><button className="btn-primary w-full">Go Pro</button></form>,
      highlight: true,
    },
  ]

  return (
    <section className="container-max py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-2">Simple pricing</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">Start free. Upgrade when you are ready.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {tiers.map((t) => (
          <div key={t.name} className="relative rounded-2xl p-[1px]">
            <div className={`absolute -inset-0.5 rounded-2xl ${t.highlight ? 'bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400' : 'bg-white/10'} blur`}></div>
            <div className="relative rounded-2xl glass p-6">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-3xl font-extrabold">{t.price}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span>✨</span><span>{f}</span></li>
                ))}
              </ul>
              {t.cta}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
