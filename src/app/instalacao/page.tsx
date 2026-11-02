import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata = pageMeta(
  "/instalacao",
  "Como Instalar IPTV Portugal: Smart TV, Fire TV e iPhone",
  "Guias de instalação do IPTV Portugal para Smart TV Samsung, LG, Hisense e TCL, Fire TV Stick, Android TV, iPhone, Android e computador. Configure em minutos."
);

// One card per device family: quick steps here, full guide on the blog.
const guides = [
  {
    icon: "tv",
    device: "Smart TV Samsung e LG",
    steps: [
      "Abra a loja da TV (Samsung Apps ou LG Content Store).",
      "Instale uma aplicação IPTV, como o IBO Player ou o Smart IPTV.",
      "Adicione a lista com os dados Xtream Codes que recebeu.",
    ],
    href: "/blog/como-instalar-iptv-smart-tv",
  },
  {
    icon: "tv",
    device: "Smart TV Hisense, TCL, Philips e Sony",
    steps: [
      "Veja se a TV tem Google TV ou Android TV (em Definições → Sobre).",
      "Se tiver, instale o TiviMate ou o IPTV Smarters pela Play Store.",
      "Se não tiver, um Fire TV Stick resolve em minutos.",
    ],
    href: "/blog/iptv-smart-tv-hisense-tcl-philips",
  },
  {
    icon: "bolt",
    device: "Fire TV Stick e Android TV",
    steps: [
      "Ative as opções de programador e a instalação de apps desconhecidas.",
      "Instale o Downloader e a aplicação IPTV indicada pelo suporte.",
      "Entre com Xtream Codes: canais e guia carregam sozinhos.",
    ],
    href: "/blog/instalar-iptv-fire-tv-stick",
  },
  {
    icon: "phone",
    device: "Telemóvel e tablet (Android, iPhone, iPad)",
    steps: [
      "Android: instale o IPTV Smarters Pro pela Play Store.",
      "iPhone e iPad: instale o GSE Smart IPTV ou o IPTV Smarters pela App Store.",
      "Escolha Xtream Codes e introduza os dados de acesso.",
    ],
    href: "/blog/ver-iptv-telemovel-tablet",
  },
  {
    icon: "laptop",
    device: "Computador (Windows e Mac)",
    steps: [
      "Instale o IPTV Smarters para Windows, ou o VLC em Windows e Mac.",
      "No IPTV Smarters, entre com Xtream Codes; no VLC, abra o link M3U com Abrir transmissão de rede (Open Network Stream).",
      "Escolha o canal e comece a ver.",
    ],
    href: "/blog/melhores-aplicacoes-iptv",
  },
];

const after = [
  { href: "/blog/melhores-aplicacoes-iptv", title: "Escolher a melhor aplicação", text: "TiviMate, IPTV Smarters, IBO Player e outras, comparadas." },
  { href: "/blog/o-que-e-epg-guia-programacao", title: "Ativar o guia de programação", text: "Como ativar o EPG e corrigir as horas erradas." },
  { href: "/blog/iptv-buffering-solucoes", title: "A imagem para?", text: "10 soluções para acabar com o buffering." },
  { href: "/calculadora-velocidade-iptv", title: "A minha internet chega?", text: "Calcule a velocidade que a sua casa precisa." },
];

export default function InstalacaoPage() {
  return (
    <PageShell
      title="Guia de Instalação"
      intro="Instalar o IPTV demora entre 5 e 10 minutos: instala uma aplicação IPTV no seu aparelho e entra com os dados de acesso que recebe por email. Escolha o seu aparelho abaixo."
    >
      <JsonLd data={breadcrumbLd([{ name: "Instalação", path: "/instalacao" }])} />

      <div className="rounded-2xl border border-brand/40 bg-brand/5 p-6">
        <p className="font-bold text-fg">Antes de começar, tenha à mão</p>
        <ul className="mt-3 space-y-2">
          {[
            "Os dados de acesso: utilizador, palavra-passe e URL do servidor (ou o link M3U).",
            "O aparelho ligado à internet, de preferência por cabo de rede.",
            "Cerca de 10 minutos.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <h2>Escolha o seu aparelho</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {guides.map((g) => (
          <div key={g.device} className="spotlight flex flex-col rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <Icon name={g.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-fg">{g.device}</h3>
            </div>
            <ol className="mt-4 flex-1 list-decimal space-y-2 pl-5 text-sm">
              {g.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <Link href={g.href} className="text-gradient mt-5 font-semibold hover:underline">
              Ver o guia completo →
            </Link>
          </div>
        ))}
      </div>

      <h2>Depois de instalar</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {after.map((a) => (
          <Link key={a.href + a.title} href={a.href} className="spotlight rounded-2xl border border-border bg-surface p-5">
            <p className="font-bold text-fg">{a.title} →</p>
            <p className="mt-1 text-sm">{a.text}</p>
          </Link>
        ))}
      </div>

      <h2>Precisa de ajuda?</h2>
      <p>
        A nossa equipa ajuda-o a instalar em qualquer aparelho, passo a passo, 24 horas por dia.{" "}
        <a
          href={whatsappLink("Olá! Preciso de ajuda para instalar o IPTV.")}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="instalacao-ajuda"
          className="underline"
        >
          Fale connosco no WhatsApp
        </a>{" "}
        e diga-nos a marca e o modelo do seu aparelho.
      </p>
    </PageShell>
  );
}
