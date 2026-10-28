import type { MetadataRoute } from "next";
import { posts, site, SITE_UPDATED } from "@/lib/site";

const pages: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/teste-gratis", priority: 0.9 },
  { path: "/instalacao", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
  { path: "/revenda", priority: 0.7 },
  { path: "/sobre", priority: 0.6 },
  { path: "/contacto", priority: 0.6 },
  { path: "/termos", priority: 0.3 },
  { path: "/privacidade", priority: 0.3 },
  { path: "/reembolso", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date, not the build time: Google ignores lastmod that changes on every deploy.
  const lastModified = SITE_UPDATED;
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
