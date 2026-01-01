import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqs = [
  {
    question: "Wech ydir club?",
    answer: "HEUM."
  },
  {
    question: "Les départements li kaynin?",
    answer: "On est structurés en plusieurs pôles : IT, Design, CC, RE ,RH. Chaque pôle travaille en synergie sur nos projets."
  },
  {
    question: "Est-ce que lzm etudiant men USTHB bach ykoun membre?",
    answer: "Principalement oui, car nos activités se déroulent au campus. Cependant, nous restons ouverts aux profils exceptionnels et passionnés venant d'autres écoles pour certaines collaborations."
  },
  {
    question: "Kifach n9der nweli membre?",
    answer: "Le recrutement se fait généralement au début de chaque semestre. Il suffit de remplir le formulaire en ligne, suivi d'un entretien technique ou de motivation selon le département choisi."
  },
  {
    question: "Type d’evenements li yndirouhom?",
    answer: "KOLCH"
  },
  {
    question: "Wech ykheli PI spéciale 3la les autres clubs?",
    answer: "PI ."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <motion.div 
      className={`border-b border-gray-100 transition-colors duration-500 ${isOpen ? 'bg-gray-50/50' : 'bg-white'}`}
    >
      <button 
        onClick={toggle}
        className="w-full py-8 px-4 flex justify-between items-center text-left group"
      >
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-primary'}`}>
          {faq.question}
        </span>
        
        {/* Le bouton + interactif */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0 }}
            className={`absolute w-full h-[2px] ${isOpen ? 'bg-accent' : 'bg-primary'}`}
          />
          <motion.div 
            animate={{ rotate: isOpen ? 135 : 90 }}
            className={`absolute w-full h-[2px] ${isOpen ? 'bg-accent' : 'bg-primary'}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4 text-gray-500 font-light leading-relaxed max-w-3xl">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [containerRef, isVisible] = useScrollAnimation(0.2);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section ref={containerRef} className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Style Studio */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-300 mb-4"
          >
            Questions / Answers
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-primary tracking-tighter"
          >
            FREQUENTLY ASKED QUESTIONSSSSSSSSN?
          </motion.h3>
        </div>

        {/* Liste des boîtes */}
        <div className="max-w-4xl border-t border-gray-100">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};