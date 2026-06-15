/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { motion } from "motion/react";
import { Heart, UserCheck, Check, Sparkles, AlertCircle, Laptop, Smartphone, Printer, ShieldCheck } from "lucide-react";
import { BenefitItem } from "../types";

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: "b-1",
    text: "Cuida do ministério infantil, EBD ou escolhinha bíblica de sua comunidade",
    iconType: "purple"
  },
  {
    id: "b-2",
    text: "Quer cultos infantis mais bonitos, criativos, participativos e alinhados",
    iconType: "orange"
  },
  {
    id: "b-3",
    text: "Precisa de material totalmente pronto para usar ou imprimir de imediato",
    iconType: "pink"
  },
  {
    id: "b-4",
    text: "Não quer perder horas e horas criando tudo do zero absoluto toda semana",
    iconType: "blue"
  },
  {
    id: "b-5",
    text: "Quer ensinar verdades da Bíblia de forma simples e divertida para as crianças",
    iconType: "green"
  }
];

export function AudienceGrid() {
  const getBadgeColors = (type: "purple" | "orange" | "pink" | "blue" | "green") => {
    switch (type) {
      case "purple":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "orange":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "pink":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "blue":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "green":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }
  };

  return (
    <div id="audience-benefit-container" className="w-full max-w-2xl mx-auto space-y-4">
      {BENEFIT_ITEMS.map((benefit, index) => (
        <motion.div
          key={benefit.id}
          id={benefit.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-white rounded-2xl p-4 border border-neutral-100/80 shadow-sm flex items-center justify-between gap-4 group hover:border-[#10b981]/30 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            {/* Styled Icon Wrapper */}
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center border font-black text-lg ${getBadgeColors(benefit.iconType)}`}>
              {benefit.iconType === "purple" && "👥"}
              {benefit.iconType === "orange" && "⭐️"}
              {benefit.iconType === "pink" && "🖨️"}
              {benefit.iconType === "blue" && "🕒"}
              {benefit.iconType === "green" && "🌳"}
            </div>
            <p className="text-neutral-700 text-sm sm:text-base font-extrabold leading-snug">
              {benefit.text}
            </p>
          </div>
          {/* Heart indicator */}
          <Heart className="w-5 h-5 text-amber-500 fill-amber-500/10 group-hover:fill-amber-500 flex-shrink-0 transition-all duration-300 transform group-hover:scale-110" />
        </motion.div>
      ))}
    </div>
  );
}

export function HowItWorksFlow() {
  return (
    <div id="how-it-works-stages" className="w-full max-w-xl mx-auto space-y-6 relative py-4">
      {/* Connector vertical dashed line */}
      <div className="absolute left-[26px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-emerald-200 pointer-events-none hidden sm:block"></div>

      {/* Step 1 */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 bg-white/75 backdrop-blur-sm p-4 rounded-3xl border border-neutral-100 shadow-sm relative group hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-amber-100 text-[#d97706] font-black flex items-center justify-center text-xl flex-shrink-0 ring-4 ring-amber-50">
          1
        </div>
        <div className="space-y-1">
          <h4 className="text-[#111827] text-sm sm:text-base font-black">Você preenche o formulário</h4>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            Insira seu nome, WhatsApp com DDD e e-mail no checkout rápido para sabermos exatamente para onde enviar seu material.
          </p>
          <div className="flex gap-2.5 mt-2">
            <span className="text-[10px] bg-amber-50 border border-amber-200/60 rounded px-2 py-0.5 text-[#d97706] font-bold">WhatsApp Seguro</span>
          </div>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 bg-white/75 backdrop-blur-sm p-4 rounded-3xl border border-neutral-100 shadow-sm relative group hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center text-xl flex-shrink-0 ring-4 ring-blue-50">
          2
        </div>
        <div className="space-y-1">
          <h4 className="text-[#111827] text-sm sm:text-base font-black">Gera e paga via PIX</h4>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            Copie o código PIX copia-e-cola ou escaneie o QR Code que aparecerá no aplicativo do seu banco. O pagamento é processado na hora de forma automática.
          </p>
          <div className="flex gap-2.5 mt-2">
            <span className="text-[10px] bg-blue-50 border border-blue-200/60 rounded px-2 py-0.5 text-blue-700 font-bold font-mono">Chave Pix Seguro</span>
          </div>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 bg-white/75 backdrop-blur-sm p-4 rounded-3xl border border-neutral-100 shadow-sm relative group hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-black flex items-center justify-center text-xl flex-shrink-0 ring-4 ring-emerald-50">
          3
        </div>
        <div className="space-y-1">
          <h4 className="text-[#111827] text-sm sm:text-base font-black">Receba tudo na mesma hora!</h4>
          <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
            Pronto! Assim que confirmado, nosso robô dispara de imediato um Zap para você contendo todo o Plano 52 Semanas completo, acompanhado de um e-mail com os arquivos adicionais e bônus.
          </p>
          <div className="flex gap-2.5 mt-2 flex-wrap">
            <span className="text-[10px] bg-emerald-50 border border-emerald-200/50 rounded px-2 py-0.5 text-emerald-600 font-bold flex items-center gap-1">
              🟢 WhatsApp Instantâneo
            </span>
            <span className="text-[10px] bg-indigo-50 border border-indigo-200/50 rounded px-2 py-0.5 text-indigo-700 font-bold flex items-center gap-1">
              📬 Link Permanente Email
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ClassPhotoGrid() {
  const customPhotos = [
    {
      id: "ph-1",
      topic: "Contação de História Dinâmica",
      desc: "Líderes interagindo com as crianças na mesa",
    },
    {
      id: "ph-2",
      topic: "Folhas de Atividades Práticas",
      desc: "Crianças se divertindo colorindo ilustrações didáticas",
    },
    {
      id: "ph-3",
      topic: "Atenção Total das Crianças",
      desc: "Histórias envolventes que prendem a atenção espiritual",
    },
    {
      id: "ph-4",
      topic: "Roteiros Passo a Passo",
      desc: "Atividades simples e práticas criadas por pedagogas",
    }
  ];

  return (
    <div id="classroom-visual-grid" className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
      {customPhotos.map((photo, idx) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.35 }}
          className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 bg-black flex flex-col items-center justify-center p-4 group shadow-sm"
        >
          {/* Subtle grid background inside placeholder */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Centered Graphic Placeholder */}
          <div className="flex flex-col items-center justify-center text-center my-auto z-10 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
              <span className="text-xl">📸</span>
            </div>
            <span className="text-neutral-500 text-[9px] sm:text-xs font-mono uppercase tracking-wider block">
              Hospedar Foto {idx + 1}
            </span>
          </div>

          {/* Elegant overlay and text metadata */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2.5 sm:p-4 text-left z-15">
            <span className="text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-wider block">
              {photo.topic}
            </span>
            <p className="text-neutral-300 text-[9px] sm:text-xs leading-normal mt-0.5 font-medium">
              {photo.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
