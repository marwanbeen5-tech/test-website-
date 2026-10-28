import CountUp from "./CountUp";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { features, site, stats } from "@/lib/site";

export default function Features() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24">
      <SectionHeading
        eyebrow="Benefícios"
        title={`Porquê Escolher a ${site.name}?`}
        text="Experiencie IPTV premium com funcionalidades de ponta para a melhor experiência de streaming."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 120}>
            <div className="spotlight h-full rounded-2xl border border-border bg-surface p-8">
              <div className="bg-gradient-brand icon-pop flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon name={f.icon} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal variant="zoom">
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-surface p-8">
          <div className="bg-gradient-brand animate-blob pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full opacity-20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-gradient text-4xl font-extrabold md:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
