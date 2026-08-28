export const LOCALES = ["pt-BR", "es", "en-US"] as const;
export type Locale = (typeof LOCALES)[number];

export const localeMeta: Record<
  Locale,
  { short: string; label: string; htmlLang: string }
> = {
  "pt-BR": { short: "PT", label: "Português (Brasil)", htmlLang: "pt-BR" },
  es: { short: "ES", label: "Español (Latam)", htmlLang: "es" },
  "en-US": { short: "EN", label: "English (US)", htmlLang: "en-US" },
};

export type EmpresaCopy = {
  tag: string;
  desc: string;
  detalhe: string;
  sobre: string[];
  servicos: string[];
};

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  navQuemSomos: string;
  navFundador: string;
  navPilares: string;
  navEmpresas: string;
  navContato: string;
  ctaFaleConosco: string;
  languageLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleGold: string;
  heroLead: string;
  heroCtaGroup: string;
  heroCtaAbout: string;
  quemSomosEyebrow: string;
  quemSomosTitle: string;
  quemSomosTitleGold: string;
  quemSomosP1: string;
  quemSomosP2: string;
  quemSomosTrajetoria: string;
  numerosAlunos: string;
  numerosEmpregos: string;
  numerosSetores: string;
  fundadorEyebrow: string;
  fundadorTitle: string;
  fundadorTitleGold: string;
  fundadorRole: string;
  fundadorP1: string;
  fundadorP2: string;
  fundadorP3: string;
  fundadorPhotoAlt: string;
  pilaresEyebrow: string;
  pilaresTitle: string;
  pilaresTitleGold: string;
  pilares: { titulo: string; desc: string }[];
  empresasEyebrow: string;
  empresasTitle: string;
  empresasTitleGold: string;
  contatoEyebrow: string;
  contatoTitle: string;
  contatoTitleGold: string;
  contatoLead: string;
  contatoPhone: string;
  contatoAtuacao: string;
  contatoRegiao: string;
  footerRights: string;
  empresaSobre: string;
  empresaMove: string;
  empresaMoveGold: string;
  empresaServicos: string;
  empresaLinks: string;
  empresaExplorar: string;
  empresaOutras: string;
  empresaOutrasGold: string;
  empresaConhecer: string;
  linkContato: string;
  linkEmpresas: string;
  linkVanbank: string;
  notFoundTitle: string;
  notFoundLead: string;
  notFoundHome: string;
  empresas: {
    "universidade-interamericana": EmpresaCopy;
    "monarca-bike": EmpresaCopy;
    "monte-karlo-mineradora": EmpresaCopy;
    "interamericano-transportes": EmpresaCopy;
    "karla-sophya": EmpresaCopy;
    vanbank: EmpresaCopy;
    "posto-futurista": EmpresaCopy;
  };
};

export const messages: Record<Locale, Messages> = {
  "pt-BR": {
    metaTitle: "Grupo Monarca — Ecossistema de Negócios",
    metaDescription:
      "O Grupo Monarca é um ecossistema empresarial que une educação, transporte, mineração, agronegócio e serviços financeiros para impulsionar o desenvolvimento da fronteira Brasil-Paraguai.",
    navQuemSomos: "Quem somos",
    navFundador: "Fundador",
    navPilares: "Pilares",
    navEmpresas: "Empresas",
    navContato: "Contato",
    ctaFaleConosco: "Fale conosco",
    languageLabel: "Idioma",
    heroEyebrow: "Um ecossistema de negócios que transforma regiões",
    heroTitle: "O que nasce no solo,",
    heroTitleGold: "move o futuro.",
    heroLead:
      "O Grupo Monarca integra educação, agro & indústria, serviços financeiros e mobilidade elétrica para impulsionar o desenvolvimento econômico da fronteira Brasil-Paraguai.",
    heroCtaGroup: "Conheça o grupo",
    heroCtaAbout: "Quem somos",
    quemSomosEyebrow: "Quem somos",
    quemSomosTitle: "Um grupo,",
    quemSomosTitleGold: "muitas frentes.",
    quemSomosP1:
      "Sob a liderança do CEO Carlos Bernardo, o Grupo Monarca é um ecossistema empresarial composto por instituições de ensino, transporte, mineração, agronegócio, serviços financeiros e varejo.",
    quemSomosP2:
      "Atuamos em negócios que impulsionam o desenvolvimento econômico na fronteira Brasil-Paraguai, com presença em três setores-chave: educação, agro & indústria e serviços financeiros.",
    quemSomosTrajetoria: "Conheça a trajetória",
    numerosAlunos: "alunos formados",
    numerosEmpregos: "empregos diretos e indiretos",
    numerosSetores: "setores-chave de atuação",
    fundadorEyebrow: "Fundador",
    fundadorTitle: "Do Carajá ao",
    fundadorTitleGold: "Grupo Monarca.",
    fundadorRole: "Carlos Bernardo · CEO",
    fundadorP1:
      "Carlos Bernardo nasceu no Bairro Carajá, em Ubiratã, no interior do Paraná. Cresceu em uma casa simples, trabalhou desde cedo e, ainda adolescente, perdeu a mãe. Aos 16 anos, vendeu o pouco que tinha e partiu para São Paulo em busca de um recomeço.",
    fundadorP2:
      "Em São José do Rio Preto, dividiu a rotina entre a rádio, o supermercado e o restaurante. Depois de um revés em Cuiabá, o mercado imobiliário trouxe a primeira virada — e a certeza de que conhecimento abre caminho. Tentou Medicina na Bolívia e, mais tarde, no Paraguai. Foi na fronteira que enxergou uma demanda clara: brasileiros em busca de formação.",
    fundadorP3:
      "Dessa visão nasceu a Universidade Interamericana. Em seguida, o Grupo Monarca: educação, pecuária, transporte, mineração e serviços financeiros, com marcas como Interamericano Transportes, Monte Karlo, Karla Sophya, VanBank e Monarca Bike. Um grupo que hoje gera centenas de empregos na fronteira Brasil-Paraguai, guiado pela mesma origem — transformar o que o chão oferece em futuro.",
    fundadorPhotoAlt: "Carlos Bernardo, fundador e CEO do Grupo Monarca",
    pilaresEyebrow: "Pilares principais",
    pilaresTitle: "Quatro forças,",
    pilaresTitleGold: "um mesmo destino.",
    pilares: [
      {
        titulo: "Educação & Qualidade",
        desc: "Formação de profissionais preparados para transformar o futuro, com estrutura moderna e ensino de excelência.",
      },
      {
        titulo: "Agro & Indústria",
        desc: "Produção, logística e mineração conectando o campo ao desenvolvimento regional.",
      },
      {
        titulo: "Serviços Financeiros",
        desc: "Soluções financeiras e mobilidade para pessoas e empresas, com praticidade e segurança.",
      },
      {
        titulo: "Mobilidade Elétrica",
        desc: "Energia que move o futuro: transporte inteligente, econômico e sustentável.",
      },
    ],
    empresasEyebrow: "Nossas empresas",
    empresasTitle: "Marcas que",
    empresasTitleGold: "trabalham juntas.",
    contatoEyebrow: "Contato",
    contatoTitle: "Vamos construir o futuro",
    contatoTitleGold: "juntos.",
    contatoLead:
      "Fale com o Grupo Monarca e descubra como nosso ecossistema pode apoiar o seu negócio, a sua formação ou a sua região.",
    contatoPhone: "Telefone / WhatsApp",
    contatoAtuacao: "Atuação",
    contatoRegiao: "Fronteira Brasil-Paraguai · MS",
    footerRights: "Grupo Monarca. Todos os direitos reservados.",
    empresaSobre: "Sobre a empresa",
    empresaMove: "O que nos",
    empresaMoveGold: "move.",
    empresaServicos: "Serviços",
    empresaLinks: "Links relacionados",
    empresaExplorar: "Continue explorando",
    empresaOutras: "Outras empresas",
    empresaOutrasGold: "do grupo.",
    empresaConhecer: "Conhecer",
    linkContato: "Fale com o Grupo Monarca",
    linkEmpresas: "Conheça as outras empresas",
    linkVanbank: "Baixar o app VanBank",
    notFoundTitle: "Página não encontrada",
    notFoundLead: "A página que você procura não existe ou foi movida.",
    notFoundHome: "Voltar ao início",
    empresas: {
      "universidade-interamericana": {
        tag: "Educação",
        desc: "Instituição de ensino superior com corpo docente qualificado, estrutura moderna e o curso de Medicina com ambientes completos de aprendizagem.",
        detalhe: "+2.500 alunos formados",
        sobre: [
          "A Universidade Interamericana é o pilar educacional do Grupo Monarca, formando profissionais preparados para transformar o futuro da fronteira Brasil-Paraguai.",
          "Com estrutura moderna, laboratórios completos e corpo docente altamente qualificado, a instituição já formou mais de 2.500 alunos em cursos de graduação e pós-graduação.",
        ],
        servicos: [
          "Graduação em Medicina com ambientes completos de aprendizagem",
          "Cursos de graduação nas áreas da saúde, gestão e tecnologia",
          "Pós-graduação e especializações",
          "Cursos de extensão e capacitação profissional",
        ],
      },
      "monarca-bike": {
        tag: "Mobilidade Elétrica",
        desc: "Soluções de mobilidade elétrica pensadas para quem busca praticidade, economia e conforto no dia a dia. 100% elétrica, zero emissão.",
        detalhe: "Zero emissão, mais consciência",
        sobre: [
          "A Monarca Bike representa o compromisso do Grupo Monarca com o futuro da mobilidade: transporte inteligente, econômico e sustentável.",
          "Com bicicletas 100% elétricas e zero emissão de poluentes, a marca oferece praticidade, economia e conforto para o dia a dia nas cidades da fronteira.",
        ],
        servicos: [
          "Venda de bicicletas elétricas",
          "Planos de mobilidade para empresas e frotas",
          "Manutenção e assistência técnica especializada",
          "Acessórios e peças originais",
        ],
      },
      "monte-karlo-mineradora": {
        tag: "Agro & Indústria",
        desc: "Especializada na extração, produção e distribuição de calcário agrícola em Bodoquena, MS — matéria-prima essencial para a produtividade no campo.",
        detalhe: "Entrega rápida para produtores rurais",
        sobre: [
          "Localizada em Bodoquena, MS, a Monte Karlo Mineradora é especializada na extração, produção e distribuição de calcário agrícola de alta qualidade.",
          "O calcário é matéria-prima essencial para a correção do solo e o aumento da produtividade no campo, e a Monte Karlo garante entrega rápida para produtores rurais de toda a região.",
        ],
        servicos: [
          "Extração e beneficiamento de calcário agrícola",
          "Distribuição com entrega rápida para produtores rurais",
          "Calcário em diferentes granulometrias",
          "Suporte técnico para correção de solo",
        ],
      },
      "interamericano-transportes": {
        tag: "Logística",
        desc: "Frota própria e estrutura operacional nas rotas intermunicipais e interestaduais, com pontualidade, segurança e confiabilidade.",
        detalhe: "Cargas com pontualidade e segurança",
        sobre: [
          "O Interamericano Transportes é o braço logístico do Grupo Monarca, conectando o campo ao desenvolvimento regional.",
          "Com frota própria e estrutura operacional consolidada, atende rotas intermunicipais e interestaduais com pontualidade, segurança e confiabilidade.",
        ],
        servicos: [
          "Transporte de cargas intermunicipal e interestadual",
          "Logística dedicada para o agronegócio",
          "Gestão de frotas e rastreamento",
          "Operações com pontualidade e segurança",
        ],
      },
      "karla-sophya": {
        tag: "Agro & Indústria",
        desc: "Centro de alta performance em agricultura e pecuária, com foco em eficiência, produtividade e sustentabilidade no campo.",
        detalhe: "Agricultura e pecuária de alta performance",
        sobre: [
          "A Karla Sophya é o braço de agricultura e pecuária do Grupo Monarca: um centro de alta performance pensado para produzir com eficiência e responsabilidade.",
          "Atua no campo com práticas que unem produtividade e sustentabilidade, reforçando a presença do grupo no agronegócio da fronteira Brasil-Paraguai.",
        ],
        servicos: [
          "Agricultura de alta performance",
          "Pecuária com manejo eficiente",
          "Gestão sustentável da produção",
          "Integração com a logística e a mineração do grupo",
        ],
      },
      vanbank: {
        tag: "Serviços Financeiros",
        desc: "O banco digital do Grupo Monarca: gestão financeira de pessoas e empresas, conta digital, pagamentos instantâneos e controle integrado.",
        detalhe: "playstore.vanbank.com",
        sobre: [
          "O VanBank é o banco digital do Grupo Monarca, criado para simplificar a gestão financeira de pessoas e empresas da fronteira Brasil-Paraguai.",
          "Com conta digital, pagamentos instantâneos e controle integrado, o VanBank une praticidade e segurança em uma plataforma completa.",
        ],
        servicos: [
          "Conta digital para pessoas e empresas",
          "Pagamentos instantâneos (Pix)",
          "Gestão financeira integrada para negócios",
          "Soluções de crédito e investimento",
        ],
      },
      "posto-futurista": {
        tag: "Varejo & Conveniência",
        desc: "Abastecimento com atendimento ágil em Pedro Juan Caballero, unindo tecnologia, conforto e eficiência para motoristas e empresas da região.",
        detalhe: "Auxílio no abastecimento de frotas",
        sobre: [
          "O Posto Futurista atende motoristas e empresas em Pedro Juan Caballero com abastecimento ágil, tecnologia e conforto.",
          "Referência em varejo e conveniência na fronteira, oferece também suporte especializado no abastecimento de frotas empresariais.",
        ],
        servicos: [
          "Abastecimento de combustíveis com atendimento ágil",
          "Auxílio no abastecimento de frotas empresariais",
          "Loja de conveniência completa",
          "Serviços de apoio ao motorista",
        ],
      },
    },
  },
  es: {
    metaTitle: "Grupo Monarca — Ecosistema de Negocios",
    metaDescription:
      "El Grupo Monarca es un ecosistema empresarial que une educación, transporte, minería, agronegocio y servicios financieros para impulsar el desarrollo de la frontera Brasil-Paraguay.",
    navQuemSomos: "Quiénes somos",
    navFundador: "Fundador",
    navPilares: "Pilares",
    navEmpresas: "Empresas",
    navContato: "Contacto",
    ctaFaleConosco: "Hable con nosotros",
    languageLabel: "Idioma",
    heroEyebrow: "Un ecosistema de negocios que transforma regiones",
    heroTitle: "Lo que nace en la tierra,",
    heroTitleGold: "mueve el futuro.",
    heroLead:
      "El Grupo Monarca integra educación, agro e industria, servicios financieros y movilidad eléctrica para impulsar el desarrollo económico de la frontera Brasil-Paraguay.",
    heroCtaGroup: "Conozca el grupo",
    heroCtaAbout: "Quiénes somos",
    quemSomosEyebrow: "Quiénes somos",
    quemSomosTitle: "Un grupo,",
    quemSomosTitleGold: "muchos frentes.",
    quemSomosP1:
      "Bajo el liderazgo del CEO Carlos Bernardo, el Grupo Monarca es un ecosistema empresarial compuesto por instituciones de enseñanza, transporte, minería, agronegocio, servicios financieros y retail.",
    quemSomosP2:
      "Actuamos en negocios que impulsan el desarrollo económico en la frontera Brasil-Paraguay, con presencia en tres sectores clave: educación, agro e industria y servicios financieros.",
    quemSomosTrajetoria: "Conozca la trayectoria",
    numerosAlunos: "alumnos formados",
    numerosEmpregos: "empleos directos e indirectos",
    numerosSetores: "sectores clave de actuación",
    fundadorEyebrow: "Fundador",
    fundadorTitle: "Del Carajá al",
    fundadorTitleGold: "Grupo Monarca.",
    fundadorRole: "Carlos Bernardo · CEO",
    fundadorP1:
      "Carlos Bernardo nació en el Barrio Carajá, en Ubiratã, en el interior de Paraná. Creció en una casa sencilla, trabajó desde muy temprano y, aún adolescente, perdió a su madre. A los 16 años, vendió lo poco que tenía y partió a São Paulo en busca de un nuevo comienzo.",
    fundadorP2:
      "En São José do Rio Preto, dividió la rutina entre la radio, el supermercado y el restaurante. Después de un revés en Cuiabá, el mercado inmobiliario trajo el primer giro — y la certeza de que el conocimiento abre camino. Intentó Medicina en Bolivia y, más tarde, en Paraguay. Fue en la frontera donde vio una demanda clara: brasileños en busca de formación.",
    fundadorP3:
      "De esa visión nació la Universidad Interamericana. Luego, el Grupo Monarca: educación, ganadería, transporte, minería y servicios financieros, con marcas como Interamericano Transportes, Monte Karlo, Karla Sophya, VanBank y Monarca Bike. Un grupo que hoy genera cientos de empleos en la frontera Brasil-Paraguay, guiado por el mismo origen: transformar lo que la tierra ofrece en futuro.",
    fundadorPhotoAlt: "Carlos Bernardo, fundador y CEO del Grupo Monarca",
    pilaresEyebrow: "Pilares principales",
    pilaresTitle: "Cuatro fuerzas,",
    pilaresTitleGold: "un mismo destino.",
    pilares: [
      {
        titulo: "Educación y calidad",
        desc: "Formación de profesionales preparados para transformar el futuro, con estructura moderna y enseñanza de excelencia.",
      },
      {
        titulo: "Agro e industria",
        desc: "Producción, logística y minería conectando el campo con el desarrollo regional.",
      },
      {
        titulo: "Servicios financieros",
        desc: "Soluciones financieras y movilidad para personas y empresas, con practicidad y seguridad.",
      },
      {
        titulo: "Movilidad eléctrica",
        desc: "Energía que mueve el futuro: transporte inteligente, económico y sostenible.",
      },
    ],
    empresasEyebrow: "Nuestras empresas",
    empresasTitle: "Marcas que",
    empresasTitleGold: "trabajan juntas.",
    contatoEyebrow: "Contacto",
    contatoTitle: "Vamos a construir el futuro",
    contatoTitleGold: "juntos.",
    contatoLead:
      "Hable con el Grupo Monarca y descubra cómo nuestro ecosistema puede apoyar su negocio, su formación o su región.",
    contatoPhone: "Teléfono / WhatsApp",
    contatoAtuacao: "Actuación",
    contatoRegiao: "Frontera Brasil-Paraguay · MS",
    footerRights: "Grupo Monarca. Todos los derechos reservados.",
    empresaSobre: "Sobre la empresa",
    empresaMove: "Lo que nos",
    empresaMoveGold: "mueve.",
    empresaServicos: "Servicios",
    empresaLinks: "Enlaces relacionados",
    empresaExplorar: "Siga explorando",
    empresaOutras: "Otras empresas",
    empresaOutrasGold: "del grupo.",
    empresaConhecer: "Conocer",
    linkContato: "Hable con el Grupo Monarca",
    linkEmpresas: "Conozca las otras empresas",
    linkVanbank: "Descargar la app VanBank",
    notFoundTitle: "Página no encontrada",
    notFoundLead: "La página que busca no existe o fue movida.",
    notFoundHome: "Volver al inicio",
    empresas: {
      "universidade-interamericana": {
        tag: "Educación",
        desc: "Institución de educación superior con cuerpo docente calificado, estructura moderna y la carrera de Medicina con ambientes completos de aprendizaje.",
        detalhe: "+2.500 alumnos formados",
        sobre: [
          "La Universidad Interamericana es el pilar educativo del Grupo Monarca, formando profesionales preparados para transformar el futuro de la frontera Brasil-Paraguay.",
          "Con estructura moderna, laboratorios completos y cuerpo docente altamente calificado, la institución ya formó a más de 2.500 alumnos en cursos de grado y posgrado.",
        ],
        servicos: [
          "Grado en Medicina con ambientes completos de aprendizaje",
          "Cursos de grado en salud, gestión y tecnología",
          "Posgrado y especializaciones",
          "Cursos de extensión y capacitación profesional",
        ],
      },
      "monarca-bike": {
        tag: "Movilidad eléctrica",
        desc: "Soluciones de movilidad eléctrica pensadas para quien busca practicidad, economía y confort en el día a día. 100% eléctrica, cero emisión.",
        detalhe: "Cero emisión, más conciencia",
        sobre: [
          "Monarca Bike representa el compromiso del Grupo Monarca con el futuro de la movilidad: transporte inteligente, económico y sostenible.",
          "Con bicicletas 100% eléctricas y cero emisión de contaminantes, la marca ofrece practicidad, economía y confort para el día a día en las ciudades de la frontera.",
        ],
        servicos: [
          "Venta de bicicletas eléctricas",
          "Planes de movilidad para empresas y flotas",
          "Mantenimiento y asistencia técnica especializada",
          "Accesorios y piezas originales",
        ],
      },
      "monte-karlo-mineradora": {
        tag: "Agro e industria",
        desc: "Especializada en la extracción, producción y distribución de cal agrícola en Bodoquena, MS — materia prima esencial para la productividad en el campo.",
        detalhe: "Entrega rápida para productores rurales",
        sobre: [
          "Ubicada en Bodoquena, MS, Monte Karlo Mineradora está especializada en la extracción, producción y distribución de cal agrícola de alta calidad.",
          "La cal es materia prima esencial para la corrección del suelo y el aumento de la productividad en el campo, y Monte Karlo garantiza entrega rápida para productores rurales de toda la región.",
        ],
        servicos: [
          "Extracción y beneficio de cal agrícola",
          "Distribución con entrega rápida para productores rurales",
          "Cal en diferentes granulometrías",
          "Soporte técnico para corrección de suelo",
        ],
      },
      "interamericano-transportes": {
        tag: "Logística",
        desc: "Flota propia y estructura operacional en rutas intermunicipales e interestatales, con puntualidad, seguridad y confiabilidad.",
        detalhe: "Cargas con puntualidad y seguridad",
        sobre: [
          "Interamericano Transportes es el brazo logístico del Grupo Monarca, conectando el campo con el desarrollo regional.",
          "Con flota propia y estructura operacional consolidada, atiende rutas intermunicipales e interestatales con puntualidad, seguridad y confiabilidad.",
        ],
        servicos: [
          "Transporte de cargas intermunicipal e interestatal",
          "Logística dedicada para el agronegocio",
          "Gestión de flotas y rastreo",
          "Operaciones con puntualidad y seguridad",
        ],
      },
      "karla-sophya": {
        tag: "Agro e industria",
        desc: "Centro de alto rendimiento en agricultura y ganadería, con foco en eficiencia, productividad y sostenibilidad en el campo.",
        detalhe: "Agricultura y ganadería de alto rendimiento",
        sobre: [
          "Karla Sophya es el brazo de agricultura y ganadería del Grupo Monarca: un centro de alto rendimiento pensado para producir con eficiencia y responsabilidad.",
          "Actúa en el campo con prácticas que unen productividad y sostenibilidad, reforzando la presencia del grupo en el agronegocio de la frontera Brasil-Paraguay.",
        ],
        servicos: [
          "Agricultura de alto rendimiento",
          "Ganadería con manejo eficiente",
          "Gestión sostenible de la producción",
          "Integración con la logística y la minería del grupo",
        ],
      },
      vanbank: {
        tag: "Servicios financieros",
        desc: "El banco digital del Grupo Monarca: gestión financiera de personas y empresas, cuenta digital, pagos instantáneos y control integrado.",
        detalhe: "playstore.vanbank.com",
        sobre: [
          "VanBank es el banco digital del Grupo Monarca, creado para simplificar la gestión financiera de personas y empresas de la frontera Brasil-Paraguay.",
          "Con cuenta digital, pagos instantáneos y control integrado, VanBank une practicidad y seguridad en una plataforma completa.",
        ],
        servicos: [
          "Cuenta digital para personas y empresas",
          "Pagos instantáneos (Pix)",
          "Gestión financiera integrada para negocios",
          "Soluciones de crédito e inversión",
        ],
      },
      "posto-futurista": {
        tag: "Retail y conveniencia",
        desc: "Abastecimiento con atención ágil en Pedro Juan Caballero, uniendo tecnología, confort y eficiencia para conductores y empresas de la región.",
        detalhe: "Apoyo en el abastecimiento de flotas",
        sobre: [
          "El Posto Futurista atiende a conductores y empresas en Pedro Juan Caballero con abastecimiento ágil, tecnología y confort.",
          "Referencia en retail y conveniencia en la frontera, ofrece también soporte especializado en el abastecimiento de flotas empresariales.",
        ],
        servicos: [
          "Abastecimiento de combustibles con atención ágil",
          "Apoyo en el abastecimiento de flotas empresariales",
          "Tienda de conveniencia completa",
          "Servicios de apoyo al conductor",
        ],
      },
    },
  },
  "en-US": {
    metaTitle: "Monarca Group — Business Ecosystem",
    metaDescription:
      "Monarca Group is a business ecosystem that brings together education, transportation, mining, agribusiness and financial services to drive development on the Brazil–Paraguay border.",
    navQuemSomos: "About us",
    navFundador: "Founder",
    navPilares: "Pillars",
    navEmpresas: "Companies",
    navContato: "Contact",
    ctaFaleConosco: "Talk to us",
    languageLabel: "Language",
    heroEyebrow: "A business ecosystem that transforms regions",
    heroTitle: "What is born in the soil,",
    heroTitleGold: "moves the future.",
    heroLead:
      "Monarca Group integrates education, agribusiness & industry, financial services and electric mobility to drive economic development on the Brazil–Paraguay border.",
    heroCtaGroup: "Explore the group",
    heroCtaAbout: "About us",
    quemSomosEyebrow: "About us",
    quemSomosTitle: "One group,",
    quemSomosTitleGold: "many fronts.",
    quemSomosP1:
      "Under the leadership of CEO Carlos Bernardo, Monarca Group is a business ecosystem of education institutions, transportation, mining, agribusiness, financial services and retail.",
    quemSomosP2:
      "We operate businesses that drive economic development on the Brazil–Paraguay border, with a presence in three key sectors: education, agribusiness & industry, and financial services.",
    quemSomosTrajetoria: "Read his story",
    numerosAlunos: "graduates",
    numerosEmpregos: "direct and indirect jobs",
    numerosSetores: "key sectors of activity",
    fundadorEyebrow: "Founder",
    fundadorTitle: "From Carajá to",
    fundadorTitleGold: "Monarca Group.",
    fundadorRole: "Carlos Bernardo · CEO",
    fundadorP1:
      "Carlos Bernardo was born in the Carajá neighborhood of Ubiratã, in the interior of Paraná. He grew up in a simple home, started working early, and as a teenager lost his mother. At 16, he sold what little he had and left for São Paulo in search of a new start.",
    fundadorP2:
      "In São José do Rio Preto, he split his days between the radio station, the supermarket and the restaurant. After a setback in Cuiabá, real estate brought the first real turning point — and the certainty that knowledge opens doors. He pursued Medicine in Bolivia and later in Paraguay. It was on the border that he saw a clear demand: Brazilians looking for higher education.",
    fundadorP3:
      "From that vision came Universidade Interamericana. Then Monarca Group: education, livestock, transportation, mining and financial services, with brands such as Interamericano Transportes, Monte Karlo, Karla Sophya, VanBank and Monarca Bike. A group that today creates hundreds of jobs on the Brazil–Paraguay border, guided by the same origin — turning what the land offers into a future.",
    fundadorPhotoAlt: "Carlos Bernardo, founder and CEO of Monarca Group",
    pilaresEyebrow: "Core pillars",
    pilaresTitle: "Four forces,",
    pilaresTitleGold: "one destination.",
    pilares: [
      {
        titulo: "Education & Quality",
        desc: "Training professionals prepared to shape the future, with modern facilities and excellent teaching.",
      },
      {
        titulo: "Agribusiness & Industry",
        desc: "Production, logistics and mining connecting the field to regional development.",
      },
      {
        titulo: "Financial Services",
        desc: "Financial solutions and mobility for people and companies, with practicality and security.",
      },
      {
        titulo: "Electric Mobility",
        desc: "Energy that moves the future: smart, affordable and sustainable transportation.",
      },
    ],
    empresasEyebrow: "Our companies",
    empresasTitle: "Brands that",
    empresasTitleGold: "work together.",
    contatoEyebrow: "Contact",
    contatoTitle: "Let's build the future",
    contatoTitleGold: "together.",
    contatoLead:
      "Talk to Monarca Group and see how our ecosystem can support your business, your education or your region.",
    contatoPhone: "Phone / WhatsApp",
    contatoAtuacao: "Presence",
    contatoRegiao: "Brazil–Paraguay border · MS",
    footerRights: "Monarca Group. All rights reserved.",
    empresaSobre: "About the company",
    empresaMove: "What drives",
    empresaMoveGold: "us.",
    empresaServicos: "Services",
    empresaLinks: "Related links",
    empresaExplorar: "Keep exploring",
    empresaOutras: "Other companies",
    empresaOutrasGold: "in the group.",
    empresaConhecer: "Learn more",
    linkContato: "Talk to Monarca Group",
    linkEmpresas: "See the other companies",
    linkVanbank: "Download the VanBank app",
    notFoundTitle: "Page not found",
    notFoundLead: "The page you're looking for doesn't exist or has been moved.",
    notFoundHome: "Back to home",
    empresas: {
      "universidade-interamericana": {
        tag: "Education",
        desc: "A higher-education institution with a qualified faculty, modern facilities and a Medicine program with complete learning environments.",
        detalhe: "+2,500 graduates",
        sobre: [
          "Universidade Interamericana is the educational pillar of Monarca Group, preparing professionals to transform the future of the Brazil–Paraguay border.",
          "With modern facilities, complete laboratories and a highly qualified faculty, the institution has already graduated more than 2,500 students in undergraduate and graduate programs.",
        ],
        servicos: [
          "Medicine degree with complete learning environments",
          "Undergraduate programs in health, management and technology",
          "Graduate studies and specializations",
          "Extension courses and professional training",
        ],
      },
      "monarca-bike": {
        tag: "Electric Mobility",
        desc: "Electric mobility built for people who want practicality, savings and comfort every day. 100% electric, zero emissions.",
        detalhe: "Zero emissions, more awareness",
        sobre: [
          "Monarca Bike is Monarca Group's commitment to the future of mobility: smart, affordable and sustainable transportation.",
          "With 100% electric bikes and zero pollutant emissions, the brand offers practicality, savings and comfort for everyday life in border cities.",
        ],
        servicos: [
          "Electric bike sales",
          "Mobility plans for companies and fleets",
          "Specialized maintenance and technical support",
          "Original accessories and parts",
        ],
      },
      "monte-karlo-mineradora": {
        tag: "Agribusiness & Industry",
        desc: "Specialized in extracting, producing and distributing agricultural lime in Bodoquena, MS — an essential input for productivity in the field.",
        detalhe: "Fast delivery for rural producers",
        sobre: [
          "Based in Bodoquena, MS, Monte Karlo Mineradora specializes in extracting, producing and distributing high-quality agricultural lime.",
          "Lime is essential for soil correction and higher yields, and Monte Karlo delivers quickly to rural producers across the region.",
        ],
        servicos: [
          "Extraction and processing of agricultural lime",
          "Distribution with fast delivery for rural producers",
          "Lime in different granule sizes",
          "Technical support for soil correction",
        ],
      },
      "interamericano-transportes": {
        tag: "Logistics",
        desc: "Owned fleet and operations on intercity and interstate routes, with punctuality, safety and reliability.",
        detalhe: "Freight with punctuality and safety",
        sobre: [
          "Interamericano Transportes is the logistics arm of Monarca Group, connecting the field to regional development.",
          "With an owned fleet and a consolidated operating structure, it serves intercity and interstate routes with punctuality, safety and reliability.",
        ],
        servicos: [
          "Intercity and interstate freight",
          "Dedicated logistics for agribusiness",
          "Fleet management and tracking",
          "Operations with punctuality and safety",
        ],
      },
      "karla-sophya": {
        tag: "Agribusiness & Industry",
        desc: "A high-performance center for agriculture and livestock, focused on efficiency, productivity and sustainability in the field.",
        detalhe: "High-performance farming and livestock",
        sobre: [
          "Karla Sophya is Monarca Group's agriculture and livestock arm: a high-performance center built to produce with efficiency and responsibility.",
          "It operates in the field with practices that combine productivity and sustainability, strengthening the group's agribusiness presence on the Brazil–Paraguay border.",
        ],
        servicos: [
          "High-performance agriculture",
          "Livestock with efficient management",
          "Sustainable production management",
          "Integration with the group's logistics and mining",
        ],
      },
      vanbank: {
        tag: "Financial Services",
        desc: "Monarca Group's digital bank: financial management for people and companies, digital accounts, instant payments and integrated control.",
        detalhe: "playstore.vanbank.com",
        sobre: [
          "VanBank is Monarca Group's digital bank, built to simplify financial management for people and companies on the Brazil–Paraguay border.",
          "With a digital account, instant payments and integrated control, VanBank combines practicality and security in one platform.",
        ],
        servicos: [
          "Digital accounts for people and companies",
          "Instant payments (Pix)",
          "Integrated financial management for businesses",
          "Credit and investment solutions",
        ],
      },
      "posto-futurista": {
        tag: "Retail & Convenience",
        desc: "Fast fueling in Pedro Juan Caballero, combining technology, comfort and efficiency for drivers and companies in the region.",
        detalhe: "Support for fleet fueling",
        sobre: [
          "Posto Futurista serves drivers and companies in Pedro Juan Caballero with fast fueling, technology and comfort.",
          "A reference in retail and convenience on the border, it also offers specialized support for corporate fleet fueling.",
        ],
        servicos: [
          "Fuel with fast service",
          "Support for corporate fleet fueling",
          "Full convenience store",
          "Driver support services",
        ],
      },
    },
  },
};
