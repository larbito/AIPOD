# AIPOD Studio

Tools for POD owners: book cover, coloring book, and t‑shirt design. Built with Next.js 14, Tailwind, Fabric.js, and Stripe.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` with:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
JWT_SECRET=replace_with_strong_secret
STRIPE_SECRET_KEY=sk_live_or_test
STRIPE_PRICE_ID=price_123
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_or_test
```

3. Run the dev server:

```bash
npm run dev
```

## Notes
- Free users can explore the editors; exports include a small watermark.
- Pro users unlock unlimited, clean exports after successful Stripe checkout.
