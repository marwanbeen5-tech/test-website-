"use client";

import { useState } from "react";
import Icon from "./Icon";
import Countdown from "./Countdown";
import SectionHeading from "./SectionHeading";
import { planFeatures, plans, screensLabel, site, type Plan } from "@/lib/site";
import { startCheckout } from "@/lib/checkout";

const screenOptions = [1, 2, 3] as const;

export default function Pricing() {
  const [screens, setScreens] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState<number | null>(null);

  async function choose(plan: Plan, index: number) {
    setLoading(index);
    await startCheckout(screens, index, plan);
    setLoading(null);
  }

  return (
    <section id="planos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20">
      <SectionHeading eyebrow="Melhores Planos" title="Escolha o Seu Plano" />

      <div className="mb-10 space-y-6 text-center">
        <p className="text-sm font-bold tracking-wider text-brand-2">{site.discountBanner} · TERMINA EM</p>
        <Countdown />
        <div className="relative inline-flex rounded-full border border-border bg-surface p-1">
          {/* Pill that slides under the selected option */}
          <span
            className="bg-gradient-brand absolute bottom-1 left-1 top-1 w-28 rounded-full shadow-lg shadow-brand/40 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ transform: `translateX(${(screens - 1) * 100}%)` }}
          />
          {screenOptions.map((n) => (
            <button
              key={n}
              onClick={() => setScreens(n)}
              className={`relative w-28 rounded-full py-2 text-sm font-semibold transition-colors duration-300 ${
                screens === n ? "text-white" : "text-muted hover:text-fg"
              }`}
            >
              {screensLabel(n)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans[screens].map((plan, i) => (
          <div
            // Changing key on tab switch replays the entrance animation
            key={`${screens}-${plan.duration}`}
            className={`spotlight animate-fade-up relative flex flex-col rounded-2xl bg-surface p-8 ${
              plan.popular
                ? "border-spin shadow-[0_0_50px_-12px] shadow-brand-2/60 lg:scale-105"
                : "border border-border"
            }`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {plan.popular && (
              <span className="bg-gradient-brand btn-shine absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold shadow-lg">
                ★ MAIS POPULAR
              </span>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{plan.duration}</h3>
              <span className="rounded-full bg-brand-2/15 px-3 py-1 text-xs font-bold text-brand-2">
                -{Math.round((1 - plan.price / plan.oldPrice) * 100)}%
              </span>
            </div>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-extrabold">{plan.price}€</span>
              <span className="mb-1 text-lg text-muted line-through">{plan.oldPrice}€</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {planFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-brand-2" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => choose(plan, i)}
              disabled={loading !== null}
              className={`mt-8 rounded-full py-3 text-center font-semibold transition disabled:opacity-60 ${
                plan.popular
                  ? "bg-gradient-brand btn-shine btn-glow"
                  : "border border-border hover:border-transparent hover:bg-gradient-to-r hover:from-brand hover:to-brand-2 hover:text-white"
              }`}
            >
              {loading === i ? "A redirecionar..." : "Escolher Plano"}
            </button>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:text-left">
        <div className="bg-gradient-brand animate-float flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
          <Icon name="shield" className="h-7 w-7" />
        </div>
        <div>
          <p className="font-bold">Garantia de reembolso de 7 dias</p>
          <p className="text-sm text-muted">
            Experimente sem risco. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Pagamento seguro com
            encriptação SSL.
          </p>
        </div>
      </div>
    </section>
  );
}
