import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { countries } from "@/lib/countries";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ pais: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return countries.map((c) => ({ pais: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { pais } = await params;
  const c = countries.find((x) => x.slug === pais);
  return c ? pageMeta(`/iptv-portugal/${c.slug}`, c.title, c.description) : {};
}

export default async function CountryPage({ params }: Props) {
  const { pais } = await params;
  const c = countries.find((x) => x.slug === pais);
  if (!c) notFound();
  const path = `/iptv-portugal/${c.slug}`;
  const others = countries.filter((x) => x.slug !== c.slug);

  return (
    <PageShell title={c.title}>
      <JsonLd
        data={breadcrumbLd([
          { name: "IPTV Portugal no estrangeiro", path: "/iptv-portugal" },
          { name: c.name, path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `IPTV Portugal ${c.inName}`,
          serviceType: "IPTV",
          url: `${site.url}${path}`,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "Country", name: c.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      <nav aria-label="Breadcrumb" className="-mt-4 text-sm">
        <Link href="/" className="hover:text-fg">Início</Link> /{" "}
        <Link href="/iptv-portugal" className="hover:text-fg">No estrangeiro</Link> / <span className="text-fg">{c.name}</span>
      </nav>

      {c.intro.map((p, i) => (
        <p key={p} className={i === 0 ? "text-lg text-fg" : ""}>
          {p}
        </p>
      ))}

      <aside aria-label="Resumo rápido" className="rounded-2xl border border-brand/40 bg-brand/5 p-6">
        <p className="font-bold text-fg">Resumo rápido</p>
        <ul className="mt-3 space-y-2">
          {c.summary.map((s) => (
            <li key={s} className="flex gap-3">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
              {s}
            </li>
          ))}
        </ul>
      </aside>

      {c.sections.map((s) => (
        <section key={s.heading} className="space-y-4">
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.list && (
            <ul className="space-y-2">
              {s.list.map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-2" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <div className="bg-animated relative overflow-hidden rounded-2xl p-8 text-white">
        <p className="text-2xl font-extrabold">Canais portugueses {c.inName}, a partir de hoje</p>
        <p className="mt-2 text-white/85">Teste grátis de 24 horas, ativação em minutos e suporte em português.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(`Olá! Vivo ${c.inName} e quero pedir o teste grátis de 24 horas.`)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta={`pais-${c.slug}`}
            className="btn-shine rounded-full bg-white px-6 py-2.5 text-center font-semibold text-black"
          >
            Pedir Teste Grátis
          </a>
          <Link href="/#planos" className="rounded-full border border-white/50 px-6 py-2.5 text-center font-semibold">
            Ver Planos
          </Link>
        </div>
      </div>

      <h2>Perguntas frequentes</h2>
      <div className="space-y-4">
        {c.faq.map((f) => (
          <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
            <h3 className="font-bold text-fg">{f.q}</h3>
            <p className="mt-2">{f.a}</p>
          </div>
        ))}
      </div>

      <h2>Guias úteis</h2>
      <ul className="space-y-2">
        <li><Link href="/instalacao" className="underline">Guia de instalação para cada aparelho</Link></li>
        <li><Link href="/calculadora-velocidade-iptv" className="underline">Calculadora de velocidade IPTV</Link></li>
        <li><Link href="/blog/o-que-e-epg-guia-programacao" className="underline">Como ajustar o guia de programação (EPG)</Link></li>
      </ul>

      <p className="text-sm">
        Também vive noutro país?{" "}
        {others.map((o, i) => (
          <span key={o.slug}>
            <Link href={`/iptv-portugal/${o.slug}`} className="underline">IPTV Portugal {o.inName}</Link>
            {i < others.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </PageShell>
  );
}
