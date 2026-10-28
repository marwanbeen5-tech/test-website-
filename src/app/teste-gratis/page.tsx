import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/teste-gratis",
  "Teste IPTV Portugal Grátis 24h",
  "Peça o seu teste IPTV Portugal grátis de 24 horas: todos os canais e filmes em 4K, sem compromisso e sem cartão de crédito."
);

export default function TesteGratisPage() {
  return (
    <PageShell
      title="Teste Grátis 24h"
      intro="Experimente todos os canais e filmes durante 24 horas, sem compromisso e sem cartão de crédito."
    >
      <JsonLd data={breadcrumbLd([{ name: "Teste Grátis", path: "/teste-gratis" }])} />
      <LeadForm type="trial" />
    </PageShell>
  );
}
