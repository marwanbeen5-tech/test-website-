import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, supportContact } from "@/lib/site";

export const metadata = pageMeta(
  "/termos",
  "Termos e Condições",
  `Termos e condições do serviço ${site.name}: subscrição, utilização das credenciais, pagamentos, renovação, reembolsos e suporte.`
);

// Template terms: have them reviewed for your business before relying on them.
export default function TermosPage() {
  return (
    <PageShell title="Termos e Condições" intro="Última atualização: outubro de 2026">
      <JsonLd data={breadcrumbLd([{ name: "Termos e Condições", path: "/termos" }])} />
      <p>
        Ao subscrever ou utilizar o serviço {site.name}, aceita os presentes termos e condições. Leia-os com atenção
        antes de efetuar a sua compra.
      </p>
      <h2>1. Serviço</h2>
      <p>
        A subscrição dá acesso ao serviço durante o período contratado (24 horas, 1, 3, 6, 12 ou 24 meses) e no
        número de ecrãs em simultâneo escolhido no momento da compra.
      </p>
      <h2>2. Ativação</h2>
      <p>
        Os dados de acesso são enviados entre 5 e 30 minutos após a confirmação do pagamento. Se não os receber
        nesse prazo, contacte o suporte.
      </p>
      <h2>3. Utilização das credenciais</h2>
      <p>
        As credenciais são pessoais. Não podem ser revendidas nem partilhadas para além do número de ecrãs do
        plano. A utilização em mais ecrãs do que os contratados pode levar à suspensão do acesso.
      </p>
      <h2>4. Requisitos técnicos</h2>
      <p>
        A qualidade da imagem depende da sua ligação à internet e do seu dispositivo. Recomendamos pelo menos
        10 Mbps para HD e 25 Mbps para 4K por ecrã.
      </p>
      <h2>5. Pagamentos e renovação</h2>
      <p>
        Os pagamentos são feitos antes da ativação. A subscrição não renova automaticamente: no fim do período
        escolhe se quer renovar. Os preços incluem IVA quando aplicável.
      </p>
      <h2>6. Reembolsos</h2>
      <p>
        Pode pedir o reembolso total nos primeiros 7 dias, nos termos da nossa{" "}
        <a href="/reembolso" className="underline">Política de Reembolso</a>.
      </p>
      <h2>7. Suporte</h2>
      <p>O suporte está disponível 24/7 em português através de {supportContact()}.</p>
      <h2>8. Alterações</h2>
      <p>
        Podemos atualizar estes termos. A versão em vigor é sempre a publicada nesta página, com a data da última
        atualização.
      </p>
    </PageShell>
  );
}
