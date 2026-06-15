/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Printer,
  ChevronDown,
  Flame,
  Settings,
  Check,
  Code,
  Mail
} from "lucide-react";
import BookSlider from "./components/BookSlider";
import FAQSection from "./components/FAQSection";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<{
    id: string;
    title: string;
    price: number;
  } | null>(null);

  // Configured with persistent local video embed simulation space
  const [embedCode, setEmbedCode] = useState<string>(() => {
    return localStorage.getItem("vsl_embed_code") || `<iframe src="https://imgur.com/a/e3h1EYU/embed?pub=true" style="border: 0; width: 100%; height: 100%; position: absolute; top:0; left:0;" allowfullscreen></iframe>`;
  });
  const [showConfig, setShowConfig] = useState<boolean>(false);
  const [tempEmbed, setTempEmbed] = useState<string>("");

  const handleSaveEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("vsl_embed_code", tempEmbed);
    setEmbedCode(tempEmbed);
    setShowConfig(false);
  };

  const handleClearEmbed = () => {
    localStorage.removeItem("vsl_embed_code");
    setEmbedCode("");
    setTempEmbed("");
  };

  const handleScrollToOffers = () => {
    const el = document.getElementById("ofertas");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCheckout = (id: string, title: string, price: number) => {
    setSelectedPlan({ id, title, price });
  };

  return (
    <div id="sales-page-root" className="min-h-screen bg-[#F8FAF7] text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-800">
      
      <main className="min-h-screen bg-white">
        <div className="max-w-[480px] mx-auto px-5 pt-8 pb-12">
          
          {/* 1. Header Badge */}
          <div className="flex justify-center">
            <span className="inline-block rounded-full bg-[color:var(--soft-mint)] border border-[color:var(--brand-green)]/30 text-[color:var(--brand-green-dark)] font-bold text-xs px-4 py-1.5 tracking-wide uppercase">
              1 Ano de Atividades
            </span>
          </div>

          {/* 2. Headline Curta e Imponente */}
          <h1 className="mx-auto mt-3 max-w-[390px] text-[24px] font-black text-center leading-tight text-foreground text-balance">
            <span className="text-[color:var(--badge-orange)] block text-xs tracking-wider font-extrabold uppercase mb-1">CHEGA DE IMPROVISAR DE MADRUGADA!</span>
            Atividades Bíblicas Prontas para Imprimir!
          </h1>

          {/* 3. Sub-headline */}
          <p className="mx-auto mt-3 max-w-[350px] text-center text-[13.5px] leading-relaxed text-foreground/85 text-balance">
            O material definitivo para a Tia da Salinha. Sem complicação: é só baixar pelo celular, imprimir e ver as crianças aprendendo de verdade.
          </p>

          {/* 4. Portrait Video Frame inside Smartphone Mockup */}
          <div className="mx-auto mt-6 w-[280px] relative rounded-[40px] bg-neutral-900 p-2.5 shadow-2xl border-[8px] border-neutral-950 ring-4 ring-neutral-800/10">
            {/* Notch */}
            <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-950 rounded-b-xl z-30 flex items-center justify-center">
              <div className="w-8 h-1 bg-neutral-800 rounded-full mb-0.5"></div>
              <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full absolute right-3 top-[2px]"></div>
            </div>

            {/* Inner display screen */}
            <div className="relative rounded-[30px] overflow-hidden bg-black aspect-[9/16] shadow-inner flex flex-col items-center justify-center">
              {embedCode ? (
                embedCode.includes("imgur.com") ? (
                  <video
                    src="https://i.imgur.com/8lGnT4F.mp4"
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px] pointer-events-none"
                    playsInline
                    autoPlay
                    muted
                    loop
                    controls={false}
                    controlsList="nodownload nofullscreen noremoteplayback"
                    onContextMenu={(e) => e.preventDefault()}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div 
                    className="absolute inset-0 w-full h-full flex items-center justify-center [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:inset-0"
                    dangerouslySetInnerHTML={{ __html: embedCode }}
                  />
                )
              ) : (
                /* Sleek centered material placeholder screen waiting for real video embed */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black">
                  
                  {/* Glowing background hint of red element */}
                  <div className="absolute inset-0 flex items-center justify-center blur-2xl opacity-15 pointer-events-none">
                    <div className="w-24 h-24 rounded-full bg-red-600/40"></div>
                  </div>

                  {/* Centered red indicator bubble with label requested */}
                  <div className="relative flex flex-col items-center justify-center text-center space-y-3.5 z-10">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
                    </span>
                    
                    <div className="space-y-1">
                      <span className="text-white font-black text-[10.5px] uppercase tracking-widest block bg-red-600/15 border border-red-500/30 px-3 py-1 rounded-full">
                        MATERIAL POR DENTRO
                      </span>
                    </div>

                    <p className="text-zinc-500 text-[10px] max-w-[170px] leading-relaxed mx-auto font-medium">
                      O vídeo demonstrativo do material será exibido aqui.
                    </p>
                  </div>

                </div>
              )}

              {/* Centered Transparent Instagram Watermark Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-25">
                <span className="text-white/20 text-[10.5px] font-black tracking-wider uppercase rotate-[-30deg] border border-white/10 px-2.5 py-1 rounded bg-black/15 backdrop-blur-[0.5px] font-mono whitespace-nowrap shadow-sm">
                  @ministerio_infantil52
                </span>
              </div>
            </div>
          </div>



          {/* 5. Bullets List below Video */}
          <ul className="mx-auto mt-6 max-w-[280px] flex flex-col gap-2">
            <li className="flex items-center gap-2.5 rounded-full border border-[color:var(--brand-green)]/15 bg-[color:var(--soft-mint)]/70 pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-blue-500">
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                1 ano de roteiros bíblicos completos
              </span>
            </li>
            
            <li className="flex items-center gap-2.5 rounded-full border border-[color:var(--brand-green)]/15 bg-[color:var(--soft-mint)]/70 pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-pink-500">
                <Printer className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                Atividades prontas em PDF de alta qualidade
              </span>
            </li>

            <li className="flex items-center gap-2.5 rounded-full border border-[color:var(--brand-green)]/15 bg-[color:var(--soft-mint)]/70 pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500">
                <Mail className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                Entrega automática diretamente no seu E-mail
              </span>
            </li>
          </ul>

          {/* 6. Top CTA Button */}
          <div className="mx-auto mt-6 text-center">
            <button
              onClick={handleScrollToOffers}
              className="animate-cta-breathe block w-full max-w-[370px] mx-auto rounded-xl bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] transition-colors text-white font-extrabold py-4 text-[13.5px] px-2 tracking-wide text-center shadow-lg uppercase cursor-pointer"
            >
              👉 QUERO 1 ANO DE ATIVIDADES BÍBLICAS
            </button>
            <p className="mt-2 text-[11px] text-neutral-500 font-medium">
              🔒 Pagamento Seguro • Acesso Imediato • Risco Zero
            </p>
          </div>

          {/* SEÇÃO 1 - IDENTIFICAÇÃO E DOR */}
          <div className="mx-auto mt-12 max-w-[370px] bg-amber-50/50 border border-amber-100 rounded-3xl p-5 shadow-sm text-left">
            <h2 className="text-base font-extrabold text-[#111827] flex items-center gap-1.5 leading-snug">
              <span className="text-xl">👩‍🏫</span> Eu sei exatamente o que você passa, Tia...
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-700">
              Varoa, vamos falar a verdade. Você ama o seu chamado, mas já não aguenta mais:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-2.5 items-start">
                <span className="text-red-500 text-sm mt-0.5">❌</span>
                <span className="text-[13px] text-neutral-700 leading-snug">
                  Perder horas no Pinterest caçando ideias lindas, mas impossíveis de fazer.
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-red-500 text-sm mt-0.5">❌</span>
                <span className="text-[13px] text-neutral-700 leading-snug">
                  Gastar do próprio bolso com EVA, cola e materiais caros toda semana.
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-red-500 text-sm mt-0.5">❌</span>
                <span className="text-[13px] text-neutral-700 leading-snug">
                  Sentir aquele desespero de última hora com medo das crianças não prestarem atenção e virarem a salinha de cabeça para baixo.
                </span>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-amber-100/70 text-[13px] leading-relaxed text-[#10B981] font-bold">
              🕊️ A paz chegou! Você não é babá, você é professora. E para dominar a salinha e ensinar a Palavra com excelência, você só precisa do material certo.
            </div>
          </div>

          {/* 7. Benefits Heading */}
          <h2 className="mx-auto mt-12 max-w-[350px] text-[20px] font-extrabold text-center text-foreground leading-snug text-balance">
            O que as crianças vão aprender com as atividades
          </h2>

          {/* 8. Interactive Booklet page preview slider */}
          <BookSlider />

          {/* 9. Bullets details of items to learn */}
          <ul className="mx-auto mt-6 max-w-[340px] space-y-2.5">
            <li className="flex gap-3 items-center rounded-2xl bg-[color:var(--soft-mint)]/60 border border-[color:var(--brand-green)]/20 px-4 py-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-foreground/90 text-balance">
                Memorizar salmos e histórias bíblicas brincando
              </span>
            </li>

            <li className="flex gap-3 items-center rounded-2xl bg-[color:var(--soft-mint)]/60 border border-[color:var(--brand-green)]/20 px-4 py-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-sky-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-foreground/90 text-balance">
                Visualizar a lição com cartilhas ilustrativas lindas
              </span>
            </li>

            <li className="flex gap-3 items-center rounded-2xl bg-[color:var(--soft-mint)]/60 border border-[color:var(--brand-green)]/20 px-4 py-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-orange-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-foreground/90 text-balance">
                Entender as passagens bíblicas de forma mais direta e marcante
              </span>
            </li>

            <li className="flex gap-3 items-center rounded-2xl bg-[color:var(--soft-mint)]/60 border border-[color:var(--brand-green)]/20 px-4 py-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-red-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
                  <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-foreground/90 text-balance">
                Participar de dinâmicas divertidas com a turminha toda
              </span>
            </li>

            <li className="flex gap-3 items-center rounded-2xl bg-[color:var(--soft-mint)]/60 border border-[color:var(--brand-green)]/20 px-4 py-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-[2.4]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <span className="text-[14.5px] leading-snug text-foreground/90 text-balance">
                Fixar a lição com roteiros e lembrancinhas prontas
              </span>
            </li>
          </ul>

          {/* 10. Classroom transformation section */}
          <h2 className="mx-auto mt-12 max-w-[340px] text-[22px] font-extrabold text-center text-foreground leading-snug text-balance">
            Veja como o material transforma a sala de aula ⭐
          </h2>

          {/* Classroom photos real grid with modern polaroid aesthetic */}
          <div className="mx-auto mt-5 max-w-[352px] grid grid-cols-2 gap-3">
            {[
              { src: "https://52cultosinfantis.netlify.app/assets/sala-aula-01.png", label: "Crianças Concentradas" },
              { src: "https://52cultosinfantis.netlify.app/assets/sala-aula-02.png", label: "Atividades Práticas" },
              { src: "https://52cultosinfantis.netlify.app/assets/sala-aula-03.png", label: "Aprendizado Lúdico" },
              { src: "https://52cultosinfantis.netlify.app/assets/sala-aula-04.png", label: "Salinha Cheia e Atenta" }
            ].map((photo, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border border-neutral-200/80 bg-white p-2 flex flex-col justify-between shadow-sm hover:shadow transition-shadow">
                <img 
                  src={photo.src} 
                  alt={photo.label} 
                  className="w-full aspect-square object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <span className="block text-center text-[10px] uppercase tracking-wider font-extrabold text-[color:var(--brand-green-dark)] mt-2">
                  {photo.label}
                </span>
              </div>
            ))}
          </div>



          {/* 12. Ideal target list section */}
          <h2 className="mx-auto mt-12 max-w-[340px] text-xl font-extrabold text-center text-foreground leading-snug text-balance">
            Esse material é ideal para você que:
          </h2>

          <ul className="mx-auto mt-5 max-w-[340px] space-y-2.5">
            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-purple-500 text-white font-bold">
                👥
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Vai trabalhar temas e lições bíblicas semanais com a turminha
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-amber-500 text-white font-bold">
                ⭐
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Deseja um culto infantil mais visual, prático e ativo
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-pink-500 text-white font-bold">
                🖨️
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Deseja materiais e roteiros prontos em alta resolução (PDF)
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-sky-500 text-white font-bold">
                ⏱️
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Prefere focar nas crianças ao invés de buscar atividades do zero
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-emerald-500 text-white font-bold">
                💡
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Quer pregar a Palavra com amor, criatividade e dinâmicas
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>
          </ul>

          {/* 13. Passo a Passo "Como usar na aula"🎒 */}
          <div className="mx-auto mt-12 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--soft-mint)] border border-[color:var(--brand-green)]/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
              ✏️ Passo a passo
            </span>
            <h2 className="mt-3 text-[26px] font-extrabold text-center leading-tight text-balance">
              Como usar<span className="relative inline-block mx-1">
                <span className="absolute inset-x-0 bottom-1 h-2.5 bg-[color:var(--badge-orange)]/40 rounded-full -z-0"></span>
                <span className="relative z-10 text-[color:var(--badge-orange)]">na aula</span>
              </span>
              <span className="ml-1">🎒</span>
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-[color:var(--brand-green)]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--badge-orange)]"></span>
              <span className="h-[3px] w-6 rounded-full bg-[color:var(--brand-green)]"></span>
            </div>
          </div>

          {/* 14. Seção 2: O PRODUTO COMPLETO ✨ */}
          <div className="mx-auto mt-6 flex flex-col items-center">
            <h2 className="relative flex flex-col items-center text-center text-foreground px-4">
              <span className="relative mt-2 inline-block text-[21px] font-black leading-snug text-[color:var(--brand-green-dark)] text-balance">
                <span aria-hidden="true" className="absolute -left-6 -top-2 text-lg rotate-[-12deg]">✨</span>
                Veja tudo o que você vai receber hoje:
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-2 bg-[color:var(--badge-orange)]/45 rounded-full -z-0"></span>
              </span>
            </h2>
          </div>

          {/* Grid de imagens do produto real fornecidas pelo cliente */}
          <div className="mx-auto mt-5 max-w-[352px] grid grid-cols-2 gap-3.5">
            {[
              {
                src: "https://52cultosinfantis.netlify.app/assets/produto-cultinho-06.png",
                title: "1 Ano de Atividades",
                desc: "Roteiros bíblicos com atividades de fixação para o ano todo."
              },
              {
                src: "https://52cultosinfantis.netlify.app/assets/atividades-apoio-visual.webp",
                title: "Atividades & Apoio",
                desc: "Lindo apoio visual com desenhos de colorir para a sala de aula."
              },
              {
                src: "https://52cultosinfantis.netlify.app/assets/roteiros-prontos-semana.webp",
                title: "Roteiros Prontos",
                desc: "Planos semanais prontinhos focados no aprendizado prático."
              },
              {
                src: "https://52cultosinfantis.netlify.app/assets/acesso-digital-imediato.webp",
                title: "Acesso Digital Imediato",
                desc: "Baixe direto pelo seu celular em formato PDF organizado."
              }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-neutral-200/90 bg-white p-2.5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full aspect-square object-contain bg-neutral-50 rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-2 text-left">
                  <h4 className="text-[11px] font-black tracking-tight text-neutral-800 leading-tight">{item.title}</h4>
                  <p className="text-[9px] text-neutral-500 leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mx-auto mt-6 max-w-[340px] space-y-4 px-2">
            <li className="flex gap-3 items-start text-[14px] text-foreground/90">
              <span className="mt-0.5 text-lg flex-shrink-0">📖</span>
              <span>
                <strong className="font-bold">1 Ano Inteiro de Histórias:</strong>{" "}
                <span className="text-neutral-700">Roteiros fáceis, bíblicos e diretos ao ponto. Diretamente no seu E-mail.</span>
              </span>
            </li>

            <li className="flex gap-3 items-start text-[14px] text-foreground/90">
              <span className="mt-0.5 text-lg flex-shrink-0">🖍️</span>
              <span>
                <strong className="font-bold">Atividades para os Pequenos:</strong>{" "}
                <span className="text-neutral-700">Desenhos maravilhosos para colorir e fixar o que aprenderam no culto.</span>
              </span>
            </li>

            <li className="flex gap-3 items-start text-[14px] text-foreground/90">
              <span className="mt-0.5 text-lg flex-shrink-0">✂️</span>
              <span>
                <strong className="font-bold">Dinâmicas Práticas:</strong>{" "}
                <span className="text-neutral-700">Aplicações simples que não exigem comprar materiais caros ou difíceis.</span>
              </span>
            </li>

            <li className="flex gap-3 items-start text-[14px] text-foreground/90">
              <span className="mt-0.5 text-lg flex-shrink-0">📱</span>
              <span>
                <strong className="font-bold">Acesso na Palma da Mão:</strong>{" "}
                <span className="text-neutral-700">Pastas super organizadas para baixar direto no seu celular.</span>
              </span>
            </li>
          </ul>

          {/* 15. Pointer arrows to Pricing offers */}
          <div className="mx-auto mt-1 flex flex-col items-center gap-0 text-[color:var(--badge-orange)]">
            <span className="text-[13px] font-extrabold uppercase tracking-wider rotate-[-3deg] bg-[color:var(--soft-mint)] px-3 py-1 rounded-full border-2 border-dashed border-[color:var(--brand-green)]/40 text-[color:var(--brand-green-dark)]">
              👇 Garanta o seu agora
            </span>
            <svg className="w-10 h-12 animate-bounce drop-shadow-md" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 C 18 18, 30 30, 24 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 6"></path>
              <path d="M12 42 L24 58 L36 42" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            </svg>
          </div>

          {/* 16. Precise Two-Column comparative Pricing plans ("ofertas") */}
          <div id="ofertas" className="mt-2 w-[105%] -ml-[2.5%] grid grid-cols-2 gap-2 items-start scroll-mt-6">
            
            {/* Offer 1: Essential Bundle */}
            <div className="relative rounded-2xl bg-white border-2 border-[color:var(--soft-mint)] shadow-md overflow-hidden flex flex-col">
              <div className="bg-[color:var(--soft-mint)] text-[color:var(--brand-green-dark)] text-[10px] font-black px-2 py-1.5 uppercase tracking-wider text-center">
                Oferta Básica
              </div>
              <div className="relative bg-white px-3 pt-3 pb-2 overflow-hidden">
                <div className="text-center mb-2 min-h-[58px] flex flex-col justify-center">
                  <h3 className="text-[13.5px] font-extrabold text-foreground leading-tight">Plano Essencial</h3>
                  <p className="mt-1 text-[10px] text-muted-foreground leading-tight">
                    Apenas 1 ano de atividade infantil bíblica, sem materiais de dinâmicas extras.
                  </p>
                </div>
                
                {/* Imagem real fornecida pelo cliente */}
                <div className="relative w-[90%] mx-auto aspect-square bg-slate-50/55 rounded-xl flex items-center justify-center p-1 border border-neutral-100 overflow-hidden">
                  <img 
                    src="https://52cultosinfantis.netlify.app/assets/produto-cultinho-06.png" 
                    alt="Plano Essencial" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="px-3 py-3 flex flex-col">
                <ul className="space-y-1.5 mb-3">
                  <li className="flex items-start gap-1.5 px-1.5 py-1">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 bg-[color:var(--soft-mint)] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[color:var(--brand-green-dark)] fill-none stroke-current stroke-[3]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[11px] text-foreground/80 leading-snug">1 ano de atividade infantil bíblica totalmente pronta</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 bg-[color:var(--soft-mint)] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[color:var(--brand-green-dark)] fill-none stroke-current stroke-[3]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[11px] text-foreground/80 leading-snug">Planos e Roteiros em PDF</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1">
                    <span className="mt-0.5 w-4 h-4 flex-shrink-0 bg-[color:var(--soft-mint)] rounded-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-[color:var(--brand-green-dark)] fill-none stroke-current stroke-[3]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-[11px] text-foreground/80 leading-snug">Atividades de colorir para a sala</span>
                  </li>
                </ul>

                <div className="bg-[color:var(--soft-mint)]/70 rounded-xl px-2 py-2 text-center mb-2">
                  <p className="text-muted-foreground text-[10px]">De <span className="line-through">R$29</span> por</p>
                  <div className="mt-1 flex items-center justify-center">
                    <span className="text-[30px] font-extrabold text-[color:var(--brand-green-dark)] leading-none">R$10</span>
                  </div>
                  <p className="mt-1 text-[9px] text-[color:var(--brand-green-dark)] font-bold uppercase tracking-wide">
                    PAGAMENTO ÚNICO À VISTA
                  </p>
                </div>

                <button
                  onClick={() => handleOpenCheckout("essencial", "1 Ano de Atividade Infantil Bíblica (Essencial)", 10.90)}
                  className="animate-cta-breathe block text-center w-full bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] text-white font-extrabold py-3 rounded-xl shadow-lg transition-colors active:scale-95 uppercase tracking-wide text-[12px] cursor-pointer"
                >
                  QUERO O PLANO BÁSICO
                </button>
                <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-muted-foreground text-center leading-tight">
                  🔒 Compra segura • Acesso imediato
                </div>
              </div>
            </div>

            {/* Offer 2: Premium Super combo with bônus */}
            <div className="relative rounded-2xl bg-white border-2 border-[color:var(--badge-orange)]/50 shadow-lg overflow-hidden flex flex-col">
              <div className="bg-[color:var(--badge-orange)] text-white text-[10px] font-black px-2 py-1.5 shadow-sm uppercase tracking-wider text-center">
                🔥 Mais Vendido
              </div>
              <div className="relative bg-white px-3 pt-3 pb-2 overflow-hidden">
                <div className="text-center mb-2 min-h-[58px]">
                  <span className="inline-block text-[9px] uppercase font-bold text-[color:var(--badge-orange)] tracking-widest">
                    ✨ Super Oferta
                  </span>
                  <h3 className="mt-1 text-[13.5px] font-extrabold text-foreground leading-tight">
                    1 ano de atividade infantil bíblica + 100 bônus!
                  </h3>
                </div>

                {/* Imagem real fornecida pelo cliente */}
                <div className="relative w-[90%] mx-auto aspect-square bg-slate-50/55 rounded-xl flex items-center justify-center p-1 border border-neutral-100 overflow-hidden">
                  <img 
                    src="https://52cultosinfantis.netlify.app/assets/plano-com-bonus-1990.webp" 
                    alt="Plano Super Combo" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="px-3 py-3 flex flex-col">
                <ul className="grid grid-cols-1 gap-1 mb-3">
                  <li className="flex items-start gap-1.5 px-1.5 py-1 rounded-md bg-[color:var(--badge-orange)]/10">
                    <span className="text-[12px] flex-shrink-0 leading-snug">✅</span>
                    <span className="text-[11px] leading-snug font-bold text-foreground">Tudo de 1 ano de atividade infantil bíblica</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1 rounded-md">
                    <span className="text-[12px] flex-shrink-0 leading-snug">⭐</span>
                    <span className="text-[11px] leading-snug text-foreground/80">+100 Atividades Bíblicas Prontas</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1 rounded-md">
                    <span className="text-[12px] flex-shrink-0 leading-snug">🎮</span>
                    <span className="text-[11px] leading-snug text-foreground/80">+40 Dinâmicas Cristãs Criativas</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1 rounded-md">
                    <span className="text-[12px] flex-shrink-0 leading-snug">🎯</span>
                    <span className="text-[11px] leading-snug text-foreground/80">Kit de Versículos Ilustrados</span>
                  </li>

                  <li className="flex items-start gap-1.5 px-1.5 py-1 rounded-md">
                    <span className="text-[12px] flex-shrink-0 leading-snug">🔢</span>
                    <span className="text-[11px] leading-snug text-foreground/80">Calendário do Ministério Infantil</span>
                  </li>
                </ul>

                <div className="bg-[color:var(--brand-green)]/5 border-2 border-dashed border-[color:var(--brand-green)]/40 rounded-xl px-2 py-2 text-center mb-2">
                  <p className="text-muted-foreground text-[10px]">De <span className="line-through">R$49,90</span> por</p>
                  <div className="mt-1 flex items-center justify-center">
                    <span className="text-[30px] font-black text-[color:var(--brand-green)] leading-none">R$19</span>
                  </div>
                  <p className="mt-1 text-[9px] text-[color:var(--brand-green)] font-bold uppercase tracking-wide">
                    À VISTA PAGAMENTO ÚNICO
                  </p>
                </div>

                <a
                  href="https://pay.wiapy.com/bgZ4gaM6vY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-cta-breathe block text-center w-full bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] text-white font-extrabold py-3 rounded-xl shadow-lg transition-colors active:scale-95 uppercase tracking-wide text-[12px] cursor-pointer"
                >
                  QUERO O SUPER COMBO
                </a>
                <div className="mt-2 flex items-center justify-center gap-1 text-[9px] text-muted-foreground text-center leading-tight">
                  🔒 Acesso imediato • Compra 100% segura
                </div>
              </div>
            </div>

          </div>

          {/* 17. Email delivery disclaimer badge under pricing plans */}
          <div className="mx-auto mt-5 max-w-[352px] rounded-xl border border-[color:var(--brand-green)]/35 bg-[color:var(--soft-mint)] p-4 flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-[color:var(--brand-green)] flex-shrink-0 flex items-center justify-center text-white">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-sm font-bold text-foreground leading-snug">
              Após a confirmação, você recebe acesso ao 1 Ano de Atividade Infantil Bíblica diretamente no seu E-MAIL
            </p>
          </div>

          {/* SEÇÃO 3 - PROVA E GARANTIA */}
          <div className="mx-auto mt-14 max-w-[352px] bg-white border border-neutral-200 rounded-3xl p-5 shadow-sm text-center">
            <h2 className="text-[17px] font-black text-foreground leading-snug">
              O Ministério Infantil Não Precisa Ser Um Fardo!
            </h2>
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-neutral-600">
              A obra é séria, nosso suporte é real e o material já transformou a salinha de milhares de tias pelo Brasil. Saia dessa vida de improviso e volte a dormir em paz no sábado à noite.
            </p>

            <div className="mt-4 bg-[color:var(--soft-mint)]/50 border border-[color:var(--brand-green)]/20 rounded-2xl p-4 text-left">
              <h3 className="text-xs font-black text-[color:var(--brand-green-dark)] flex items-center gap-1.5 uppercase tracking-wider">
                <span>🛡️</span> Garantia Incondicional de 7 Dias:
              </h3>
              <p className="mt-1.5 text-[11.5px] text-neutral-700 leading-relaxed">
                Acesse agora. Se você não amar o material ou achar que não serve para a sua igreja, devolvemos 100% do seu valor na hora. O risco é todo nosso!
              </p>
            </div>
          </div>

          {/* 18. FAQ Heading */}
          <h2 className="mt-14 text-center font-extrabold text-2xl text-foreground">
            Dúvidas Frequentes
          </h2>

          {/* 19. FAQ Accordions section with gray card container */}
          <div className="mx-auto mt-6 max-w-[352px] rounded-2xl bg-neutral-100/65 p-6">
            <FAQSection />
          </div>

          {/* 20. Bottom CTA Section */}
          <div className="mx-auto mt-14 max-w-[352px] text-center">
            <button
              onClick={handleScrollToOffers}
              className="animate-cta-breathe w-full rounded-xl bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] transition-colors text-white font-extrabold py-4 text-[14.5px] tracking-wide shadow-lg uppercase cursor-pointer"
            >
              👉 QUERO DOMINAR A SALINHA!
            </button>
            <p className="mt-2 text-[11px] text-neutral-500 font-medium">
              Acesso liberado no seu e-mail logo após a confirmação.
            </p>
          </div>

          {/* 21. Help area (Instagram only) */}
          <div className="mx-auto mt-14 max-w-[350px] text-center bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-extrabold text-lg text-foreground inline-flex items-center gap-2">
              <span className="text-xl">💬</span>
              Precisa de Ajuda?
            </h3>
            <p className="mt-3 text-[13px] text-neutral-600 leading-relaxed">
              Chame nossa equipe diretamente através do nosso Instagram oficial. Respondemos no direct o mais rápido possível!
            </p>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/ministerio_infantil52/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-opacity shadow"
              >
                <span>📸 Enviar Mensagem no Instagram</span>
              </a>
            </div>
          </div>

          {/* Real Instagram Anchor & Watermark */}
          <div className="pt-8 mt-12 border-t border-neutral-100 flex flex-col items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/ministerio_infantil52/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-[#111827] hover:text-[#10b981] transition-colors"
            >
              <span className="text-rose-500 text-lg">📸</span>
              <span>@ministerio_infantil52</span>
            </a>
            <p className="text-[10px] text-neutral-400">
              © {new Date().getFullYear()} 1 Ano de Atividade Infantil Bíblica. Todos os Direitos Reservados.
            </p>
          </div>

        </div>
      </main>

      {/* Real Checkout selection modal */}
      {selectedPlan && (
        <CheckoutModal
          selectedPlan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {/* Small floating setup configure option for owners to paste their own custom iframe embed code easily */}
      <div className="fixed bottom-4 left-4 z-40 bg-zinc-900 border border-zinc-800 text-white rounded-full p-2.5 shadow-xl hover:bg-zinc-800 transition-colors">
        <button
          type="button"
          onClick={() => {
            setShowConfig(!showConfig);
            if (!tempEmbed) {
              setTempEmbed(embedCode);
            }
          }}
          className="flex items-center gap-1.5 text-[11px] font-bold"
        >
          <Settings className={`w-4.5 h-4.5 text-emerald-400 ${showConfig ? "rotate-90" : ""} transition-transform`} />
          <span className="hidden md:inline">Configurar Vídeo (Embed)</span>
        </button>

        <AnimatePresence>
          {showConfig && (
            <motion.form
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onSubmit={handleSaveEmbed}
              className="absolute bottom-12 left-0 w-72 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 shadow-2xl text-left space-y-3"
            >
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-400 font-extrabold uppercase block font-mono">
                  Iframe HTML Completo do Vídeo:
                </label>
                <textarea
                  rows={3}
                  value={tempEmbed}
                  onChange={(e) => setTempEmbed(e.target.value)}
                  placeholder="Ex: <iframe src='https://player.pandavideo...' ...></iframe>"
                  className="w-full bg-black border border-zinc-800 rounded-lg p-2 text-[10px] text-zinc-200 placeholder-zinc-700 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  required
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white text-[10px] font-black py-2 rounded-lg flex items-center justify-center gap-1"
                >
                  <Check className="w-3.5 h-3.5" />
                  Salvar Vídeo
                </button>
                {embedCode && (
                  <button
                    type="button"
                    onClick={handleClearEmbed}
                    className="bg-zinc-900 hover:bg-red-950 hover:text-red-400 border border-zinc-800 text-zinc-400 text-[10px] font-black py-2 px-3 rounded-lg"
                  >
                    Remover
                  </button>
                )}
              </div>
              <p className="text-[9px] text-zinc-500 leading-normal">
                Cole o código iframe do seu gerenciador do Vimeo, YouTube ou Panda Vídeo. Ele preencherá o espaço preto perfeitamente.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
