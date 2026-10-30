import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { trialWhatsapp } from "@/lib/site";

export const metadata = pageMeta(
  "/teste-gratis",
  "Teste IPTV Portugal Grátis 24h",
  "Peça o seu teste IPTV Portugal grátis de 24 horas: todos os canais e filmes em 4K, sem compromisso e sem cartão de crédito."
);

const steps = [
  "Preencha o formulário com o seu nome, email e o dispositivo onde quer ver.",
  "Recebe os dados de acesso do teste no seu email, normalmente em poucos minutos.",
  "Instale a aplicação seguindo o nosso guia de instalação e entre com os dados recebidos.",
  "Veja à vontade durante 24 horas. Se gostar, escolha um plano. Se não, não paga nada.",
];

const included = [
  "Todos os canais ao vivo, incluindo canais portugueses e desporto",
  "Filmes e séries on-demand",
  "Qualidade até 4K, conforme a sua internet",
  "Guia de programação (EPG)",
  "Ajuda do suporte para instalar",
];

const faqs = [
  {
    q: "Preciso de cartão de crédito para o teste?",
    a: "Não. O teste é gratuito e não pedimos dados de pagamento.",
  },
  {
    q: "Posso fazer mais do que um teste?",
    a: "O teste grátis é limitado a um por pessoa e por dispositivo. Para mais tempo, o plano de 24 horas custa 3€.",
  },
  {
    q: "O teste renova automaticamente?",
    a: "Não. Termina sozinho ao fim de 24 horas e não há qualquer cobrança.",
  },
  {
    q: "Qual é a melhor altura para testar?",
    a: "À noite ou durante um jogo de futebol, quando há mais pessoas a ver. É o melhor momento para confirmar a estabilidade.",
  },
];

export default function TesteGratisPage() {
  return (
    <PageShell
      title="Teste IPTV Portugal Grátis 24h"
      intro="Experimente todos os canais e filmes durante 24 horas, sem compromisso e sem cartão de crédito. A melhor forma de confirmar a qualidade na sua internet e no seu dispositivo."
    >
      <JsonLd data={breadcrumbLd([{ name: "Teste Grátis", path: "/teste-gratis" }])} />
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-bold text-fg">A forma mais rápida: peça o teste pelo WhatsApp</p>
        <p className="mt-2">Envie-nos uma mensagem e recebe os dados de acesso em poucos minutos.</p>
        <a
          href={trialWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine btn-glow mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-3 font-semibold text-white"
        >
          Pedir Teste Grátis no WhatsApp
        </a>
      </div>
      <p className="text-center">Prefere o email? Preencha o formulário abaixo.</p>
      <LeadForm type="trial" />

      <h2>Como funciona o teste</h2>
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s} className="flex gap-4">
            <span className="bg-gradient-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
              {i + 1}
            </span>
            <span className="pt-1">{s}</span>
          </li>
        ))}
      </ol>
      <p>
        Precisa de ajuda a instalar? Veja o nosso{" "}
        <Link href="/instalacao" className="underline">guia de instalação</Link>.
      </p>

      <h2>O que inclui</h2>
      <ul className="space-y-2">
        {included.map((item) => (
          <li key={item} className="flex gap-3">
            <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
            {item}
          </li>
        ))}
      </ul>

      <h2>Perguntas sobre o teste</h2>
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
