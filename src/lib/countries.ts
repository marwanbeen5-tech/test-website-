// Pages for Portuguese viewers abroad (/iptv-portugal/[pais]). Each country has its own
// practical facts (time zone, internet, currency, devices) so the pages are genuinely
// different, not one template with the country name swapped.

export type Country = {
  slug: string;
  name: string;
  // "em França", "na Suíça", "no Luxemburgo"...
  inName: string;
  title: string;
  description: string;
  intro: string[];
  summary: string[];
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
  faq: { q: string; a: string }[];
};

export const countries: Country[] = [
  {
    slug: "franca",
    name: "França",
    inName: "em França",
    title: "IPTV Portugal em França: canais portugueses em França",
    description:
      "Veja canais portugueses em França com IPTV: que internet e aparelho usar, como acertar o guia ao fuso horário francês e como começar com teste grátis.",
    intro: [
      "Para ver canais portugueses em França basta uma ligação à internet e uma subscrição IPTV: instala uma aplicação na Smart TV, no Fire TV Stick ou no telemóvel e tem os canais portugueses de sempre, com guia de programação, desporto e filmes, sem antena parabólica.",
      "França tem uma das maiores comunidades portuguesas do mundo, e o IPTV tornou-se a forma mais simples de manter a televisão portuguesa em casa. Neste guia explicamos o que precisa e os cuidados próprios de quem vive em França.",
    ],
    summary: [
      "Funciona com qualquer operador francês: Orange, SFR, Free ou Bouygues Telecom.",
      "França está uma hora à frente de Portugal: ajuste o guia em +1 hora.",
      "Um Fire TV Stick comprado em França funciona da mesma forma.",
      "Os preços são em euros, sem custos de conversão.",
      "Comece com o teste grátis de 24 horas.",
    ],
    sections: [
      {
        heading: "A internet em França chega?",
        paragraphs: [
          "Na grande maioria dos casos, sim. A fibra ótica está muito difundida em França e os tarifários dos principais operadores (Orange, SFR, Free e Bouygues Telecom) têm velocidade de sobra para vários ecrãs em 4K. Em zonas rurais ainda com ADSL, conte com um ecrã em HD ou Full HD.",
          "O que mais influencia a qualidade é o Wi-Fi dentro de casa: se a box do operador estiver longe da televisão, ligue o aparelho por cabo ou use a rede de 5 GHz.",
        ],
      },
      {
        heading: "Fuso horário: o guia e os jogos com mais uma hora",
        paragraphs: [
          "França está uma hora à frente de Portugal continental, todo o ano. O jogo que em Portugal começa às 20h45 começa às 21h45 em França. Para o guia de programação (EPG) mostrar as horas certas, ajuste o desfasamento de tempo nas definições da aplicação para +1 hora e confirme que o aparelho está com o fuso horário de França.",
        ],
      },
      {
        heading: "Que aparelho usar em França",
        paragraphs: [
          "O Fire TV Stick vende-se em França e funciona exatamente como em Portugal: é a opção mais simples para qualquer televisão. As Smart TV Samsung e LG têm aplicações IPTV nas lojas, e as televisões com Google TV permitem instalar o TiviMate.",
          "Algumas boxes de operadores franceses usam Android TV e permitem instalar aplicações da Play Store. Se a sua for uma delas, pode nem precisar de um aparelho extra.",
        ],
      },
      {
        heading: "Como começar a partir de França",
        paragraphs: [],
        list: [
          "Peça o teste grátis de 24 horas pelo WhatsApp.",
          "Instale a aplicação indicada para o seu aparelho.",
          "Ajuste o guia em +1 hora e crie os seus favoritos.",
          "Se gostar, escolha um plano: os preços são em euros.",
        ],
      },
    ],
    faq: [
      { q: "O IPTV Portugal funciona em França?", a: "Sim. Funciona com qualquer internet em França e em qualquer aparelho compatível, com os mesmos canais e o mesmo guia que em Portugal." },
      { q: "Preciso de antena parabólica para ver canais portugueses em França?", a: "Não. Com IPTV, os canais chegam pela internet. Basta uma Smart TV, um Fire TV Stick ou um telemóvel." },
      { q: "Porque é que o guia mostra as horas de Portugal?", a: "A programação é publicada com a hora portuguesa. Ajuste o desfasamento do EPG em +1 hora nas definições da aplicação." },
    ],
  },
  {
    slug: "suica",
    name: "Suíça",
    inName: "na Suíça",
    title: "IPTV Portugal na Suíça: canais portugueses na Suíça",
    description:
      "Canais portugueses na Suíça com IPTV: internet Swisscom, Sunrise ou Salt, aparelhos, guia com o fuso horário suíço e pagamento em euros. Teste grátis.",
    intro: [
      "Na Suíça, pode ver canais portugueses pela internet com uma subscrição IPTV: instala uma aplicação na televisão, no Fire TV Stick ou no telemóvel e tem a televisão portuguesa, o desporto e os filmes, sem parabólica nem contratos.",
      "A comunidade portuguesa na Suíça é das maiores fora de Portugal. Este guia explica o que funciona melhor na Suíça e os pormenores a ter em conta, como o fuso horário e o pagamento em euros.",
    ],
    summary: [
      "Funciona com Swisscom, Sunrise, Salt e outros operadores suíços.",
      "A Suíça está uma hora à frente de Portugal: ajuste o guia em +1 hora.",
      "Os preços são em euros; o seu banco pode cobrar conversão de francos.",
      "Fire TV Stick ou Smart TV com Google TV são as opções mais simples.",
      "Peça o teste grátis antes de pagar.",
    ],
    sections: [
      {
        heading: "Internet na Suíça",
        paragraphs: [
          "A Suíça tem uma das redes de internet mais rápidas da Europa. Com Swisscom, Sunrise, Salt ou um operador regional por cabo, a velocidade normalmente chega com folga para vários ecrãs em 4K.",
          "Se a imagem parar, o problema costuma estar no Wi-Fi da casa e não no operador: ligue o aparelho por cabo ao router ou use a rede de 5 GHz.",
        ],
      },
      {
        heading: "Fuso horário suíço e guia de programação",
        paragraphs: [
          "A Suíça está sempre uma hora à frente de Portugal continental. Para o guia de programação mostrar as horas certas, ajuste o desfasamento do EPG em +1 hora nas definições da aplicação. Os jogos e programas em direto passam à mesma hora que em Portugal, mas no relógio suíço aparecem uma hora mais tarde.",
        ],
      },
      {
        heading: "Pagamento a partir da Suíça",
        paragraphs: [
          "Os nossos preços são em euros. Se pagar com um cartão ou conta em francos suíços, o seu banco converte o valor e pode cobrar uma pequena comissão de câmbio. Os planos anuais compensam também por isso: paga a conversão uma única vez por ano.",
        ],
      },
      {
        heading: "Que aparelho usar na Suíça",
        paragraphs: [
          "Um Fire TV Stick ligado à televisão é a forma mais simples, e as Smart TV com Google TV permitem instalar o TiviMate ou o IPTV Smarters diretamente. Em Smart TV Samsung e LG, use as aplicações IPTV das respetivas lojas.",
        ],
        list: [
          "Fire TV Stick 4K Max: o mais rápido para desporto em 4K.",
          "Smart TV com Google TV: sem aparelho extra.",
          "Telemóvel ou tablet: para ver noutra divisão ou em viagem.",
        ],
      },
    ],
    faq: [
      { q: "Posso ver canais portugueses na Suíça?", a: "Sim. Com IPTV vê os canais portugueses pela internet, em qualquer operador suíço, na televisão, no Fire TV Stick ou no telemóvel." },
      { q: "Posso pagar em francos suíços?", a: "Os preços são em euros. Pode pagar com um meio de pagamento em francos; o seu banco faz a conversão." },
      { q: "Que velocidade de internet preciso na Suíça?", a: "Cerca de 15 Mbps estáveis por ecrã em Full HD e 25 Mbps em 4K. Os tarifários suíços normalmente têm velocidade de sobra." },
    ],
  },
  {
    slug: "luxemburgo",
    name: "Luxemburgo",
    inName: "no Luxemburgo",
    title: "IPTV Portugal no Luxemburgo: canais portugueses em casa",
    description:
      "Veja canais portugueses no Luxemburgo com IPTV: internet POST, Tango ou Orange, aparelhos recomendados, guia com o fuso horário certo e preços em euros.",
    intro: [
      "No Luxemburgo, a forma mais simples de ver canais portugueses é o IPTV: os canais chegam pela internet a uma aplicação na Smart TV, no Fire TV Stick ou no telemóvel, com guia de programação, desporto, filmes e séries.",
      "Os portugueses são uma parte muito importante da população do Luxemburgo, e muitas famílias querem a televisão portuguesa em casa, para os mais velhos e para os mais novos. Este guia explica como começar.",
    ],
    summary: [
      "Funciona com POST, Tango, Orange e outros operadores luxemburgueses.",
      "O Luxemburgo está uma hora à frente de Portugal: ajuste o guia em +1 hora.",
      "Os preços são em euros, sem conversão de moeda.",
      "Um plano de 2 ou 3 ecrãs serve casas com várias televisões.",
      "Teste grátis de 24 horas antes de pagar.",
    ],
    sections: [
      {
        heading: "Internet no Luxemburgo",
        paragraphs: [
          "O Luxemburgo tem fibra ótica muito difundida, com operadores como a POST, a Tango e a Orange. Para IPTV, um tarifário de fibra normal chega para várias televisões em 4K ao mesmo tempo.",
          "Em apartamentos, o Wi-Fi pode perder força entre divisões: ligue a televisão principal por cabo e use a rede de 5 GHz nas restantes.",
        ],
      },
      {
        heading: "Fuso horário e guia de programação",
        paragraphs: [
          "O Luxemburgo está uma hora à frente de Portugal continental. Ajuste o desfasamento do guia (EPG offset) em +1 hora nas definições da aplicação para ver a programação com as horas locais.",
        ],
      },
      {
        heading: "Uma televisão portuguesa para toda a família",
        paragraphs: [
          "Em muitas casas portuguesas no Luxemburgo há várias televisões e várias gerações: os avós com as novelas e as notícias, os pais com o futebol, os mais novos com os desenhos animados. Um plano de 2 ou 3 ecrãs permite ver em várias divisões ao mesmo tempo.",
          "Ative o controlo parental na aplicação para bloquear com um PIN as categorias que não são para crianças.",
        ],
      },
      {
        heading: "Como começar",
        paragraphs: [],
        list: [
          "Peça o teste grátis de 24 horas pelo WhatsApp.",
          "Instale a aplicação no aparelho principal e confirme a qualidade à noite.",
          "Ajuste o guia em +1 hora.",
          "Escolha o plano com o número de ecrãs que precisa: preços em euros.",
        ],
      },
    ],
    faq: [
      { q: "O IPTV Portugal funciona no Luxemburgo?", a: "Sim. Funciona com qualquer operador de internet luxemburguês e em Smart TV, Fire TV Stick, telemóvel e computador." },
      { q: "Posso ver em várias televisões em casa?", a: "Sim, com um plano de 2 ou 3 ecrãs em simultâneo. Cada aparelho a ver ao mesmo tempo conta como um ecrã." },
      { q: "Há custos de conversão de moeda no Luxemburgo?", a: "Não. O Luxemburgo usa o euro e os nossos preços são em euros." },
    ],
  },
  {
    slug: "reino-unido",
    name: "Reino Unido",
    inName: "no Reino Unido",
    title: "IPTV Portugal no Reino Unido: canais portugueses em casa",
    description:
      "Canais portugueses no Reino Unido com IPTV: internet BT, Sky, Virgin Media ou Vodafone, aparelhos, guia sem desfasamento horário e pagamento em euros.",
    intro: [
      "No Reino Unido, pode ver canais portugueses pela internet com uma subscrição IPTV: instala uma aplicação na Smart TV, no Fire TV Stick ou no telemóvel e tem a televisão portuguesa em casa, com guia de programação, desporto e filmes.",
      "Para a comunidade portuguesa no Reino Unido há uma vantagem: a hora é a mesma de Portugal continental, por isso o guia de programação funciona sem ajustes. Explicamos o resto neste guia.",
    ],
    summary: [
      "Funciona com BT, Sky, Virgin Media, Vodafone e outros operadores.",
      "Mesma hora que Portugal continental: o guia funciona sem ajustes.",
      "Os preços são em euros; o banco converte a partir de libras.",
      "O Fire TV Stick do Reino Unido funciona da mesma forma.",
      "Teste grátis de 24 horas antes de pagar.",
    ],
    sections: [
      {
        heading: "Internet no Reino Unido",
        paragraphs: [
          "Com fibra (full fibre) ou cabo de operadores como a BT, a Sky, a Virgin Media ou a Vodafone, a velocidade chega normalmente para vários ecrãs. Em tarifários mais antigos de cobre ou fibra parcial (FTTC), confirme que tem pelo menos 15 Mbps estáveis por ecrã à noite.",
          "Casas britânicas com paredes grossas e vários pisos perdem muito sinal Wi-Fi: um sistema mesh ou adaptadores Powerline ajudam muito.",
        ],
      },
      {
        heading: "A mesma hora que Portugal",
        paragraphs: [
          "O Reino Unido e Portugal continental têm a mesma hora todo o ano, incluindo a mudança para a hora de verão. Por isso, o guia de programação (EPG) mostra as horas certas sem qualquer desfasamento, e os jogos começam à mesma hora no relógio da sua casa. Só precisa de confirmar que o aparelho tem o fuso horário de Londres.",
        ],
      },
      {
        heading: "Pagamento a partir do Reino Unido",
        paragraphs: [
          "Os preços são em euros. Se pagar a partir de uma conta em libras, o banco faz a conversão e pode cobrar uma comissão de câmbio. Cartões e contas sem comissões de câmbio ajudam a pagar o valor exato.",
        ],
      },
      {
        heading: "Que aparelho usar no Reino Unido",
        paragraphs: [
          "O Fire TV Stick vendido no Reino Unido funciona da mesma forma que em Portugal e é a opção mais simples. As Smart TV com Google TV permitem instalar o TiviMate ou o IPTV Smarters, e as Samsung e LG têm aplicações IPTV nas suas lojas.",
        ],
        list: [
          "Fire TV Stick 4K Max: o melhor para desporto.",
          "Smart TV com Google TV: sem aparelho extra.",
          "Telemóvel e tablet: para ver em qualquer divisão ou em viagem.",
        ],
      },
    ],
    faq: [
      { q: "O IPTV Portugal funciona no Reino Unido?", a: "Sim. Funciona com qualquer operador britânico e em Smart TV, Fire TV Stick, telemóvel e computador." },
      { q: "Preciso de ajustar o guia de programação no Reino Unido?", a: "Não. O Reino Unido tem a mesma hora que Portugal continental, por isso o guia mostra as horas certas." },
      { q: "Posso pagar em libras?", a: "Os preços são em euros. Pode pagar a partir de uma conta em libras; o seu banco faz a conversão." },
    ],
  },
];
