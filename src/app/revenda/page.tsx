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

      <h2>Como funciona</h2>
      <ol className="list-decimal space-y-2 pl-5">
        <li>Escolha um pacote de créditos e fale connosco por WhatsApp para concluir a compra.</li>
        <li>Recebe o acesso ao painel de revenda, normalmente no mesmo dia.</li>
        <li>No painel cria contas para os seus clientes: cada crédito ativa 1 mês de serviço.</li>
        <li>Define os seus próprios preços e fica com a diferença.</li>
      </ol>

      <h2>Quanto pode ganhar?</h2>
      <p>
        Com o pacote de 100 créditos, cada mês de serviço custa-lhe 2,70€. Se vender o mês a 10€, ganha 7,30€ por
        cliente e por mês. São apenas exemplos: os seus resultados dependem dos preços que praticar e do número de
        clientes que conseguir.
      </p>

      <h2>Para quem é</h2>
      <p>
        Para lojas de informática e eletrónica, técnicos que instalam boxes e TVs, e empreendedores que querem um
        rendimento extra com um serviço que os clientes renovam todos os meses.
      </p>

      <h2>Perguntas frequentes</h2>
      <div className="space-y-4">
        {[
          ["Preciso de experiência técnica?", "Não. O painel é simples e o nosso suporte ajuda-o a configurar as primeiras contas."],
          ["Os créditos expiram?", "Não. Os créditos ficam disponíveis no painel até os usar."],
          ["Posso dar testes aos meus clientes?", "Sim. Pode criar testes gratuitos a partir do painel antes de o cliente pagar."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-fg">{q}</h3>
            <p className="mt-2">{a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
