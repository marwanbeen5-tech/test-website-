import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { findPlan, screensLabel, site } from "@/lib/site";

export async function POST(req: Request) {
  if (!stripe) return NextResponse.json({ error: "payments_disabled" }, { status: 503 });

  const { screens, index } = await req.json().catch(() => ({}));
  // Price is looked up on the server, never taken from the browser.
  const plan = findPlan(Number(screens), Number(index));
  if (!plan) return NextResponse.json({ error: "invalid_plan" }, { status: 400 });

  const name = `${site.name} ${plan.duration} - ${screensLabel(Number(screens))}`;
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    locale: "pt",
    line_items: [
      {
        quantity: 1,
        price_data: { currency: "eur", unit_amount: plan.price * 100, product_data: { name } },
      },
    ],
    phone_number_collection: { enabled: true },
    metadata: { plan: name },
    success_url: `${site.url}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${site.url}/#planos`,
  });

  return NextResponse.json({ url: session.url });
}
