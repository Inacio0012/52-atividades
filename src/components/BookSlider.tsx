import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  title: string;
  badge: string;
  desc: string;
  image: string;
}

const CAROUSEL_SLIDES: SlideData[] = [
  {
    title: "Roteiros prontos para cada semana",
    badge: "Plano Anual",
    desc: "Uma estrutura organizada para facilitar sua preparação ao longo de todo o ano.",
    image: "https://52cultosinfantis.netlify.app/assets/roteiros-prontos-semana.webp"
  },
  {
    title: "Atividades e apoio visual",
    badge: "Material de Apoio",
    desc: "Lindo apoio visual com desenhos de colorir para fixar o ensino na cabecinha das crianças.",
    image: "https://52cultosinfantis.netlify.app/assets/atividades-apoio-visual.webp"
  },
  {
    title: "1 ano de atividades práticas",
    badge: "Conteúdo Prático",
    desc: "Roteiros bíblicos com atividades de fixação prontas para o ano todo.",
    image: "https://52cultosinfantis.netlify.app/assets/produto-cultinho-06.png"
  },
  {
    title: "Acesso digital imediato",
    badge: "Acesso Digital",
    desc: "Pastas organizadas para baixar direto no seu celular, WhatsApp ou e-mail.",
    image: "https://52cultosinfantis.netlify.app/assets/acesso-digital-imediato.webp"
  }
];

export default function BookSlider() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  return (
    <div id="book-slide-gallery" className="relative w-full max-w-[342px] mx-auto px-4 mt-5">
      {/* Container Card */}
      <div className="w-full bg-[#FAFCF9] border border-emerald-100/90 rounded-[32px] p-5 shadow-sm flex flex-col items-center relative overflow-hidden min-h-[352px] transition-all">
        
        {/* Active Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.98, x: 8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -8 }}
            transition={{ duration: 0.22 }}
            className="w-full flex flex-col items-center"
          >
            {/* Top rounded orange pill badge */}
            <span className="bg-[#FFF3E5] text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3.5 inline-block border border-amber-100/30">
              {CAROUSEL_SLIDES[activeIdx].badge}
            </span>

            {/* Slider Center Image */}
            <div className="w-full aspect-[4/3] bg-transparent flex items-center justify-center p-1 mb-4 max-h-[190px]">
              <img 
                src={CAROUSEL_SLIDES[activeIdx].image} 
                alt={CAROUSEL_SLIDES[activeIdx].title} 
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Slider Bottom Text Area */}
            <div className="text-center px-1">
              <h3 className="text-[#111827] text-[15.5px] font-extrabold leading-tight tracking-tight">
                {CAROUSEL_SLIDES[activeIdx].title}
              </h3>
              <p className="text-neutral-500 text-[11px] leading-relaxed mt-1.5 max-w-[245px] mx-auto font-medium">
                {CAROUSEL_SLIDES[activeIdx].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows - positioned absolutely exactly overlapping the left/right card borders */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-1 top-[42%] -translate-y-1/2 w-8.5 h-8.5 rounded-full bg-neutral-600/75 hover:bg-neutral-700 text-white flex items-center justify-center z-20 shadow hover:scale-105 active:scale-95 transition-all cursor-pointer outline-none"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.8]" />
      </button>
      
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-1 top-[42%] -translate-y-1/2 w-8.5 h-8.5 rounded-full bg-neutral-600/75 hover:bg-neutral-700 text-white flex items-center justify-center z-20 shadow hover:scale-105 active:scale-95 transition-all cursor-pointer outline-none"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.8]" />
      </button>

      {/* Inline pagination dots underneath the card container */}
      <div className="flex justify-center gap-1.5 mt-3.5">
        {CAROUSEL_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              idx === activeIdx ? "bg-[#22C55E]" : "bg-neutral-300"
            }`}
            aria-label={`Visualizar slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
