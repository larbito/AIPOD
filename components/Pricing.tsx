"use client"
import Link from 'next/link'

type Tier = {
  name: string
  price: string
  features: string[]
  cta: JSX.Element
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
    <section className="container-max py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Simple pricing</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`card p-6 ${t.highlight ? 'ring-2 ring-brand-500' : ''}`}>
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-2xl font-bold">{t.price}</p>
            </div>
            <ul className="space-y-2 mb-6">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><span>✅</span><span>{f}</span></li>
              ))}
            </ul>
            {t.cta}
          </div>
        ))}
      </div>
    </section>
  )
}
