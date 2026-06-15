/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface CheckoutModalProps {
  selectedPlan: {
    id: string;
    title: string;
    price: number;
  } | null;
  onClose: () => void;
}

export default function CheckoutModal({ selectedPlan, onClose }: CheckoutModalProps) {
  if (!selectedPlan) return null;

  return (
    <AnimatePresence>
      <div id="checkout-modal-root" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
        {/* Modal Window Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-neutral-100 flex flex-col relative my-auto"
        >
          {/* Header Oferta Exclusiva em Laranja */}
          <div className="bg-[#f97316] text-white px-4 py-3 flex items-center justify-between relative">
            <span className="w-full text-center text-xs font-black tracking-widest uppercase flex items-center justify-center gap-1.5">
              🔥 OFERTA EXCLUSIVA 🔥
            </span>
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#f97316] hover:bg-neutral-100 rounded-full w-6 h-6 flex items-center justify-center transition-colors cursor-pointer shadow font-black"
              title="Fechar"
            >
              <X className="w-4 h-4 text-[#f97316] stroke-[3]" />
            </button>
          </div>

          {/* Body Content Upsell */}
          <div className="p-6 flex flex-col items-center">
            <h3 className="text-[17px] font-black text-[#111827] text-center leading-snug tracking-tight">
              Espere! Leve o KIT COMPLETO por apenas
            </h3>

            {/* Imagem real fornecida pelo cliente para O Que Vem No Kit */}
            <div className="my-4 w-full flex flex-col items-center">
              <img 
                src="https://52cultosinfantis.netlify.app/assets/produto-cultinho-06.png" 
                className="w-[185px] h-auto object-contain drop-shadow" 
                alt="O que você vai receber no Kit Completo" 
                referrerPolicy="no-referrer"
              />
              <div className="text-[#f97316] text-xl font-bold leading-none animate-bounce mt-1">
                ▼
              </div>
            </div>

            {/* Price Display */}
            <div className="w-full bg-white border border-emerald-500/25 rounded-2xl p-4 text-center space-y-1 mb-5 shadow-sm">
              <p className="text-[11px] text-red-500 font-bold uppercase tracking-wider">
                De <span className="line-through">R$97 por apenas</span>
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl font-black text-[#10b981]">R$</span>
                <span className="text-4xl font-black text-[#10b981] tracking-tight">14,90</span>
              </div>
              <div className="inline-block bg-[#f97316] text-white font-extrabold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                VOCÊ PAGA SÓ R$4 A MAIS
              </div>
              <p className="text-[10px] text-[#10b981] font-extrabold uppercase tracking-wide mt-1">
                PAGAMENTO ÚNICO À VISTA
              </p>
            </div>

            {/* Summary points */}
            <div className="w-full space-y-2.5 mb-5 text-left bg-neutral-50/50 p-3.5 rounded-2xl border border-neutral-100">
              <p className="text-[11px] font-extrabold text-neutral-500 uppercase tracking-wider text-center">
                TUDO QUE VOCÊ RECEBERÁ:
              </p>
              <ul className="space-y-1.5 px-1 text-[12.5px] text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] text-md font-bold mt-0.5">✓</span>
                  <span><strong className="font-bold">1 ano de atividade infantil bíblica</strong> + bônus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] text-md font-bold mt-0.5">✓</span>
                  <span><strong className="font-bold">+100 atividades bíblicas</strong> para imprimir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] text-md font-bold mt-0.5">✓</span>
                  <span><strong className="font-bold">+40 dinâmicas cristãs</strong> para crianças</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10b981] text-md font-bold mt-0.5">✓</span>
                  <span><strong className="font-bold">Versículos ilustrados</strong> + calendário</span>
                </li>
              </ul>
            </div>

            {/* Primary CTA Upgrade */}
            <a
              href="https://pay.wiapy.com/coBzC9RouZ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-[color:var(--brand-green)] hover:bg-[color:var(--brand-green-dark)] hover:scale-[1.01] active:scale-[0.99] transition-all text-white font-extrabold py-3.5 rounded-2xl shadow-lg flex items-center justify-center gap-2 text-sm uppercase cursor-pointer text-center"
            >
              <span>SIM, QUERO O DESCONTO</span>
            </a>

            <a
              href="https://pay.wiapy.com/qRiFqYh7Ik"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-3 text-xs text-neutral-400 hover:text-neutral-600 transition-colors underline font-medium cursor-pointer text-center"
            >
              Não, continuar com o kit básico por R$10,00
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
