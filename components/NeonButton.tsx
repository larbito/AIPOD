"use client"
import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'
import type { Route } from 'next'

type Props = {
  children: ReactNode
  href?: Route
  className?: string
  onClick?: () => void
}

export function NeonButton({ children, href, className, onClick }: Props) {
  const inner = (
    <span className={clsx("relative z-10 px-5 py-2", "text-sm md:text-base font-semibold")}>{children}</span>
  )
  const glow = "absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 blur-md opacity-60"
  const base = clsx("relative inline-flex items-center justify-center rounded-xl overflow-hidden", "text-white", className)
  if (href) {
    return (
      <Link href={href} className={base}>
        <span className={glow} />
        <span className="absolute inset-[2px] rounded-[10px] bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500" />
        {inner}
      </Link>
    )
  }
  return (
    <button className={base} onClick={onClick}>
      <span className={glow} />
      <span className="absolute inset-[2px] rounded-[10px] bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500" />
      {inner}
    </button>
  )
}
