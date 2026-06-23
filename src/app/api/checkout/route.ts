import Stripe from 'stripe';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const priceId = process.env.NEXT_PUBLIC_STRIPE_SCAN_PRICE_ID;

  if (!secretKey) {
    return Response.json({ error: 'STRIPE_SECRET_KEY is not configured.' }, { status: 500 });
  }
  if (!siteUrl) {
    return Response.json({ error: 'NEXT_PUBLIC_SITE_URL is not configured.' }, { status: 500 });
  }
  if (!priceId) {
    return Response.json(
      { error: 'NEXT_PUBLIC_STRIPE_SCAN_PRICE_ID is not configured.' },
      { status: 500 }
    );
  }

  let body: { businessName?: string; category?: string; city?: string } = {};
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/?payment=cancelled`,
      metadata: {
        businessName: body.businessName ?? '',
        category: body.category ?? '',
        city: body.city ?? '',
      },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ error: `Stripe error: ${message}` }, { status: 500 });
  }
}
