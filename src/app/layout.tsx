import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import SpotlightTracker from "@/components/SpotlightTracker";
import PromoPopup from "@/components/PromoPopup";
import JsonLd from "@/components/JsonLd";
import { themeScript } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import { KEYWORD, organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${KEYWORD} | ${site.name}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "IPTV Portugal",
    "IPTV",
    "melhor IPTV Portugal",
    "IPTV canais portugueses",
    "IPTV 4K",
    "lista IPTV",
    "teste IPTV grátis",
    "IPTV Smart TV",
  ],
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.name,
    title: `${KEYWORD} | ${site.name}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  // Geographic targeting for Portugal.
  other: { "geo.region": "PT", "geo.placename": "Portugal", language: "pt-PT" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <Analytics />
        <SpotlightTracker />
        <PromoPopup />
      </body>
    </html>
  );
}
