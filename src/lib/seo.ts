import type { Metadata } from "next";
import { faqs, plans, screensLabel, site } from "./site";

export const KEYWORD = "IPTV Portugal";

// Share image for every page. A page's own `openGraph` replaces the inherited one,
// image included, so it has to be repeated here.
export const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${KEYWORD} - ${site.name}` };

// Google truncates titles beyond ~60 characters.
const MAX_TITLE = 60;

// Per-page metadata with canonical URL, so each page is indexed under its own address.
export function pageMeta(path: string, title: string, description: string): Metadata {
  const branded = `${title} | ${site.name}`;
  const fits = branded.length <= MAX_TITLE;
  return {
    // Long titles drop the "| brand" suffix instead of being cut off.
    title: fits ? title : { absolute: title },
    description,
    alternates: { canonical: path, languages: { "pt-PT": path, "x-default": path } },
    openGraph: { title: fits ? branded : title, description, url: path, images: [ogImage] },
    twitter: { card: "summary_large_image", images: [ogImage.url] },
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
    email: site.email || undefined,
    logo: `${site.url}/icon.svg`,
    areaServed: { "@type": "Country", name: "Portugal" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email || undefined,
      url: `${site.url}/contacto`,
      availableLanguage: ["Portuguese"],
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  };
}

// The subscription as a Service with every plan price. Not a Product: Google expects
// Products to carry reviews/ratings, and only real customer reviews may be added.
export function serviceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Subscrição ${KEYWORD}`,
    serviceType: "IPTV",
    description: site.description,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "Portugal" },
    image: `${site.url}/opengraph-image`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Planos ${KEYWORD}`,
      itemListElement: Object.entries(plans).flatMap(([screens, list]) =>
        list.map((p) => ({
          "@type": "Offer",
          name: `${p.duration} - ${screensLabel(Number(screens))}`,
          price: p.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${site.url}/#planos`,
        }))
      ),
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
