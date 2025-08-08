"use client"
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useEffect, useState } from 'react'

export function NavBar() {
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    fetch('/api/auth/me').then(async (r) => {
      if (r.ok) {
        const me = await r.json()
        setIsAuthed(Boolean(me?.email))
      }
    }).catch(() => {})
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 backdrop-blur bg-white/70 dark:bg-gray-950/60">
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">🧩</span>
            <span>AIPOD Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 ml-6 text-sm">
            <Link href="/pricing" className="hover:underline">Pricing</Link>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/studio/cover" className="hover:underline">Book Cover</Link>
            <Link href="/studio/coloring" className="hover:underline">Coloring Book</Link>
            <Link href="/studio/tshirt" className="hover:underline">T‑Shirt</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isAuthed ? (
            <form action="/api/auth/logout" method="post">
              <button className="btn-secondary px-3 py-1.5 rounded-md" type="submit">Logout</button>
            </form>
          ) : (
            <div className="flex items-center gap-2">
              <Link className="btn-secondary px-3 py-1.5 rounded-md" href="/login">Login</Link>
              <Link className="btn-primary px-3 py-1.5 rounded-md" href="/register">Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
