import Link from "next/link";
import PageShell from "@/components/PageShell";
import { posts } from "@/lib/site";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <PageShell title="Blog" intro="Guias, dicas e novidades sobre IPTV.">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-border bg-surface p-6 transition hover:border-brand/60"
          >
            <p className="text-xs">{p.date}</p>
            <h2 className="!mt-2 !text-xl">{p.title}</h2>
            <p className="mt-3">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
