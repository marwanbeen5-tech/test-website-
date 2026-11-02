"use client";

import { useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { plans, screensLabel, trialWhatsapp, whatsappLink } from "@/lib/site";

type Screens = 1 | 2 | 3;
type Term = "trial" | "1 Mês" | "3 Meses" | "12 Meses";
type Watch = "sport" | "movies" | "mix";

const screenOptions: { value: Screens; label: string; detail: string }[] = [
  { value: 1, label: "1 televisão", detail: "ou um só aparelho de cada vez" },
  { value: 2, label: "2 televisões", detail: "por exemplo, sala e quarto" },
  { value: 3, label: "3 ou mais", detail: "família com vários aparelhos" },
];

const termOptions: { value: Term; label: string; detail: string }[] = [
  { value: "trial", label: "Quero testar primeiro", detail: "teste grátis de 24 horas" },
  { value: "1 Mês", label: "Um mês para começar", detail: "sem compromisso" },
  { value: "3 Meses", label: "Alguns meses", detail: "um bom equilíbrio" },
  { value: "12 Meses", label: "Um ano", detail: "o mais barato por mês" },
];

const watchOptions: { value: Watch; label: string }[] = [
  { value: "sport", label: "Sobretudo desporto" },
  { value: "movies", label: "Filmes e séries" },
  { value: "mix", label: "Um pouco de tudo" },
];

const watchTip: Record<Watch, string> = {
  sport: "Para desporto em direto, ligue a TV por cabo de rede e confirme pelo menos 15 Mbps por ecrã (25 Mbps em 4K).",
  movies: "Para filmes em 4K, conte com 25 Mbps por ecrã. A biblioteca on-demand está incluída em todos os planos.",
  mix: "Todos os planos incluem canais em direto, filmes e séries, com guia de programação.",
};

function Choice<T extends string | number>({
  options,
  value,
  onChange,
  name,
}: {
  options: { value: T; label: string; detail?: string }[];
  value: T | null;
  onChange: (v: T) => void;
  name: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {options.map((o) => (
        <label
          key={String(o.value)}
          className={`cursor-pointer rounded-xl border p-4 transition ${
            value === o.value ? "border-brand bg-brand/10" : "border-border hover:border-brand/50"
          }`}
        >
          <input type="radio" name={name} className="sr-only" checked={value === o.value} onChange={() => onChange(o.value)} />
          <span className="block font-semibold text-fg">{o.label}</span>
          {o.detail && <span className="block text-xs text-muted">{o.detail}</span>}
        </label>
      ))}
    </div>
  );
}

// Three questions → recommended plan, priced from site.ts, with a WhatsApp order link.
export default function PlanQuiz() {
  const [screens, setScreens] = useState<Screens | null>(null);
  const [term, setTerm] = useState<Term | null>(null);
  const [watch, setWatch] = useState<Watch | null>(null);

  const done = screens !== null && term !== null && watch !== null;
  const plan = done && term !== "trial" ? plans[screens].find((p) => p.duration === term) : undefined;
  const months = term === "12 Meses" ? 12 : term === "3 Meses" ? 3 : 1;
  const perMonth = plan ? (plan.price / months).toFixed(2).replace(".", ",") : "";
  const yearly = done ? plans[screens].find((p) => p.duration === "12 Meses") : undefined;

  const href = !done
    ? undefined
    : term === "trial"
      ? trialWhatsapp
      : whatsappLink(`Olá! Quero o plano ${plan!.duration} - ${screensLabel(screens)} (${plan!.price}€).`);

  return (
    <section id="escolher-plano" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-20">
      <SectionHeading
        eyebrow="Ajuda a escolher"
        title="Qual é o Plano Certo para Si?"
        text="Responda a 3 perguntas rápidas e recomendamos o plano ideal para a sua casa."
      />
      <div className="space-y-8 rounded-3xl border border-border bg-surface p-6 md:p-8">
        <fieldset>
          <legend className="mb-3 font-bold text-fg">1. Quantas televisões ou aparelhos vão ver ao mesmo tempo?</legend>
          <Choice name="quiz-screens" options={screenOptions} value={screens} onChange={setScreens} />
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-bold text-fg">2. Por quanto tempo quer o serviço?</legend>
          <Choice name="quiz-term" options={termOptions} value={term} onChange={setTerm} />
        </fieldset>
        <fieldset>
          <legend className="mb-3 font-bold text-fg">3. O que vê mais?</legend>
          <Choice name="quiz-watch" options={watchOptions} value={watch} onChange={setWatch} />
        </fieldset>

        <div aria-live="polite">
          {done ? (
            <div className="animate-fade-up rounded-2xl border border-brand/50 bg-bg p-6">
              <p className="text-sm font-semibold text-muted">A nossa recomendação</p>
              {term === "trial" ? (
                <>
                  <p className="mt-1 text-2xl font-extrabold">
                    <span className="text-gradient">Teste grátis de 24 horas</span>
                  </p>
                  <p className="mt-2 text-muted">
                    Experimente primeiro, sem compromisso. Depois, o plano de 12 meses para{" "}
                    {screensLabel(screens!).toLowerCase()} fica em {yearly?.price}€ (cerca de{" "}
                    {yearly ? (yearly.price / 12).toFixed(2).replace(".", ",") : ""}€ por mês).
                  </p>
                </>
              ) : (
                <>
                  <p className="mt-1 text-2xl font-extrabold">
                    <span className="text-gradient">
                      {plan!.duration} · {screensLabel(screens!)}
                    </span>{" "}
                    por {plan!.price}€
                  </p>
                  <p className="mt-2 text-muted">
                    Cerca de {perMonth}€ por mês.
                    {term !== "12 Meses" && yearly && (
                      <> Com o plano de 12 meses pagaria cerca de {(yearly.price / 12).toFixed(2).replace(".", ",")}€ por mês.</>
                    )}
                  </p>
                </>
              )}
              <p className="mt-3 flex gap-2 text-sm text-muted">
                <Icon name="bolt" className="h-4 w-4 shrink-0 text-brand-2" />
                {watchTip[watch!]}
              </p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="plan-quiz"
                className="bg-gradient-brand btn-shine btn-glow mt-6 inline-block rounded-full px-8 py-3 font-semibold"
              >
                {term === "trial" ? "Pedir Teste Grátis no WhatsApp" : "Quero Este Plano"}
              </a>
            </div>
          ) : (
            <p className="text-center text-sm text-muted">Responda às 3 perguntas para ver a recomendação.</p>
          )}
        </div>
      </div>
    </section>
  );
}
