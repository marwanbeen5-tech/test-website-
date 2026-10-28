import PageShell from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta("/termos", "Termos e Condições", `Termos e condições do serviço ${site.name}.`);

export default function TermosPage() {
  return (
    <PageShell title="Termos e Condições">
      <p>
        Ao utilizar os nossos serviços, concorda com os presentes termos. Substitua este texto pelos
        seus termos e condições reais.
      </p>
      <h2>1. Serviço</h2>
      <p>A assinatura dá acesso ao serviço durante o período contratado, no número de ecrãs escolhido.</p>
      <h2>2. Utilização</h2>
      <p>As credenciais são pessoais e não podem ser partilhadas para além do número de ecrãs do plano.</p>
      <h2>3. Pagamentos</h2>
      <p>Os pagamentos são processados antes da ativação. Os preços incluem IVA quando aplicável.</p>
    </PageShell>
  );
}
