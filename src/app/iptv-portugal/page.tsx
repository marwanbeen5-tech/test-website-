import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { countries } from "@/lib/countries";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { trialWhatsapp } from "@/lib/site";

const path = "/iptv-portugal";

export const metadata = pageMeta(
  path,
  "IPTV Portugal no Estrangeiro: Ver Canais Portugueses",
  "Veja canais portugueses fora de Portugal com IPTV: em França, na Suíça, no Luxemburgo, no Reino Unido e em qualquer país com internet. Teste grátis."
);

const faqs = [
  {
    q: "Posso ver canais portugueses fora de Portugal?",
    a: "Sim. Com IPTV os canais chegam pela internet, por isso funciona em qualquer país com uma ligação estável, na Smart TV, no Fire TV Stick ou no telemóvel.",
  },
  {
    q: "Preciso de VPN para ver IPTV Portugal no estrangeiro?",
    a: "Não. O serviço funciona diretamente pela internet do país onde está, sem VPN.",
  },
  {
    q: "Como acerto o guia de programação ao meu fuso horário?",
    a: "Nas definições da aplicação, ajuste o desfasamento do EPG em horas: +1 em França, Suíça, Luxemburgo, Bélgica ou Alemanha; sem ajuste no Reino Unido.",
  },
];

export default function EstrangeiroPage() {
  return (
    <PageShell
      title="IPTV Portugal no Estrangeiro"
      intro="Viver fora de Portugal não obriga a ficar sem televisão portuguesa. Com IPTV vê os canais portugueses, o desporto, as notícias e as novelas pela internet, em qualquer país, sem antena parabólica."
    >
      <JsonLd data={breadcrumbLd([{ name: "IPTV Portugal no estrangeiro", path }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      <h2 className="!mt-0">Escolha o seu país</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {countries.map((c) => (
          <Link key={c.slug} href={`/iptv-portugal/${c.slug}`} className="spotlight rounded-2xl border border-border bg-surface p-6">
            <span className="flex items-center gap-3">
              <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon name="globe" className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-fg">IPTV Portugal {c.inName}</span>
            </span>
            <span className="mt-3 block text-sm">{c.summary[0]}</span>
            <span className="text-gradient mt-3 block font-semibold">Ver o guia →</span>
          </Link>
        ))}
      </div>

      <h2>Funciona em qualquer país</h2>
      <p>
        O serviço funciona em qualquer país com internet: Alemanha, Bélgica, Espanha, Andorra, Estados Unidos, Canadá,
        Brasil, Angola, Moçambique e muitos outros. Precisa apenas de cerca de 15 Mbps estáveis por ecrã em Full HD e de
        um aparelho compatível.
      </p>
      <ul className="space-y-2">
        {[
          "Ajuste o guia de programação ao fuso horário do país onde vive.",
          "Ligue a televisão por cabo de rede sempre que possível.",
          "Os preços são em euros; fora da zona euro, o banco faz a conversão.",
          "O suporte é em português, pelo WhatsApp, 24 horas por dia.",
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
            {t}
          </li>
        ))}
      </ul>

      <a
        href={trialWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="estrangeiro-teste"
        className="bg-gradient-brand btn-shine btn-glow inline-block rounded-full px-8 py-3 font-semibold"
      >
        Pedir Teste Grátis de 24 Horas
      </a>

      <h2>Perguntas frequentes</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-fg">{f.q}</h3>
            <p className="mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
