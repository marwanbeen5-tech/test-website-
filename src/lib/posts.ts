// Blog articles. Each targets one search phrase (see `keyword`); the first
// paragraph answers it directly so Google and AI assistants can quote it.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  keyword: string;
  category: "Guias" | "Instalação" | "Dicas" | "Comparações";
  date: string;
  // Last meaningful update (shown as "Atualizado em", used as dateModified).
  updated?: string;
  // Questions answered at the end of the article (also emitted as FAQPage data).
  faq?: { q: string; a: string }[];
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
    updated: "2026-10-30",
    faq: [
      {
        q: "Qual é o melhor IPTV Portugal?",
        a: "O melhor IPTV Portugal é estável nos canais que vê, inclui canais portugueses completos, qualidade até 4K e guia EPG, tem suporte em português e deixa-o testar antes de pagar.",
      },
      {
        q: "Quanto custa um bom IPTV em Portugal?",
        a: "Um bom serviço custa normalmente entre 10€ e 15€ por mês, e menos em planos anuais. No nosso serviço, o plano de 12 meses fica em cerca de 4,75€ por mês.",
      },
      {
        q: "Como posso testar um IPTV antes de pagar?",
        a: "Peça um teste grátis e use-o à noite, a hora de maior tráfego: veja um jogo em direto, troque de canais e confirme a estabilidade em 4K.",
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
    updated: "2026-10-30",
    faq: [
      {
        q: "O IPTV substitui a TV por cabo?",
        a: "Para a maioria das famílias, sim: oferece mais canais e conteúdos on-demand por menos dinheiro e sem fidelização. Precisa apenas de uma internet estável.",
      },
      {
        q: "Preciso de internet para ter IPTV?",
        a: "Sim. O IPTV funciona pela internet; recomendamos pelo menos 15 Mbps estáveis para Full HD e 25 Mbps para 4K por ecrã.",
      },
      {
        q: "Posso ter IPTV e TV por cabo ao mesmo tempo?",
        a: "Sim. Muitas famílias mantêm um pacote de internet com poucos canais e usam IPTV para desporto, filmes e canais internacionais.",
      },
    ],
  },
  {
    slug: "como-instalar-iptv-smart-tv",
    title: "Como instalar IPTV numa Smart TV Samsung ou LG (guia 2026)",
    excerpt:
      "Guia passo a passo para instalar IPTV numa Smart TV Samsung (Tizen) ou LG (webOS): que aplicação usar, como adicionar a lista e como resolver os problemas mais comuns.",
    keyword: "instalar IPTV Smart TV",
    category: "Instalação",
    date: "2026-10-15",
    updated: "2026-10-30",
    sections: [
      {
        paragraphs: [
          "Instalar IPTV numa Smart TV Samsung ou LG demora menos de 10 minutos: instala uma aplicação IPTV a partir da loja da televisão, adiciona os dados de acesso que recebeu por email (Xtream Codes ou lista M3U) e os canais carregam automaticamente.",
          "Neste guia explicamos que aplicação escolher em cada marca, os passos exatos em Samsung (Tizen) e LG (webOS), a diferença entre Xtream Codes e M3U, e o que fazer se a sua televisão for antiga ou a aplicação não aparecer na loja.",
        ],
      },
      {
        heading: "Antes de começar",
        paragraphs: ["Tenha à mão:"],
        list: [
          "A televisão ligada à internet, de preferência por cabo de rede.",
          "Os dados de acesso que recebeu por email: utilizador, palavra-passe e URL do servidor (ou o link da lista M3U).",
          "O comando da televisão e cerca de 10 minutos.",
        ],
      },
      {
        heading: "Que aplicação usar numa Smart TV",
        paragraphs: [
          "As Smart TV Samsung usam o sistema Tizen e as LG usam o webOS. As lojas destas marcas têm menos aplicações do que o Android, por isso a escolha é mais limitada. As mais usadas para IPTV são o IBO Player, o Smart IPTV, o SS IPTV e, em alguns modelos, o IPTV Smarters.",
          "Estas aplicações são apenas leitores: não incluem canais. Os canais vêm da sua subscrição, que adiciona dentro da aplicação. Algumas aplicações oferecem um período gratuito e depois pedem uma pequena ativação paga ao programador da aplicação, que é independente do seu serviço IPTV.",
          "A disponibilidade muda de modelo para modelo e de país para país. Se não encontrar uma aplicação na loja, experimente outra da lista ou fale com o nosso suporte, que lhe indica a melhor opção para o seu modelo.",
        ],
      },
      {
        heading: "Instalar IPTV numa Smart TV Samsung (Tizen)",
        paragraphs: [],
        list: [
          "Carregue no botão Home do comando e abra Aplicações (Apps).",
          "Selecione a lupa e escreva o nome da aplicação, por exemplo IBO Player.",
          "Escolha Instalar e, no fim, Abrir.",
          "Na primeira vez, a aplicação mostra um endereço MAC e uma chave do dispositivo. Guarde-os: são precisos em algumas aplicações para adicionar a lista.",
          "Adicione a sua lista com os dados recebidos por email (ver a secção sobre Xtream Codes e M3U abaixo).",
        ],
      },
      {
        heading: "Instalar IPTV numa Smart TV LG (webOS)",
        paragraphs: [],
        list: [
          "Carregue no botão Home e abra a LG Content Store.",
          "Use a pesquisa para encontrar a aplicação IPTV que escolheu.",
          "Selecione Instalar e depois Iniciar.",
          "Anote o endereço MAC e a chave do dispositivo, se a aplicação os mostrar.",
          "Adicione a sua lista com os dados de acesso.",
        ],
      },
      {
        heading: "Xtream Codes ou lista M3U: qual usar?",
        paragraphs: [
          "Há duas formas de adicionar a sua subscrição. Com Xtream Codes introduz três dados: utilizador, palavra-passe e URL do servidor. Com M3U usa um único link que contém a lista de canais.",
          "Sempre que a aplicação o permita, prefira Xtream Codes: carrega automaticamente o guia de programação (EPG), separa os canais, filmes e séries por categorias e atualiza a lista sem ter de fazer nada.",
          "Em aplicações como o IBO Player ou o Smart IPTV, a lista é adicionada num site da própria aplicação, onde introduz o endereço MAC da televisão e o link ou os dados de acesso. Depois basta reiniciar a aplicação na TV.",
        ],
      },
      {
        heading: "A sua Smart TV é antiga ou não tem a aplicação?",
        paragraphs: [
          "Televisões com mais de 6 ou 7 anos têm muitas vezes lojas desatualizadas e processadores lentos, o que se nota na troca de canais. Nesse caso, a solução mais simples e barata é ligar um Fire TV Stick ou uma box Android à porta HDMI. Estes dispositivos têm as melhores aplicações IPTV, como o TiviMate, e funcionam em qualquer televisão.",
          "Temos um guia completo para instalar IPTV no Fire TV Stick no nosso blog.",
        ],
      },
      {
        heading: "Problemas comuns e soluções",
        paragraphs: [],
        list: [
          "A aplicação não aparece na loja: atualize o software da TV em Definições → Suporte → Atualização de software, ou experimente outra aplicação.",
          "A lista não carrega: confirme que o URL, o utilizador e a palavra-passe estão escritos exatamente como no email, sem espaços a mais.",
          "A imagem para ou fica pixelizada: ligue a TV por cabo de rede ou use a rede Wi-Fi de 5 GHz. Veja o nosso guia contra o buffering.",
          "O guia de programação está vazio: atualize o EPG nas definições da aplicação e aguarde alguns minutos.",
          "A aplicação pede ativação: é uma taxa do programador da aplicação, não do seu serviço IPTV. Fale com o suporte se tiver dúvidas.",
        ],
      },
      {
        heading: "Dicas para a melhor experiência",
        paragraphs: [
          "Mantenha o software da televisão atualizado, desligue a TV da corrente de vez em quando para limpar a memória e, se o router estiver longe, considere um adaptador Powerline ou um sistema Wi-Fi mesh. Se tiver qualquer dúvida durante a instalação, o nosso suporte ajuda-o pelo WhatsApp, passo a passo.",
        ],
      },
    ],
    faq: [
      {
        q: "Posso ver IPTV numa Smart TV sem box?",
        a: "Sim. As Smart TV Samsung e LG recentes permitem instalar uma aplicação IPTV diretamente a partir da loja da televisão, sem box nem cabos adicionais.",
      },
      {
        q: "Qual é a melhor aplicação IPTV para Samsung e LG?",
        a: "As mais usadas são o IBO Player, o Smart IPTV e o SS IPTV. A melhor depende do modelo da sua TV; o nosso suporte indica-lhe a mais estável para o seu caso.",
      },
      {
        q: "Porque é que a minha Smart TV não tem aplicações IPTV?",
        a: "Algumas TV mais antigas ou de outras marcas têm lojas limitadas. Nesse caso, um Fire TV Stick ou uma box Android ligados à porta HDMI resolvem o problema.",
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
    updated: "2026-10-30",
    faq: [
      {
        q: "Que Fire TV Stick comprar para IPTV?",
        a: "O Fire TV Stick 4K é o mais indicado: mais rápido, com mais memória e compatível com canais em 4K.",
      },
      {
        q: "É preciso pagar a aplicação IPTV no Fire TV Stick?",
        a: "Não necessariamente. O IPTV Smarters Pro é gratuito; o TiviMate tem uma versão Premium paga com mais funcionalidades.",
      },
      {
        q: "O IPTV no Fire TV Stick funciona por Wi-Fi?",
        a: "Funciona, mas para 4K e jogos em direto recomendamos um adaptador Ethernet ou a rede Wi-Fi de 5 GHz.",
      },
    ],
  },
  {
    slug: "melhores-aplicacoes-iptv",
    title: "Melhores aplicações IPTV em 2026: Smart TV, Android e iPhone",
    excerpt:
      "Comparámos as aplicações IPTV mais usadas em Portugal: IPTV Smarters Pro, TiviMate, IBO Player, GSE Smart IPTV, VLC e Kodi. Vantagens, desvantagens e qual escolher para cada dispositivo.",
    keyword: "melhores apps IPTV",
    category: "Guias",
    date: "2026-09-30",
    updated: "2026-10-30",
    sections: [
      {
        paragraphs: [
          "As melhores aplicações IPTV em 2026 são o IPTV Smarters Pro (funciona em quase todos os dispositivos), o TiviMate (a melhor para Android TV e Fire TV Stick), o IBO Player (Smart TV Samsung e LG) e o GSE Smart IPTV (iPhone, iPad e Apple TV). Todas funcionam com o nosso serviço.",
          "A aplicação certa faz uma grande diferença: a mesma subscrição pode parecer lenta numa aplicação e rápida noutra. Abaixo explicamos o que cada uma faz melhor, as suas limitações e qual escolher para o seu dispositivo.",
        ],
      },
      {
        heading: "O que é uma aplicação IPTV",
        paragraphs: [
          "Uma aplicação IPTV é um leitor: mostra os canais, filmes e séries da sua subscrição de forma organizada, com guia de programação e pesquisa. A aplicação não inclui canais. Por isso, a mesma subscrição pode ser usada em várias aplicações e pode mudar de aplicação quando quiser.",
        ],
      },
      {
        heading: "Como avaliámos",
        paragraphs: ["Comparámos as aplicações nestes pontos:"],
        list: [
          "Estabilidade e rapidez a trocar de canal.",
          "Facilidade de uso com o comando da televisão.",
          "Guia de programação (EPG), pesquisa e favoritos.",
          "Suporte de Xtream Codes e listas M3U.",
          "Dispositivos onde está disponível e preço.",
        ],
      },
      {
        heading: "IPTV Smarters Pro",
        paragraphs: [
          "A escolha mais versátil: está disponível para Android, Fire TV, iPhone, iPad, Windows e alguns modelos de Smart TV. A interface separa claramente TV ao vivo, filmes e séries, e o login com Xtream Codes carrega tudo automaticamente.",
          "Vantagens: grátis na maioria dos dispositivos, fácil para quem está a começar, a mesma aplicação em quase todos os aparelhos. Desvantagens: o guia de programação é menos completo do que o do TiviMate.",
        ],
      },
      {
        heading: "TiviMate",
        paragraphs: [
          "A aplicação preferida de quem usa Android TV, Google TV e Fire TV Stick. Tem um guia de programação ao estilo da TV por cabo, troca de canais muito rápida, favoritos, lembretes e, na versão Premium, gravação e várias listas.",
          "Vantagens: a melhor experiência de TV ao vivo e muito estável. Desvantagens: só existe para Android TV e Fire TV, e as funcionalidades avançadas exigem a subscrição Premium da aplicação.",
        ],
      },
      {
        heading: "IBO Player",
        paragraphs: [
          "Uma das poucas aplicações disponíveis na maioria das Smart TV Samsung (Tizen) e LG (webOS). A lista é adicionada no site da aplicação, usando o endereço MAC da televisão.",
          "Vantagens: funciona diretamente na Smart TV, sem box. Desvantagens: depois do período gratuito pede uma pequena ativação ao programador da aplicação.",
        ],
      },
      {
        heading: "GSE Smart IPTV",
        paragraphs: [
          "Uma boa opção para iPhone, iPad e Apple TV, com suporte para Xtream Codes e listas M3U, guia de programação e Chromecast. É a alternativa mais completa no ecossistema Apple.",
        ],
      },
      {
        heading: "VLC e Kodi",
        paragraphs: [
          "O VLC é gratuito e abre listas M3U em computadores e telemóveis, mas não tem guia de programação nem categorias. Serve para testar uma lista rapidamente.",
          "O Kodi é um centro multimédia muito completo. Com o extra oficial PVR IPTV Simple Client lê listas M3U e guias XMLTV. É poderoso, mas a configuração é mais técnica.",
        ],
      },
      {
        heading: "Qual escolher para cada dispositivo",
        paragraphs: [],
        list: [
          "Fire TV Stick, Android TV e Google TV: TiviMate (ou IPTV Smarters Pro, se quiser algo grátis).",
          "Smart TV Samsung e LG: IBO Player ou Smart IPTV.",
          "iPhone, iPad e Apple TV: GSE Smart IPTV ou IPTV Smarters.",
          "Telemóvel Android: IPTV Smarters Pro.",
          "Windows e Mac: IPTV Smarters para Windows, ou VLC para testes rápidos.",
        ],
      },
      {
        heading: "Aplicações gratuitas ou pagas?",
        paragraphs: [
          "Para começar, o IPTV Smarters Pro é suficiente. Se usa IPTV todos os dias numa Android TV ou Fire TV, a versão Premium do TiviMate compensa: custa pouco por ano e melhora muito o guia de programação. Em Smart TV, a pequena ativação do IBO Player ou do Smart IPTV é normalmente paga uma vez por ano ou uma só vez.",
        ],
      },
      {
        heading: "Cuidados de segurança",
        paragraphs: [
          "Instale aplicações apenas a partir das lojas oficiais (Google Play, Amazon Appstore, App Store, lojas Samsung e LG) ou dos sites oficiais dos programadores. Evite versões modificadas de aplicações pagas: podem conter malware e expor os seus dados.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é a melhor aplicação IPTV para Fire TV Stick?",
        a: "O TiviMate é a melhor aplicação IPTV para Fire TV Stick e Android TV, pelo guia de programação e pela rapidez a trocar de canais. O IPTV Smarters Pro é a alternativa gratuita.",
      },
      {
        q: "As aplicações IPTV incluem canais?",
        a: "Não. As aplicações são apenas leitores. Os canais, filmes e séries vêm da sua subscrição IPTV, que adiciona na aplicação com Xtream Codes ou uma lista M3U.",
      },
      {
        q: "Posso usar a mesma subscrição em várias aplicações?",
        a: "Sim. Pode usar os mesmos dados de acesso em várias aplicações e dispositivos, respeitando o número de ecrãs em simultâneo do seu plano.",
      },
    ],
  },
  {
    slug: "iptv-buffering-solucoes",
    title: "IPTV a parar? 10 soluções para acabar com o buffering",
    excerpt:
      "Imagem a congelar a meio do jogo? Veja as causas do buffering no IPTV, como fazer um diagnóstico em 2 minutos e 10 soluções que resolvem a maioria dos casos.",
    keyword: "IPTV buffering",
    category: "Dicas",
    date: "2026-09-22",
    updated: "2026-10-30",
    sections: [
      {
        paragraphs: [
          "O buffering no IPTV é causado quase sempre por uma de quatro coisas: Wi-Fi fraco, internet lenta ou instável na hora de ver, um dispositivo sobrecarregado ou um servidor do fornecedor com problemas. Na maioria dos casos resolve-se ligando o aparelho por cabo, reiniciando o router e limpando a cache da aplicação.",
          "Neste guia mostramos como descobrir a causa em 2 minutos e 10 soluções, da mais simples à mais avançada.",
        ],
      },
      {
        heading: "Diagnóstico rápido em 2 minutos",
        paragraphs: ["Antes de mudar qualquer coisa, responda a estas perguntas:"],
        list: [
          "Para em todos os canais ou só em alguns? Se for só em alguns, o problema está provavelmente nesses canais ou no servidor.",
          "Para só à noite ou ao fim de semana? É sinal de congestionamento, na sua rede ou no operador.",
          "Para noutro dispositivo na mesma casa? Se não, o problema está no dispositivo ou na ligação Wi-Fi dele.",
          "Os outros serviços de streaming também param? Se sim, o problema está na internet.",
        ],
      },
      {
        heading: "1. Ligue por cabo ou use o Wi-Fi de 5 GHz",
        paragraphs: [
          "É a solução que resolve mais casos. O Wi-Fi perde força com paredes e distância. Ligue a TV ou o Fire TV Stick ao router com um cabo de rede (no Fire TV Stick com um adaptador Ethernet). Se não for possível, ligue-se à rede de 5 GHz, mais rápida, ou use um sistema mesh ou adaptadores Powerline.",
        ],
      },
      {
        heading: "2. Reinicie o router e o dispositivo",
        paragraphs: [
          "Desligue o router e o dispositivo da corrente durante 30 segundos e volte a ligar. Isto limpa a memória e renova a ligação ao operador. Muitos problemas que parecem graves desaparecem aqui.",
        ],
      },
      {
        heading: "3. Teste a velocidade à hora do problema",
        paragraphs: [
          "Faça um teste em fast.com ou speedtest.net no próprio dispositivo onde vê IPTV, à hora em que a imagem para. Precisa de cerca de 10 Mbps para HD, 15 Mbps para Full HD e 25 Mbps para 4K por ecrã. Use a nossa calculadora de velocidade para saber o que a sua casa precisa.",
        ],
      },
      {
        heading: "4. Limpe a cache e atualize a aplicação",
        paragraphs: [
          "Nas definições do dispositivo, abra Aplicações, escolha a aplicação IPTV e selecione Limpar cache (não limpe os dados, ou terá de voltar a entrar). Confirme também que tem a versão mais recente da aplicação.",
        ],
      },
      {
        heading: "5. Aumente o buffer da aplicação",
        paragraphs: [
          "Aplicações como o TiviMate permitem aumentar o tamanho do buffer nas definições do leitor. Um buffer maior guarda mais segundos de vídeo em memória e aguenta pequenas quebras da internet, à custa de um arranque um pouco mais lento.",
        ],
      },
      {
        heading: "6. Liberte a rede",
        paragraphs: [
          "Downloads grandes, atualizações de consolas, backups na nuvem e outras pessoas a ver vídeos em 4K consomem largura de banda. Pause-os enquanto vê um jogo importante.",
        ],
      },
      {
        heading: "7. Baixe a qualidade em horas de ponta",
        paragraphs: [
          "Se a sua internet está no limite, escolha a versão HD ou Full HD do canal em vez da 4K. A diferença na imagem é pequena num ecrã médio e a estabilidade melhora muito.",
        ],
      },
      {
        heading: "8. Reinicie o dispositivo com regularidade",
        paragraphs: [
          "Fire TV Sticks e boxes Android com pouca memória ficam lentos ao fim de alguns dias ligados. Reinicie-os uma vez por semana e desinstale aplicações que não usa.",
        ],
      },
      {
        heading: "9. Verifique se o operador limita o tráfego",
        paragraphs: [
          "Alguns operadores reduzem a velocidade de certos tipos de tráfego em horas de ponta. Se o IPTV só para à noite e os testes de velocidade estão bons, uma VPN de qualidade pode ajudar a confirmar se é o caso. Use apenas VPN de fornecedores conhecidos.",
        ],
      },
      {
        heading: "10. Peça ao suporte outro servidor",
        paragraphs: [
          "Se fez tudo isto e o problema continua em todos os canais, fale connosco pelo WhatsApp. Podemos verificar o estado dos servidores e, se for preciso, mudar a sua ligação para outro servidor.",
        ],
      },
      {
        heading: "Quando o problema não é seu",
        paragraphs: [
          "Se o buffering acontece em todos os canais, a todas as horas, mesmo com boa internet e o dispositivo ligado por cabo, o problema está nos servidores do fornecedor. Um bom serviço usa tecnologia antifreeze e servidores de reserva para evitar cortes, e responde rapidamente quando há problemas.",
        ],
      },
    ],
    faq: [
      {
        q: "Porque é que o IPTV para à noite?",
        a: "À noite há mais pessoas a usar a internet, na sua casa e na rede do operador. Ligar por cabo, baixar a qualidade para Full HD e pausar outros downloads costuma resolver.",
      },
      {
        q: "Que velocidade de internet preciso para não ter buffering?",
        a: "Cerca de 10 Mbps para HD, 15 Mbps para Full HD e 25 Mbps para 4K, por cada ecrã a ver ao mesmo tempo, com uma ligação estável.",
      },
      {
        q: "Uma VPN resolve o buffering?",
        a: "Só quando o operador limita o tráfego de streaming. Na maioria dos casos o problema é o Wi-Fi ou a velocidade, e uma VPN pode até tornar a ligação mais lenta.",
      },
    ],
  },
  {
    slug: "melhor-velocidade-internet-4k",
    title: "Que velocidade de internet preciso para IPTV em 4K?",
    excerpt:
      "A velocidade recomendada para ver IPTV em SD, HD, Full HD e 4K, quanto precisa para vários ecrãs, o que funciona com fibra, ADSL e 4G/5G em Portugal e como testar corretamente.",
    keyword: "velocidade internet IPTV",
    category: "Dicas",
    date: "2026-09-15",
    updated: "2026-10-30",
    sections: [
      {
        paragraphs: [
          "Para ver IPTV sem cortes recomendamos pelo menos 10 Mbps para HD, 15 Mbps para Full HD e 25 Mbps para 4K, por cada ecrã a ver em simultâneo. Mais importante do que a velocidade máxima é a estabilidade: uma ligação de 50 Mbps estável funciona melhor do que uma de 200 Mbps com quebras.",
          "Neste guia explicamos quanto precisa na sua casa, que tipo de internet funciona melhor em Portugal e como medir a sua velocidade da forma certa.",
        ],
      },
      {
        heading: "Velocidade recomendada por qualidade",
        paragraphs: ["Por cada ecrã a ver ao mesmo tempo:"],
        list: [
          "SD (qualidade normal): 5 Mbps",
          "HD (720p): 10 Mbps",
          "Full HD (1080p): 15 Mbps",
          "4K / UHD: 25 Mbps",
        ],
      },
      {
        paragraphs: [
          "Estes valores já incluem uma margem de segurança. Um canal em 4K usa normalmente menos do que 25 Mbps, mas a margem evita cortes quando a internet tem pequenas quebras.",
        ],
      },
      {
        heading: "Quanto precisa para vários ecrãs",
        paragraphs: [
          "Some a velocidade de cada ecrã que vai estar a ver ao mesmo tempo e junte uma margem para o resto da casa (telemóveis, videochamadas, jogos).",
          "Exemplo: uma família com uma TV em 4K na sala (25 Mbps), uma TV em Full HD no quarto (15 Mbps) e telemóveis a usar a internet (10 Mbps) precisa de cerca de 50 Mbps estáveis. Use a nossa calculadora de velocidade IPTV para fazer esta conta em segundos.",
        ],
      },
      {
        heading: "Fibra, ADSL ou 4G/5G: o que funciona em Portugal",
        paragraphs: [],
        list: [
          "Fibra ótica: a melhor opção. Mesmo os tarifários mais básicos (100 Mbps ou mais) chegam para vários ecrãs em 4K.",
          "ADSL: em muitas zonas fica entre 8 e 24 Mbps. Chega para um ecrã em HD ou Full HD, mas raramente para 4K.",
          "Internet por cabo coaxial: normalmente rápida e estável, semelhante à fibra para IPTV.",
          "4G e 5G em casa: podem funcionar bem, mas a velocidade varia com a rede e a hora. Confirme se o tarifário tem limite de dados: uma hora de 4K pode gastar vários GB.",
        ],
      },
      {
        heading: "Velocidade não é tudo: estabilidade, latência e jitter",
        paragraphs: [
          "Um teste de velocidade mostra o máximo num momento. Para IPTV interessa também a estabilidade: se a velocidade cai muito à noite ou tem quebras curtas, a imagem para mesmo com um tarifário rápido.",
          "Dois valores ajudam a perceber isto: a latência (ping), que deve ser baixa e constante, e o jitter, a variação da latência. Um jitter alto indica uma ligação instável, muitas vezes por causa do Wi-Fi.",
        ],
      },
      {
        heading: "Como testar a sua velocidade corretamente",
        paragraphs: [],
        list: [
          "Faça o teste no próprio dispositivo onde vê IPTV (no Fire TV Stick há aplicações de teste de velocidade).",
          "Teste à hora em que costuma ver televisão, sobretudo à noite.",
          "Feche outras aplicações e pause downloads durante o teste.",
          "Repita 2 ou 3 vezes e use o valor mais baixo como referência.",
          "Compare o resultado por cabo e por Wi-Fi: se a diferença for grande, o problema está no Wi-Fi.",
        ],
      },
      {
        heading: "Wi-Fi ou cabo?",
        paragraphs: [
          "Sempre que possível, ligue o dispositivo por cabo de rede. O cabo evita quebras de sinal e é a forma mais simples de eliminar o buffering. Se tiver de usar Wi-Fi, prefira a rede de 5 GHz, aproxime o router da TV ou use um sistema mesh. Os adaptadores Powerline, que levam a internet pela instalação elétrica, são uma boa alternativa quando não dá para passar cabos.",
        ],
      },
      {
        heading: "Resumo",
        paragraphs: [
          "Para um ecrã em Full HD, 15 Mbps estáveis chegam. Para 4K ou vários ecrãs, a fibra ótica é a escolha certa. E antes de mudar de tarifário, experimente ligar por cabo: na maioria das casas, o problema é o Wi-Fi e não a velocidade contratada.",
        ],
      },
    ],
    faq: [
      {
        q: "Quantos Mbps preciso para IPTV em 4K?",
        a: "Cerca de 25 Mbps estáveis por cada ecrã a ver em 4K. Para dois ecrãs em 4K, conte com pelo menos 50 Mbps.",
      },
      {
        q: "O IPTV funciona com ADSL?",
        a: "Funciona para um ecrã em HD ou Full HD se tiver pelo menos 10 a 15 Mbps estáveis. Para 4K ou vários ecrãs, a fibra ótica é recomendada.",
      },
      {
        q: "Quantos GB gasta o IPTV por hora?",
        a: "Aproximadamente 1 a 2 GB por hora em HD, 3 a 4 GB em Full HD e 7 GB ou mais em 4K, conforme o canal. Isto importa sobretudo em internet 4G ou 5G com limite de dados.",
      },
    ],
  },
  {
    slug: "o-que-e-epg-guia-programacao",
    title: "O que é o EPG no IPTV e como usar o guia de programação",
    excerpt:
      "O que é o EPG, como funciona, como ativá-lo no IPTV Smarters, TiviMate e IBO Player, e como resolver um guia vazio ou com as horas erradas.",
    keyword: "EPG IPTV",
    category: "Guias",
    date: "2026-09-05",
    updated: "2026-10-30",
    sections: [
      {
        paragraphs: [
          "O EPG (Electronic Program Guide) é o guia de programação eletrónico do IPTV: mostra o que está a dar agora e a seguir em cada canal, tal como o guia da TV por cabo. Na maioria das aplicações carrega automaticamente quando entra com Xtream Codes.",
          "Neste artigo explicamos como funciona o EPG, como ativá-lo nas aplicações mais usadas e como resolver os dois problemas mais comuns: o guia vazio e as horas desfasadas.",
        ],
      },
      {
        heading: "Como funciona o EPG",
        paragraphs: [
          "O fornecedor do serviço IPTV disponibiliza um ficheiro com a programação de cada canal, normalmente no formato XMLTV. A aplicação descarrega esse ficheiro e liga cada programa ao canal correspondente. Com Xtream Codes este link vem incluído; com listas M3U pode ser preciso adicioná-lo à mão.",
          "O guia é atualizado periodicamente. Por isso, nos primeiros minutos depois de instalar a aplicação, é normal ver o guia ainda vazio.",
        ],
      },
      {
        heading: "Para que serve",
        paragraphs: [],
        list: [
          "Ver a programação dos próximos dias de todos os canais num só ecrã.",
          "Saber a que horas começa um jogo, um filme ou o telejornal.",
          "Navegar pelos canais sem ter de os abrir um a um.",
          "Criar lembretes e, em algumas aplicações, gravar programas.",
        ],
      },
      {
        heading: "Como ativar o EPG nas aplicações mais usadas",
        paragraphs: [],
        list: [
          "IPTV Smarters Pro: entre com Xtream Codes; o guia aparece em TV ao Vivo. Para atualizar, abra Definições e escolha Atualizar EPG.",
          "TiviMate: o guia carrega ao adicionar a lista com Xtream Codes. Em Definições → EPG pode forçar a atualização e escolher de quanto em quanto tempo atualiza.",
          "IBO Player e Smart IPTV: o EPG vem com a lista. Se não aparecer, reinicie a aplicação depois de adicionar a lista no site da aplicação.",
          "Listas M3U: procure nas definições a opção para adicionar um URL de EPG e cole o link indicado pelo suporte.",
        ],
      },
      {
        heading: "EPG com as horas erradas? Ajuste o fuso horário",
        paragraphs: [
          "Se o guia mostra os programas uma ou duas horas adiantados ou atrasados, o problema é o fuso horário. A maioria das aplicações tem uma opção de desfasamento de tempo (time shift ou EPG offset) nas definições do EPG: ajuste em +1 ou -1 hora até as horas coincidirem.",
          "Confirme também que o dispositivo tem a data, a hora e o fuso horário certos. Nos Açores a hora é menos uma do que em Portugal continental e na Madeira.",
        ],
      },
      {
        heading: "EPG vazio em alguns canais",
        paragraphs: [
          "É normal que alguns canais não tenham guia, sobretudo canais de eventos, canais 24/7 de filmes ou canais regionais pequenos. Se o guia falta em canais principais, atualize o EPG, aguarde alguns minutos e reinicie a aplicação. Se continuar vazio, fale connosco.",
        ],
      },
      {
        heading: "Funcionalidades extra: lembretes, gravação e catch-up",
        paragraphs: [
          "Com o EPG ativo, aplicações como o TiviMate permitem marcar lembretes e, na versão Premium, gravar programas. Alguns canais têm também catch-up, que permite ver programas que já passaram nos últimos dias. Estas funcionalidades dependem da aplicação e de cada canal.",
        ],
      },
    ],
    faq: [
      {
        q: "O que significa EPG no IPTV?",
        a: "EPG significa Electronic Program Guide, o guia de programação eletrónico que mostra o que está a dar agora e a seguir em cada canal.",
      },
      {
        q: "Porque é que o EPG não aparece?",
        a: "Logo depois da instalação o guia pode demorar alguns minutos a carregar. Se continuar vazio, atualize o EPG nas definições da aplicação e reinicie-a.",
      },
      {
        q: "Como corrijo o EPG com as horas erradas?",
        a: "Ajuste o desfasamento de tempo (EPG offset ou time shift) nas definições da aplicação, em +1 ou -1 hora, e confirme o fuso horário do dispositivo.",
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
