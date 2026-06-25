"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

const translations = {
  en: {
    hero_sub: "Architecting digital products. Optimizing business with AI agents.",
    hero_cta: "[ Let's build ]",
    stack_title: "The Stack",
    stack_desc_1: "I combine ",
    stack_desc_django: "Django/React/Next.js",
    stack_desc_2: " for robust foundations with ",
    stack_desc_n8n: "Autogravity/n8n/OpenAI",
    stack_desc_3: " for intelligent automation.",
    solutions_title: "Solutions",
    sol_1_title: "AI Integration",
    sol_1_desc: "Reduction of manual tasks through adaptable intelligent agents.",
    sol_2_title: "Product Engineering",
    sol_2_desc: "From zero to deploy: transforming ideas into MVPs and scalable platforms.",
    sol_3_title: "Legacy Optimization",
    sol_3_desc: "Modernization of legacy systems with a focus on performance and maintainability.",
    traveler_title: "The Traveler's Soul",
    traveler_sub: "Believer in a life fueled by experiences, not just luxury.",
    traveler_desc: "Beyond code, my passion for nature and the desire to backpack through the World shape how I see the world and create solutions: focusing on the essential, adaptability, and a vision beyond the obvious.",
    contact_title: "Contact",
    contact_name: "Name",
    contact_email: "E-mail",
    contact_message: "Project description...",
    contact_submit: "[ Send Message ]",
    footer_text: `© ${new Date().getFullYear()} alanmikeo.`
  },
  pt: {
    hero_sub: "Arquitetando produtos digitais. Otimizando negócios com agentes de IA.",
    hero_cta: "[ Let's build ]",
    stack_title: "A Stack",
    stack_desc_1: "Eu combino ",
    stack_desc_django: "Django/React/Next.js",
    stack_desc_2: " para fundações robustas com ",
    stack_desc_n8n: "Autogravity/n8n/OpenAI",
    stack_desc_3: " para automação inteligente.",
    solutions_title: "Soluções",
    sol_1_title: "Integração de IA",
    sol_1_desc: "Redução de tarefas manuais através de agentes inteligentes adaptáveis.",
    sol_2_title: "Engenharia de Produto",
    sol_2_desc: "Do zero ao deploy: transformando ideias em MVPs e plataformas escaláveis.",
    sol_3_title: "Otimização de Legado",
    sol_3_desc: "Modernização de sistemas antigos com foco em performance e manutenibilidade.",
    traveler_title: "Alma de Viajante",
    traveler_sub: "Acredito em uma vida movida a experiências, não apenas luxo.",
    traveler_desc: "Além do código, minha paixão por natureza e o desejo de mochilar pelo mundo moldam a forma como enxergo o mundo e crio soluções: com foco no essencial, adaptabilidade e uma visão além do óbvio.",
    contact_title: "Contato",
    contact_name: "Nome",
    contact_email: "E-mail",
    contact_message: "Descrição do projeto...",
    contact_submit: "[ Enviar Mensagem ]",
    footer_text: `© ${new Date().getFullYear()} alanmikeo.`
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "pt">("en");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const t = translations[lang];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-12 overflow-x-hidden">

      {/* Floating Language Toggle */}
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
        <button
          onClick={() => setLang(lang === "en" ? "pt" : "en")}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-950/80 backdrop-blur border border-white/10 hover:border-electric-blue/50 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,112,243,0.3)]"
        >
          <span className={lang === "pt" ? "text-electric-blue font-bold" : ""}>PT</span>
          <span className="text-zinc-600">/</span>
          <span className={lang === "en" ? "text-electric-blue font-bold" : ""}>EN</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex items-center gap-1">
            alanmikeo<span className="animate-blink text-white font-thin">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 font-light">
            {t.hero_sub}
          </p>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-widest uppercase border border-white/20 hover:border-electric-blue/50 hover:text-white transition-all duration-300"
          >
            {t.hero_cta}
            <span className="absolute inset-0 bg-electric-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-40">
          <div className="w-[1px] h-24 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* The Stack Section */}
      <section className="w-full py-40 px-6 md:px-12 bg-zinc-950/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-mono tracking-[0.2em] text-neon-green/70 uppercase mb-12">{t.stack_title}</h2>
          <p className="text-2xl md:text-4xl leading-loose font-light text-zinc-400">
            {t.stack_desc_1}
            <span className="text-zinc-100 font-medium pb-1 border-b border-white/10">{t.stack_desc_django}</span>
            {t.stack_desc_2}
            <br className="hidden md:block" />
            <span className="text-zinc-100 font-medium pb-1 border-b border-white/10">{t.stack_desc_n8n}</span>
            {t.stack_desc_3}
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-40 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono tracking-[0.2em] text-zinc-500 uppercase mb-20 text-center">{t.solutions_title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group border border-white/5 bg-zinc-950/50 p-10 hover:border-electric-blue/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-8 h-8 rounded-full border border-white/10 mb-8 flex items-center justify-center text-xs font-mono text-zinc-500 group-hover:border-electric-blue/50 group-hover:text-electric-blue transition-colors">01</div>
              <h3 className="text-xl font-medium text-white mb-4">{t.sol_1_title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {t.sol_1_desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="group border border-white/5 bg-zinc-950/50 p-10 hover:border-electric-blue/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-8 h-8 rounded-full border border-white/10 mb-8 flex items-center justify-center text-xs font-mono text-zinc-500 group-hover:border-neon-green/50 group-hover:text-neon-green transition-colors">02</div>
              <h3 className="text-xl font-medium text-white mb-4">{t.sol_2_title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {t.sol_2_desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="group border border-white/5 bg-zinc-950/50 p-10 hover:border-electric-blue/30 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="w-8 h-8 rounded-full border border-white/10 mb-8 flex items-center justify-center text-xs font-mono text-zinc-500 group-hover:border-electric-blue/50 group-hover:text-electric-blue transition-colors">03</div>
              <h3 className="text-xl font-medium text-white mb-4">{t.sol_3_title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {t.sol_3_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Traveler's Soul Section */}
      <section className="w-full py-40 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <h2 className="text-sm font-mono tracking-[0.2em] text-zinc-500 uppercase">{t.traveler_title}</h2>
            <h3 className="text-3xl md:text-5xl font-light text-zinc-100 leading-tight">
              {t.traveler_sub}
            </h3>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              {t.traveler_desc}
            </p>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] w-full">
            <div className="absolute inset-0 border border-white/5 flex items-center justify-center overflow-hidden bg-zinc-950/50 group">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="z-10 flex flex-col items-center justify-center gap-6 group-hover:scale-110 transition-transform duration-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-700 group-hover:text-zinc-400 transition-colors duration-500"
                >
                  {/* Backpack body */}
                  <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10Z" />
                  {/* Top flap */}
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  {/* Front pocket */}
                  <path d="M6 14a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4Z" />
                  {/* Straps */}
                  <path d="M6 6c-2 0-3 2-3 4" />
                  <path d="M18 6c2 0 3 2 3 4" />

                  {/* Badges */}
                  {/* JS Badge */}
                  <g transform="translate(13, 15)">
                    <rect x="0" y="0" width="4" height="4" rx="0.5" fill="currentColor" stroke="none" />
                    <text x="0.8" y="2.9" fontSize="2.5" fontWeight="bold" fill="#050505" stroke="none" fontFamily="monospace">JS</text>
                  </g>

                  {/* Python Badge */}
                  <g transform="translate(7, 15)">
                    <rect x="0" y="0" width="4" height="4" rx="2" fill="currentColor" stroke="none" />
                    <text x="1.1" y="2.8" fontSize="2.2" fontWeight="bold" fill="#050505" stroke="none" fontFamily="monospace">PY</text>
                  </g>

                  {/* React Badge */}
                  <g transform="translate(10, 10)">
                    <ellipse cx="2" cy="2" rx="2.5" ry="0.8" stroke="currentColor" strokeWidth="0.3" transform="rotate(30 2 2)" />
                    <ellipse cx="2" cy="2" rx="2.5" ry="0.8" stroke="currentColor" strokeWidth="0.3" transform="rotate(90 2 2)" />
                    <ellipse cx="2" cy="2" rx="2.5" ry="0.8" stroke="currentColor" strokeWidth="0.3" transform="rotate(150 2 2)" />
                    <circle cx="2" cy="2" r="0.4" fill="currentColor" stroke="none" />
                  </g>
                </svg>
              </div>
              {/* Subtle structural grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 m-4" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 m-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-40 px-6 md:px-12 border-t border-white/5 bg-zinc-950/20">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-sm font-mono tracking-[0.2em] text-zinc-500 uppercase mb-16 text-center">{t.contact_title}</h2>

          <form
            name="contact-form"
            data-netlify="true"
            method="POST"
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8"
          >
            {/* Netlify hidden field for routing */}
            <input type="hidden" name="form-name" value="contact-form" />

            {formStatus === "success" && (
              <div className="text-neon-green/80 text-center font-mono text-sm tracking-widest py-4 border border-neon-green/20">
                {lang === "en" ? "Message sent successfully!" : "Mensagem enviada com sucesso!"}
              </div>
            )}
            {formStatus === "error" && (
              <div className="text-red-400 text-center font-mono text-sm tracking-widest py-4 border border-red-400/20">
                {lang === "en" ? "Something went wrong. Please try again." : "Algo deu errado. Tente novamente."}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                placeholder={t.contact_name}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-electric-blue/50 transition-colors font-light"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact_email}
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-electric-blue/50 transition-colors font-light"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder={t.contact_message}
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-electric-blue/50 transition-colors font-light resize-none mt-2"
              required
            ></textarea>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="mt-6 group relative inline-flex items-center justify-center px-10 py-4 text-sm font-medium tracking-widest uppercase border border-white/20 hover:border-electric-blue/50 hover:text-white transition-all duration-300 self-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting"
                ? (lang === "en" ? "[ Sending... ]" : "[ Enviando... ]")
                : t.contact_submit}
              <span className="absolute inset-0 bg-electric-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </form>
        </div>
      </section>

      <footer className="w-full py-12 flex flex-col items-center justify-center border-t border-white/5 gap-6">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/alanmikeo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link
            href="https://instagram.com/alanmikeo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link
            href="https://facebook.com/alanoliveiramichael"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
        </div>
        <p className="text-xs text-zinc-600 font-mono tracking-widest uppercase">
          {t.footer_text}
        </p>
      </footer>
    </main>
  );
}
