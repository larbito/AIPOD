import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')

export const priceId = process.env.STRIPE_PRICE_ID || ''
