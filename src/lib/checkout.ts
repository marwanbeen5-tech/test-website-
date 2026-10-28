import { screensLabel, whatsappLink, type Plan } from "./site";

// Tries Stripe checkout first; falls back to a WhatsApp order if payments aren't configured.
export async function startCheckout(screens: number, index: number, plan: Plan) {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ screens, index }),
    });
    const { url } = await res.json();
    if (res.ok && url) {
      window.location.href = url;
      return;
    }
  } catch {}
  // Same tab: a new tab opened after an await is blocked as a popup.
  window.location.href = whatsappLink(
    `Olá! Quero o plano ${plan.duration} - ${screensLabel(screens)} (${plan.price}€).`
  );
}
