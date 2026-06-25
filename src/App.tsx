/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from "react";
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
import FAQSection from "./components/FAQSection";

// Fake Purchase Notification System
const NAMES = ["Ana Paula", "Carla", "Bruna M.", "Juliana", "Vanessa", "Fernanda", "Camila T.", "Amanda", "Letícia", "Patrícia", "Mariana", "Silvia"];
const LOCATIONS = ["São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR", "Salvador, BA", "Fortaleza, CE", "Brasília, DF", "Campinas, SP", "Goiânia, GO", "Recife, PE", "Manaus, AM", "Porto Alegre, RS"];

function PurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchaseData, setPurchaseData] = useState({ name: "", location: "", time: "" });

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);
    return () => clearTimeout(initialTimeout);
  }, []);

  const showNotification = () => {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    const randomTime = Math.floor(Math.random() * 10) + 1; // 1 to 10 minutes ago
    
    setPurchaseData({ name: randomName, location: randomLocation, time: `${randomTime} min` });
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      // Schedule next notification (randomly between 15 and 35 seconds)
      const nextDelay = Math.floor(Math.random() * 20000) + 15000;
      setTimeout(showNotification, nextDelay);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white shadow-2xl rounded-xl border border-green-100 p-3 z-50 flex items-center gap-3 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
            <Check size={20} strokeWidth={3} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] text-neutral-600 truncate">
              <strong className="text-neutral-900 font-bold">{purchaseData.name}</strong> de {purchaseData.location}
            </p>
            <p className="text-[11.5px] font-bold text-green-600 mt-0.5">
              Acabou de comprar o Kit! 🔥
            </p>
            <p className="text-[10px] text-neutral-400 mt-0.5">
              Há {purchaseData.time}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  // Anti-download & anti-copy protection for all images and videos
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "IMG" || target.tagName === "VIDEO")) {
        e.preventDefault();
      }
    };
    
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "IMG" || target.tagName === "VIDEO")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // Configured with persistent local video embed simulation space
  const [embedCode, setEmbedCode] = useState<string>(() => {
    return localStorage.getItem("vsl_embed_code") || `<iframe src="https://imgur.com/a/8IkQnBp/embed?pub=true" style="border: 0; width: 100%; height: 100%; position: absolute; top:0; left:0;" allowfullscreen></iframe>`;
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

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  return (
    <div id="sales-page-root" className="min-h-screen bg-[#F8FAF7] text-[#111827] font-sans antialiased overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-800">
      <PurchaseNotification />
      
      {/* 1. Top Offer Banner */}
      <div className="w-full bg-[#E32636] py-2.5 text-center text-white text-sm md:text-base font-extrabold uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-sm">
        <span className="text-[#FFC107] text-lg leading-none">⚡</span>
        <span>OFERTA VÁLIDA SOMENTE {formattedDate}</span>
      </div>

      <main className="min-h-screen bg-white">
        <div className="max-w-[480px] mx-auto px-5 pt-6 pb-12">
          
          {/* 2. Headline Curta e Imponente */}
          <h1 className="mx-auto mt-3 max-w-[390px] text-[26px] font-black text-center leading-tight text-foreground text-balance">
            Crie <span className="relative inline-block"><span className="relative z-10">Lembrancinhas</span><span className="absolute bottom-0 left-0 w-full h-[4px] bg-red-500 rounded-full z-0 opacity-80"></span></span> Cristãs Inesquecíveis.
          </h1>

          {/* 3. Sub-headline */}
          <p className="mx-auto mt-3 max-w-[350px] text-center text-[13.5px] leading-relaxed text-foreground/85 text-balance">
            Receba 12 modelos lindos de mini-bíblias e 120 versículos para imprimir, recortar e montar. O gesto perfeito para edificar vidas!
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
                    src="https://i.imgur.com/CM64h5a.mp4"
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    playsInline
                    controls
                    controlsList="nodownload noremoteplayback"
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
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                12 Modelos Exclusivos
              </span>
            </li>
            
            <li className="flex items-center gap-2.5 rounded-full border border-[color:var(--brand-green)]/15 bg-[color:var(--soft-mint)]/70 pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-pink-500">
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                120 Versículos Edificantes
              </span>
            </li>

            <li className="flex items-center gap-2.5 rounded-full border border-[color:var(--brand-green)]/15 bg-[color:var(--soft-mint)]/70 pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-emerald-500">
                <Check className="w-4 h-4 text-white" />
              </span>
              <span className="text-[12.5px] leading-snug text-foreground/90">
                Arquivo Pronto para Impressão
              </span>
            </li>
          </ul>

          {/* 6. Top CTA Button */}
          <div className="mx-auto mt-6 text-center">
            <button
              onClick={handleScrollToOffers}
              className="animate-cta-breathe block w-full max-w-[370px] mx-auto rounded-xl bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] transition-colors text-white font-extrabold py-4 text-[13.5px] px-2 tracking-wide text-center shadow-lg uppercase cursor-pointer"
            >
              QUERO MEUS MOLDES POR APENAS R$ 9,90
            </button>
            <p className="mt-2 text-[11px] text-neutral-500 font-medium">
              🔒 Pagamento 100% seguro | Receba no e-mail
            </p>
          </div>

          {/* SEÇÃO 1 - IDENTIFICAÇÃO E DOR */}
          <div className="mx-auto mt-12 max-w-[370px] bg-amber-50/50 border border-amber-100 rounded-3xl p-5 shadow-sm text-left">
            <h2 className="text-base font-extrabold text-[#111827] flex items-center gap-1.5 leading-snug">
              <span className="text-xl">🎁</span> Um simples gesto de carinho que custa baratinho...
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-700">
              Às vezes, você quer demonstrar o quanto as pessoas são importantes, mas falta tempo ou o orçamento está apertado. Com as Mini-Bíblias, você tem um presente que demonstra cuidado e dedicação pelo próximo, sem pesar no bolso. É só imprimir, recortar e montar. Rapidinho você faz várias!
            </p>
          </div>

          {/* 8. Carousel image provided by user */}
          <div className="mx-auto mt-12 max-w-[352px]">
            <img 
              src="https://i.imgur.com/U6tXJ7i.png" 
              alt="Modelos que você vai receber" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>



          {/* 12. Ideal target list section */}
          <h2 className="mx-auto mt-12 max-w-[340px] text-xl font-extrabold text-center text-foreground leading-snug text-balance">
            Esse material é ideal para você que:
          </h2>

          <ul className="mx-auto mt-5 max-w-[340px] space-y-2.5">
            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-blue-100 text-[18px]">
                🎁
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Quer presentear com muito significado, mas está com o orçamento apertado.
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-emerald-100 text-[18px]">
                👥
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Busca a lembrancinha perfeita para células, retiros, casamentos ou batizados.
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-yellow-100 text-[18px]">
                🖨️
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Deseja arquivos prontos em alta resolução (PDF) para imprimir facilmente em casa.
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-orange-100 text-[18px]">
                ✂️
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Precisa de praticidade rápida: é só imprimir, recortar nas linhas e colar!
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>

            <li className="flex items-center gap-3 rounded-2xl bg-white border-2 border-dashed border-[color:var(--brand-green)]/30 px-3 py-2.5 shadow-sm">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center rotate-[-4deg] bg-pink-100 text-[18px]">
                💖
              </span>
              <span className="text-[15px] leading-snug text-foreground/90 text-balance">
                Quer edificar a vida de outras pessoas espalhando a Palavra de Deus com carinho.
              </span>
              <svg viewBox="0 0 24 24" className="ml-auto w-4 h-4 text-[color:var(--badge-orange)] fill-[color:var(--badge-orange)] flex-shrink-0">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </li>
          </ul>

          {/* 13. Passo a Passo */}
          <div className="mx-auto mt-12 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--soft-mint)] border border-[color:var(--brand-green)]/30 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[color:var(--brand-green-dark)]">
              ✏️ Passo a passo
            </span>
            <h2 className="mt-3 text-[26px] font-extrabold text-center leading-tight text-balance flex items-center justify-center flex-wrap">
              Como montar<span className="relative inline-block mx-1">
                <span className="absolute inset-x-0 bottom-1 h-2.5 bg-[color:var(--badge-orange)]/40 rounded-full -z-0"></span>
                <span className="relative z-10 text-[color:var(--badge-orange)]">em 3 minutos</span>
              </span>
              <span className="ml-1 inline-flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 animate-bounce">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </span>
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-[3px] w-6 rounded-full bg-[color:var(--brand-green)]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--badge-orange)]"></span>
              <span className="h-[3px] w-6 rounded-full bg-[color:var(--brand-green)]"></span>
            </div>
            
            <div className="mt-6 w-full max-w-[352px] rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm">
              <img 
                src="https://i.imgur.com/2TQjRDw.png" 
                alt="Passo a passo como montar" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>



          {/* 15. Pointer arrows to Pricing offers */}
          <div className="mx-auto mt-1 flex flex-col items-center gap-0 text-[color:var(--badge-orange)]">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-[13.5px] font-bold text-center mb-6 max-w-[340px] shadow-sm animate-pulse leading-snug">
              ⚠️ ATENÇÃO: Hoje, <span className="font-black text-red-600">{formattedDate}</span>, é o <span className="underline decoration-2 underline-offset-2">ÚLTIMO DIA</span> para garantir o desconto exclusivo!
            </div>
            
            {/* Feedbacks / Prova Social */}
            <div className="w-full max-w-[340px] mx-auto mb-6 flex flex-col gap-3 text-left">
              <h3 className="text-center text-[15px] font-black text-neutral-800 mb-2 uppercase tracking-wide">
                Quem já comprou, recomenda:
              </h3>
              
              {/* Comment 1 */}
              <div className="bg-white rounded-xl p-3.5 shadow-sm border border-neutral-100 relative">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`star-1-${i}`} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] text-neutral-400 ml-1">Há 1 dia</span>
                </div>
                <p className="text-[13px] text-neutral-700 leading-snug italic">
                  "As artes são lindíssimas! Usei no encontro de mulheres da igreja e todo mundo ficou apaixonado. Super fácil de imprimir e cortar, me salvou muito tempo!"
                </p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold text-neutral-900">Juliana M.</span>
                  <span className="text-[9px] uppercase tracking-wider text-green-700 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <Check size={10} strokeWidth={3} /> Compra Verificada
                  </span>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="bg-white rounded-xl p-3.5 shadow-sm border border-neutral-100 relative">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`star-2-${i}`} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] text-neutral-400 ml-1">Há 3 dias</span>
                </div>
                <p className="text-[13px] text-neutral-700 leading-snug italic">
                  "Gostei muito da qualidade. Imprimi em casa mesmo usando papel comum e a qualidade ficou maravilhosa. Valeu muito a pena, já estou fazendo várias."
                </p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold text-neutral-900">Camila T.</span>
                  <span className="text-[9px] uppercase tracking-wider text-green-700 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <Check size={10} strokeWidth={3} /> Compra Verificada
                  </span>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="bg-white rounded-xl p-3.5 shadow-sm border border-neutral-100 relative">
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={`star-3-${i}`} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] text-neutral-400 ml-1">Há 5 dias</span>
                </div>
                <p className="text-[13px] text-neutral-700 leading-snug italic">
                  "Excelente material! Chegou super rápido no e-mail logo depois do pagamento e os versículos são muito bem escolhidos. Recomendo de olhos fechados."
                </p>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold text-neutral-900">Ana Paula R.</span>
                  <span className="text-[9px] uppercase tracking-wider text-green-700 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded-full flex items-center gap-1">
                    <Check size={10} strokeWidth={3} /> Compra Verificada
                  </span>
                </div>
              </div>
            </div>

            <span className="text-[13px] font-extrabold uppercase tracking-wider rotate-[-3deg] bg-[color:var(--soft-mint)] px-3 py-1 rounded-full border-2 border-dashed border-[color:var(--brand-green)]/40 text-[color:var(--brand-green-dark)]">
              👇 Garanta o seu agora
            </span>
            <svg className="w-10 h-12 animate-bounce drop-shadow-md" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 C 18 18, 30 30, 24 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 6"></path>
              <path d="M12 42 L24 58 L36 42" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            </svg>
          </div>

          {/* 16. Precise Two-Column comparative Pricing plans ("ofertas") */}
          <div id="ofertas" className="mt-6 w-full flex flex-col items-center justify-center scroll-mt-6 px-2">
            
            <div className="relative rounded-3xl bg-white border-2 border-[color:var(--brand-green)] shadow-xl overflow-hidden flex flex-col w-full max-w-[380px]">
              {/* Tag Superior */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[12px] font-black px-3 py-2 uppercase tracking-widest text-center shadow-sm relative z-10">
                🔥 OFERTA ÚNICA E ESPECIAL
              </div>
              
              <div className="px-5 pt-6 pb-4">
                <div className="text-center mb-4">
                  <h3 className="text-[22px] font-black text-foreground leading-tight">
                    Kit Completo: Mini-Bíblias para Imprimir
                  </h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-snug font-medium px-1">
                    O pacote digital com tudo que você precisa para criar lembrancinhas inesquecíveis hoje mesmo, pagando uma única vez.
                  </p>
                </div>
                
                {/* Imagem do Mockup */}
                <div className="relative w-full aspect-square bg-slate-50/55 rounded-2xl flex items-center justify-center p-2 mb-5">
                  <img 
                    src="https://i.imgur.com/uR2eQBb.png" 
                    alt="Kit Completo" 
                    className="w-full h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Caixa de Destaque / Empilhamento */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 mb-5">
                  <h4 className="text-[13px] font-extrabold text-blue-900 mb-3 uppercase tracking-wide flex items-center gap-1.5">
                    <span>✅</span> O ACESSO COMPLETO INCLUI:
                  </h4>
                  
                  <ul className="space-y-3">
                    <li className="flex gap-2 items-start text-[13px] text-neutral-700 leading-snug">
                      <span className="flex-shrink-0 text-base mt-0.5">📖</span>
                      <span><strong className="font-bold text-neutral-900">12 Modelos de Capas Exclusivas</strong> (Artes delicadas em alta resolução)</span>
                    </li>
                    <li className="flex gap-2 items-start text-[13px] text-neutral-700 leading-snug">
                      <span className="flex-shrink-0 text-base mt-0.5">✨</span>
                      <span><strong className="font-bold text-neutral-900">120 Versículos Bíblicos Selecionados</strong> (Para edificar e encorajar)</span>
                    </li>
                    <li className="flex gap-2 items-start text-[13px] text-neutral-700 leading-snug">
                      <span className="flex-shrink-0 text-base mt-0.5">✂️</span>
                      <span><strong className="font-bold text-neutral-900">Design Otimizado para Impressão</strong> (Gaste pouca tinta e papel)</span>
                    </li>
                    <li className="flex gap-2 items-start text-[13px] text-neutral-700 leading-snug">
                      <span className="flex-shrink-0 text-base mt-0.5">📱</span>
                      <span><strong className="font-bold text-neutral-900">Acesso Digital Imediato</strong> (Baixe direto no celular ou computador)</span>
                    </li>
                    <li className="flex gap-2 items-start text-[13px] text-neutral-700 leading-snug">
                      <span className="flex-shrink-0 text-base mt-0.5">♾️</span>
                      <span><strong className="font-bold text-neutral-900">Acesso Vitalício</strong> (O arquivo é seu para sempre, imprima quantas quiser)</span>
                    </li>
                  </ul>
                </div>

                {/* Preço */}
                <div className="text-center mb-5 flex flex-col items-center">
                  <span className="text-neutral-500 text-sm font-semibold line-through decoration-red-500/50 decoration-2">De: R$ 59,90</span>
                  <span className="text-neutral-600 text-xs font-bold uppercase tracking-widest mt-1 mb-0.5">Por apenas:</span>
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-4xl font-black text-green-600 tracking-tighter">R$ 27,90</span>
                  </div>
                  <div className="mt-1.5 mb-1.5 bg-red-100 text-red-700 px-3 py-1 rounded-full text-[11px] font-black tracking-wide uppercase border border-red-200 shadow-sm">
                    🚨 Você está economizando R$ 32,00 agora!
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium mt-1 bg-neutral-100 px-3 py-1 rounded-full">
                    💳 Parcele em até 12x
                  </span>
                </div>

                {/* Botão */}
                <a
                  href="https://pay.wiapy.com/dIvcRZutgHj"
                  className="animate-cta-breathe flex items-center justify-center w-full bg-[#10B981] hover:bg-[#059669] text-white font-black py-4 rounded-xl shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transition-transform active:scale-[0.98] uppercase tracking-wider text-[15px] cursor-pointer text-center"
                >
                  QUERO O KIT COMPLETO AGORA
                </a>
                
                {/* Rodapé Segurança */}
                <div className="mt-4 flex items-center justify-center text-[10.5px] text-neutral-500 font-medium text-center leading-tight">
                  🔒 Compra 100% segura • Acesso enviado no e-mail • Garantia de 7 Dias
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
              Após a confirmação, você recebe acesso ao arquivo diretamente no seu E-MAIL
            </p>
          </div>

          {/* SEÇÃO 3 - PROVA E GARANTIA */}
          <div className="mx-auto mt-14 max-w-[352px] bg-white border border-neutral-200 rounded-3xl p-5 shadow-sm text-center">
            <h2 className="text-[17px] font-black text-foreground leading-snug">
              Você tem 7 Dias de Garantia
            </h2>

            <div className="mt-4 bg-[color:var(--soft-mint)]/50 border border-[color:var(--brand-green)]/20 rounded-2xl p-4 text-left">
              <h3 className="text-xs font-black text-[color:var(--brand-green-dark)] flex items-center gap-1.5 uppercase tracking-wider">
                <span>🛡️</span> Risco Zero:
              </h3>
              <p className="mt-1.5 text-[11.5px] text-neutral-700 leading-relaxed">
                Adquira hoje e teste todo o material na sua salinha. Se por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro. Sem burocracia.
              </p>
            </div>
          </div>

          {/* Quem Sou Eu */}
          <div className="mx-auto mt-14 max-w-[352px] bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
            <h2 className="text-center font-extrabold text-2xl text-foreground mb-6">
              Quem Sou Eu?
            </h2>
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://i.imgur.com/L5AyQD6.jpeg" 
                  alt="Maria Ester" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4 text-[13.5px] text-neutral-700 leading-relaxed text-left">
              <p>
                <strong className="font-extrabold text-foreground text-base">Olá, sou Maria Ester! 👋</strong>
              </p>
              <p>
                Trabalho há anos desenvolvendo materiais que facilitam a vida de quem deseja compartilhar a Palavra de Deus de forma criativa, delicada e acessível.
              </p>
              <p>
                Criei o <strong>Kit Completo de Mini-Bíblias</strong> com muito carinho porque sei como é difícil encontrar opções de lembrancinhas que sejam, ao mesmo tempo, lindas, fáceis de montar e econômicas na hora de imprimir.
              </p>
              <p>
                Meu objetivo é entregar para você um material de altíssima qualidade para que você possa abençoar outras pessoas e transmitir mensagens de fé e esperança, gastando pouco e tendo muito resultado!
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
                href="https://www.instagram.com/maria_ester052/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-opacity shadow"
              >
                <span className="text-lg">📸</span>
                <span>Enviar Mensagem no Instagram</span>
              </a>
            </div>
          </div>

          {/* Real TikTok Anchor & Watermark */}
          <div className="pt-8 mt-12 border-t border-neutral-200 flex flex-col items-center justify-center gap-4 px-4 pb-6">
            <a
              href="https://www.tiktok.com/@maria._ester52?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-black text-[#111827] hover:text-[#10b981] transition-colors"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              <span>@maria._ester52</span>
            </a>

            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] text-neutral-500 font-medium">
              <a href="#" className="hover:text-neutral-800 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-neutral-800 transition-colors">Políticas de Privacidade</a>
              <a href="mailto:contato@exemplo.com" className="hover:text-neutral-800 transition-colors">Contato / Suporte</a>
            </div>

            <p className="text-[10px] text-neutral-400 text-center max-w-[320px] leading-relaxed">
              © {new Date().getFullYear()} Mini-Bíblias. Todos os Direitos Reservados.<br/><br/>
              Este site não é afiliado ao TikTok ou ByteDance, Facebook, Instagram ou Meta Platforms Inc.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}
