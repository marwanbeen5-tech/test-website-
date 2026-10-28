import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, supportContact } from "@/lib/site";

export const metadata = pageMeta(
  "/privacidade",
  "Política de Privacidade",
  "Como recolhemos, usamos e protegemos os seus dados pessoais de acordo com o RGPD: que dados guardamos, com quem os partilhamos, cookies e os seus direitos."
);

// Template text: have it reviewed for your business before going live.
export default function PrivacidadePage() {
  return (
    <PageShell title="Política de Privacidade" intro="Última atualização: outubro de 2026">
      <JsonLd data={breadcrumbLd([{ name: "Política de Privacidade", path: "/privacidade" }])} />
      <p>
        A {site.company}, com sede em {site.address} (&ldquo;nós&rdquo;), é responsável pelo tratamento dos seus
        dados pessoais, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD).
      </p>
      <h2>Que dados recolhemos</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Nome, email e telefone que nos fornece nos formulários ou na compra.</li>
        <li>Dados de pagamento, processados diretamente pelo Stripe. Não guardamos dados do seu cartão.</li>
        <li>Dados de navegação (cookies de análise), apenas com o seu consentimento.</li>
      </ul>
      <h2>Para que usamos os dados</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Ativar e gerir a sua assinatura e enviar as credenciais de acesso.</li>
        <li>Responder aos seus pedidos de suporte e contacto.</li>
        <li>Melhorar o site e medir campanhas, se aceitar os cookies de análise.</li>
      </ul>
      <h2>Partilha de dados</h2>
      <p>
        Partilhamos dados apenas com prestadores necessários ao serviço: Stripe (pagamentos), Resend (envio de
        emails), Google Analytics e Meta (análise, com consentimento). Nunca vendemos os seus dados.
      </p>
      <h2>Cookies</h2>
      <p>
        Usamos cookies essenciais para o funcionamento do site. Os cookies de análise e marketing só são
        ativados se os aceitar. Pode alterar a sua escolha a qualquer momento em &ldquo;Definições de
        Cookies&rdquo; no rodapé.
      </p>
      <h2>Os seus direitos</h2>
      <p>
        Pode pedir acesso, retificação, eliminação ou portabilidade dos seus dados, ou opor-se ao seu tratamento,
        contactando-nos por {supportContact()}. Tem ainda o direito de apresentar queixa à CNPD (www.cnpd.pt).
      </p>
      <h2>Conservação</h2>
      <p>
        Conservamos os dados enquanto a assinatura estiver ativa e pelo período exigido por lei para fins
        fiscais.
      </p>
    </PageShell>
  );
}
