import Link from "next/link";
import Icon from "./Icon";
import { site, trialWhatsapp } from "@/lib/site";

const tabs = ["Ao Vivo", "Filmes", "Séries", "Desporto"];

// TV guide rows under the player; `progress` is how far the current show is (%).
const guide = [
  { num: "101", name: "Desporto 1 HD", show: "Liga · Jornada 12", time: "21:00", progress: 62, color: "from-emerald-500 to-green-700", active: true },
  { num: "205", name: "Cinema Premium", show: "Estreia: Ação Total", time: "21:30", progress: 35, color: "from-purple-500 to-indigo-700" },
  { num: "310", name: "Notícias 24", show: "Jornal da Noite", time: "20:00", progress: 80, color: "from-sky-500 to-blue-700" },
  { num: "412", name: "Kids TV", show: "Aventuras Animadas", time: "20:45", progress: 48, color: "from-amber-400 to-orange-600" },
];

const floatingBadges = [
  { icon: "hd", text: "4K Ultra HD", className: "-top-5 right-4 sm:right-8", delay: "0s" },
  { icon: "bolt", text: "Zero Buffering", className: "-bottom-5 left-4 sm:left-8", delay: "2s" },
];

// Animated football pitch drawn in SVG, so no third-party footage is needed.
function Pitch() {
  return (
    <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="grass" x1="0" x2="1">
          <stop offset="0" stopColor="#15803d" />
          <stop offset="1" stopColor="#166534" />
        </linearGradient>
        <radialGradient id="lights" cx="0.5" cy="0" r="0.9">
          <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#grass)" />
      {Array.from({ length: 8 }).map((_, i) => (
        <rect key={i} x={i * 40} width="20" height="180" fill="#fff" opacity="0.04" />
      ))}
      <g stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" fill="none">
        <rect x="12" y="12" width="296" height="156" />
        <line x1="160" y1="12" x2="160" y2="168" />
        <circle cx="160" cy="90" r="24" />
        <rect x="12" y="52" width="40" height="76" />
        <rect x="268" y="52" width="40" height="76" />
        <rect x="12" y="72" width="14" height="36" />
        <rect x="294" y="72" width="14" height="36" />
      </g>
      {/* Players */}
      {[
        [90, 60, "#ef4444"], [120, 120, "#ef4444"], [200, 75, "#ef4444"], [70, 100, "#ef4444"],
        [180, 115, "#f8fafc"], [230, 60, "#f8fafc"], [250, 110, "#f8fafc"], [140, 80, "#f8fafc"],
      ].map(([x, y, c], i) => (
        <circle
          key={i}
          cx={x as number}
          cy={y as number}
          r="3.5"
          fill={c as string}
          className="animate-player"
          style={{ animationDelay: `${i * -0.7}s` }}
        />
      ))}
      <circle cx="0" cy="0" r="2.5" fill="#fff" className="animate-ball" />
      <rect width="320" height="180" fill="url(#lights)" />
    </svg>
  );
}

function AppMockup() {
  return (
    <div className="animate-fade-up relative mx-auto w-full max-w-xl py-6" style={{ animationDelay: "0.4s" }}>
      <div className="bg-gradient-brand animate-blob absolute inset-6 hidden md:block rounded-[2rem] opacity-30 blur-3xl" />

      <div className="animate-float-slow relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 text-white shadow-2xl shadow-black/50">
        {/* App top bar */}
        <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm font-extrabold">{site.name}</span>
          <nav className="ml-auto hidden gap-4 text-[11px] font-semibold text-white/50 sm:flex">
            {tabs.map((t, i) => (
              <span key={t} className={i === 0 ? "text-white" : ""}>
                {t}
              </span>
            ))}
          </nav>
        </div>

        {/* Player */}
        <div className="p-3">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Pitch />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg bg-black/70 px-2.5 py-1.5 text-[11px] font-bold backdrop-blur">
              <span className="h-2 w-2 rounded-sm bg-red-500" />
              CASA
              <span className="rounded bg-white px-1.5 text-black">2 - 1</span>
              FORA
              <span className="h-2 w-2 rounded-sm bg-white" />
              <span className="ml-1 text-emerald-400">67&apos;</span>
            </div>
            <div className="absolute right-3 top-3 flex gap-1.5">
              <span className="flex items-center gap-1 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> AO VIVO
              </span>
              <span className="rounded bg-black/70 px-2 py-0.5 text-[10px] font-bold backdrop-blur">4K</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
              <div className="h-1 overflow-hidden rounded-full bg-white/25">
                <div className="bg-gradient-brand animate-progress h-full rounded-full" />
              </div>
              <div className="mt-2 flex items-center gap-3 text-[11px]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                <span className="font-semibold">Desporto 1 HD · Liga · Jornada 12</span>
                <span className="ml-auto flex h-3 items-end gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="animate-eq w-0.5 rounded-full bg-white" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* TV guide */}
        <div className="space-y-1.5 px-3 pb-3">
          {guide.map((c, i) => (
            <div
              key={c.num}
              className={`animate-fade-up flex items-center gap-3 rounded-lg px-2.5 py-2 ${
                c.active ? "bg-white/10 ring-1 ring-brand-2/60" : "bg-white/[0.03]"
              }`}
              style={{ animationDelay: `${0.8 + i * 0.12}s` }}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${c.color} text-[10px] font-extrabold`}>
                {c.num}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-xs font-bold">{c.name}</p>
                  <p className="shrink-0 text-[10px] text-white/50">{c.time}</p>
                </div>
                <p className="truncate text-[11px] text-white/60">{c.show}</p>
                <div className="mt-1 h-0.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${c.active ? "bg-gradient-brand" : "bg-white/40"}`}
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {floatingBadges.map((b) => (
        <div
          key={b.text}
          className={`animate-float absolute ${b.className} z-10 flex items-center gap-2 rounded-xl border border-border bg-surface/95 px-3 py-2 text-xs font-bold shadow-xl`}
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
      <div className="animate-blob pointer-events-none absolute hidden md:block -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-brand/40 blur-[120px]" />
      <div
        className="animate-blob pointer-events-none absolute hidden md:block right-0 top-20 h-[380px] w-[380px] rounded-full bg-brand-2/30 blur-[120px]"
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
            O seu serviço de IPTV em Portugal
          </p>
          <h1
            className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl"
          >
            <span className="text-gradient">IPTV Portugal</span> Premium: Toda a Televisão num Só Lugar
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg text-muted lg:mx-0"
          >
            Veja canais portugueses, desporto ao vivo e +45.000 canais de 115 países, mais 98.000 filmes e séries
            em 4K/UHD. Streaming sem cortes com tecnologia antifreeze, ativação em minutos e suporte 24/7 em
            português.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="#planos" className="bg-gradient-brand btn-shine btn-glow rounded-full px-8 py-3 font-semibold">
              Começar Agora
            </Link>
            <a
              href={trialWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-8 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-brand hover:bg-surface"
            >
              Teste Grátis 24h
            </a>
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
        <AppMockup />
      </div>
    </section>
  );
}
