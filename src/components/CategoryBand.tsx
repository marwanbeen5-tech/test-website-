import Marquee from "./Marquee";

const categories = [
  "⚽ Desporto ao Vivo",
  "🎬 Filmes 4K",
  "📺 Séries",
  "📰 Notícias 24h",
  "🧸 Infantil",
  "🌍 115+ Países",
  "🎵 Música",
  "🦁 Documentários",
  "🏎️ Motores",
  "🥊 Combate",
];

export default function CategoryBand() {
  return (
    <section className="border-y border-border bg-surface/60 py-5" aria-label="Categorias">
      <Marquee duration={35}>
        {categories.map((c) => (
          <span
            key={c}
            className="whitespace-nowrap rounded-full border border-border bg-bg px-5 py-2 text-sm font-semibold"
          >
            {c}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
