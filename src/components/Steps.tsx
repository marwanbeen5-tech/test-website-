import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/site";

const stepIcons = ["lock", "bolt", "tv"];

export default function Steps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionHeading
        eyebrow="Como Funciona"
        title="Comece em 3 Passos Simples"
        text="Configurar o seu serviço IPTV nunca foi tão fácil. Siga estes três passos simples e comece a ver em minutos."
      />
      <div className="relative grid gap-6 md:grid-cols-3">
        {/* Animated connector between the steps */}
        <div className="animate-dash absolute left-[16%] right-[16%] top-14 hidden h-0.5 md:block" />
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 150}>
            <div className="spotlight h-full rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center">
                <span
                  className="animate-pulse-ring bg-gradient-brand absolute inset-0 rounded-full"
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <span className="bg-gradient-brand icon-pop relative flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon name={stepIcons[i]} className="h-5 w-5" />
                </span>
              </div>
              <p className="text-gradient mt-5 text-sm font-bold">Passo 0{i + 1}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
