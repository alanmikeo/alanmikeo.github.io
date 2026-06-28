"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type Language = "pt" | "en";

const currentYear = new Date().getFullYear();
const contactFormEndpoint =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "https://formspree.io/f/xpqgpekb";
const siteUrl = "https://alanmikeo.github.io";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "alanmikeo",
      alternateName: "Alan Michael",
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "alanmikeo | Produto Digital, Sistemas e Automação",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Alan Michael",
      alternateName: "alanmikeo",
      url: siteUrl,
      image: `${siteUrl}/brand-logo.png`,
      jobTitle: "Desenvolvedor full-stack",
      knowsAbout: [
        "React",
        "Next.js",
        "React Native",
        "Django",
        "Supabase",
        "PostgreSQL",
        "Automação",
        "Chatbots",
        "OCR",
        "Reconhecimento de voz",
        "Reconhecimento facial",
        "Visão computacional",
      ],
      sameAs: ["https://github.com/alanmikeo", "https://instagram.com/alanmikeo"],
      hasPart: [
        {
          "@type": "CreativeWork",
          name: "Lova Dating",
          url: "https://play.google.com/store/apps/details?id=com.alanmikeo.lova",
        },
        {
          "@type": "WebSite",
          name: "Yume Asian Food",
          url: "https://alanmikeo.github.io/yume-asian-food/",
        },
        {
          "@type": "WebSite",
          name: "Nana Consultas",
          url: "https://nanaconsultas.netlify.app/",
        },
        {
          "@type": "SoftwareApplication",
          name: "Gestorm",
          applicationCategory: "BusinessApplication",
        },
      ],
    },
  ],
};

const translations = {
  pt: {
    nav: ["Início", "Projetos", "Stack", "Contato"],
    section_labels: ["01 / Serviços", "02 / Projetos", "03 / Stack", "04 / Sobre", "05 / Contato"],
    status: "Disponível para projetos selecionados",
    hero_kicker: "Alan Michael / alanmikeo",
    hero_title: "Produtos digitais, automações e sistemas que resolvem trabalho real",
    hero_sub:
      "Eu desenho e construo aplicações web, integrações e fluxos inteligentes para transformar processos confusos em operação simples, mensurável e escalável.",
    hero_cta_primary: "Começar conversa",
    hero_cta_secondary: "Ver projetos",
    console_label: "portfolio.session",
    console_identity: "alanmikeo / arquiteto de produto digital",
    progress_label: "confiança de entrega",
    terminal_tags: ["produto", "sistemas", "automação", "entrega"],
    ready_label: "pronto",
    console_lines: [
      "escopo: produto digital + automação aplicada",
      "modo: prototipar rápido, entregar com base sólida",
      "foco: menos ruído operacional, mais clareza para decidir",
    ],
    metrics: [
      ["Mobile + Web", "apps, sites e sistemas"],
      ["Projetos reais", "publicados e em validação"],
      ["Operações", "produto, dados e rotina"],
    ],
    services_title: "O que eu construo",
    services_intro:
      "Atuo onde produto, engenharia e operação se encontram. A ideia é entregar software que pareça simples para quem usa, mesmo quando a lógica por trás é complexa.",
    services: [
      {
        title: "Aplicações web",
        desc: "Dashboards, CRMs, portais internos e sistemas sob medida com autenticação, permissões, dados e fluxos de negócio.",
      },
      {
        title: "Automação inteligente",
        desc: "Processos conectados, triagem de informações, notificações e rotinas que reduzem trabalho manual sem expor a operação.",
      },
      {
        title: "Produto e MVP",
        desc: "Transformo ideias em versões navegáveis, validáveis e prontas para evoluir sem precisar recomeçar do zero.",
      },
      {
        title: "Modernização",
        desc: "Organizo sistemas existentes, removo gargalos e melhoro manutenção, performance e experiência de uso.",
      },
    ],
    projects_title: "Projetos em destaque",
    projects_intro:
      "Uma seleção de projetos reais: app publicado, landing pages em produção, experiências comerciais e um sistema de gestão com IA aplicada a rotinas financeiras e logísticas.",
    projects: [
      {
        label: "App mobile",
        status: "Publicado na Google Play",
        title: "Lova Dating",
        desc: "Aplicativo de relacionamento com cadastro, login social, swipe, matches, chat com mídia, notificações, moderação, monetização por anúncios e assinatura premium.",
        href: "https://play.google.com/store/apps/details?id=com.alanmikeo.lova",
        linkLabel: "Ver na Play Store",
        logo: "/portfolio/lova-logo.png",
        logoAlt: "Lova Dating",
        logoTone: "pink",
        tags: ["React Native", "Expo", "Supabase", "AdMob", "Validação facial"],
      },
      {
        label: "Food delivery",
        status: "Publicado",
        title: "Yume Asian Food",
        desc: "Landing page para restaurante asiático em Guarapuava, com SEO local, dados estruturados, links para iFood, Anota.ai, WhatsApp e vitrine visual de produtos.",
        href: "https://alanmikeo.github.io/yume-asian-food/",
        linkLabel: "Abrir site",
        logo: "/portfolio/yume-logo-hd.png",
        logoAlt: "Yume Asian Food",
        logoTone: "yume",
        tags: ["HTML", "SEO Local", "Schema.org", "Performance"],
      },
      {
        label: "Eventos",
        status: "Em preparação",
        title: "Latitud Eventos",
        desc: "Landing page para chácara e espaço de eventos, com narrativa visual escura, apresentação do espaço, estrutura, diferenciais e chamada para orçamento.",
        logo: "/portfolio/latitud-logo.png",
        logoAlt: "Latitud Eventos",
        logoTone: "dark",
        tags: ["Landing Page", "UI", "Copy", "Responsivo"],
      },
      {
        label: "Serviços",
        status: "Publicado",
        title: "Nana Consultas",
        desc: "Site comercial para cartomante e vidente, com seções de apresentação, serviços, preços, depoimentos e contato direto via WhatsApp.",
        href: "https://nanaconsultas.netlify.app/",
        linkLabel: "Abrir site",
        logo: "/portfolio/nana-logo.svg",
        logoAlt: "Nana Consultas",
        logoTone: "dark",
        tags: ["Site Comercial", "Netlify", "WhatsApp", "Conversão"],
      },
      {
        label: "Gestão com IA",
        status: "Offline",
        title: "Gestorm",
        desc: "Sistema de gestão financeira e logística com dashboard, despesas, títulos, viagens, chatbot, integração WhatsApp e leitura de notas/documentos com IA e OCR da Mistral.",
        logoText: "Gestorm",
        logoTone: "gestorm",
        tags: ["React", "Django REST", "PostgreSQL", "Mistral OCR", "WhatsApp"],
      },
    ],
    stack_title: "Stack e método",
    stack_intro:
      "Uso tecnologia como meio, não como vitrine. O que aparece para o usuário é clareza; por baixo entram arquitetura limpa, integrações e IA aplicada quando ela resolve um problema real.",
    stack_groups: [
      ["Frontend", "React", "Next.js", "TailwindCSS", "TypeScript"],
      ["Mobile", "React Native", "Expo", "Android", "Google Play"],
      ["Backend", "Python", "Django", "Supabase", "PostgreSQL"],
      ["IA aplicada", "Chatbots", "Voz", "OCR", "Visão computacional", "Validação facial"],
      ["Entrega", "Git", "Docker", "Deploy", "SEO técnico"],
    ],
    about_title: "Sobre",
    about_headline: "Gosto de construir com a cabeça de produto e a disciplina de engenharia.",
    about_desc:
      "Meu trabalho fica entre entender o problema, desenhar uma solução enxuta e implementar algo que aguente uso real. Fora do código, natureza, viagens e experiências simples alimentam o mesmo olhar: cortar excesso, manter o essencial e adaptar rápido.",
    principles_title: "princípios de trabalho",
    principles: ["clareza antes de complexidade", "protótipo antes de promessa", "manutenção antes de mágica"],
    contact_title: "Vamos tirar uma ideia do papel?",
    contact_intro:
      "Me conte o contexto, o problema e o resultado que você quer alcançar. Eu respondo com um caminho possível, direto ao ponto.",
    contact_name: "Nome",
    contact_email: "E-mail",
    contact_message: "Descreva o projeto, problema ou processo...",
    contact_submit: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso!",
    error: "Algo deu errado. Tente novamente.",
    unavailable:
      "O formulário ainda precisa de um endpoint de envio. Por enquanto, fale comigo por um dos links ao lado.",
    footer_text: `© ${currentYear} alanmikeo. Produto, código e automação aplicada.`,
    back_to_top: "voltar_ao_topo",
  },
  en: {
    nav: ["Home", "Projects", "Stack", "Contact"],
    section_labels: ["01 / Services", "02 / Work", "03 / Stack", "04 / About", "05 / Contact"],
    status: "Available for selected projects",
    hero_kicker: "Alan Michael / alanmikeo",
    hero_title: "Digital products, automations, and systems for real work",
    hero_sub:
      "I design and build web applications, integrations, and intelligent workflows that turn messy processes into simple, measurable, scalable operations.",
    hero_cta_primary: "Start a conversation",
    hero_cta_secondary: "View projects",
    console_label: "portfolio.session",
    console_identity: "alanmikeo / digital product architect",
    progress_label: "build confidence",
    terminal_tags: ["product", "systems", "automation", "delivery"],
    ready_label: "ready",
    console_lines: [
      "scope: digital product + applied automation",
      "mode: prototype quickly, ship with solid foundations",
      "focus: less operational noise, better decisions",
    ],
    metrics: [
      ["Mobile + Web", "apps, sites, and systems"],
      ["Real projects", "published and in validation"],
      ["Operations", "product, data, and routine"],
    ],
    services_title: "What I build",
    services_intro:
      "I work where product, engineering, and operations meet. The goal is software that feels simple to use, even when the logic behind it is complex.",
    services: [
      {
        title: "Web applications",
        desc: "Dashboards, CRMs, internal portals, and custom systems with authentication, permissions, data, and business workflows.",
      },
      {
        title: "Intelligent automation",
        desc: "Connected processes, information triage, notifications, and routines that reduce manual work without exposing operations.",
      },
      {
        title: "Product and MVP",
        desc: "I turn ideas into navigable, testable versions that can evolve without being rebuilt from scratch.",
      },
      {
        title: "Modernization",
        desc: "I organize existing systems, remove bottlenecks, and improve maintainability, performance, and user experience.",
      },
    ],
    projects_title: "Featured work",
    projects_intro:
      "A selection of real work: a published mobile app, live landing pages, commercial web experiences, and a management system with AI applied to finance and logistics routines.",
    projects: [
      {
        label: "Mobile app",
        status: "Published on Google Play",
        title: "Lova Dating",
        desc: "Dating app with onboarding, social login, swipe discovery, matches, media chat, notifications, moderation, ads monetization, and premium subscription.",
        href: "https://play.google.com/store/apps/details?id=com.alanmikeo.lova",
        linkLabel: "View on Play Store",
        logo: "/portfolio/lova-logo.png",
        logoAlt: "Lova Dating",
        logoTone: "pink",
        tags: ["React Native", "Expo", "Supabase", "AdMob", "Face validation"],
      },
      {
        label: "Food delivery",
        status: "Published",
        title: "Yume Asian Food",
        desc: "Landing page for an Asian restaurant in Guarapuava, with local SEO, structured data, links to iFood, Anota.ai, WhatsApp, and product showcase.",
        href: "https://alanmikeo.github.io/yume-asian-food/",
        linkLabel: "Open site",
        logo: "/portfolio/yume-logo-hd.png",
        logoAlt: "Yume Asian Food",
        logoTone: "yume",
        tags: ["HTML", "Local SEO", "Schema.org", "Performance"],
      },
      {
        label: "Events",
        status: "In preparation",
        title: "Latitud Eventos",
        desc: "Landing page for an event venue, with dark visual storytelling, venue presentation, structure, differentiators, and quote request flow.",
        logo: "/portfolio/latitud-logo.png",
        logoAlt: "Latitud Eventos",
        logoTone: "dark",
        tags: ["Landing Page", "UI", "Copy", "Responsive"],
      },
      {
        label: "Services",
        status: "Published",
        title: "Nana Consultas",
        desc: "Commercial website for a tarot reader and clairvoyant, with presentation, services, pricing, testimonials, and direct WhatsApp contact.",
        href: "https://nanaconsultas.netlify.app/",
        linkLabel: "Open site",
        logo: "/portfolio/nana-logo.svg",
        logoAlt: "Nana Consultas",
        logoTone: "dark",
        tags: ["Commercial Site", "Netlify", "WhatsApp", "Conversion"],
      },
      {
        label: "AI management",
        status: "Offline",
        title: "Gestorm",
        desc: "Finance and logistics management system with dashboard, expenses, payables, trips, chatbot, WhatsApp integration, and AI/OCR document reading with Mistral.",
        logoText: "Gestorm",
        logoTone: "gestorm",
        tags: ["React", "Django REST", "PostgreSQL", "Mistral OCR", "WhatsApp"],
      },
    ],
    stack_title: "Stack and method",
    stack_intro:
      "I use technology as a means, not the showcase. What users see is clarity; underneath it, clean architecture, integrations, and applied AI are used when they solve a real problem.",
    stack_groups: [
      ["Frontend", "React", "Next.js", "TailwindCSS", "TypeScript"],
      ["Mobile", "React Native", "Expo", "Android", "Google Play"],
      ["Backend", "Python", "Django", "Supabase", "PostgreSQL"],
      ["Applied AI", "Chatbots", "Voice", "OCR", "Computer vision", "Face validation"],
      ["Delivery", "Git", "Docker", "Deploy", "Technical SEO"],
    ],
    about_title: "About",
    about_headline: "I like building with a product mindset and engineering discipline.",
    about_desc:
      "My work sits between understanding the problem, designing a lean solution, and implementing something that can handle real use. Outside code, nature, travel, and simple experiences feed the same lens: cut excess, keep what matters, and adapt fast.",
    principles_title: "operating principles",
    principles: ["clarity before complexity", "prototype before promise", "maintenance before magic"],
    contact_title: "Shall we turn an idea into something real?",
    contact_intro:
      "Tell me the context, the problem, and the result you want to reach. I will answer with a clear possible path.",
    contact_name: "Name",
    contact_email: "E-mail",
    contact_message: "Describe the project, problem, or process...",
    contact_submit: "Send message",
    sending: "Sending...",
    success: "Message sent successfully!",
    error: "Something went wrong. Please try again.",
    unavailable:
      "This form still needs a submission endpoint. For now, contact me through one of the links on the side.",
    footer_text: `© ${currentYear} alanmikeo. Product, code, and applied automation.`,
    back_to_top: "back_to_top",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("pt");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error" | "unavailable">("idle");
  const t = translations[lang];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactFormEndpoint) {
      setFormStatus("unavailable");
      return;
    }

    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,112,243,0.13),transparent_34%),radial-gradient(circle_at_88%_22%,rgba(57,255,20,0.06),transparent_24%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            onClick={() => scrollTo("top")}
            className="flex items-center gap-3 font-mono text-sm text-white"
            aria-label="Voltar ao início"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-11 w-11 border border-white/10 object-cover"
              height={44}
              priority
              src="/brand-logo.png"
              width={44}
            />
            <span className="hidden sm:inline">
              alanmikeo<span className="animate-blink text-electric-blue">_</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 text-xs uppercase text-zinc-500 md:flex">
            <button onClick={() => scrollTo("top")} className="transition-colors hover:text-white">
              {t.nav[0]}
            </button>
            <button onClick={() => scrollTo("projects")} className="transition-colors hover:text-white">
              {t.nav[1]}
            </button>
            <button onClick={() => scrollTo("stack")} className="transition-colors hover:text-white">
              {t.nav[2]}
            </button>
            <button onClick={() => scrollTo("contact")} className="transition-colors hover:text-white">
              {t.nav[3]}
            </button>
          </nav>

          <button
            onClick={() => setLang(lang === "en" ? "pt" : "en")}
            className="flex h-9 items-center justify-center gap-2 border border-white/10 bg-white/[0.03] px-3 font-mono text-xs uppercase text-zinc-400 transition-all hover:border-electric-blue/50 hover:text-white"
            aria-label="Alternar idioma"
          >
            <span className={lang === "pt" ? "text-electric-blue" : ""}>PT</span>
            <span className="text-zinc-700">/</span>
            <span className={lang === "en" ? "text-electric-blue" : ""}>EN</span>
          </button>
        </div>
      </header>

      <section id="top" className="relative z-10 min-h-screen px-5 pb-20 pt-24 md:px-8 md:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase text-zinc-400">
              <span className="h-2 w-2 bg-neon-green shadow-[0_0_18px_rgba(57,255,20,0.7)]" />
              {t.status}
            </div>

            <p className="mb-4 font-mono text-sm uppercase text-electric-blue">{t.hero_kicker}</p>
            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero_title}
              <span className="ml-2 animate-blink font-light text-electric-blue">|</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
              {t.hero_sub}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="group relative inline-flex h-12 items-center justify-center border border-electric-blue/50 bg-electric-blue px-6 text-sm font-medium uppercase text-white transition-all hover:bg-electric-blue/80"
              >
                {t.hero_cta_primary}
                <span className="absolute inset-0 -z-10 bg-electric-blue/30 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex h-12 items-center justify-center border border-white/15 px-6 text-sm font-medium uppercase text-zinc-300 transition-colors hover:border-white/40 hover:text-white"
              >
                {t.hero_cta_secondary}
              </button>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 border-y border-white/10 sm:grid-cols-3">
              {t.metrics.map(([value, label]) => (
                <div key={value} className="border-white/10 py-5 sm:border-r sm:px-5 last:sm:border-r-0">
                  <p className="font-mono text-sm text-white">{value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-up lg:pl-8">
            <div className="terminal-panel relative overflow-hidden border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/50">
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 bg-red-500/70" />
                  <span className="h-2.5 w-2.5 bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 bg-neon-green/70" />
                </div>
                <p className="font-mono text-xs text-zinc-500">{t.console_label}</p>
              </div>

              <div className="relative min-h-[380px] p-5 font-mono text-sm">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:100%_32px]" />
                <div className="relative space-y-5">
                  <p className="text-zinc-500">$ whoami</p>
                  <p className="text-white">{t.console_identity}</p>
                  <p className="pt-3 text-zinc-500">$ current_focus</p>
                  {t.console_lines.map((line) => (
                    <p key={line} className="text-zinc-300">
                      <span className="text-neon-green">&gt;</span> {line}
                    </p>
                  ))}
                  <div className="pt-6">
                    <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
                      <span>{t.progress_label}</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 bg-white/5">
                      <div className="h-full w-full bg-gradient-to-r from-electric-blue to-neon-green" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    {t.terminal_tags.map((item) => (
                      <div key={item} className="border border-white/10 bg-black/35 p-3 text-xs text-zinc-400">
                        <span className="text-electric-blue">#</span> {item}
                      </div>
                    ))}
                  </div>
                  <p className="pt-6 text-white">
                    <span className="text-zinc-500">$</span> {t.ready_label}<span className="animate-blink text-electric-blue">_</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/10 bg-zinc-950/35 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">{t.section_labels[0]}</p>
              <h2 className="section-title">{t.services_title}</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">{t.services_intro}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.services.map((service, index) => (
                <article key={service.title} className="group border border-white/10 bg-black/35 p-6 transition-colors hover:border-electric-blue/40">
                  <p className="mb-8 font-mono text-xs text-zinc-600">0{index + 1}</p>
                  <h3 className="text-xl font-medium text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">{t.section_labels[1]}</p>
            <h2 className="section-title">{t.projects_title}</h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400">{t.projects_intro}</p>
          </div>

          <div className="grid gap-5">
            {t.projects.map((project, index) => (
              <article
                key={project.title}
                className="project-row group grid gap-6 border border-white/10 bg-zinc-950/45 p-5 transition-all hover:border-electric-blue/40 md:grid-cols-[0.55fr_1fr_0.75fr] md:p-7"
              >
                <div className="border border-white/10 bg-black/50 p-4">
                  <div className="mb-8 flex items-center justify-between font-mono text-xs text-zinc-600">
                    <span>case_0{index + 1}</span>
                    <span>{project.status}</span>
                  </div>
                  <div
                    className={[
                      "relative flex h-28 items-center justify-center overflow-hidden border border-white/10",
                      project.logoTone === "pink" ? "border-0 bg-[#f03060] p-0" : "",
                      project.logoTone === "yume" ? "border-0 bg-[#ecdcc3] p-0" : "",
                      project.title === "Nana Consultas"
                        ? "bg-[linear-gradient(to_right_top,#092eb5,#3f2dbb,#5d2bbf,#7627c3,#8d22c6,#8d1fbf,#8c1bb8,#8b18b1,#75179e,#61148c,#4d1179,#3b0d66)] p-5"
                        : "",
                      project.logoTone === "blue" ? "bg-gradient-to-br from-blue-950/80 to-black p-5" : "",
                      project.logoTone === "gestorm" ? "bg-white p-5" : "",
                      project.logoTone === "dark" && project.title !== "Nana Consultas" ? "bg-black p-5" : "",
                    ].join(" ")}
                  >
                    {"logo" in project && project.logo ? (
                      project.title === "Nana Consultas" ? (
                        <div className="relative z-10 inline-flex items-center gap-3 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                          <Image
                            alt={project.logoAlt}
                            className="h-10 w-auto object-contain"
                            height={80}
                            src={project.logo}
                            width={80}
                          />
                          <span className="font-poppins text-[30px] font-semibold leading-none text-white">Nana</span>
                        </div>
                      ) : (
                        <Image
                          alt={project.logoAlt}
                          className={[
                            "relative z-10",
                            project.logoTone === "pink" ? "h-38 w-auto object-cover" : "",
                            project.title === "Yume Asian Food" ? "h-36 w-auto object-contain" : "",
                            project.title === "Latitud Eventos" ? "h-32 w-auto object-contain" : "",
                            project.logoTone !== "pink" && !["Yume Asian Food", "Latitud Eventos"].includes(project.title)
                              ? "max-h-20 w-auto object-contain"
                              : "",
                          ].join(" ")}
                          height={96}
                          src={project.logo}
                          width={220}
                        />
                      )
                    ) : (
                      <div className="text-center">
                        <p
                          className={[
                            "text-3xl font-extrabold tracking-tight",
                            project.logoTone === "yume" ? "text-[#2B2D82]" : "",
                            project.logoTone === "gestorm"
                              ? "font-sans font-extrabold text-blue-700"
                              : "text-white",
                          ].join(" ")}
                        >
                          {project.logoText}
                        </p>
                        {"logoSub" in project && typeof project.logoSub === "string" ? (
                          <p
                            className={[
                              "mt-2 uppercase",
                              project.logoTone === "yume"
                                ? "font-sans text-sm font-medium tracking-[0.22em] text-[#2B2D82]/80"
                                : "font-mono text-xs text-electric-blue",
                            ].join(" ")}
                          >
                            {project.logoSub}
                          </p>
                        ) : null}
                      </div>
                    )}
                    {project.logoTone !== "pink" && project.logoTone !== "yume" && project.logoTone !== "gestorm" && project.title !== "Nana Consultas" && (
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_22px] opacity-40" />
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <span className="h-2 bg-white/[0.06]" />
                    <span className="h-2 bg-electric-blue/50" />
                    <span className="h-2 bg-neon-green/25" />
                  </div>
                </div>

                <div className="self-center">
                  <p className="mb-3 font-mono text-xs uppercase text-electric-blue">{project.label}</p>
                  <h3 className="max-w-2xl text-2xl font-medium leading-tight text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{project.desc}</p>
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex border border-white/10 px-4 py-2 font-mono text-xs uppercase text-zinc-300 transition-colors hover:border-electric-blue/50 hover:text-white"
                    >
                      {project.linkLabel}
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex border border-white/10 px-4 py-2 font-mono text-xs uppercase text-zinc-600">
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap content-center gap-2 md:justify-end">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="relative z-10 border-y border-white/10 bg-zinc-950/35 px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">{t.section_labels[2]}</p>
            <h2 className="section-title">{t.stack_title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">{t.stack_intro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.stack_groups.map(([group, ...items]) => (
              <article key={group} className="border border-white/10 bg-black/35 p-6">
                <h3 className="font-mono text-sm text-white">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="bg-white/[0.05] px-3 py-2 text-sm text-zinc-400">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker">{t.section_labels[3]}</p>
            <h2 className="section-title">{t.about_title}</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <h3 className="text-3xl font-light leading-tight text-white md:text-5xl">{t.about_headline}</h3>
              <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">{t.about_desc}</p>
            </div>

            <div className="border border-white/10 bg-zinc-950/50 p-6">
              <div className="mb-6 font-mono text-xs uppercase text-zinc-500">{t.principles_title}</div>
              {t.principles.map((principle) => (
                <div key={principle} className="border-t border-white/10 py-4 text-sm text-zinc-300">
                  <span className="mr-2 text-neon-green">&gt;</span>
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-white/10 bg-black px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">{t.section_labels[4]}</p>
            <h2 className="section-title">{t.contact_title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">{t.contact_intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://github.com/alanmikeo" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2.14c-3.2.69-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.06c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.16c0 .31.21.67.79.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                GitHub
              </a>
              <a href="https://instagram.com/alanmikeo" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="2" rx="5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          <form
            action={contactFormEndpoint}
            method="POST"
            name="contact-form"
            onSubmit={handleSubmit}
            className="space-y-6 border border-white/10 bg-zinc-950/50 p-5 md:p-8"
          >
            <input type="hidden" name="_subject" value="Nova proposta pelo portfolio alanmikeo" />
            {formStatus === "success" && (
              <div className="border border-neon-green/30 px-4 py-3 font-mono text-sm text-neon-green/90">{t.success}</div>
            )}
            {formStatus === "error" && (
              <div className="border border-red-400/30 px-4 py-3 font-mono text-sm text-red-300">{t.error}</div>
            )}
            {formStatus === "unavailable" && (
              <div className="border border-yellow-400/30 px-4 py-3 font-mono text-sm text-yellow-200">{t.unavailable}</div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <input type="text" name="name" placeholder={t.contact_name} className="field" required />
              <input type="email" name="email" placeholder={t.contact_email} className="field" required />
            </div>

            <textarea name="message" placeholder={t.contact_message} rows={5} className="field resize-none" required />

            <button type="submit" disabled={formStatus === "submitting"} className="h-12 w-full border border-electric-blue/50 bg-electric-blue px-6 text-sm font-medium uppercase text-white transition-colors hover:bg-electric-blue/80 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto">
              {formStatus === "submitting" ? t.sending : t.contact_submit}
            </button>
          </form>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p className="font-mono">{t.footer_text}</p>
          <button onClick={() => scrollTo("top")} className="font-mono transition-colors hover:text-white">
            {t.back_to_top}
            <span className="animate-blink text-electric-blue">_</span>
          </button>
        </div>
      </footer>
    </main>
  );
}
