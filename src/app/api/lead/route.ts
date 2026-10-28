import { NextResponse } from "next/server";
import { adminEmail, escapeHtml, isEmail, sendEmail } from "@/lib/email";
import { site } from "@/lib/site";

// Simple per-IP limit (in memory, per server instance): 5 submissions per 10 minutes.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

// Handles the free trial and contact forms.
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "local";
  if (rateLimited(ip)) return NextResponse.json({ error: "too_many" }, { status: 429 });

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "invalid" }, { status: 400 });

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return NextResponse.json({ ok: true });

  const type = body.type === "trial" ? "trial" : "contact";
  const name = String(body.name ?? "").trim().slice(0, 100);
  const message = String(body.message ?? "").trim().slice(0, 2000);
  const device = String(body.device ?? "").trim().slice(0, 100);
  const phone = String(body.phone ?? "").trim().slice(0, 30);

  if (!name || !isEmail(body.email) || (type === "contact" && !message)) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  const email = body.email;

  const rows = [
    ["Nome", name],
    ["Email", email],
    ["Telefone", phone],
    ["Dispositivo", device],
    ["Mensagem", message],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `<b>${k}:</b> ${escapeHtml(v)}`)
    .join("<br>");

  try {
    if (adminEmail()) {
      await sendEmail({
        to: adminEmail(),
        replyTo: email,
        subject: type === "trial" ? `Pedido de teste grátis: ${name}` : `Nova mensagem de ${name}`,
        html: `<p>${rows}</p>`,
      });
    }
    await sendEmail({
      to: email,
      subject: type === "trial" ? `${site.name} - Pedido de teste recebido` : `${site.name} - Mensagem recebida`,
      html:
        type === "trial"
          ? `<p>Olá ${escapeHtml(name)},</p><p>Recebemos o seu pedido de teste grátis de 24 horas. Vai receber os dados de acesso neste email em breve.</p><p>Equipa ${escapeHtml(site.name)}</p>`
          : `<p>Olá ${escapeHtml(name)},</p><p>Obrigado pelo seu contacto. Respondemos normalmente em menos de 1 hora.</p><p>Equipa ${escapeHtml(site.name)}</p>`,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
