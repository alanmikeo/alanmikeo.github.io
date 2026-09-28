"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type Language = "pt" | "en";
const siteUrl = "https://alanmikeo.github.io";
const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "https://formspree.io/f/xpqgpekb";

const projects = [
  {
    name: "Lova Dating",
    category: { pt: "App mobile", en: "Mobile app" },
    description: {
      pt: "App de relacionamento publicado na Google Play, com matches, chat, moderação e assinatura premium.",
      en: "Dating app published on Google Play, with matches, chat, moderation, and a premium subscription.",
    },
    technology: { pt: "React Native · Expo · Supabase", en: "React Native · Expo · Supabase" },
    preview: "/portfolio/lova-preview-pt.jpg",
    previewEn: "/portfolio/lova-preview.jpg",
    previewAlt: { pt: "Página do aplicativo Lova Dating", en: "Lova Dating app website" },
    href: "https://play.google.com/store/apps/details?id=com.alanmikeo.lova",
    extraHref: "https://alanmikeo.github.io/lova-dating/",
  },
  {
    name: "Yume Asian Food",
    category: { pt: "Site para restaurante", en: "Restaurant website" },
    description: {
      pt: "Site de restaurante em Guarapuava com vitrine de produtos, pedidos online e SEO local.",
      en: "Restaurant website in Guarapuava with a product showcase, online ordering, and local SEO.",
    },
    technology: { pt: "Landing page · SEO local", en: "Landing page · Local SEO" },
    preview: "/portfolio/yume-preview.jpg",
    previewAlt: { pt: "Página do restaurante Yume Asian Food", en: "Yume Asian Food restaurant website" },
    href: "https://alanmikeo.github.io/yume-asian-food/",
  },
  {
    name: "Latitud Eventos",
    category: { pt: "Espaço para eventos", en: "Event venue" },
    description: {
      pt: "Landing page responsiva que apresenta o espaço e facilita pedidos de orçamento.",
      en: "Responsive landing page that presents the venue and makes quote requests easy.",
    },
    technology: { pt: "Landing page · Design responsivo", en: "Landing page · Responsive design" },
    preview: "/portfolio/latitud-preview.jpg",
    previewAlt: { pt: "Página do espaço Latitud Eventos", en: "Latitud Eventos venue website" },
    href: "https://alanmikeo.github.io/latitud-eventos/",
  },
  {
    name: "Nana Consultas",
    category: { pt: "Site de serviços", en: "Services website" },
    description: {
      pt: "Site comercial com serviços, preços, depoimentos e contato direto pelo WhatsApp.",
      en: "Commercial website with services, prices, testimonials, and direct WhatsApp contact.",
    },
    technology: { pt: "Site comercial · Conversão", en: "Commercial website · Conversion" },
    preview: "/portfolio/nana-preview.jpg",
    previewAlt: { pt: "Página do site Nana Consultas", en: "Nana Consultas website" },
    href: "https://alanmikeo.github.io/nana-consultas/",
  },
  {
    name: "Gestorm",
    category: { pt: "Sistema de gestão", en: "Management system" },
    description: {
      pt: "Gestão financeira e logística com dashboard, WhatsApp e leitura de documentos por IA e OCR.",
      en: "Finance and logistics platform with dashboards, WhatsApp, and AI document reading with OCR.",
    },
    technology: { pt: "React · Django · PostgreSQL · IA", en: "React · Django · PostgreSQL · AI" },
  },
] as const;

const copy = {
  pt: {
    skip: "Pular para o conteúdo", nav: "Navegação principal", projects: "Projetos", expertise: "Atuação", contact: "Contato",
    eyebrow: "Alan Michael / desenvolvedor full-stack",
    headline1: "Apps e sistemas", headline2: "que ganham ", headlineAccent: "vida.",
    heroCopy: "Desenvolvo produtos digitais com foco em uso real. Da ideia ao app, sistema ou site publicado.",
    explore: "Explorar projetos", talk: "Vamos conversar", heroLeft: "Web · Mobile · Automação", heroRight: "Role para explorar",
    portfolioLabel: "Portfólio", portfolioTitle1: "Projetos reais.", portfolioTitle2: "Resultados visíveis.",
    portfolioNote: "Aplicativos, sistemas e sites criados para pessoas e negócios de verdade.",
    view: "Abrir projeto", store: "Google Play", appSite: "Site do app", private: "Projeto privado",
    servicesLabel: "O que eu construo", servicesTitle: "Do primeiro conceito ao produto em uso.",
    servicesIntro: "Sou Alan Michael. Uno produto, design e engenharia para criar software claro para quem usa e sólido para quem mantém.",
    services: [
      ["01", "Apps e sistemas", "Aplicações web e mobile, dashboards, fluxos de negócio e produtos sob medida."],
      ["02", "Sites e experiências", "Sites responsivos, rápidos e preparados para aparecer nas buscas."],
      ["03", "Automação e IA", "Integrações, OCR, chatbots e processos que reduzem trabalho manual."],
    ],
    stackLabel: "Tecnologias", stack: "React · Next.js · React Native · Django · Python · PostgreSQL · Supabase",
    contactLabel: "Próximo passo", contactTitle1: "Seu projeto começa", contactTitle2: "com uma ", contactAccent: "conversa.",
    contactIntro: "Conte o que você precisa. Respondo com um caminho possível e direto ao ponto.",
    name: "Nome", email: "E-mail", message: "Sobre o que você quer conversar?",
    send: "Enviar mensagem", sending: "Enviando...", success: "Mensagem enviada com sucesso.",
    error: "Não foi possível enviar. Tente novamente.", footer: "Produto, código e IA aplicada.", backTop: "Voltar ao topo",
  },
  en: {
    skip: "Skip to content", nav: "Main navigation", projects: "Projects", expertise: "Expertise", contact: "Contact",
    eyebrow: "Alan Michael / full-stack developer",
    headline1: "Apps and systems", headline2: "brought to ", headlineAccent: "life.",
    heroCopy: "I build digital products designed for real use. From the first idea to a published app, system, or website.",
    explore: "Explore projects", talk: "Let's talk", heroLeft: "Web · Mobile · Automation", heroRight: "Scroll to explore",
    portfolioLabel: "Portfolio", portfolioTitle1: "Real projects.", portfolioTitle2: "Visible results.",
    portfolioNote: "Apps, systems, and websites made for real people and businesses.",
    view: "Open project", store: "Google Play", appSite: "App website", private: "Private project",
    servicesLabel: "What I build", servicesTitle: "From first concept to working product.",
    servicesIntro: "I'm Alan Michael. I bring product, design, and engineering together to create software that is clear to use and solid to maintain.",
    services: [
      ["01", "Apps and systems", "Web and mobile applications, dashboards, business workflows, and custom products."],
      ["02", "Sites and experiences", "Responsive, fast websites built to be found in search."],
      ["03", "Automation and AI", "Integrations, OCR, chatbots, and processes that reduce manual work."],
    ],
    stackLabel: "Technologies", stack: "React · Next.js · React Native · Django · Python · PostgreSQL · Supabase",
    contactLabel: "Next step", contactTitle1: "Your project starts", contactTitle2: "with a ", contactAccent: "conversation.",
    contactIntro: "Tell me what you need. I'll reply with a clear possible path.",
    name: "Name", email: "Email", message: "What would you like to discuss?",
    send: "Send message", sending: "Sending...", success: "Message sent successfully.",
    error: "The message could not be sent. Please try again.", footer: "Product, code, and applied AI.", backTop: "Back to top",
  },
} as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person", "@id": siteUrl + "/#person", name: "Alan Michael",
      alternateName: "alanmikeo", url: siteUrl, image: siteUrl + "/brand-logo.png",
      jobTitle: "Desenvolvedor full-stack",
      knowsAbout: ["Desenvolvimento de aplicativos", "Desenvolvimento web", "React Native", "Next.js", "Django", "Automação", "IA aplicada"],
      sameAs: ["https://github.com/alanmikeo", "https://instagram.com/alanmikeo"],
    },
    { "@type": "WebSite", "@id": siteUrl + "/#website", url: siteUrl, name: "Alan Michael | Desenvolvedor full-stack", inLanguage: "pt-BR" },
    {
      "@type": "CollectionPage", "@id": siteUrl + "/#portfolio", url: siteUrl, name: "Portfólio de Alan Michael",
      inLanguage: "pt-BR", about: { "@id": siteUrl + "/#person" }, isPartOf: { "@id": siteUrl + "/#website" },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.filter((project) => "href" in project).map((project, index) => ({
          "@type": "ListItem", position: index + 1, name: project.name,
          url: "href" in project ? project.href : undefined,
        })),
      },
    },
  ],
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("submitting");
    const form = event.currentTarget;
    try {
      const response = await fetch(formEndpoint, {
        method: "POST", headers: { Accept: "application/json" }, body: new FormData(form),
      });
      if (!response.ok) throw new Error("Formspree request failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header shell" id="inicio">
        <a className="brand" href="#inicio" aria-label={language === "pt" ? "Alan Michael, início" : "Alan Michael, home"}>alanmikeo<span>.</span></a>
        <nav aria-label={t.nav}>
          <a href="#projetos">{t.projects}</a>
          <a className="nav-expertise" href="#atuacao">{t.expertise}</a>
          <a className="nav-contact" href="#contato">{t.contact} <span aria-hidden="true">↗</span></a>
          <div className="language-switch" role="group" aria-label={language === "pt" ? "Idioma" : "Language"}>
            <button type="button" lang="pt-BR" aria-pressed={language === "pt"} onClick={() => setLanguage("pt")}>PT</button>
            <span aria-hidden="true">/</span>
            <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="orb" aria-hidden="true" />
          <div className="shell hero-content">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">{t.headline1}<br />{t.headline2}<em>{t.headlineAccent}</em></h1>
            <p className="hero-copy">{t.heroCopy}</p>
            <div className="hero-actions">
              <a className="button" href="#projetos">{t.explore}<span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contato">{t.talk}</a>
            </div>
          </div>
          <div className="shell hero-bottom"><span>{t.heroLeft}</span><span>{t.heroRight} ↓</span></div>
        </section>

        <section className="portfolio shell" id="projetos" aria-labelledby="portfolio-title">
          <div className="section-top">
            <div><p className="eyebrow">{t.portfolioLabel}</p><h2 id="portfolio-title">{t.portfolioTitle1}<br />{t.portfolioTitle2}</h2></div>
            <p className="section-note">{t.portfolioNote}</p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className="project" key={project.name}>
                <div className="project-image-shell">
                  {"preview" in project ? (
                    <Image
                      src={"previewEn" in project && language === "en" ? project.previewEn : project.preview}
                      alt={project.previewAlt[language]}
                      width={1280}
                      height={720}
                      className="project-image"
                    />
                  ) : (
                    <div className="project-image-placeholder"><span>Gestorm</span></div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-topline"><span>0{index + 1} / 05</span><span>{project.category[language]}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description[language]}</p>
                  <p className="project-technology">{project.technology[language]}</p>
                  <div className="project-links">
                    {"href" in project ? <a href={project.href} target="_blank" rel="noopener noreferrer">{index === 0 ? t.store : t.view} <span aria-hidden="true">↗</span></a> : <span>{t.private}</span>}
                    {"extraHref" in project && <a href={project.extraHref} target="_blank" rel="noopener noreferrer">{t.appSite} <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>        </section>

        <section className="expertise-section" id="atuacao" aria-labelledby="expertise-title">
          <div className="shell">
            <div className="section-top"><div><p className="eyebrow">{t.servicesLabel}</p><h2 id="expertise-title">{t.servicesTitle}</h2></div><p className="section-note">{t.servicesIntro}</p></div>
            <div className="services">
              {t.services.map((service) => <article className="service" key={service[0]}><span>{service[0]}</span><h3>{service[1]}</h3><p>{service[2]}</p></article>)}
            </div>
            <div className="stack-line"><span>{t.stackLabel}</span><p>{t.stack}</p></div>
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-grid">
              <div className="contact-copy">
                <p className="eyebrow">{t.contactLabel}</p>
                <h2 id="contact-title">{t.contactTitle1}<br />{t.contactTitle2}<em>{t.contactAccent}</em></h2>
                <p>{t.contactIntro}</p>
                <div className="social-links">
                  <a href="https://github.com/alanmikeo" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" className="social-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.56v-2.14c-3.2.69-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.06c.98 0 1.96.13 2.88.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.16c0 .31.21.67.79.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://instagram.com/alanmikeo" target="_blank" rel="noopener noreferrer">
                    <svg aria-hidden="true" className="social-icon" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="2" rx="5" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" /></svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
              <form action={formEndpoint} method="POST" className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="Nova mensagem pelo portfólio alanmikeo" />
                <div className="form-row"><div className="form-field"><label htmlFor="contact-name">{t.name}</label><input id="contact-name" name="name" autoComplete="name" required /></div><div className="form-field"><label htmlFor="contact-email">{t.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div></div>
                <div className="form-field"><label htmlFor="contact-message">{t.message}</label><textarea id="contact-message" name="message" rows={5} required /></div>
                <button className="button" type="submit" disabled={formStatus === "submitting"}>{formStatus === "submitting" ? t.sending : t.send}<span aria-hidden="true">↗</span></button>
                <p className="form-status" role="status" aria-live="polite">{formStatus === "success" ? t.success : formStatus === "error" ? t.error : ""}</p>
              </form>
            </div>
            <div className="footer-bottom"><a className="brand" href="#inicio">alanmikeo<span>.</span></a><span>© {new Date().getFullYear()} Alan Michael · {t.footer}</span><a href="#inicio">{t.backTop} ↑</a></div>
          </div>
        </section>
      </main>
    </>
  );
}
