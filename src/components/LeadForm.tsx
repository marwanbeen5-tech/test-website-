"use client";

import { useState } from "react";
import { devices } from "@/lib/site";

const errors: Record<string, string> = {
  missing_fields: "Preencha todos os campos obrigatórios com um email válido.",
  too_many: "Demasiados pedidos. Tente novamente dentro de alguns minutos.",
};

export default function LeadForm({ type }: { type: "trial" | "contact" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setStatus("done");
    } catch (err) {
      setError(errors[(err as Error).message] ?? "Ocorreu um erro. Tente novamente ou contacte-nos por WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-gradient text-2xl font-extrabold">Pedido enviado!</p>
        <p className="mt-3 text-muted">
          {type === "trial"
            ? "Vai receber os dados de acesso do seu teste no email indicado em breve."
            : "Obrigado pelo contacto. Respondemos normalmente em menos de 1 hora."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Nome *
          <input name="name" required maxLength={100} className="input mt-2" />
        </label>
        <label className="block text-sm font-semibold">
          Email *
          <input name="email" type="email" required maxLength={200} className="input mt-2" />
        </label>
      </div>
      <label className="block text-sm font-semibold">
        WhatsApp / Telefone
        <input name="phone" type="tel" maxLength={30} className="input mt-2" />
      </label>
      {type === "trial" ? (
        <label className="block text-sm font-semibold">
          Dispositivo *
          <select name="device" required className="input mt-2" defaultValue="">
            <option value="" disabled>
              Escolha o seu dispositivo
            </option>
            {devices.map((d) => (
              <option key={d.name}>{d.name}</option>
            ))}
          </select>
        </label>
      ) : (
        <label className="block text-sm font-semibold">
          Mensagem *
          <textarea name="message" required rows={5} maxLength={2000} className="input mt-2" />
        </label>
      )}
      {/* Honeypot field, hidden from people */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && <p className="text-sm text-red-500">{error}</p>}

      <button
        disabled={status === "sending"}
        className="bg-gradient-brand w-full rounded-full py-3 font-semibold disabled:opacity-60"
      >
        {status === "sending" ? "A enviar..." : type === "trial" ? "Pedir Teste Grátis" : "Enviar Mensagem"}
      </button>
      <p className="text-center text-xs text-muted">
        Ao enviar, aceita a nossa Política de Privacidade. Nunca partilhamos os seus dados.
      </p>
    </form>
  );
}
