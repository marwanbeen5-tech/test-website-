import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, trialWhatsapp, whatsappLink } from "@/lib/site";

const path = "/como-comprar";

export const metadata = pageMeta(
  path,
  "Como Comprar IPTV Portugal: Passo a Passo",
  "Como comprar o seu plano IPTV Portugal: escolha o plano, fale connosco no WhatsApp, pague e receba os dados de acesso em 5 a 30 minutos. Teste grátis e reembolso em 7 dias."
);

const steps = [
  {
    icon: "tv",
    title: "Escolha o plano",
    text: "Escolha a duração e o número de ecrãs na secção de planos. Se tiver dúvidas, o nosso quiz recomenda o plano certo em 3 perguntas.",
  },
  {
    icon: "headset",
    title: "Fale connosco no WhatsApp",
    text: "Carregue em Escolher Plano: abre o WhatsApp com a mensagem já escrita. Confirmamos o plano e indicamos as formas de pagamento disponíveis.",
  },
  {
    icon: "lock",
    title: "Faça o pagamento",
    text: "Pague pelo método que combinarmos consigo. Nunca pedimos dados do cartão por mensagem.",
  },
  {
    icon: "bolt",
    title: "Receba os dados de acesso",
    text: "Em 5 a 30 minutos recebe o utilizador, a palavra-passe e o URL do servidor, com as instruções para o seu aparelho.",
  },
  {
    icon: "check",
    title: "Instale e comece a ver",
    text: "Siga o guia de instalação do seu aparelho. Se precisar, ajudamos passo a passo pelo WhatsApp.",
  },
];

const guarantees = [
  { title: "Teste grátis de 24 horas", text: "Experimente antes de pagar, sem compromisso." },
  { title: "Reembolso em 7 dias", text: "Se não ficar satisfeito, devolvemos o valor (exceto no plano de 24 horas)." },
  { title: "Sem renovação automática", text: "No fim do período decide se quer continuar. Nada é cobrado sem pedir." },
  { title: "Suporte 24/7 em português", text: "Pelo WhatsApp, antes e depois da compra." },
];

const faqs = [
  {
    q: "Que formas de pagamento aceitam?",
    a: "Indicamos as formas de pagamento disponíveis quando confirmamos o seu plano no WhatsApp. Nunca pedimos os dados do cartão por mensagem.",
  },
  {
    q: "Quanto tempo demora a ativação?",
    a: "Normalmente entre 5 e 30 minutos depois da confirmação do pagamento. Recebe os dados de acesso e as instruções por mensagem ou email.",
  },
  {
    q: "A subscrição renova sozinha?",
    a: "Não. No fim do período escolhe se quer renovar. Nada é cobrado sem o seu pedido.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Fale connosco no WhatsApp: indicamos as opções para passar para mais ecrãs ou mais tempo.",
  },
  {
    q: "E se não funcionar no meu aparelho?",
    a: "Peça primeiro o teste grátis para confirmar. Se depois da compra não conseguirmos pôr o serviço a funcionar, tem reembolso nos primeiros 7 dias.",
  },
];

export default function ComoComprarPage() {
  return (
    <PageShell
      title="Como Comprar"
      intro={`Comprar o seu plano ${site.name} é simples e rápido: escolhe o plano, fala connosco no WhatsApp, paga e recebe os dados de acesso em poucos minutos.`}
    >
      <JsonLd data={breadcrumbLd([{ name: "Como comprar", path }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      <h2 className="!mt-0">Passo a passo</h2>
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={s.title} className="spotlight flex gap-4 rounded-2xl border border-border bg-surface p-5">
            <span className="bg-gradient-brand flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-bold text-fg">
                {i + 1}. {s.title}
              </span>
              <span className="mt-1 block">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/#planos" className="bg-gradient-brand btn-shine btn-glow rounded-full px-8 py-3 text-center font-semibold">
          Ver Planos e Preços
        </Link>
        <a
          href={trialWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="como-comprar-teste"
          className="rounded-full border border-border px-8 py-3 text-center font-semibold transition hover:border-brand"
        >
          Pedir Teste Grátis
        </a>
      </div>

      <h2>As nossas garantias</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {guarantees.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-surface p-5">
            <p className="flex items-center gap-2 font-bold text-fg">
              <Icon name="shield" className="h-5 w-5 text-brand-2" /> {g.title}
            </p>
            <p className="mt-2 text-sm">{g.text}</p>
          </div>
        ))}
      </div>

      <h2>Perguntas sobre a compra</h2>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-fg">{f.q}</h3>
            <p className="mt-2">{f.a}</p>
          </div>
        ))}
      </div>

      <p>
        Ainda tem dúvidas?{" "}
        <a
          href={whatsappLink("Olá! Tenho uma dúvida antes de comprar.")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="como-comprar-duvida"
          className="underline"
        >
          Fale connosco no WhatsApp
        </a>{" "}
        ou leia as nossas <Link href="/reembolso" className="underline">condições de reembolso</Link>.
      </p>
    </PageShell>
  );
}
