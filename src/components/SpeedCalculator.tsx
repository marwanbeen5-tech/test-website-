"use client";

import { useState } from "react";
import Icon from "./Icon";
import { trialWhatsapp } from "@/lib/site";
import { householdUse, qualities, type HouseholdUseId, type QualityId } from "@/lib/speed";

type Count = Record<QualityId, number>;

function verdict(total: number) {
  if (total <= 15)
    return { title: "Uma ligação ADSL estável pode chegar", text: "Confirme que tem pelo menos este valor à noite. Fibra ou cabo dão mais margem." };
  if (total <= 50)
    return { title: "Fibra ou cabo recomendados", text: "O tarifário de fibra mais básico chega com folga. ADSL raramente é suficiente para este uso." };
  if (total <= 100)
    return { title: "Fibra de 100 Mbps ou mais", text: "Escolha um tarifário de fibra de pelo menos 100 Mbps e ligue as TV por cabo de rede." };
  return { title: "Fibra de 200 Mbps ou mais", text: "Para tantos ecrãs em simultâneo, escolha fibra rápida e ligue os aparelhos principais por cabo." };
}

export default function SpeedCalculator() {
  const [count, setCount] = useState<Count>({ sd: 0, hd: 0, fhd: 1, uhd: 0 });
  const [use, setUse] = useState<HouseholdUseId>("light");

  const streams = qualities.reduce((n, q) => n + count[q.id], 0);
  const tv = qualities.reduce((n, q) => n + count[q.id] * q.mbps, 0);
  const extra = householdUse.find((u) => u.id === use)!.mbps;
  const total = tv + extra;
  const v = verdict(total);
  const pct = Math.min(100, Math.round((total / 200) * 100));

  function step(id: keyof Count, delta: number) {
    setCount((c) => ({ ...c, [id]: Math.max(0, Math.min(6, c[id] + delta)) }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 lg:col-span-3">
        <fieldset>
          <legend className="font-bold text-fg">1. Quantos ecrãs vão ver ao mesmo tempo, e em que qualidade?</legend>
          <div className="mt-4 space-y-3">
            {qualities.map((q) => (
              <div key={q.id} className="flex items-center justify-between gap-4 rounded-xl border border-border p-3">
                <span>
                  <span className="font-semibold text-fg">{q.label}</span>{" "}
                  <span className="text-sm text-muted">
                    {q.detail} · {q.mbps} Mbps
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => step(q.id, -1)}
                    aria-label={`Menos um ecrã em ${q.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg font-bold transition hover:border-brand disabled:opacity-40"
                    disabled={count[q.id] === 0}
                  >
                    −
                  </button>
                  <output aria-live="polite" className="w-5 text-center text-lg font-extrabold tabular-nums">
                    {count[q.id]}
                  </output>
                  <button
                    type="button"
                    onClick={() => step(q.id, 1)}
                    aria-label={`Mais um ecrã em ${q.label}`}
                    className="bg-gradient-brand flex h-9 w-9 items-center justify-center rounded-full text-lg font-bold disabled:opacity-40"
                    disabled={count[q.id] === 6}
                  >
                    +
                  </button>
                </span>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold text-fg">2. Como é o resto da internet em casa?</legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {householdUse.map((u) => (
              <label
                key={u.id}
                className={`cursor-pointer rounded-xl border p-3 transition ${
                  use === u.id ? "border-brand bg-brand/10" : "border-border hover:border-brand/50"
                }`}
              >
                <input
                  type="radio"
                  name="household"
                  value={u.id}
                  checked={use === u.id}
                  onChange={() => setUse(u.id)}
                  className="sr-only"
                />
                <span className="block font-semibold text-fg">{u.label}</span>
                <span className="block text-xs text-muted">{u.detail}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-2" aria-live="polite">
        <p className="text-sm font-semibold text-muted">Velocidade recomendada</p>
        <p className="mt-1 text-5xl font-extrabold tabular-nums">
          <span className="text-gradient">{total}</span> <span className="text-2xl">Mbps</span>
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-border" aria-hidden="true">
          <div className="bg-gradient-brand h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-3 text-sm text-muted">
          {streams} {streams === 1 ? "ecrã" : "ecrãs"} de IPTV ({tv} Mbps) + resto da casa ({extra} Mbps)
        </p>

        <div className="mt-6 flex gap-3 rounded-xl bg-brand/10 p-4">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-2" />
          <div>
            <p className="font-bold text-fg">{v.title}</p>
            <p className="mt-1 text-sm text-muted">{v.text}</p>
          </div>
        </div>

        <a
          href={trialWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-brand btn-shine btn-glow mt-6 block rounded-full py-3 text-center font-semibold"
        >
          Testar na minha internet (grátis 24h)
        </a>
      </div>
    </div>
  );
}
