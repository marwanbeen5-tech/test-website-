import { site } from "./site";

// Article author, shown in bylines and emitted as a Person in structured data.
// Experience stated here is as confirmed by the business (3+ years in IPTV).
export const author = {
  name: "Rabiaa Reggad",
  slug: "rabiaa-reggad",
  role: "Especialista em IPTV",
  bio: [
    "Rabiaa Reggad trabalha com IPTV há mais de 3 anos e escreve os guias do blog Portugal IPTV. Conhece o serviço de ponta a ponta: servidores, aplicações, aparelhos, internet em casa e as dúvidas mais comuns de quem está a começar.",
    "Cada guia nasce das perguntas que os clientes fazem todos os dias no suporte e explica, passo a passo e em linguagem simples, como instalar, configurar e resolver problemas, para que qualquer pessoa consiga ver IPTV sem ajuda técnica.",
  ],
  topics: [
    "IPTV",
    "Instalação de IPTV",
    "Aplicações IPTV",
    "Servidores e estabilidade de streaming",
    "Internet e Wi-Fi em casa",
    "Guia de programação (EPG)",
  ],
};

export const authorPath = `/autor/${author.slug}`;

export function authorLd() {
  return {
    "@type": "Person",
    name: author.name,
    url: `${site.url}${authorPath}`,
    jobTitle: author.role,
    description: author.bio[0],
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    knowsAbout: author.topics,
  };
}
