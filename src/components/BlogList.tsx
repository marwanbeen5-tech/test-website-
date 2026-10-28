"use client";

import Link from "next/link";
import { useState } from "react";
import PostCover from "./PostCover";
import { formatDate, posts, readingTime, type Post } from "@/lib/posts";

const categories = ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))] as const;

function Meta({ post }: { post: Post }) {
  return (
    <p className="text-xs text-muted">
      <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post)} min de leitura
    </p>
  );
}

export default function BlogList() {
  const [category, setCategory] = useState<string>("Todos");
  const [featured, ...rest] = posts;
  const filtered = category === "Todos" ? rest : posts.filter((p) => p.category === category);

  return (
    <div className="space-y-12">
      {category === "Todos" && (
        <Link
          href={`/blog/${featured.slug}`}
          className="spotlight group grid overflow-hidden rounded-3xl border border-border bg-surface md:grid-cols-2"
        >
          <PostCover post={featured} large />
          <div className="flex flex-col justify-center p-8">
            <span className="text-gradient text-xs font-bold uppercase tracking-widest">Artigo em destaque</span>
            <h2 className="!mt-3 !text-2xl md:!text-3xl">{featured.title}</h2>
            <p className="mt-4">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <Meta post={featured} />
              <span className="text-gradient font-semibold transition group-hover:translate-x-1">Ler artigo →</span>
            </div>
          </div>
        </Link>
      )}

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              category === c ? "bg-gradient-brand" : "border border-border text-muted hover:text-fg"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <Link
            key={`${category}-${p.slug}`}
            href={`/blog/${p.slug}`}
            className="spotlight animate-fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <PostCover post={p} />
            <div className="flex flex-1 flex-col p-6">
              <Meta post={p} />
              <h2 className="!mt-2 !text-xl">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm">{p.excerpt}</p>
              <span className="text-gradient mt-4 text-sm font-semibold transition group-hover:translate-x-1">
                Ler artigo →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
