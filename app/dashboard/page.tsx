import Link from 'next/link'
import { requireUser } from '@/lib/auth'

export default async function DashboardPage() {
  const user = await requireUser()
  return (
    <div className="container-max py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome{user?.email ? `, ${user.email}` : ''}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Choose a studio to get started.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="font-semibold mb-2">Book Cover Studio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Create covers with presets for trim sizes.</p>
          <Link className="btn-primary" href="/studio/cover">Open</Link>
        </div>
        <div className="card p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="font-semibold mb-2">Coloring Book Studio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Draw or import outlines for coloring pages.</p>
          <Link className="btn-primary" href="/studio/coloring">Open</Link>
        </div>
        <div className="card p-6 transition-transform hover:-translate-y-0.5">
          <h3 className="font-semibold mb-2">T‑Shirt Studio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Design print‑ready transparent PNGs.</p>
          <Link className="btn-primary" href="/studio/tshirt">Open</Link>
        </div>
      </div>
      {!user?.isPro && (
        <div className="card p-6 mt-8">
          <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Unlock unlimited exports and remove watermark.</p>
          <form action="/api/checkout" method="post"><button className="btn-primary">Go Pro</button></form>
        </div>
      )}
    </div>
  )
}
