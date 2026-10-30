import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SpeedCalculator from "@/components/SpeedCalculator";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { householdUse, qualities } from "@/lib/speed";

const path = "/calculadora-velocidade-iptv";

export const metadata = pageMeta(
  path,
  "Calculadora de Velocidade IPTV: Quantos Mbps Precisa?",
  "Calcule grátis a velocidade de internet que precisa para ver IPTV em HD, Full HD ou 4K, em um ou vários ecrãs, e descubra se a sua ligação chega."
);

const faqs = [
  {
    q: "Quantos Mbps preciso para ver IPTV?",
    a: "Cerca de 10 Mbps por ecrã em HD, 15 Mbps em Full HD e 25 Mbps em 4K, mais uma margem para o resto da internet da casa.",
  },
  {
    q: "A calculadora serve para qualquer operador?",
    a: "Sim. Os valores são por ecrã e servem para fibra, cabo, ADSL ou 4G/5G de qualquer operador. O que conta é a velocidade estável à hora em que vê televisão.",
  },
  {
    q: "Tenho velocidade suficiente mas a imagem para. Porquê?",
    a: "Na maioria dos casos é o Wi-Fi. Ligue a TV ou o Fire TV Stick por cabo de rede ou use a rede de 5 GHz, e veja o nosso guia contra o buffering.",
  },
];

export default function CalculadoraPage() {
  return (
    <PageShell
      title="Calculadora de Velocidade IPTV"
      intro="Descubra em segundos que velocidade de internet precisa para ver IPTV sem cortes, conforme o número de ecrãs, a qualidade de imagem e o uso da internet na sua casa."
    >
      <JsonLd data={breadcrumbLd([{ name: "Calculadora de velocidade IPTV", path }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Calculadora de Velocidade IPTV",
          url: `${site.url}${path}`,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          inLanguage: "pt-PT",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: 0, priceCurrency: "EUR" },
          provider: { "@type": "Organization", name: site.name, url: site.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      <SpeedCalculator />

      <h2>Como calculamos</h2>
      <p>
        Somamos a velocidade recomendada para cada ecrã a ver ao mesmo tempo e juntamos uma margem para o resto da
        internet da casa. Os valores incluem uma folga de segurança para que pequenas quebras não interrompam a
        imagem.
      </p>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        <table className="w-full text-sm">
          <caption className="border-b border-border px-5 py-3 text-left font-bold text-fg">
            Velocidade recomendada por ecrã
          </caption>
          <tbody>
            {qualities.map((q) => (
              <tr key={q.id} className="border-b border-border last:border-0">
                <th scope="row" className="px-5 py-3 text-left font-semibold text-fg">
                  {q.label} <span className="font-normal text-muted">({q.detail})</span>
                </th>
                <td className="px-5 py-3">{q.mbps} Mbps</td>
              </tr>
            ))}
            {householdUse.map((u) => (
              <tr key={u.id} className="border-b border-border last:border-0">
                <th scope="row" className="px-5 py-3 text-left font-semibold text-fg">
                  Resto da casa: uso {u.label.toLowerCase()} <span className="font-normal text-muted">({u.detail})</span>
                </th>
                <td className="px-5 py-3">+{u.mbps} Mbps</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>A velocidade chega mas a imagem para?</h2>
      <p>
        A velocidade é só metade da história: a estabilidade conta tanto ou mais. Se tem velocidade suficiente e a
        imagem continua a parar, o problema é quase sempre o Wi-Fi. Veja as{" "}
        <Link href="/blog/iptv-buffering-solucoes" className="underline">10 soluções para acabar com o buffering</Link>{" "}
        e o nosso guia sobre a{" "}
        <Link href="/blog/melhor-velocidade-internet-4k" className="underline">velocidade de internet para IPTV em 4K</Link>.
      </p>

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
