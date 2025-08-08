import { ReactNode } from 'react'
import clsx from 'clsx'

export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx("relative rounded-2xl p-[1px]", className)}>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur"></div>
      <div className="relative rounded-2xl glass p-6">
        {children}
      </div>
    </div>
  )
}
