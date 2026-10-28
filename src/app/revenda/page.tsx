import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata = pageMeta(
  "/revenda",
  "Revenda IPTV Portugal: Torne-se Revendedor",
  "Programa de revenda IPTV Portugal com painel próprio, créditos que não expiram, testes grátis para clientes e suporte prioritário 24/7."
);

const packs = [
  { credits: 50, price: 150 },
  { credits: 100, price: 270, popular: true },
  { credits: 200, price: 500 },
];

export default function RevendaPage() {
  return (
    <PageShell
      title="Programa de Revenda"
      intro="Comece o seu próprio negócio de IPTV. Painel exclusivo, preços competitivos e suporte dedicado."
    >
      <JsonLd data={breadcrumbLd([{ name: "Revenda", path: "/revenda" }])} />
      <div className="grid gap-6 md:grid-cols-3">
        {packs.map((p) => (
          <div
            key={p.credits}
            className={`flex flex-col rounded-2xl border bg-surface p-8 text-center ${
              p.popular ? "border-brand-2" : "border-border"
            }`}
          >
            <p className="text-lg font-bold text-fg">{p.credits} Créditos</p>
            <p className="mt-4 text-4xl font-extrabold text-fg">{p.price}€</p>
            <p className="mt-2 text-sm">1 crédito = 1 mês de assinatura</p>
            <a
              href={whatsappLink(`Olá! Tenho interesse no pacote de revenda de ${p.credits} créditos.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-brand mt-8 rounded-full py-3 font-semibold text-white"
            >
              Começar
            </a>
          </div>
        ))}
      </div>
      <h2>O que inclui</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Painel de revenda para criar e gerir clientes</li>
        <li>Testes gratuitos para os seus clientes</li>
        <li>Os créditos não expiram</li>
        <li>Suporte prioritário 24/7</li>
      </ul>
    </PageShell>
  );
}
