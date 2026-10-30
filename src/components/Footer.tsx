import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { CookieSettingsButton } from "./CookieBanner";
import { legalLinks, nav, site, whatsappLink, trialWhatsapp } from "@/lib/site";

const paymentMethods = ["Visa", "Mastercard", "PayPal", "MB WAY", "Multibanco", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Serviço de IPTV premium para Portugal e além. Desfrute do melhor entretenimento com qualidade e
            fiabilidade incomparáveis.
          </p>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted">
            <Icon name="lock" className="h-4 w-4" /> Pagamentos seguros com encriptação SSL
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {paymentMethods.map((m) => (
              <span key={m} className="rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-muted">
                {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Links</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={trialWhatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
                Teste Grátis
              </a>
            </li>
            <li>
              <Link href="/calculadora-velocidade-iptv" className="hover:text-fg">
                Calculadora de Velocidade
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-fg">
                Sobre Nós
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsButton />
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted">
            <a href={whatsappLink("Olá! Gostaria de mais informações.")} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              WhatsApp: {site.phoneDisplay}
            </a>
          </p>
          {site.email && <p className="mt-1 text-sm text-muted">{site.email}</p>}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
