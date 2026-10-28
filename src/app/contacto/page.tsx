import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata = pageMeta(
  "/contacto",
  "Contactos e Suporte IPTV Portugal 24/7",
  "Fale com o suporte IPTV Portugal da StreamPro por WhatsApp ou email, 24 horas por dia, 7 dias por semana, em português."
);

export default function ContactoPage() {
  return (
    <PageShell
      title="Contacte-nos"
      intro="Estamos disponíveis 24 horas por dia, 7 dias por semana. Escolha a forma de contacto que preferir."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <a
          href={whatsappLink("Olá! Preciso de ajuda.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border bg-surface p-8 transition hover:border-brand/60"
        >
          <p className="text-lg font-bold text-fg">WhatsApp</p>
          <p className="mt-2 font-semibold text-fg">{site.phoneDisplay}</p>
          <p className="mt-1">Resposta rápida, normalmente em poucos minutos.</p>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-2xl border border-border bg-surface p-8 transition hover:border-brand/60"
        >
          <p className="text-lg font-bold text-fg">Email</p>
          <p className="mt-2">{site.email}</p>
        </a>
      </div>
      <h2>Envie-nos uma mensagem</h2>
      <LeadForm type="contact" />
    </PageShell>
  );
}
