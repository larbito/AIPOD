"use client"
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useEffect, useState } from 'react'
import type { Route } from 'next'

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

  const navLinks = [
    { href: '/pricing' as Route, label: 'Pricing' },
    { href: '/dashboard' as Route, label: 'Dashboard' },
    { href: '/studio/cover' as Route, label: 'Book Cover' },
    { href: '/studio/coloring' as Route, label: 'Coloring Book' },
    { href: '/studio/tshirt' as Route, label: 'T‑Shirt' },
  ] as const

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-[#0c0c10]/70 backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-2xl">🧩</span>
            <span className="text-gradient">AIPOD Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 ml-6 text-sm">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="relative text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white">
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-emerald-400 after:transition-all hover:after:w-full">{l.label}</span>
              </Link>
            ))}
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
