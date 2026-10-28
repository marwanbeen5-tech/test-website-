"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Countdown from "./Countdown";
import Icon from "./Icon";
import { startCheckout } from "@/lib/checkout";
import { planFeatures, plans } from "@/lib/site";

const KEY = "promo-12m-seen";
const DELAY_MS = 5000;
// Pages where the popup would get in the way.
const HIDDEN_ON = ["/sucesso", "/privacidade", "/termos", "/reembolso"];

// 1-screen 12-month offer (the plan marked "popular" in site.ts).
const index = plans[1].findIndex((p) => p.popular);
const plan = plans[1][index];

function markSeen() {
  try {
    localStorage.setItem(KEY, "1");
  } catch {}
}

// Shown once to each new visitor, a few seconds after they arrive.
export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!plan || HIDDEN_ON.includes(pathname)) return;
    try {
      if (localStorage.getItem(KEY)) return;
    } catch {
      return;
    }
    const t = setTimeout(() => {
      setOpen(true);
      markSeen();
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !plan) return null;

  const discount = Math.round((1 - plan.price / plan.oldPrice) * 100);
  const perMonth = (plan.price / 12).toFixed(2).replace(".", ",");

  async function buy() {
    setLoading(true);
    await startCheckout(1, index, plan);
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div
        className="animate-page absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="border-spin animate-fade-up relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl p-8 text-center shadow-2xl"
      >
        <button
          ref={closeRef}
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:rotate-90 hover:text-fg"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>

        <span className="bg-gradient-brand btn-shine inline-block rounded-full px-4 py-1 text-xs font-bold">
          🎁 OFERTA DE BOAS-VINDAS
        </span>
        <h2 id="promo-title" className="mt-5 text-3xl font-extrabold">
          Plano <span className="text-gradient">12 Meses</span>
        </h2>
        <p className="mt-2 text-muted">Um ano inteiro de entretenimento com {discount}% de desconto.</p>

        <div className="mt-6 flex items-end justify-center gap-3">
          <span className="text-6xl font-extrabold">{plan.price}€</span>
          <span className="mb-2 text-xl text-muted line-through">{plan.oldPrice}€</span>
        </div>
        <p className="mt-1 text-sm font-semibold text-brand-2">Apenas {perMonth}€ por mês</p>

        <ul className="mx-auto mt-6 grid max-w-xs grid-cols-2 gap-x-4 gap-y-2 text-left text-sm">
          {planFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 shrink-0 text-brand-2" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs font-bold tracking-wider text-muted">A OFERTA TERMINA EM</p>
        <div className="mt-2 scale-90">
          <Countdown />
        </div>

        <button
          onClick={buy}
          disabled={loading}
          className="bg-gradient-brand btn-shine btn-glow mt-6 w-full rounded-full py-4 text-lg font-bold disabled:opacity-60"
        >
          {loading ? "A redirecionar..." : "Quero Esta Oferta"}
        </button>
        <button onClick={() => setOpen(false)} className="mt-3 text-sm text-muted underline-offset-4 hover:underline">
          Não, obrigado
        </button>
        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">
          <Icon name="shield" className="h-4 w-4" /> Garantia de reembolso de 7 dias
        </p>
      </div>
    </div>
  );
}
