import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const disallow = ["/api/", "/sucesso"];

// AI crawlers are allowed explicitly so the site can be cited in AI answers
// (Google AI Overviews, ChatGPT, Perplexity, Claude, Copilot).
const aiBots = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/", disallow })),
      { userAgent: "*", allow: "/", disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
