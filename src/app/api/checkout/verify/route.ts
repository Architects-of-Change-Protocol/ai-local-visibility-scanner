import Stripe from 'stripe';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const sessionId = request.nextUrl.searchParams.get('session_id');

  if (!secretKey) {
    return Response.json({ paid: false, error: 'Stripe not configured.' }, { status: 500 });
  }
  if (!sessionId) {
    return Response.json({ paid: false, error: 'Missing session_id parameter.' }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return Response.json({
      paid: session.payment_status === 'paid',
      sessionId: session.id,
      customerEmail: session.customer_details?.email ?? null,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return Response.json({ paid: false, error: message }, { status: 400 });
  }
}
