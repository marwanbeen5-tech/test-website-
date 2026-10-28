import Hero from "@/components/Hero";
import CategoryBand from "@/components/CategoryBand";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import Pricing from "@/components/Pricing";
import AboutIptv from "@/components/AboutIptv";
import Comparison from "@/components/Comparison";
import LatestPosts from "@/components/LatestPosts";
import Faq from "@/components/Faq";
import ResellerCta from "@/components/ResellerCta";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqLd, ogImage, productLd } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "IPTV Portugal | +45.000 Canais em 4K desde 4,75€/mês";

export const metadata = {
  // `absolute` skips the "| <brand>" template so the keyword leads the title.
  title: { absolute: title },
  description: site.description,
  alternates: { canonical: "/", languages: { "pt-PT": "/", "x-default": "/" } },
  openGraph: { title, description: site.description, url: "/", images: [ogImage] },
};

export default function Home() {
  return (
    <>
      <JsonLd data={productLd()} />
      <JsonLd data={faqLd()} />
      <Hero />
      <Pricing />
      <CategoryBand />
      <AboutIptv />
      <Steps />
      <Features />
      <Devices />
      <Reveal>
        <Comparison />
      </Reveal>
      <LatestPosts />
      <Faq />
      <ResellerCta />
    </>
  );
}
