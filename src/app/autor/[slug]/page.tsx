import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { author, authorLd, authorPath } from "@/lib/authors";
import { formatDate, posts, readingTime } from "@/lib/posts";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: author.slug }];
}

export const metadata = pageMeta(
  authorPath,
  author.name,
  `${author.name} escreve os guias do blog ${site.name}: instalação de IPTV, aplicações, internet e Wi-Fi em casa e guia de programação.`
);

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  if (slug !== author.slug) notFound();

  return (
    <PageShell title={author.name} intro={author.role}>
      <JsonLd data={breadcrumbLd([{ name: "Blog", path: "/blog" }, { name: author.name, path: authorPath }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: authorLd() }} />

      <div className="flex items-start gap-5 rounded-2xl border border-border bg-surface p-6">
        <span
          aria-hidden="true"
          className="bg-gradient-brand flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-extrabold"
        >
          RR
        </span>
        <div className="space-y-3">
          {author.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <h2>Temas</h2>
      <ul className="flex flex-wrap gap-2">
        {author.topics.map((t) => (
          <li key={t} className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold">
            {t}
          </li>
        ))}
      </ul>

      <h2>Artigos de {author.name}</h2>
      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="spotlight flex gap-4 rounded-2xl border border-border bg-surface p-4">
              <Icon name="film" className="mt-0.5 h-5 w-5 shrink-0 text-brand-2" />
              <span>
                <span className="block font-bold text-fg">{p.title}</span>
                <span className="block text-xs">
                  {formatDate(p.updated ?? p.date)} · {readingTime(p)} min de leitura
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
