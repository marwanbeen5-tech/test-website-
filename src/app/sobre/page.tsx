import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, supportContact } from "@/lib/site";

export const metadata = pageMeta(
  "/sobre",
  "Sobre Nós",
  `Conheça o ${site.name}: o que oferecemos, como funciona o serviço, as nossas garantias e como falar com o suporte em português, 24 horas por dia.`
);

// Only facts about how the service works: add the company's real story here.
const promises = [
  { icon: "bolt", title: "Teste antes de pagar", text: "Teste grátis de 24 horas para confirmar a qualidade na sua internet e no seu dispositivo." },
  { icon: "shield", title: "Reembolso em 7 dias", text: "Se o serviço não for para si, devolvemos o valor total nos primeiros 7 dias." },
  { icon: "headset", title: "Suporte em português", text: "Ajuda 24/7 para instalar, configurar e resolver qualquer problema." },
  { icon: "lock", title: "Sem fidelização", text: "Paga por períodos e não há renovação automática. Fica só se quiser." },
];

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre Nós"
      intro={`O ${site.name} é um serviço de IPTV para quem quer ver televisão portuguesa e internacional pela internet, sem antena, sem cabo e sem contratos longos.`}
    >
      <JsonLd data={breadcrumbLd([{ name: "Sobre Nós", path: "/sobre" }])} />

      <h2>O que fazemos</h2>
      <p>
        Juntamos canais portugueses de notícias, desporto e entretenimento, canais de mais de 115 países e uma
        biblioteca de filmes e séries numa só subscrição, que funciona na Smart TV, Android TV, Fire TV Stick,
        telemóvel e computador.
      </p>

      <h2>Como trabalhamos</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {promises.map((p) => (
          <div key={p.title} className="spotlight rounded-2xl border border-border bg-surface p-6">
            <span className="bg-gradient-brand icon-pop flex h-10 w-10 items-center justify-center rounded-lg">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <p className="mt-4 font-bold text-fg">{p.title}</p>
            <p className="mt-1 text-sm">{p.text}</p>
          </div>
        ))}
      </div>

      <h2>Fale connosco</h2>
      <p>
        Tem dúvidas antes de comprar? Fale connosco por {supportContact()} ou visite a página de{" "}
        <Link href="/contacto" className="underline">contactos</Link>. Para começar, veja os{" "}
        <Link href="/#planos" className="underline">planos</Link> ou peça um{" "}
        <Link href="/teste-gratis" className="underline">teste grátis</Link>.
      </p>
    </PageShell>
  );
}
