/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como vou receber?",
    answer: "Você receberá o link de acesso aos arquivos em PDF diretamente no e-mail cadastrado no momento da compra."
  },
  {
    id: "faq-2",
    question: "É um produto físico?",
    answer: "Não. É um arquivo 100% digital. Você não pagará frete, receberá o arquivo na hora e poderá imprimir quantas vezes quiser."
  },
  {
    id: "faq-3",
    question: "Preciso de uma impressora especial?",
    answer: "Não! Você pode imprimir na sua impressora de casa ou em qualquer papelaria, usando folha A4 comum ou um papel um pouquinho mais grosso se preferir."
  },
  {
    id: "faq-4",
    question: "E se eu tiver dificuldades?",
    answer: "O corte e montagem são muito intuitivos, mas caso tenha dúvidas, temos um suporte pronto para te ajudar."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div id="faq-accordions-group" className="space-y-1">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b border-neutral-200/60 last:border-b-0">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between py-4 text-left font-semibold text-[15px] text-neutral-800 hover:text-[color:var(--brand-green-dark)] transition-colors focus:outline-none"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-[color:var(--brand-green)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed text-left">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
