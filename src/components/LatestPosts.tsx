import Link from "next/link";
import PostCover from "./PostCover";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { posts, readingTime } from "@/lib/posts";

// Homepage links to the newest articles, so every post gets internal links from the strongest page.
export default function LatestPosts() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <SectionHeading
        eyebrow="Guias e Dicas"
        title="Aprenda a Tirar o Máximo do Seu IPTV"
        text="Guias práticos para escolher, instalar e ver IPTV em Portugal sem complicações."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.slice(0, 8).map((p, i) => (
          <Reveal key={p.slug} delay={(i % 4) * 80}>
            <Link
              href={`/blog/${p.slug}`}
              className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <PostCover post={p} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-xs text-muted">{readingTime(p)} min de leitura</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center">
        <Link href="/blog" className="text-gradient font-semibold hover:underline">
          Ver todos os artigos →
        </Link>
      </p>
    </section>
  );
}
