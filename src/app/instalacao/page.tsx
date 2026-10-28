import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/instalacao",
  "Como Instalar IPTV Portugal: Smart TV, Fire TV e iPhone",
  "Guia de instalação do IPTV Portugal em Smart TV Samsung e LG, Android TV, Fire TV Stick, iPhone, Windows e Mac. Configure em menos de 5 minutos."
);

const guides = [
  {
    device: "Smart TV (Samsung / LG)",
    steps: [
      "Abra a loja de aplicações da TV e instale uma aplicação IPTV (ex.: IPTV Smarters, IBO Player).",
      "Abra a aplicação e escolha login com Xtream Codes ou lista M3U.",
      "Introduza as credenciais recebidas por email.",
    ],
  },
  {
    device: "Android TV / Fire TV Stick",
    steps: [
      "Instale a aplicação Downloader a partir da loja.",
      "Descarregue e instale a aplicação IPTV recomendada pelo suporte.",
      "Faça login com as suas credenciais.",
    ],
  },
  {
    device: "iPhone / iPad / Apple TV",
    steps: [
      "Instale uma aplicação IPTV a partir da App Store.",
      "Adicione uma nova playlist com os dados Xtream Codes.",
      "Aguarde o carregamento dos canais e comece a ver.",
    ],
  },
  {
    device: "Windows / Mac",
    steps: [
      "Instale o VLC ou uma aplicação IPTV para desktop.",
      "Abra o link M3U recebido por email.",
      "Escolha o canal e desfrute.",
    ],
  },
];

export default function InstalacaoPage() {
  return (
    <PageShell
      title="Guia de Instalação"
      intro="Configure o serviço no seu dispositivo em poucos minutos. Se precisar de ajuda, a nossa equipa está disponível 24/7."
    >
      <JsonLd data={breadcrumbLd([{ name: "Instalação", path: "/instalacao" }])} />
      {guides.map((g) => (
        <div key={g.device} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="!mt-0">{g.device}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {g.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      ))}
    </PageShell>
  );
}
