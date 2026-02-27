import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Lang = "pt" | "en";

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      hireMe: "Me Contrate",
      openMenu: "Abrir menu",
      translateTo: "Traduzir para Inglês",
      translateToPt: "Traduzir para Português",
    },
    hero: {
      badge: "Disponível para novos projetos",
      title1: "Desenvolvedor Frontend",
      title2: "criando experiências digitais",
      title3: "de alta performance",
      subtitle:
        "Especializado em design responsivo, otimização de performance e frameworks JavaScript modernos. Construindo interfaces que os usuários amam.",
      viewProjects: "Ver Projetos",
      contactMe: "Fale Comigo",
      scrollDown: "Rolar para baixo",
    },
    about: {
      label: "Sobre",
      title: "Transformando designs em experiências rápidas e acessíveis",
      p1: "Sou Roosevelt Franklin Junior, desenvolvedor frontend com mais de 8 anos de experiência construindo aplicações web de nível profissional. Meu foco está na interseção entre design e engenharia — escrevendo código limpo que entrega interfaces bonitas e performáticas.",
      p2: "De MVPs de startups a dashboards corporativos, trago expertise profunda no ecossistema React, arquitetura responsiva e performance web. Cada projeto é uma oportunidade de expandir os limites do que é possível na web.",
      highlight1Title: "Design Responsivo",
      highlight1Desc: "Layouts pixel-perfect em todos os dispositivos e tamanhos de tela.",
      highlight2Title: "Frameworks Modernos",
      highlight2Desc: "React, Next.js, Vue — arquitetura de componentes limpa e sustentável.",
      highlight3Title: "Performance",
      highlight3Desc: "Lighthouse 95+ com bundles otimizados e renderização eficiente.",
      highlight4Title: "Engenharia de UI",
      highlight4Desc: "Design systems, acessibilidade e interações refinadas.",
    },
    skills: {
      label: "Habilidades",
      title: "Tecnologias & expertise",
      description: "Um conjunto de ferramentas focado em construir experiências web modernas e de alta performance.",
      cat1: "Frameworks Frontend",
      cat2: "Estilização & Design",
      cat3: "Performance & Ferramentas",
      cat4: "Backend & Ferramentas",
      tests: "Testes",
    },
    projects: {
      label: "Projetos",
      title: "Trabalhos selecionados",
      description: "Uma seleção curada de projetos que demonstram minha expertise em engenharia frontend.",
      challenge: "Desafio:",
      liveDemo: "Demo ao Vivo",
      code: "Código",
      proj1Title: "FinTrack Dashboard",
      proj1Desc:
        "Dashboard de análise financeira em tempo real com gráficos interativos, acompanhamento de portfólio e visualização de dados responsiva.",
      proj1Challenge:
        "Otimizei a renderização de mais de 10 mil pontos de dados com listas virtualizadas e componentes de gráficos memorizados.",
      proj2Title: "ShopFlow E-Commerce",
      proj2Desc:
        "Plataforma de e-commerce completa com renderização server-side, fluxo de checkout otimizado e integração com Stripe.",
      proj2Challenge: "Alcancei score 98 no Lighthouse com ISR e pipeline de carregamento de imagens otimizado.",
      proj3Title: "CollabSpace",
      proj3Desc:
        "Workspace colaborativo em tempo real com cursores ao vivo, edição de documentos e indicadores de presença da equipe.",
      proj3Challenge: "Implementei resolução de conflitos baseada em CRDT para edição multi-usuário sem falhas.",
      proj4Title: "DevPortal API Docs",
      proj4Desc:
        "Plataforma interativa de documentação de API com playground de código ao vivo, fluxo de autenticação e geração de SDK.",
      proj4Challenge:
        "Construí um editor de código personalizado com syntax highlighting e testes de requisição de API ao vivo.",
      proj5Title: "HealthPulse App",
      proj5Desc:
        "Aplicação de monitoramento de métricas de saúde com visualização de dados, definição de metas e notificações push.",
      proj5Challenge:
        "Implementei arquitetura PWA offline-first com sincronização em segundo plano para rastreamento de métricas.",
      proj6Title: "CloudDeploy CLI",
      proj6Desc:
        "Ferramenta para desenvolvedores com CLI + dashboard web para gerenciamento de deploys na nuvem, logs e infraestrutura.",
      proj6Challenge: "Streaming de logs em tempo real com conexões WebSocket e emulação de terminal no navegador.",
    },
    experience: {
      label: "Experiência",
      title: "Trajetória profissional",
      description: "Uma linha do tempo do meu crescimento como desenvolvedor frontend.",
      job1Period: "2023 — Presente",
      job1Title: "Desenvolvedor Frontend",
      job1Company: "TechVault Inc.",
      job1Desc:
        "Lidero o desenvolvimento frontend de uma plataforma SaaS de analytics. Reduzi o tamanho do bundle em 40% e melhorei os Core Web Vitals em todas as páginas.",
      job2Period: "2021 — 2023",
      job2Title: "Desenvolvedor Frontend",
      job2Company: "PixelWave Agency",
      job2Desc:
        "Construí mais de 15 websites e aplicações web em produção para clientes internacionais. Introduzi uma biblioteca de componentes que reduziu o tempo de desenvolvimento em 30%.",
      job3Period: "2020 — 2021",
      job3Title: "Desenvolvedor Frontend Júnior",
      job3Company: "StartUp Labs",
      job3Desc:
        "Desenvolvi interfaces responsivas para produtos em estágio inicial. Trabalhei de perto com designers para implementar UIs pixel-perfect.",
      job4Period: "2019 — 2020",
      job4Title: "Desenvolvedor Web Freelancer",
      job4Company: "Autônomo",
      job4Desc:
        "Realizei projetos freelance construindo landing pages e sites para pequenas empresas. Primeiros passos no desenvolvimento profissional.",
    },
    services: {
      label: "Serviços",
      title: "O que posso fazer por você",
      description: "Serviços premium de frontend sob medida para suas necessidades.",
      s1Title: "Landing Pages",
      s1Desc:
        "Landing pages de alta conversão, ultrarrápidas, projetadas para causar impacto e gerar resultados.",
      s2Title: "Aplicações Web",
      s2Desc: "Apps web complexos e escaláveis construídos com frameworks modernos e arquitetura limpa.",
      s3Title: "Otimização de UI",
      s3Desc: "Auditorias de performance e otimização — do tamanho do bundle aos Core Web Vitals.",
      s4Title: "Refatoração Responsiva",
      s4Desc: "Transformando sites desktop-only em experiências fluidas em todos os dispositivos.",
    },
    testimonials: {
      label: "Depoimentos",
      title: "O que dizem sobre mim",
      description: "Feedback de clientes e colegas com quem tive o prazer de trabalhar.",
      t1Quote:
        "Alex entregou um dashboard incrivelmente polido que superou nossas expectativas. A atenção à performance e aos detalhes foi excepcional.",
      t2Quote:
        "Trabalhar com o Alex transformou nossa presença na web. O site passou de lento para ultrarrápido, e nossa taxa de conversão subiu 35%.",
      t3Quote:
        "Um dos desenvolvedores frontend mais talentosos com quem já trabalhei. Código limpo, ótima comunicação e sempre entrega no prazo.",
    },
    contact: {
      label: "Contato",
      title: "Vamos trabalhar juntos",
      description: "Tem um projeto em mente? Adoraria saber mais sobre ele.",
      intro:
        "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.",
      email: "E-mail",
      location: "Localização",
      locationValue: "Rio de Janeiro - RJ — Disponível para remoto",
      name: "Nome",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "voce@email.com",
      message: "Mensagem",
      messagePlaceholder: "Conte-me sobre seu projeto...",
      sending: "Enviando...",
      send: "Enviar Mensagem",
      successToast: "Mensagem enviada! Retornarei em breve.",
    },
    footer: {
      madeWith: "Feito com React & Tailwind.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me",
      openMenu: "Open menu",
      translateTo: "Translate to English",
      translateToPt: "Translate to Portuguese",
    },
    hero: {
      badge: "Available for new projects",
      title1: "Frontend Developer",
      title2: "creating digital experiences",
      title3: "with high performance",
      subtitle:
        "Specialized in responsive design, performance optimization and modern JavaScript frameworks. Building interfaces users love.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scrollDown: "Scroll down",
    },
    about: {
      label: "About",
      title: "Turning designs into fast and accessible experiences",
      p1: "I'm Roosevelt Franklin Junior, a frontend developer with over 8 years of experience building professional-grade web applications. My focus is at the intersection of design and engineering — writing clean code that delivers beautiful, performant interfaces.",
      p2: "From startup MVPs to corporate dashboards, I bring deep expertise in the React ecosystem, responsive architecture and web performance. Every project is an opportunity to push the boundaries of what's possible on the web.",
      highlight1Title: "Responsive Design",
      highlight1Desc: "Pixel-perfect layouts across all devices and screen sizes.",
      highlight2Title: "Modern Frameworks",
      highlight2Desc: "React, Next.js, Vue — clean, sustainable component architecture.",
      highlight3Title: "Performance",
      highlight3Desc: "Lighthouse 95+ with optimized bundles and efficient rendering.",
      highlight4Title: "UI Engineering",
      highlight4Desc: "Design systems, accessibility and refined interactions.",
    },
    skills: {
      label: "Skills",
      title: "Technologies & expertise",
      description: "A toolset focused on building modern, high-performance web experiences.",
      cat1: "Frontend Frameworks",
      cat2: "Styling & Design",
      cat3: "Performance & Tools",
      cat4: "Backend & Tools",
      tests: "Testing",
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      description: "A curated selection of projects showcasing my frontend engineering expertise.",
      challenge: "Challenge:",
      liveDemo: "Live Demo",
      code: "Code",
      proj1Title: "FinTrack Dashboard",
      proj1Desc:
        "Real-time financial analysis dashboard with interactive charts, portfolio tracking and responsive data visualization.",
      proj1Challenge:
        "Optimized rendering of 10k+ data points with virtualized lists and memoized chart components.",
      proj2Title: "ShopFlow E-Commerce",
      proj2Desc:
        "Full e-commerce platform with server-side rendering, optimized checkout flow and Stripe integration.",
      proj2Challenge: "Achieved Lighthouse score 98 with ISR and optimized image loading pipeline.",
      proj3Title: "CollabSpace",
      proj3Desc:
        "Real-time collaborative workspace with live cursors, document editing and team presence indicators.",
      proj3Challenge: "Implemented CRDT-based conflict resolution for seamless multi-user editing.",
      proj4Title: "DevPortal API Docs",
      proj4Desc:
        "Interactive API documentation platform with live code playground, auth flow and SDK generation.",
      proj4Challenge:
        "Built a custom code editor with syntax highlighting and live API request testing.",
      proj5Title: "HealthPulse App",
      proj5Desc:
        "Health metrics monitoring app with data visualization, goal setting and push notifications.",
      proj5Challenge:
        "Implemented offline-first PWA architecture with background sync for metrics tracking.",
      proj6Title: "CloudDeploy CLI",
      proj6Desc:
        "Developer tool with CLI + web dashboard for cloud deploy management, logs and infrastructure.",
      proj6Challenge: "Real-time log streaming with WebSocket connections and in-browser terminal emulation.",
    },
    experience: {
      label: "Experience",
      title: "Professional journey",
      description: "A timeline of my growth as a frontend developer.",
      job1Period: "2023 — Present",
      job1Title: "Frontend Developer",
      job1Company: "TechVault Inc.",
      job1Desc:
        "Leading frontend development of a SaaS analytics platform. Reduced bundle size by 40% and improved Core Web Vitals across all pages.",
      job2Period: "2021 — 2023",
      job2Title: "Frontend Developer",
      job2Company: "PixelWave Agency",
      job2Desc:
        "Built 15+ websites and web applications in production for international clients. Introduced a component library that cut development time by 30%.",
      job3Period: "2020 — 2021",
      job3Title: "Junior Frontend Developer",
      job3Company: "StartUp Labs",
      job3Desc:
        "Developed responsive interfaces for early-stage products. Worked closely with designers to implement pixel-perfect UIs.",
      job4Period: "2019 — 2020",
      job4Title: "Freelance Web Developer",
      job4Company: "Self-employed",
      job4Desc:
        "Freelance projects building landing pages and sites for small businesses. First steps into professional development.",
    },
    services: {
      label: "Services",
      title: "What I can do for you",
      description: "Premium frontend services tailored to your needs.",
      s1Title: "Landing Pages",
      s1Desc: "High-converting, ultra-fast landing pages designed to make an impact and drive results.",
      s2Title: "Web Applications",
      s2Desc: "Complex, scalable web apps built with modern frameworks and clean architecture.",
      s3Title: "UI Optimization",
      s3Desc: "Performance audits and optimization — from bundle size to Core Web Vitals.",
      s4Title: "Responsive Refactoring",
      s4Desc: "Turning desktop-only sites into fluid experiences across all devices.",
    },
    testimonials: {
      label: "Testimonials",
      title: "What they say about me",
      description: "Feedback from clients and colleagues I've had the pleasure to work with.",
      t1Quote:
        "Alex delivered an incredibly polished dashboard that exceeded our expectations. The attention to performance and detail was exceptional.",
      t2Quote:
        "Working with Alex transformed our web presence. The site went from slow to blazing fast, and our conversion rate went up 35%.",
      t3Quote:
        "One of the most talented frontend developers I've worked with. Clean code, great communication and always delivers on time.",
    },
    contact: {
      label: "Contact",
      title: "Let's work together",
      description: "Have a project in mind? I'd love to hear about it.",
      intro:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      email: "Email",
      location: "Location",
      locationValue: "Rio de Janeiro - RJ — Available for remote",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      sending: "Sending...",
      send: "Send Message",
      successToast: "Message sent! I'll get back to you soon.",
    },
    footer: {
      madeWith: "Made with React & Tailwind.",
    },
  },
} as const;

type Translations = (typeof translations)["pt"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");
  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggleLang = useCallback(() => setLangState((prev) => (prev === "pt" ? "en" : "pt")), []);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
