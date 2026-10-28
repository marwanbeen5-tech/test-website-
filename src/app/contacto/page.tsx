import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata = pageMeta(
  "/contacto",
  "Contactos e Suporte IPTV Portugal 24/7",
  "Fale com o suporte IPTV Portugal por WhatsApp, 24 horas por dia, 7 dias por semana, em português. Ajuda com instalação, pagamentos, renovações e problemas técnicos."
);

const quickHelp = [
  { href: "/instalacao", title: "Guia de instalação", text: "Passo a passo para Smart TV, Fire TV Stick, Android, iPhone e computador." },
  { href: "/blog/iptv-buffering-solucoes", title: "Imagem a parar?", text: "7 soluções rápidas para acabar com o buffering." },
  { href: "/blog/melhores-aplicacoes-iptv", title: "Que aplicação usar?", text: "As melhores apps IPTV para cada dispositivo." },
  { href: "/reembolso", title: "Reembolsos", text: "Como pedir o reembolso nos primeiros 7 dias." },
];

export default function ContactoPage() {
  return (
    <PageShell
      title="Contacte-nos"
      intro="A nossa equipa de suporte fala português e está disponível 24 horas por dia, 7 dias por semana. A forma mais rápida de falar connosco é o WhatsApp."
    >
      <JsonLd data={breadcrumbLd([{ name: "Contactos", path: "/contacto" }])} />

      <div className={`grid gap-6 ${site.email ? "md:grid-cols-2" : ""}`}>
        <a
          href={whatsappLink("Olá! Preciso de ajuda.")}
          target="_blank"
          rel="noopener noreferrer"
          className="spotlight rounded-2xl border border-border bg-surface p-8"
        >
          <p className="text-lg font-bold text-fg">WhatsApp</p>
          <p className="mt-2 font-semibold text-fg">{site.phoneDisplay}</p>
          <p className="mt-1">Resposta rápida, normalmente em poucos minutos, a qualquer hora.</p>
        </a>
        {site.email && (
          <a href={`mailto:${site.email}`} className="spotlight rounded-2xl border border-border bg-surface p-8">
            <p className="text-lg font-bold text-fg">Email</p>
            <p className="mt-2">{site.email}</p>
            <p className="mt-1">Respondemos normalmente em menos de 1 hora.</p>
          </a>
        )}
      </div>

      <h2>Em que podemos ajudar?</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Escolher o plano e o número de ecrãs certos para a sua casa.</li>
        <li>Instalar e configurar a aplicação no seu dispositivo.</li>
        <li>Pagamentos, renovações e mudança de plano.</li>
        <li>Problemas de imagem, buffering ou canais que não carregam.</li>
        <li>Pedidos de teste grátis e de reembolso.</li>
      </ul>

      <h2>Ajuda rápida</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {quickHelp.map((h) => (
          <Link key={h.href} href={h.href} className="spotlight rounded-2xl border border-border bg-surface p-5">
            <p className="font-bold text-fg">{h.title} →</p>
            <p className="mt-1 text-sm">{h.text}</p>
          </Link>
        ))}
      </div>

      <h2>Envie-nos uma mensagem</h2>
      <p>Prefere escrever? Deixe a sua mensagem e respondemos o mais rapidamente possível.</p>
      <LeadForm type="contact" />
    </PageShell>
  );
}
