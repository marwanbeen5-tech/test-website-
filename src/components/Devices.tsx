import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { devices } from "@/lib/site";

export default function Devices() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionHeading
        eyebrow="Compatibilidade"
        title="Funciona em Todos os Seus Dispositivos"
        text="Veja na TV da sala, no telemóvel ou no computador. Uma só assinatura, em qualquer lugar."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {devices.map((d, i) => (
          <Reveal key={d.name} delay={i * 80} variant="zoom">
            <div className="spotlight h-full rounded-2xl border border-border bg-surface p-6 text-center">
              <Icon name={d.icon} className="icon-pop mx-auto h-8 w-8 text-brand-2" />
              <p className="mt-3 font-bold">{d.name}</p>
              <p className="mt-1 text-xs text-muted">{d.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        Precisa de ajuda a instalar?{" "}
        <Link href="/instalacao" className="text-gradient font-semibold hover:underline">
          Veja os guias de instalação →
        </Link>
      </p>
      <p className="mt-3 text-center text-sm text-muted">
        Não sabe se a sua internet chega?{" "}
        <Link href="/calculadora-velocidade-iptv" className="text-gradient font-semibold hover:underline">
          Use a calculadora de velocidade IPTV →
        </Link>
      </p>
    </section>
  );
}
