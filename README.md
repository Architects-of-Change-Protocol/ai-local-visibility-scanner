# AI Recommendation Visibility Scan — Escaneo de Visibilidad en Recomendaciones de IA

A single-page SaaS product that scores local business AI recommendation visibility across 7 dimensions (0–100), gated behind a $30 Stripe Checkout payment.

## Tech Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Stripe Checkout (server-side, Price ID-based)
- Deployed on Vercel

## Stripe Setup

### 1. Create a Stripe Product and Price

1. Log in to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Go to **Products** → **Add product**
3. Name: `Escaneo de Visibilidad en Recomendaciones de IA`
4. Add a **One-time price** of **$30 USD**
5. Save — then copy the **Price ID** (starts with `price_...`)

### 2. Get your Stripe Secret Key

- In Stripe Dashboard → **Developers** → **API keys**
- Copy the **Secret key** (starts with `sk_live_...` for production or `sk_test_...` for testing)

### 3. Environment Variables

#### Local development — create `.env.local` (never commit this file):

```
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_SCAN_PRICE_ID=price_YOUR_PRICE_ID_HERE
```

#### Vercel deployment:

In your Vercel project → **Settings** → **Environment Variables**, add:

| Variable | Value |
|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_...` (your live secret key) |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` (no trailing slash) |
| `NEXT_PUBLIC_STRIPE_SCAN_PRICE_ID` | `price_...` (your $30 price ID) |

### 4. Stripe Redirect URLs

The app automatically builds these from `NEXT_PUBLIC_SITE_URL`:

- Success: `{NEXT_PUBLIC_SITE_URL}/?payment=success&session_id={CHECKOUT_SESSION_ID}`
- Cancelled: `{NEXT_PUBLIC_SITE_URL}/?payment=cancelled`

No manual configuration needed in Stripe Dashboard.

## Local Development

```bash
npm install
# Create .env.local with the variables above
npm run dev
```

## Build

```bash
npm run build
```

## Payment Flow

1. User fills the 20-question scanner form
2. Form data is saved to `localStorage`
3. User clicks **"Ver mi resultado — $30"** → POST to `/api/checkout` → redirect to Stripe Checkout
4. After payment, Stripe redirects to `/?payment=success&session_id=...`
5. App calls `/api/checkout/verify` to confirm payment with Stripe
6. Form data is loaded from `localStorage`, score is computed, result is shown
7. Upsell CTA offers Pro Audit ($99) and Full Implementation (from $499)

## Security Notes

- The Stripe secret key is only used server-side in API route handlers
- Never expose `STRIPE_SECRET_KEY` to the client
- `NEXT_PUBLIC_STRIPE_SCAN_PRICE_ID` is public but harmless (it's just a price reference)
- Form data stored in `localStorage` is client-side only and never sent to any server
