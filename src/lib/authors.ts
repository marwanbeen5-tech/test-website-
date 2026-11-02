import { site } from "./site";

// Article author, shown in bylines and emitted as a Person in structured data.
// The bio only describes the role on the blog: add real experience or credentials here.
export const author = {
  name: "Rabiaa Reggad",
  slug: "rabiaa-reggad",
  role: "Guias e conteúdos",
  bio: [
    "Rabiaa Reggad escreve os guias do blog Portugal IPTV. Os artigos explicam, passo a passo e em linguagem simples, como instalar IPTV em cada aparelho, que aplicação escolher e como resolver problemas de internet e de imagem.",
    "O objetivo de cada guia é responder de forma direta às perguntas que os clientes nos fazem todos os dias no suporte, para que qualquer pessoa consiga configurar o serviço sem ajuda técnica.",
  ],
  topics: ["Instalação de IPTV", "Aplicações IPTV", "Internet e Wi-Fi em casa", "Guia de programação (EPG)"],
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
