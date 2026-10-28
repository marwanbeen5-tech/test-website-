import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Teste Grátis 24h",
  description: "Experimente o nosso serviço IPTV gratuitamente durante 24 horas, sem compromisso.",
};

export default function TesteGratisPage() {
  return (
    <PageShell
      title="Teste Grátis 24h"
      intro="Experimente todos os canais e filmes durante 24 horas, sem compromisso e sem cartão de crédito."
    >
      <LeadForm type="trial" />
    </PageShell>
  );
}
