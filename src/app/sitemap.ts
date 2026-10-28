import type { MetadataRoute } from "next";
import { posts, site } from "@/lib/site";

const pages = [
  "",
  "/instalacao",
  "/revenda",
  "/blog",
  "/contacto",
  "/teste-gratis",
  "/termos",
  "/privacidade",
  "/reembolso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      priority: 0.6,
    })),
  ];
}
