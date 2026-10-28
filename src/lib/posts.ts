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
      "O que avaliar antes de escolher um serviço de IPTV Portugal: canais, estabilidade, qualidade, preço, suporte, garantia e sinais de alerta.",
    keyword: "melhor IPTV Portugal",
    category: "Guias",
    date: "2026-10-28",
    sections: [
      {
        paragraphs: [
          "O melhor IPTV Portugal é um serviço estável, com canais portugueses completos, qualidade até 4K, guia de programação (EPG), suporte em português e garantia de reembolso. Neste guia explicamos cada critério, os sinais de alerta a evitar e como testar um serviço antes de pagar.",
          "Há dezenas de ofertas de IPTV em Portugal e quase todas prometem o mesmo: milhares de canais, 4K e zero cortes. Na prática, a diferença entre um bom e um mau serviço só se nota ao fim de umas semanas, normalmente a meio de um jogo de futebol. Por isso vale a pena saber exatamente o que procurar.",
        ],
      },
      {
        heading: "1. Estabilidade e servidores antifreeze",
        paragraphs: [
          "Cortes e buffering são a principal queixa de quem usa IPTV. A estabilidade depende sobretudo da qualidade dos servidores do fornecedor e de quantos clientes partilham cada servidor.",
          "Prefira serviços com tecnologia antifreeze, que guarda alguns segundos de vídeo em memória e troca automaticamente de fonte quando um servidor falha. Os jogos de futebol ao fim de semana são o momento de maior tráfego: um serviço que aguenta um clássico à noite sem cortes é um bom sinal.",
        ],
      },
      {
        heading: "2. Canais portugueses e conteúdo on-demand",
        paragraphs: [
          "Confirme que o serviço inclui os canais generalistas, de notícias, desporto, entretenimento e infantis que costuma ver. Peça a lista de canais ou veja-a durante o teste: um número grande de canais não serve de nada se faltarem os que lhe interessam.",
          "Verifique também a biblioteca de filmes e séries (VOD): se está organizada por categorias, se tem legendas em português e se é atualizada com frequência. O nosso serviço inclui +45.000 canais de 115 países e 98.000 conteúdos on-demand.",
        ],
      },
      {
        heading: "3. Qualidade de imagem",
        paragraphs: [
          "Procure canais em Full HD e 4K/UHD, mas lembre-se de que a qualidade final depende da sua internet e do seu dispositivo. Para 4K precisa de pelo menos 25 Mbps por ecrã e de uma TV ou box compatível.",
          "Um bom serviço oferece várias versões do mesmo canal (SD, HD, 4K), para poder baixar a qualidade quando a internet está mais lenta em vez de ficar com a imagem parada.",
        ],
      },
      {
        heading: "4. Guia de programação (EPG) e funcionalidades",
        paragraphs: [
          "O EPG mostra o que está a dar em cada canal, tal como na TV por cabo. Sem ele, encontrar um programa é muito mais difícil. Confirme também se o serviço funciona com as aplicações que prefere (IPTV Smarters, TiviMate, IBO Player) e se permite ver em vários ecrãs ao mesmo tempo.",
        ],
      },
      {
        heading: "5. Preço e planos",
        paragraphs: [
          "Em Portugal, um bom serviço de IPTV custa normalmente entre 10€ e 15€ por mês, e bastante menos em planos anuais. No nosso serviço, o plano de 12 meses fica em cerca de 4,75€ por mês.",
          "Desconfie de preços muito abaixo da média: servidores de qualidade têm custos, e um serviço demasiado barato costuma compensar com servidores sobrelotados. Prefira também planos sem renovação automática, para controlar quando paga.",
        ],
      },
      {
        heading: "6. Teste grátis, suporte e reembolso",
        paragraphs: [
          "Um serviço de confiança deixa-o experimentar antes de pagar, responde rapidamente em português e devolve o dinheiro se não ficar satisfeito.",
        ],
        list: ["Teste grátis de 24 horas", "Suporte 24/7 por WhatsApp", "Reembolso em 7 dias"],
      },
      {
        heading: "Sinais de alerta",
        paragraphs: ["Evite serviços que apresentem algum destes sinais:"],
        list: [
          "Não oferecem teste nem qualquer garantia de reembolso.",
          "Só aceitam pagamentos difíceis de reaver, sem qualquer proteção para o comprador.",
          "Não têm forma de contacto clara nem respondem antes da compra.",
          "Prometem tudo por um preço muito abaixo do mercado.",
          "Não indicam quantos ecrãs pode usar em simultâneo.",
        ],
      },
      {
        heading: "Como testar um serviço de IPTV",
        paragraphs: ["Durante o teste, faça esta verificação rápida:"],
        list: [
          "Veja um jogo ou um programa em direto à noite, a hora de maior tráfego.",
          "Troque de canal várias vezes e veja quanto tempo demora a carregar.",
          "Experimente um filme em 4K e confirme se a imagem se mantém estável.",
          "Abra o guia de programação e verifique se está correto.",
          "Envie uma pergunta ao suporte e veja quanto tempo demora a responder.",
        ],
      },
      {
        heading: "Conclusão",
        paragraphs: [
          "O melhor IPTV Portugal não é o que tem mais canais, mas o que funciona sem cortes nos canais que vê, tem bom suporte e deixa-o testar antes de pagar. Use os critérios deste guia, faça o teste à noite e decida com base no que viu, não no que foi prometido.",
        ],
      },
    ],
  },
  {
    slug: "iptv-ou-tv-por-cabo",
    title: "IPTV ou TV por cabo: o que compensa mais em Portugal?",
    excerpt:
      "Comparámos preço, canais, contratos, qualidade e fiabilidade entre IPTV e os pacotes tradicionais de TV por cabo em Portugal.",
    keyword: "IPTV ou TV cabo",
    category: "Comparações",
    date: "2026-10-22",
    sections: [
      {
        paragraphs: [
          "Para a maioria das famílias, o IPTV compensa mais do que a TV por cabo: custa menos por mês, não exige fidelização e funciona em vários dispositivos. A TV por cabo continua a fazer sentido para quem quer tudo num só pacote, com instalação feita por um técnico e o mínimo de configuração.",
          "Neste artigo comparamos as duas opções ponto a ponto, com as vantagens e desvantagens de cada uma, para que possa decidir com base no seu caso.",
        ],
      },
      {
        heading: "Preço",
        paragraphs: [
          "Um pacote de TV por cabo em Portugal custa geralmente entre 40€ e 80€ por mês, quase sempre com internet e telefone incluídos. Os canais premium de desporto e cinema são normalmente pagos à parte.",
          "Um serviço de IPTV custa entre 5€ e 15€ por mês, mas precisa de uma ligação à internet. Se já paga internet, o IPTV é um custo adicional pequeno. Se não tem internet em casa, tem de somar esse valor à comparação.",
        ],
      },
      {
        heading: "Canais e conteúdos",
        paragraphs: [
          "A TV por cabo oferece normalmente 100 a 200 canais, sobretudo nacionais. Um serviço IPTV pode incluir milhares de canais de vários países, além de filmes e séries a pedido, o que faz diferença para quem segue desporto internacional ou tem família de outros países.",
        ],
      },
      {
        heading: "Contrato e flexibilidade",
        paragraphs: [
          "Os operadores de cabo propõem muitas vezes fidelização de 24 meses em troca de um preço mais baixo. Sair antes do fim pode implicar penalizações. A lei obriga os operadores a ter também ofertas sem fidelização, mas costumam ser mais caras.",
          "No IPTV paga por períodos (1 dia, 1 mês, 1 ano) e decide no fim de cada período se quer continuar. Não há técnico, nem equipamento para devolver.",
        ],
      },
      {
        heading: "Qualidade de imagem e fiabilidade",
        paragraphs: [
          "A TV por cabo tem uma vantagem clara em fiabilidade: o sinal chega por uma rede dedicada e raramente falha. O IPTV depende da sua internet e dos servidores do fornecedor, por isso a qualidade varia mais de serviço para serviço.",
          "Com uma boa ligação (25 Mbps ou mais) e um fornecedor com servidores estáveis, o IPTV oferece imagem em Full HD e 4K comparável ou superior à do cabo. Por isso é importante fazer um teste antes de mudar.",
        ],
      },
      {
        heading: "Dispositivos e mobilidade",
        paragraphs: [
          "A TV por cabo funciona na box do operador, normalmente numa ou duas TVs. O IPTV funciona na Smart TV, Fire TV Stick, telemóvel, tablet e computador, em casa ou de férias, desde que tenha internet.",
        ],
      },
      {
        heading: "Vantagens e desvantagens",
        paragraphs: ["IPTV:"],
        list: [
          "Mais barato e sem fidelização.",
          "Mais canais e conteúdos on-demand.",
          "Funciona em qualquer dispositivo e fora de casa.",
          "Depende da qualidade da internet e do fornecedor.",
          "Exige instalar uma aplicação (alguns minutos).",
        ],
      },
      {
        paragraphs: ["TV por cabo:"],
        list: [
          "Muito fiável e simples de usar.",
          "Instalação e assistência técnica no local.",
          "Mais cara, sobretudo com canais premium.",
          "Normalmente com fidelização de 24 meses.",
        ],
      },
      {
        heading: "Qual escolher?",
        paragraphs: [
          "Escolha IPTV se quer pagar menos, ver em vários dispositivos e ter mais canais internacionais e conteúdos on-demand, e se tem uma internet estável. Fique com a TV por cabo se valoriza acima de tudo a simplicidade e não se importa de pagar mais por isso.",
          "Também pode combinar os dois: muitas famílias mantêm um pacote de internet com poucos canais e usam IPTV para o desporto, os filmes e os canais internacionais.",
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
    excerpt: "Transforme qualquer televisão numa Smart TV com IPTV usando um Amazon Fire TV Stick, passo a passo.",
    keyword: "IPTV Fire TV Stick",
    category: "Instalação",
    date: "2026-10-08",
    sections: [
      {
        paragraphs: [
          "Para instalar IPTV no Fire TV Stick, ative a instalação de apps de origem desconhecida, instale a aplicação Downloader, descarregue a app IPTV e entre com os seus dados de acesso. Todo o processo demora cerca de 10 minutos.",
          "O Fire TV Stick da Amazon é uma das formas mais baratas e fiáveis de ver IPTV: liga-se à porta HDMI de qualquer televisão, mesmo antiga, e corre as melhores aplicações IPTV, como o TiviMate e o IPTV Smarters.",
        ],
      },
      {
        heading: "O que precisa",
        paragraphs: [],
        list: [
          "Um Fire TV Stick (o modelo 4K é o mais indicado para canais em 4K).",
          "Uma ligação à internet de pelo menos 10 Mbps (25 Mbps para 4K).",
          "Os dados de acesso que recebeu por email (utilizador, palavra-passe e URL do servidor).",
        ],
      },
      {
        heading: "1. Ativar as opções de programador",
        paragraphs: [
          "Nos modelos mais recentes, as opções de programador estão escondidas. Para as mostrar:",
        ],
        list: [
          "Vá a Definições → A minha Fire TV → Acerca de.",
          "Selecione o nome do dispositivo e carregue no botão central do comando 7 vezes seguidas.",
          "Volte atrás: aparece agora o menu “Opções de programador”.",
        ],
      },
      {
        heading: "2. Preparar o Fire TV Stick",
        paragraphs: [],
        list: [
          "Na loja da Amazon, procure e instale a aplicação Downloader.",
          "Vá a Definições → A minha Fire TV → Opções de programador.",
          "Ative “Instalar aplicações desconhecidas” para a app Downloader.",
        ],
      },
      {
        heading: "3. Instalar a aplicação IPTV",
        paragraphs: [],
        list: [
          "Abra o Downloader e introduza o endereço da aplicação IPTV indicado pelo nosso suporte.",
          "Aguarde a transferência e escolha “Instalar”.",
          "No fim, apague o ficheiro de instalação para libertar espaço.",
        ],
      },
      {
        heading: "4. Entrar na conta",
        paragraphs: [
          "Abra a aplicação, escolha login com Xtream Codes e introduza o utilizador, a palavra-passe e o URL do servidor que recebeu por email. Os canais, filmes e séries aparecem em poucos segundos. Na primeira vez, o guia de programação (EPG) pode demorar um minuto a carregar.",
        ],
      },
      {
        heading: "Problemas comuns",
        paragraphs: [],
        list: [
          "“Não aparecem as Opções de programador”: repita o passo 1 e carregue 7 vezes no nome do dispositivo.",
          "“O Downloader não consegue descarregar”: confirme o endereço com o suporte e verifique a internet.",
          "“A imagem para”: ligue o Fire TV Stick ao router com um adaptador Ethernet e veja o nosso guia contra o buffering.",
          "“Pouco espaço”: desinstale aplicações que não usa em Definições → Aplicações.",
        ],
      },
      {
        heading: "Dicas para a melhor experiência",
        paragraphs: [
          "Mantenha o Fire TV Stick atualizado, reinicie-o uma vez por semana e, se usar Wi-Fi, coloque o router o mais perto possível da TV. Se tiver dúvidas em qualquer passo, o nosso suporte ajuda-o pelo WhatsApp.",
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
          "As melhores aplicações IPTV em 2026 são IPTV Smarters Pro (todos os dispositivos), TiviMate (Android TV e Fire TV), IBO Player (Smart TV Samsung e LG) e GSE Smart IPTV (iPhone e iPad). Todas funcionam com o nosso serviço.",
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
