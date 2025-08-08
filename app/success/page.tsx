import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'
import { setUserCookie, getUser } from '@/lib/auth'

export default async function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id
  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      const email = (session.customer_details?.email || (await getUser())?.email || '').toString()
      if (email) {
        await setUserCookie({ email, isPro: true })
      }
    } catch {}
  }
  return (
    <div className="container-max py-16">
      <h1 className="text-3xl font-bold mb-2">You are Pro 🎉</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Your features are unlocked. Head to your dashboard to start creating.</p>
      <a href="/dashboard" className="btn-primary">Go to Dashboard</a>
    </div>
  )
}
