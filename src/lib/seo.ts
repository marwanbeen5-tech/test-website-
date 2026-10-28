import type { Metadata } from "next";
import { faqs, plans, site } from "./site";

export const KEYWORD = "IPTV Portugal";

// Per-page metadata with canonical URL, so each page is indexed under its own address.
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, languages: { "pt-PT": path } },
    openGraph: { title: `${title} | ${site.name}`, description, url: path },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Início", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: "portugaliptv.top",
    url: site.url,
    inLanguage: "pt-PT",
  };
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    logo: `${site.url}/icon.svg`,
    areaServed: { "@type": "Country", name: "Portugal" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      availableLanguage: ["Portuguese"],
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  };
}

// The subscription as a product with all plan prices, for price-aware results.
export function productLd() {
  const all = Object.values(plans).flat();
  const prices = all.map((p) => p.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Subscrição ${KEYWORD}`,
    description: site.description,
    brand: { "@type": "Brand", name: site.name },
    image: `${site.url}/opengraph-image`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: all.length,
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "Country", name: "Portugal" },
    },
  };
}

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
