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
    question: "Como vou receber o material?",
    answer: "O plano é 100% digital. Assim que sua compra é confirmada, você recebe um link exclusivo diretamente no seu e-mail para baixar todos os arquivos imediatamente."
  },
  {
    id: "faq-2",
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital (em formato PDF de alta resolução). Isso significa que você não paga frete, não precisa esperar pelos Correios e pode imprimir de forma prática sempre que precisar."
  },
  {
    id: "faq-3",
    question: "Preciso de impressora?",
    answer: "Você pode estudar e guiar os cultos lendo os roteiros de histórias direto do seu celular ou tablet. Somente as atividades de colorir e dinâmicas manuais precisam de impressão simples."
  },
  {
    id: "faq-4",
    question: "Posso imprimir mais de uma vez?",
    answer: "Sim! Os arquivos em PDF são seus de forma perpétua. Você pode salvar, organizar e imprimir quantas cópias desejar para todas as turmas e crianças da sua comunidade."
  },
  {
    id: "faq-5",
    question: "Serve para qual turma?",
    answer: "Os cultos, materiais de apoio e as roteirizações são ideais para crianças de 3 a 11 anos, possuindo adaptações simples que encantam todas as faixas etárias."
  },
  {
    id: "faq-6",
    question: "O material já vem pronto?",
    answer: "Sim, totalmente pronto! Cada tema possui roteiro detalhado da contação rápida de história, quebra-gelo para abrir o culto, dinâmicas interativas e folha de atividade para fixação."
  },
  {
    id: "faq-7",
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos PIX e Cartão de Crédito. O pagamento via PIX é aprovado instantaneamente pelo sistema e envia seu material no mesmo minuto para o seu e-mail."
  },
  {
    id: "faq-8",
    question: "Tem garantia?",
    answer: "Sim! Você conta com 7 dias de garantia incondicional. Se entender que o material não atendeu suas expectativas, basta nos enviar um e-mail para receber todo o seu dinheiro de volta."
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
