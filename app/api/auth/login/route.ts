import { NextResponse } from 'next/server'
import { setUserCookie } from '@/lib/auth'

export async function POST(request: Request) {
  const data = await request.json().catch(() => ({}))
  const email = (data?.email || '').toString().trim() || 'guest@aipod.local'
  await setUserCookie({ email: email.toLowerCase(), isPro: false })
  return NextResponse.json({ ok: true })
}
