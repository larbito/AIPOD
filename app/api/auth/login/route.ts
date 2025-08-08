import { NextResponse } from 'next/server'
import { setUserCookie } from '@/lib/auth'

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}))
  const email = (data?.email || '').toString().trim().toLowerCase()
  if (!email || !email.includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  await setUserCookie({ email, isPro: false })
  return NextResponse.json({ ok: true })
}
