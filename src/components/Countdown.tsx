"use client";

import { useEffect, useState } from "react";

function untilMidnight() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  const s = Math.floor((end.getTime() - now.getTime()) / 1000);
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60];
}

// Counts down to the end of the visitor's day (the "apenas hoje" offer).
export default function Countdown() {
  const [parts, setParts] = useState<number[] | null>(null);

  useEffect(() => {
    setParts(untilMidnight());
    const id = setInterval(() => setParts(untilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  const labels = ["Horas", "Min", "Seg"];
  return (
    <div className="flex justify-center gap-3" aria-label="Tempo restante da oferta">
      {labels.map((label, i) => (
        <div key={label} className="w-20 rounded-xl border border-border bg-surface py-3 text-center">
          <p className="text-2xl font-extrabold tabular-nums">
            {parts ? String(parts[i]).padStart(2, "0") : "--"}
          </p>
          <p className="text-xs text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
