import Link from "next/link";
import PageShell from "@/components/PageShell";
import { site, whatsappLink } from "@/lib/site";

export const metadata = { title: "Pagamento Confirmado", robots: { index: false } };

export default function SucessoPage() {
  return (
    <PageShell
      title="Obrigado pela sua compra!"
      intro="O seu pagamento foi confirmado. Enviámos um email de confirmação e vai receber as suas credenciais de acesso em 5-30 minutos."
    >
      <p>
        Não recebeu nada após 30 minutos? Verifique a pasta de spam ou fale connosco por{" "}
        <a href={whatsappLink("Olá! Fiz uma compra e ainda não recebi as credenciais.")} className="underline">
          WhatsApp
        </a>{" "}
        ou {site.email}.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/instalacao" className="bg-gradient-brand rounded-full px-8 py-3 text-center font-semibold">
          Ver Guias de Instalação
        </Link>
        <Link href="/" className="rounded-full border border-border px-8 py-3 text-center font-semibold">
          Voltar ao Início
        </Link>
      </div>
    </PageShell>
  );
}
