import PageShell from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata = { title: "Política de Reembolso" };

export default function ReembolsoPage() {
  return (
    <PageShell title="Política de Reembolso">
      <p>
        Na {site.name} queremos que fique satisfeito. Se o serviço não corresponder às suas expectativas, pode
        pedir o reembolso total nos primeiros 7 dias após a compra.
      </p>
      <h2>Como pedir</h2>
      <p>Contacte o suporte por WhatsApp ou email ({site.email}) indicando o email usado na compra.</p>
      <h2>Prazo</h2>
      <p>O reembolso é processado em até 5 dias úteis para o método de pagamento original.</p>
    </PageShell>
  );
}
