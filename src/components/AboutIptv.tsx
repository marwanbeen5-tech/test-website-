import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

// Short facts in a table: easy for Google and AI assistants to extract and quote.
const facts = [
  ["Canais ao vivo", "+45.000 (115+ países, incluindo canais portugueses)"],
  ["Filmes e séries (VOD)", "98.000+"],
  ["Qualidade", "SD, HD, Full HD e 4K/UHD"],
  ["Preço", "Desde 3€ (24h) · 14€/mês · 57€/ano"],
  ["Ecrãs em simultâneo", "1, 2 ou 3"],
  ["Ativação", "5 a 30 minutos após o pagamento"],
  ["Teste grátis", "24 horas"],
  ["Garantia", "Reembolso em 7 dias"],
  ["Suporte", "24/7 em português (WhatsApp e email)"],
];

export default function AboutIptv() {
  return (
    <section id="iptv-portugal" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal variant="left">
          <p className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-widest">
            <span className="text-gradient">Guia</span>
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">O que é o IPTV Portugal?</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              <strong className="text-fg">IPTV Portugal</strong> é a forma de ver televisão portuguesa e internacional
              através da internet, em vez de antena, satélite ou cabo. Basta uma ligação à internet e uma aplicação
              na Smart TV, Android TV, Fire TV Stick, telemóvel ou computador.
            </p>
            <p>
              Com a <strong className="text-fg">{site.name}</strong> tem acesso a +45.000 canais ao vivo, incluindo
              canais portugueses de notícias, desporto e entretenimento, e a mais de 98.000 filmes e séries
              on-demand, com qualidade até 4K e sem fidelização.
            </p>
            <h3 className="pt-2 text-xl font-bold text-fg">Porque é que cada vez mais portugueses mudam para IPTV?</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Custa uma fração de um pacote de TV por cabo, sem contrato de 24 meses.</li>
              <li>Funciona em vários dispositivos, em casa ou fora de Portugal.</li>
              <li>Inclui guia de programação (EPG), filmes e séries a pedido.</li>
              <li>A ativação é feita em minutos, sem técnico nem instalação.</li>
            </ul>
            <p>
              Quer experimentar primeiro?{" "}
              <Link href="/teste-gratis" className="text-gradient font-semibold hover:underline">
                Peça o seu teste grátis de 24 horas
              </Link>{" "}
              ou leia o nosso{" "}
              <Link href="/blog/melhor-iptv-portugal" className="text-gradient font-semibold hover:underline">
                guia do melhor IPTV Portugal
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <table className="w-full text-sm">
              <caption className="border-b border-border px-5 py-4 text-left font-bold">
                {site.name} IPTV Portugal: resumo do serviço
              </caption>
              <tbody>
                {facts.map(([k, v]) => (
                  <tr key={k} className="border-b border-border last:border-0">
                    <th scope="row" className="w-2/5 px-5 py-3 text-left font-semibold">
                      {k}
                    </th>
                    <td className="px-5 py-3 text-muted">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
