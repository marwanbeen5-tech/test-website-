import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import PostCover from "@/components/PostCover";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { formatDate, headingId, posts, readingTime } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const meta = pageMeta(`/blog/${post.slug}`, post.title, post.excerpt);
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date } };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const headings = post.sections.flatMap((s) => (s.heading ? [s.heading] : []));
  // Same category first, then the newest others.
  const related = [
    ...posts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...posts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 2);

  return (
    <PageShell title={post.title}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          keywords: post.keyword,
          articleSection: post.category,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "pt-PT",
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` } },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          image: `${site.url}/opengraph-image`,
        }}
      />
      <JsonLd data={breadcrumbLd([{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])} />

      <nav aria-label="Breadcrumb" className="-mt-4 text-sm">
        <Link href="/" className="hover:text-fg">Início</Link> /{" "}
        <Link href="/blog" className="hover:text-fg">Blog</Link> / <span className="text-fg">{post.category}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="bg-gradient-brand rounded-full px-3 py-1 text-xs font-bold">{post.category}</span>
        <span className="flex items-center gap-1.5">
          <Icon name="clock" className="h-4 w-4" /> {readingTime(post)} min de leitura
        </span>
        <span>
          Por {site.name} · <time dateTime={post.date}>{formatDate(post.date)}</time>
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <PostCover post={post} large />
      </div>

      {headings.length > 1 && (
        <nav aria-label="Índice" className="rounded-2xl border border-border bg-surface p-6">
          <p className="font-bold text-fg">Neste artigo</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
            {headings.map((h) => (
              <li key={h}>
                <a href={`#${headingId(h)}`} className="hover:text-fg">
                  {h}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <article className="space-y-8 text-base">
        {post.sections.map((s, i) => (
          <section key={i} className="space-y-4">
            {s.heading && (
              <h2 id={headingId(s.heading)} className="scroll-mt-24">
                {s.heading}
              </h2>
            )}
            {s.paragraphs.map((p, j) => (
              // The opening paragraph is the direct answer; make it stand out.
              <p key={p} className={i === 0 && j === 0 ? "text-lg text-fg" : ""}>
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="space-y-2">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <div className="bg-animated relative overflow-hidden rounded-2xl p-8 text-white">
        <p className="text-2xl font-extrabold">Experimente o nosso IPTV Portugal</p>
        <p className="mt-2 text-white/85">+45.000 canais em 4K, teste grátis de 24 horas e reembolso em 7 dias.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/#planos" className="btn-shine rounded-full bg-white px-6 py-2.5 text-center font-semibold text-black">
            Ver Planos
          </Link>
          <Link href="/teste-gratis" className="rounded-full border border-white/50 px-6 py-2.5 text-center font-semibold">
            Teste Grátis 24h
          </Link>
        </div>
      </div>

      <section>
        <h2>Artigos relacionados</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="spotlight group overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <PostCover post={p} />
              <div className="p-5">
                <p className="font-bold text-fg">{p.title}</p>
                <p className="mt-2 text-xs">{readingTime(p)} min de leitura</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
