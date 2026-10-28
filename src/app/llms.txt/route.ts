import { faqs, plans, posts, site } from "@/lib/site";

// Plain-text summary for AI assistants (llms.txt convention).
export function GET() {
  const prices = plans[1].map((p) => `- ${p.duration}: ${p.price}€`).join("\n");
  const body = `# ${site.name} - IPTV Portugal

> ${site.description}

${site.name} é um serviço de IPTV Portugal: televisão pela internet com canais portugueses e internacionais, desporto ao vivo, filmes e séries, em Smart TV, Android TV, Fire TV Stick, iPhone, Android, Windows e Mac.

## Factos principais
- +45.000 canais ao vivo de 115+ países, incluindo canais portugueses
- 98.000+ filmes e séries on-demand (VOD)
- Qualidade SD, HD, Full HD e 4K/UHD, guia EPG, sistema antifreeze
- 1, 2 ou 3 ecrãs em simultâneo
- Ativação em 5-30 minutos, teste grátis de 24 horas, reembolso em 7 dias
- Suporte 24/7 em português por WhatsApp e email (${site.email})

## Preços (1 ecrã)
${prices}

## Páginas
- [Início e planos](${site.url}/)
- [Teste grátis 24h](${site.url}/teste-gratis)
- [Guia de instalação](${site.url}/instalacao)
- [Revenda](${site.url}/revenda)
- [Contactos](${site.url}/contacto)
${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug})`).join("\n")}

## Perguntas frequentes
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
