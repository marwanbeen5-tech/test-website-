import Hero from "@/components/Hero";
import CategoryBand from "@/components/CategoryBand";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ResellerCta from "@/components/ResellerCta";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Hero />
      <Pricing />
      <CategoryBand />
      <Steps />
      <Features />
      <Devices />
      <Reveal>
        <Comparison />
      </Reveal>
      <Testimonials />
      <Faq />
      <ResellerCta />
    </>
  );
}
