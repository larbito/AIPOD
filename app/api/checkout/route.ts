import { NextResponse } from 'next/server'
import { stripe, priceId } from '@/lib/stripe'
import { getUser } from '@/lib/auth'

export async function POST() {
  const user = await getUser()
  if (!stripe || !priceId) {
    return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 })
  }
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`,
    customer_email: user?.email,
  })
  return NextResponse.redirect(session.url!, { status: 303 })
}
