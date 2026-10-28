import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { supportContact } from "@/lib/site";

export const metadata = pageMeta(
  "/reembolso",
  "Política de Reembolso",
  "Garantia de reembolso de 7 dias do IPTV Portugal: quem pode pedir, como pedir o reembolso pelo WhatsApp e em quanto tempo recebe o dinheiro."
);

export default function ReembolsoPage() {
  return (
    <PageShell title="Política de Reembolso" intro="Última atualização: outubro de 2026">
      <JsonLd data={breadcrumbLd([{ name: "Política de Reembolso", path: "/reembolso" }])} />
      <p>
        Queremos que fique satisfeito. Se o serviço não corresponder às suas expectativas, pode pedir o reembolso
        total nos primeiros 7 dias após a compra.
      </p>
      <h2>Quem pode pedir</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Qualquer cliente, nos primeiros 7 dias após o pagamento.</li>
        <li>Planos de 1, 3, 6, 12 e 24 meses. O plano de 24 horas funciona como teste e não é reembolsável.</li>
      </ul>
      <h2>Como pedir</h2>
      <p>
        Contacte o suporte por {supportContact()} indicando o email ou o número usado na compra. Antes de
        reembolsar, tentamos resolver o problema consigo: muitas vezes é uma questão de configuração.
      </p>
      <h2>Prazo</h2>
      <p>
        O reembolso é processado em até 5 dias úteis para o método de pagamento original. O acesso ao serviço é
        desativado quando o reembolso é feito.
      </p>
    </PageShell>
  );
}
