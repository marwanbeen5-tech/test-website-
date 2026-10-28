"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type Consent = "accepted" | "rejected";

const KEY = "cookie-consent";
const OPEN_EVENT = "open-cookie-settings";
export const CONSENT_EVENT = "cookie-consent";

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

function saveConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, value);
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  function choose(value: Consent) {
    saveConsent(value);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-6 shadow-2xl md:inset-x-auto md:left-6"
    >
      <p className="font-semibold">Utilizamos cookies 🍪</p>
      <p className="mt-2 text-sm text-muted">
        Usamos cookies essenciais para o site funcionar e, com o seu consentimento, cookies de análise e marketing
        para melhorar a sua experiência. Saiba mais na nossa{" "}
        <Link href="/privacidade" className="underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button onClick={() => choose("accepted")} className="bg-gradient-brand rounded-full px-6 py-2 text-sm font-semibold">
          Aceitar todos
        </button>
        <button
          onClick={() => choose("rejected")}
          className="rounded-full border border-border px-6 py-2 text-sm font-semibold transition hover:bg-bg"
        >
          Apenas essenciais
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className="hover:text-fg">
      Definições de Cookies
    </button>
  );
}
