import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { posts, site } from "@/lib/site";

export const metadata = pageMeta(
  "/blog",
  "Blog IPTV Portugal: Guias, Instalação e Dicas",
  "Guias e dicas sobre IPTV Portugal: como escolher o melhor serviço, instalar na Smart TV e Fire TV Stick, melhores apps e como acabar com o buffering."
);

export default function BlogPage() {
  return (
    <PageShell
      title="Blog IPTV Portugal"
      intro="Guias práticos, tutoriais de instalação e dicas para tirar o máximo partido do seu IPTV."
    >
      <JsonLd data={breadcrumbLd([{ name: "Blog", path: "/blog" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `Blog ${site.name} IPTV Portugal`,
          url: `${site.url}/blog`,
          inLanguage: "pt-PT",
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <BlogList />
    </PageShell>
  );
}
