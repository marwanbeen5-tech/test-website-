// Blog articles. Each targets one search phrase (see `keyword`); the first
// paragraph answers it directly so Google and AI assistants can quote it.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  category: "Guias" | "Instalação" | "Dicas" | "Comparações";
  date: string;
  // Each section: an optional h2 heading followed by paragraphs and an optional list.
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "melhor-iptv-portugal",
    title: "Melhor IPTV Portugal em 2026: guia completo para escolher",
    excerpt:
      "O que avaliar antes de escolher um serviço de IPTV Portugal: canais, estabilidade, qualidade, preço, suporte e garantia.",
    keyword: "melhor IPTV Portugal",
    category: "Guias",
    date: "2026-10-28",
    sections: [
      {
        paragraphs: [
          "O melhor IPTV Portugal é um serviço estável, com canais portugueses completos, qualidade até 4K, guia de programação (EPG), suporte em português e garantia de reembolso. Neste guia explicamos cada critério para que possa comparar serviços com confiança.",
        ],
      },
      {
        heading: "1. Estabilidade e servidores antifreeze",
        paragraphs: [
          "Cortes e buffering são a principal queixa de quem usa IPTV. Prefira serviços com servidores dedicados e tecnologia antifreeze, que mantêm a imagem fluida mesmo em jogos de futebol com muita audiência.",
        ],
      },
      {
        heading: "2. Canais portugueses e conteúdo on-demand",
        paragraphs: [
          "Confirme que o serviço inclui canais generalistas, de notícias, desporto e entretenimento portugueses, além de uma biblioteca de filmes e séries (VOD). A StreamPro inclui +45.000 canais de 115 países e 98.000 conteúdos on-demand.",
        ],
      },
      {
        heading: "3. Qualidade de imagem",
        paragraphs: [
          "Procure canais em Full HD e 4K/UHD. Para 4K precisa de pelo menos 25 Mbps de internet e de um dispositivo compatível.",
        ],
      },
      {
        heading: "4. Preço e planos",
        paragraphs: [
          "Em Portugal, um bom serviço de IPTV custa normalmente entre 10€ e 15€ por mês, e menos em planos anuais. Na StreamPro o plano de 12 meses fica em cerca de 4,75€ por mês.",
        ],
      },
      {
        heading: "5. Teste grátis, suporte e reembolso",
        paragraphs: [
          "Um serviço de confiança deixa-o experimentar antes de pagar, responde rapidamente em português e devolve o dinheiro se não ficar satisfeito.",
        ],
        list: ["Teste grátis de 24 horas", "Suporte 24/7 por WhatsApp", "Reembolso em 7 dias"],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "Antes de escolher, peça um teste, veja um jogo ao vivo à noite (a hora de maior tráfego) e confirme se a imagem se mantém estável. Se passar nesse teste, encontrou um bom IPTV.",
        ],
      },
    ],
  },
  {
    slug: "iptv-ou-tv-por-cabo",
    title: "IPTV ou TV por cabo: o que compensa mais em Portugal?",
    excerpt:
      "Comparámos preço, canais, contratos e qualidade entre IPTV e os pacotes tradicionais de TV por cabo em Portugal.",
    keyword: "IPTV ou TV cabo",
    category: "Comparações",
    date: "2026-10-22",
    sections: [
      {
        paragraphs: [
          "Para a maioria das famílias, o IPTV compensa mais do que a TV por cabo: custa menos por mês, não exige fidelização de 24 meses e funciona em vários dispositivos. A TV por cabo continua a fazer sentido para quem quer tudo num só pacote com internet e telefone.",
        ],
      },
      {
        heading: "Preço",
        paragraphs: [
          "Um pacote de TV por cabo em Portugal custa geralmente entre 40€ e 80€ por mês, quase sempre com internet incluída. Um serviço de IPTV custa entre 5€ e 15€ por mês e usa a internet que já tem.",
        ],
      },
      {
        heading: "Canais e conteúdos",
        paragraphs: [
          "A TV por cabo oferece normalmente 100 a 200 canais. Um serviço IPTV pode incluir milhares de canais de vários países, além de filmes e séries a pedido.",
        ],
      },
      {
        heading: "Contrato e flexibilidade",
        paragraphs: [
          "Os operadores de cabo pedem muitas vezes fidelização de 24 meses. No IPTV paga por períodos (1 dia, 1 mês, 1 ano) e não renova se não quiser.",
        ],
      },
      {
        heading: "Resumo",
        paragraphs: ["Escolha IPTV se quer:"],
        list: [
          "Pagar menos todos os meses",
          "Ver em vários dispositivos, em casa ou fora",
          "Mais canais internacionais e conteúdos on-demand",
          "Liberdade para cancelar quando quiser",
        ],
      },
    ],
  },
  {
    slug: "como-instalar-iptv-smart-tv",
    title: "Como instalar IPTV numa Smart TV Samsung ou LG",
    excerpt: "Guia passo a passo para configurar o IPTV Portugal na sua Samsung ou LG em poucos minutos.",
    keyword: "instalar IPTV Smart TV",
    category: "Instalação",
    date: "2026-10-15",
    sections: [
      {
        paragraphs: [
          "Instalar IPTV numa Smart TV demora menos de 5 minutos: instala uma aplicação IPTV, introduz os dados de acesso que recebe por email e os canais carregam automaticamente.",
        ],
      },
      {
        heading: "Passo a passo",
        paragraphs: [],
        list: [
          "Abra a loja de aplicações da sua Smart TV (Samsung Apps ou LG Content Store).",
          "Procure e instale uma aplicação IPTV compatível, como IPTV Smarters ou IBO Player.",
          "Abra a aplicação e escolha login com Xtream Codes ou lista M3U.",
          "Introduza as credenciais que recebeu por email e aguarde o carregamento dos canais.",
        ],
      },
      {
        heading: "Problemas comuns",
        paragraphs: [
          "Se a aplicação não aparecer na loja, verifique se a TV está atualizada. Em modelos mais antigos, uma Fire TV Stick ou box Android é a solução mais simples e barata.",
        ],
      },
      {
        heading: "Dica",
        paragraphs: ["Ligue a TV à internet por cabo de rede para uma imagem mais estável, sobretudo em 4K."],
      },
    ],
  },
  {
    slug: "instalar-iptv-fire-tv-stick",
    title: "Como instalar IPTV no Fire TV Stick (guia 2026)",
    excerpt: "Transforme qualquer televisão numa Smart TV com IPTV usando um Amazon Fire TV Stick.",
    keyword: "IPTV Fire TV Stick",
    category: "Instalação",
    date: "2026-10-08",
    sections: [
      {
        paragraphs: [
          "Para instalar IPTV no Fire TV Stick, ative a instalação de apps de origem desconhecida, instale a aplicação Downloader, descarregue a app IPTV e entre com os seus dados de acesso. Todo o processo demora cerca de 10 minutos.",
        ],
      },
      {
        heading: "1. Preparar o Fire TV Stick",
        paragraphs: [],
        list: [
          "Vá a Definições → A minha Fire TV → Opções de programador.",
          "Ative “Aplicações de origem desconhecida” para a app Downloader.",
        ],
      },
      {
        heading: "2. Instalar a aplicação IPTV",
        paragraphs: [],
        list: [
          "Na loja da Amazon, procure e instale a aplicação Downloader.",
          "Abra o Downloader e introduza o endereço da aplicação IPTV indicado pelo nosso suporte.",
          "Instale a aplicação e abra-a.",
        ],
      },
      {
        heading: "3. Entrar na conta",
        paragraphs: [
          "Escolha login com Xtream Codes, introduza o utilizador, a palavra-passe e o URL do servidor que recebeu por email. Os canais, filmes e séries aparecem em poucos segundos.",
        ],
      },
    ],
  },
  {
    slug: "melhores-aplicacoes-iptv",
    title: "Melhores aplicações IPTV para Smart TV, Android e iPhone",
    excerpt: "As aplicações IPTV mais estáveis e fáceis de usar em cada dispositivo, e qual escolher.",
    keyword: "melhores apps IPTV",
    category: "Guias",
    date: "2026-09-30",
    sections: [
      {
        paragraphs: [
          "As melhores aplicações IPTV em 2026 são IPTV Smarters Pro (todos os dispositivos), TiviMate (Android TV e Fire TV), IBO Player (Smart TV Samsung e LG) e GSE Smart IPTV (iPhone e iPad). Todas funcionam com o serviço StreamPro.",
        ],
      },
      {
        heading: "IPTV Smarters Pro",
        paragraphs: [
          "Disponível em quase todos os dispositivos, com interface simples, guia EPG, filmes e séries. É a melhor escolha para quem está a começar.",
        ],
      },
      {
        heading: "TiviMate",
        paragraphs: [
          "A aplicação preferida em Android TV e Fire TV Stick. Tem um guia de programação muito completo, gravação e troca de canais muito rápida.",
        ],
      },
      {
        heading: "IBO Player",
        paragraphs: ["Ideal para Smart TV Samsung (Tizen) e LG (webOS), onde muitas outras apps não estão disponíveis."],
      },
      {
        heading: "GSE Smart IPTV",
        paragraphs: ["Uma boa opção para iPhone, iPad e Apple TV, com suporte para listas M3U e Xtream Codes."],
      },
    ],
  },
  {
    slug: "iptv-buffering-solucoes",
    title: "IPTV a parar? 7 soluções para acabar com o buffering",
    excerpt: "Imagem a congelar durante o jogo? Veja as causas mais comuns e como resolver em minutos.",
    keyword: "IPTV buffering",
    category: "Dicas",
    date: "2026-09-22",
    sections: [
      {
        paragraphs: [
          "O buffering no IPTV é causado quase sempre por internet lenta ou instável, Wi-Fi fraco ou um dispositivo sobrecarregado. Na maioria dos casos resolve-se ligando o aparelho por cabo, reiniciando o router e limpando a cache da aplicação.",
        ],
      },
      {
        heading: "7 soluções rápidas",
        paragraphs: [],
        list: [
          "Ligue o dispositivo ao router com um cabo de rede.",
          "Reinicie o router e o dispositivo.",
          "Teste a velocidade: precisa de 25 Mbps para 4K.",
          "Limpe a cache da aplicação IPTV.",
          "Feche outras aplicações e downloads na mesma rede.",
          "Baixe a qualidade para Full HD em horas de muito tráfego.",
          "Contacte o suporte para mudar para outro servidor.",
        ],
      },
      {
        heading: "Quando o problema não é seu",
        paragraphs: [
          "Se o buffering acontece em todos os canais mesmo com boa internet, o problema pode estar nos servidores do fornecedor. Um bom serviço usa tecnologia antifreeze e servidores de reserva para evitar cortes.",
        ],
      },
    ],
  },
  {
    slug: "melhor-velocidade-internet-4k",
    title: "Que velocidade de internet preciso para IPTV em 4K?",
    excerpt: "Descubra a velocidade recomendada para ver IPTV em HD, Full HD e 4K sem interrupções.",
    keyword: "velocidade internet IPTV",
    category: "Dicas",
    date: "2026-09-15",
    sections: [
      {
        paragraphs: [
          "Para ver IPTV sem cortes recomendamos pelo menos 10 Mbps para HD, 15 Mbps para Full HD e 25 Mbps para 4K, por cada ecrã a ver em simultâneo.",
        ],
      },
      {
        heading: "Velocidade por qualidade",
        paragraphs: [],
        list: ["SD: 5 Mbps", "HD (720p): 10 Mbps", "Full HD (1080p): 15 Mbps", "4K / UHD: 25 Mbps"],
      },
      {
        heading: "Wi-Fi ou cabo?",
        paragraphs: [
          "Sempre que possível, ligue o dispositivo por cabo de rede em vez de Wi-Fi. O cabo evita quebras de sinal e é a forma mais simples de eliminar o buffering.",
        ],
      },
    ],
  },
  {
    slug: "o-que-e-epg-guia-programacao",
    title: "O que é o EPG no IPTV e como usar o guia de programação",
    excerpt: "Saiba o que é o EPG, para que serve e como ver a programação de todos os canais no IPTV.",
    keyword: "EPG IPTV",
    category: "Guias",
    date: "2026-09-05",
    sections: [
      {
        paragraphs: [
          "O EPG (Electronic Program Guide) é o guia de programação eletrónico do IPTV: mostra o que está a dar agora e a seguir em cada canal, tal como o guia da TV por cabo.",
        ],
      },
      {
        heading: "Para que serve",
        paragraphs: [],
        list: [
          "Ver a programação dos próximos dias",
          "Saber a que horas começa um jogo ou filme",
          "Navegar pelos canais sem ter de os abrir um a um",
        ],
      },
      {
        heading: "Como ativar",
        paragraphs: [
          "Na maioria das aplicações, o EPG carrega automaticamente ao entrar com Xtream Codes. Se não aparecer, vá às definições da aplicação e escolha “Atualizar EPG”.",
        ],
      },
    ],
  },
];

export function readingTime(post: Post) {
  const words = post.sections
    .flatMap((s) => [s.heading ?? "", ...s.paragraphs, ...(s.list ?? [])])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function headingId(heading: string) {
  return heading
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
}
