// Edit this file to change the brand, contact details, prices and texts.

export const site = {
  name: "StreamPro",
  tagline: "IPTV Portugal",
  description:
    "IPTV Portugal com +45.000 canais ao vivo, canais portugueses, desporto e 98.000 filmes e séries em 4K/UHD. Desde 4,75€/mês, ativação em minutos, reembolso em 7 dias e suporte 24/7.",
  // Vercel redirects the bare domain to www, so www is the canonical address.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.portugaliptv.top",
  email: "suporte@example.com",
  // International format without "+" or spaces, used for wa.me links.
  whatsapp: "447882533020",
  phoneDisplay: "+44 7882 533020",
  discountBanner: "8% DESCONTO - APENAS HOJE",
  // Shown on the privacy policy page (GDPR data controller).
  company: "StreamPro, Lda.",
  address: "Lisboa, Portugal",
};

export const nav = [
  { href: "/", label: "Início" },
  { href: "/instalacao", label: "Instalação" },
  { href: "/revenda", label: "Revenda" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacte-nos" },
];

export const legalLinks = [
  { href: "/termos", label: "Termos e Condições" },
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "/reembolso", label: "Política de Reembolso" },
];

export const devices = [
  { icon: "tv", name: "Smart TV", detail: "Samsung, LG, Hisense" },
  { icon: "tv", name: "Android TV", detail: "Box Android, TV Android" },
  { icon: "bolt", name: "Fire TV Stick", detail: "Amazon Fire TV" },
  { icon: "phone", name: "Smartphone", detail: "iPhone e Android" },
  { icon: "laptop", name: "Computador", detail: "Windows e Mac" },
  { icon: "box", name: "MAG / Formuler", detail: "Boxes IPTV dedicadas" },
];

// Rows for the "us vs cable" comparison table.
export const comparison = [
  { label: "Preço mensal", us: "desde 4,75€", them: "40€ - 80€" },
  { label: "Canais ao vivo", us: "+45.000", them: "100 - 200" },
  { label: "Filmes e séries on-demand", us: "98.000+", them: "Limitado" },
  { label: "Qualidade 4K / UHD", us: true, them: false },
  { label: "Sem fidelização", us: true, them: false },
  { label: "Vários dispositivos", us: true, them: false },
  { label: "Ativação em minutos", us: true, them: false },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const steps = [
  {
    title: "Faça o Seu Pedido",
    text: "Escolha o plano que melhor se adapta às suas necessidades e conclua a sua compra de forma segura.",
  },
  {
    title: "Obtenha a Conta",
    text: "Receba as suas credenciais de acesso em 5-30 minutos por email após a confirmação do pagamento.",
  },
  {
    title: "Aproveite o Serviço",
    text: "Instale a aplicação no seu dispositivo e comece a ver milhares de canais instantaneamente.",
  },
];

export const features = [
  { icon: "globe", title: "115+ Países", text: "Aceda a canais de mais de 115 países em todo o mundo, tudo num só lugar." },
  { icon: "hd", title: "Qualidade 4K/UHD", text: "Streaming cristalino em 4K Ultra HD para uma experiência de visualização imersiva." },
  { icon: "shield", title: "Reembolso 7 Dias", text: "Não está satisfeito? Obtenha um reembolso total em 7 dias, sem perguntas." },
  { icon: "tv", title: "+45.000 Canais", text: "Canais de TV ao vivo com desporto, notícias, entretenimento e muito mais." },
  { icon: "film", title: "98K+ Biblioteca VOD", text: "Enorme biblioteca on-demand com os filmes, séries e documentários mais recentes." },
  { icon: "headset", title: "Suporte 24/7", text: "A nossa equipa de suporte dedicada está disponível 24 horas por dia para o ajudar." },
] as const;

export const stats = [
  { value: "5+", label: "Anos de Negócio" },
  { value: "17K+", label: "Canais ao Vivo" },
  { value: "50K+", label: "Filmes e Séries" },
  { value: "3K+", label: "Clientes Satisfeitos" },
];

export const planFeatures = [
  "Qualidade 4K / UHD",
  "+45.000 Canais ao Vivo",
  "Guia EPG Completo",
  "Sistema Antifreeze",
  "VOD + Séries",
  "Suporte 24/7",
];

export type Plan = { duration: string; price: number; oldPrice: number; popular?: boolean };

// Prices per number of screens (connections).
export const plans: Record<1 | 2 | 3, Plan[]> = {
  1: [
    { duration: "24 horas", price: 3, oldPrice: 5 },
    { duration: "1 Mês", price: 14, oldPrice: 29 },
    { duration: "3 Meses", price: 29, oldPrice: 53 },
    { duration: "6 Meses", price: 38, oldPrice: 65 },
    { duration: "12 Meses", price: 57, oldPrice: 91, popular: true },
    { duration: "24 Meses", price: 110, oldPrice: 145 },
  ],
  2: [
    { duration: "24 horas", price: 5, oldPrice: 8 },
    { duration: "1 Mês", price: 24, oldPrice: 45 },
    { duration: "3 Meses", price: 49, oldPrice: 85 },
    { duration: "6 Meses", price: 65, oldPrice: 105 },
    { duration: "12 Meses", price: 97, oldPrice: 150, popular: true },
    { duration: "24 Meses", price: 185, oldPrice: 240 },
  ],
  3: [
    { duration: "24 horas", price: 7, oldPrice: 11 },
    { duration: "1 Mês", price: 33, oldPrice: 60 },
    { duration: "3 Meses", price: 67, oldPrice: 115 },
    { duration: "6 Meses", price: 88, oldPrice: 140 },
    { duration: "12 Meses", price: 132, oldPrice: 200, popular: true },
    { duration: "24 Meses", price: 250, oldPrice: 320 },
  ],
};

export function findPlan(screens: number, index: number): Plan | undefined {
  if (screens !== 1 && screens !== 2 && screens !== 3) return undefined;
  return plans[screens][index];
}

export function screensLabel(n: number) {
  return `${n} ${n === 1 ? "Tela" : "Telas"}`;
}

export const testimonials = [
  {
    name: "Tânia Azevedo",
    text: "Serviço incrível! A qualidade de imagem é fantástica e tenho acesso a todos os canais portugueses. A configuração foi super fácil e o suporte ajudou-me imediatamente.",
  },
  {
    name: "Igor Santos",
    text: "Mudei da TV por satélite e não podia estar mais satisfeito. A seleção de canais é incomparável e a qualidade 4K nos canais de desporto é excecional. Recomendo!",
  },
  {
    name: "Fábio Fernandes",
    text: "O melhor serviço de IPTV em Portugal. Sem congelamentos, sem buffering, apenas puro entretenimento. O plano família é ótimo - funciona perfeitamente nas nossas duas TVs.",
  },
];

// Answers start with a direct, self-contained sentence so search engines and AI
// assistants can quote them on their own.
export const faqs = [
  {
    q: "O que é o IPTV Portugal?",
    a: "IPTV Portugal é um serviço de televisão pela internet que permite ver canais portugueses e internacionais, desporto ao vivo, filmes e séries em qualquer dispositivo, sem antena, cabo ou fidelização. A StreamPro oferece +45.000 canais e 98.000 conteúdos on-demand em qualidade até 4K.",
  },
  {
    q: "Quanto custa o IPTV em Portugal?",
    a: "Na StreamPro, o IPTV Portugal custa desde 3€ por 24 horas, 14€ por mês ou 57€ por 12 meses (cerca de 4,75€ por mês) para 1 ecrã. Também existem planos para 2 e 3 ecrãs em simultâneo.",
  },
  {
    q: "Qual é o melhor IPTV Portugal?",
    a: "O melhor IPTV Portugal é aquele que combina estabilidade sem cortes, canais portugueses completos, qualidade 4K, guia de programação (EPG), suporte em português e garantia de reembolso. A StreamPro reúne todos estes pontos e permite testar o serviço 24 horas grátis antes de comprar.",
  },
  {
    q: "Que velocidade de internet preciso para IPTV?",
    a: "Recomendamos pelo menos 10 Mbps para HD, 15 Mbps para Full HD e 25 Mbps para 4K. Uma ligação por cabo de rede é mais estável do que Wi-Fi.",
  },
  {
    q: "Posso ver canais portugueses fora de Portugal?",
    a: "Sim. O serviço funciona em qualquer país com ligação à internet, por isso pode ver canais portugueses no estrangeiro, por exemplo em França, Suíça, Luxemburgo ou no Reino Unido.",
  },
  {
    q: "Como posso pagar?",
    a: "Aceitamos cartão de crédito/débito, PayPal, MB WAY e transferência bancária. Após escolher o plano, enviamos-lhe as instruções de pagamento.",
  },
  {
    q: "Preciso de uma VPN?",
    a: "Não é obrigatório. O serviço funciona sem VPN, mas pode usar uma se preferir mais privacidade.",
  },
  {
    q: "Posso usar vários dispositivos?",
    a: "Sim. Pode instalar em vários dispositivos, mas o número de ecrãs em simultâneo depende do plano escolhido (1, 2 ou 3 telas).",
  },
  {
    q: "Quais dispositivos são compatíveis?",
    a: "Smart TV (Samsung, LG), Android TV, Fire TV Stick, MAG, Apple TV, iPhone, Android, Windows e Mac.",
  },
  {
    q: "Qual a rapidez da ativação?",
    a: "A ativação é feita entre 5 e 30 minutos após a confirmação do pagamento.",
  },
  {
    q: "Existe garantia de devolução?",
    a: "Sim. Se não ficar satisfeito, devolvemos o seu dinheiro nos primeiros 7 dias.",
  },
];

export { posts, type Post } from "./posts";
