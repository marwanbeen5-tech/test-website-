import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { adminEmail, escapeHtml, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

// Stripe calls this after a payment. Set the endpoint in the Stripe dashboard to
// https://your-domain/api/stripe/webhook with the event checkout.session.completed.
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await req.text(), req.headers.get("stripe-signature") ?? "", secret);
  } catch {
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const plan = escapeHtml(session.metadata?.plan ?? "");
    const amount = ((session.amount_total ?? 0) / 100).toFixed(2);

    if (email) {
      await sendEmail({
        to: email,
        subject: `${site.name} - Pagamento confirmado`,
        html: `<h2>Obrigado pela sua compra!</h2>
          <p>Recebemos o pagamento de <b>${amount}€</b> pelo plano <b>${plan}</b>.</p>
          <p>As suas credenciais de acesso serão enviadas para este email em 5-30 minutos.</p>
          <p>Precisa de ajuda? Responda a este email ou fale connosco por WhatsApp.</p>
          <p>Equipa ${escapeHtml(site.name)}</p>`,
      });
    }
    if (adminEmail()) {
      await sendEmail({
        to: adminEmail(),
        subject: `Nova venda: ${session.metadata?.plan ?? ""} (${amount}€)`,
        html: `<p>Cliente: ${escapeHtml(email ?? "-")}<br>Telefone: ${escapeHtml(session.customer_details?.phone ?? "-")}<br>Plano: ${plan}<br>Valor: ${amount}€</p>`,
      });
    }
  }

  return NextResponse.json({ received: true });
}
