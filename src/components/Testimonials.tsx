import Icon from "./Icon";
import Marquee from "./Marquee";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="px-4">
        <SectionHeading eyebrow="Testemunhos" title="O Que Dizem os Nossos Clientes" />
      </div>
      {/* Repeated so the scrolling row stays full with only a few reviews */}
      <Marquee duration={45}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <figure
            key={i}
            className="spotlight flex w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-8 sm:w-[380px]"
          >
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, s) => (
                <Icon key={s} name="star" className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-muted">&ldquo;{t.text}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="bg-gradient-brand flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                {initials(t.name)}
              </span>
              <span className="font-semibold">{t.name}</span>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
