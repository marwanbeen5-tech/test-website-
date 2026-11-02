import { qualities } from "@/lib/speed";

// Original diagrams drawn in SVG (no third-party images). Colours follow the theme tokens,
// so they work in dark and light mode.

function Gradient({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" style={{ stopColor: "var(--color-brand)" }} />
        <stop offset="1" style={{ stopColor: "var(--color-brand-2)" }} />
      </linearGradient>
    </defs>
  );
}

// Bar chart: recommended Mbps per screen for each picture quality.
export function SpeedChart() {
  const max = Math.max(...qualities.map((q) => q.mbps));
  const barW = 90;
  const gap = 50;
  const chartH = 180;
  const left = 60;
  return (
    <figure className="rounded-2xl border border-border bg-surface p-5">
      <svg
        viewBox="0 0 620 280"
        role="img"
        aria-label={`Velocidade recomendada por ecrã: ${qualities.map((q) => `${q.label} ${q.mbps} Mbps`).join(", ")}`}
        className="h-auto w-full text-fg"
      >
        <Gradient id="speed-bar" />
        {[0, 10, 20].map((v) => {
          const y = 220 - (v / max) * chartH;
          return (
            <g key={v}>
              <line x1={left - 10} x2={600} y1={y} y2={y} style={{ stroke: "var(--color-border)" }} />
              <text x={left - 18} y={y + 4} textAnchor="end" fontSize="12" style={{ fill: "var(--color-muted)" }}>
                {v}
              </text>
            </g>
          );
        })}
        {qualities.map((q, i) => {
          const h = (q.mbps / max) * chartH;
          const x = left + 20 + i * (barW + gap);
          return (
            <g key={q.id}>
              <rect x={x} y={220 - h} width={barW} height={h} rx="10" fill="url(#speed-bar)" />
              <text x={x + barW / 2} y={220 - h - 10} textAnchor="middle" fontSize="18" fontWeight="800" fill="currentColor">
                {q.mbps} Mbps
              </text>
              <text x={x + barW / 2} y={245} textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">
                {q.label}
              </text>
              <text x={x + barW / 2} y={264} textAnchor="middle" fontSize="12" style={{ fill: "var(--color-muted)" }}>
                {q.detail}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-muted">
        Velocidade de internet recomendada por cada ecrã a ver em simultâneo, com margem de segurança.
      </figcaption>
    </figure>
  );
}

function Box({ x, y, w, title, sub }: { x: number; y: number; w: number; title: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="62" rx="14" style={{ fill: "var(--color-bg)", stroke: "var(--color-border)" }} strokeWidth="2" />
      <text x={x + w / 2} y={y + 27} textAnchor="middle" fontSize="15" fontWeight="800" fill="currentColor">
        {title}
      </text>
      <text x={x + w / 2} y={y + 46} textAnchor="middle" fontSize="12" style={{ fill: "var(--color-muted)" }}>
        {sub}
      </text>
    </g>
  );
}

// The ideal home setup for IPTV: router to the main TV by cable, phones on 5 GHz Wi-Fi,
// a distant TV through Powerline adapters.
export function HomeNetworkDiagram() {
  return (
    <figure className="rounded-2xl border border-border bg-surface p-5">
      <svg
        viewBox="0 0 640 330"
        role="img"
        aria-label="Esquema da casa ideal para IPTV: a internet chega ao router; a TV da sala liga-se por cabo de rede, os telemóveis usam Wi-Fi de 5 GHz e a TV do quarto liga-se com adaptadores Powerline."
        className="h-auto w-full text-fg"
      >
        <Gradient id="net-line" />
        <Box x={250} y={10} w={140} title="Internet" sub="fibra ou cabo" />
        <line x1="320" y1="72" x2="320" y2="122" stroke="url(#net-line)" strokeWidth="5" strokeLinecap="round" />
        <rect x={235} y={122} width="170" height="62" rx="14" fill="url(#net-line)" />
        <text x="320" y="150" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff">Router</text>
        <text x="320" y="170" textAnchor="middle" fontSize="12" fill="#fff">perto do centro da casa</text>

        {/* Cable to the living-room TV */}
        <path d="M 260 184 L 110 250" stroke="url(#net-line)" strokeWidth="5" strokeLinecap="round" fill="none" />
        <text x="140" y="205" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">Cabo de rede</text>
        <Box x={20} y={250} w={180} title="TV da sala" sub="o mais estável" />

        {/* 5 GHz Wi-Fi to phones */}
        <path d="M 320 184 L 320 250" stroke="url(#net-line)" strokeWidth="4" strokeDasharray="2 9" strokeLinecap="round" fill="none" />
        <text x="372" y="222" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">Wi-Fi 5 GHz</text>
        <Box x={235} y={250} w={170} title="Telemóvel e tablet" sub="perto do router" />

        {/* Powerline to the bedroom TV */}
        <path d="M 380 184 L 530 250" stroke="url(#net-line)" strokeWidth="5" strokeDasharray="14 8" strokeLinecap="round" fill="none" />
        <text x="505" y="205" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">Powerline</text>
        <Box x={440} y={250} w={180} title="TV do quarto" sub="pela instalação elétrica" />
      </svg>
      <figcaption className="mt-2 text-center text-sm text-muted">
        A casa ideal para IPTV: cabo de rede na TV principal, Wi-Fi de 5 GHz nos aparelhos móveis e Powerline onde o
        cabo não chega.
      </figcaption>
    </figure>
  );
}

// Which diagram goes in which article (shown after the opening section).
export const articleFigures: Record<string, () => React.ReactElement> = {
  "melhor-velocidade-internet-4k": SpeedChart,
  "iptv-buffering-solucoes": HomeNetworkDiagram,
  "iptv-futebol-sem-cortes": HomeNetworkDiagram,
};
