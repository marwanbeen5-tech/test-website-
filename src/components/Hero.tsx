import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/lib/site";

// Gradient "posters" for the TV mockup; replace with real artwork you have rights to.
const tiles = [
  "from-purple-600 to-indigo-900",
  "from-pink-500 to-rose-900",
  "from-amber-500 to-orange-900",
  "from-emerald-500 to-teal-900",
  "from-sky-500 to-blue-900",
  "from-fuchsia-500 to-purple-900",
  "from-red-500 to-red-900",
  "from-cyan-500 to-sky-900",
];
const rows = ["Desporto ao Vivo", "Filmes em Destaque"];

const floatingBadges = [
  { icon: "hd", text: "4K Ultra HD", className: "-left-4 top-10 sm:-left-10", delay: "0s" },
  { icon: "tv", text: "+45.000 Canais", className: "-right-2 top-1/3 sm:-right-8", delay: "1.5s" },
  { icon: "bolt", text: "Sem Buffering", className: "bottom-16 -left-2 sm:-left-6", delay: "3s" },
];

function TvMockup() {
  return (
    <div className="animate-fade-up relative mx-auto w-full max-w-xl" style={{ animationDelay: "0.4s" }}>
      <div className="bg-gradient-brand animate-blob absolute -inset-6 rounded-[2rem] opacity-30 blur-3xl" />
      <div className="animate-float-slow relative">
        <div className="relative rounded-2xl border-4 border-neutral-800 bg-neutral-950 p-3 shadow-2xl">
          <div className="rounded-lg bg-gradient-to-br from-neutral-900 to-black p-4 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">{site.name}</span>
              <span className="flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> AO VIVO
              </span>
            </div>
            <div className="bg-animated relative mt-3 h-32 overflow-hidden rounded-md sm:h-40">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] uppercase tracking-widest text-white/70">Em destaque</p>
                <p className="text-lg font-extrabold">Final do Campeonato · 4K</p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/20">
                  <div className="animate-progress h-full rounded-full bg-white" />
                </div>
              </div>
            </div>
            {rows.map((row, r) => (
              <div key={row} className="mt-3">
                <p className="mb-1.5 text-[11px] font-semibold text-white/70">{row}</p>
                <div className="grid grid-cols-4 gap-2">
                  {tiles.slice(r * 4, r * 4 + 4).map((t, i) => (
                    <div
                      key={t}
                      className={`animate-fade-up aspect-[3/4] rounded bg-gradient-to-br ${t} transition hover:scale-105`}
                      style={{ animationDelay: `${0.8 + r * 0.3 + i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto h-4 w-24 bg-neutral-800" />
        <div className="mx-auto h-2 w-48 rounded-full bg-neutral-800" />
      </div>

      {floatingBadges.map((b) => (
        <div
          key={b.text}
          className={`animate-float absolute ${b.className} flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-bold shadow-xl backdrop-blur`}
          style={{ animationDelay: b.delay }}
        >
          <span className="bg-gradient-brand flex h-7 w-7 items-center justify-center rounded-lg">
            <Icon name={b.icon} className="h-4 w-4" />
          </span>
          {b.text}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="animate-blob pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand/40 blur-[120px]" />
      <div
        className="animate-blob pointer-events-none absolute right-0 top-20 h-[380px] w-[380px] rounded-full bg-brand-2/30 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="text-center lg:text-left">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-2/40 bg-brand-2/10 px-4 py-1 text-xs font-bold tracking-wider text-brand-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-2" />
            </span>
            {site.discountBanner}
          </span>
          <p
            className="animate-fade-up mt-6 text-sm font-semibold uppercase tracking-widest text-muted"
            style={{ animationDelay: "0.1s" }}
          >
            {site.tagline}
          </p>
          <h1
            className="animate-fade-up mt-4 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            Liberte a Máxima Experiência de entretenimento com a{" "}
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            Aceda a +45.000 canais ao vivo e 98.000 conteúdos on-demand em qualidade 4K/UHD impressionante.
            Desfrute de streaming sem interrupções com a nossa tecnologia antifreeze e suporte dedicado 24/7.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="#planos" className="bg-gradient-brand btn-shine btn-glow rounded-full px-8 py-3 font-semibold">
              Começar Agora
            </Link>
            <Link
              href="/teste-gratis"
              className="rounded-full border border-border px-8 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand hover:bg-surface"
            >
              Teste Grátis 24h
            </Link>
          </div>
          <div
            className="animate-fade-up mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted lg:justify-start"
            style={{ animationDelay: "0.5s" }}
          >
            {["Ativação Instantânea", "Satisfeito ou Reembolso", "Suporte 24/7"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-brand-2" />
                {t}
              </span>
            ))}
          </div>
        </div>
        <TvMockup />
      </div>
    </section>
  );
}
