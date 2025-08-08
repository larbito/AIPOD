"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = (theme === 'dark') || (theme === 'system' && resolvedTheme === 'dark')
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="btn-secondary rounded-md px-2 py-1"
    >{isDark ? '🌙' : '☀️'}</button>
  )
}
