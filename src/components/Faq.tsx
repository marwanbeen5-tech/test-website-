"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Perguntas Frequentes"
        text="Tem perguntas? Nós temos respostas. Encontre tudo o que precisa saber sobre o nosso serviço IPTV."
      />
      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 70}>
              <div
                className={`rounded-xl border bg-surface transition-colors duration-300 ${
                  isOpen ? "border-brand/60" : "border-border hover:border-brand/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-gradient-brand rotate-180" : "border border-border"
                    }`}
                  >
                    <Icon name="chevron" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 overflow-hidden px-6 text-muted">
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
