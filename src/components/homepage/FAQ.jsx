import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: "C'est quoi PI exactement ?", answer: "Project Initiative est le club d'entrepreneuriat de l'USTHB. Pas un club théorique — un club où on construit des vrais projets, on organise des vrais événements, et on apprend en faisant. Point." },
  { question: "Faut-il savoir coder pour rejoindre ?", answer: "Non. On a des pôles design, communication, relations externes, RH... Le code c'est un outil, pas un pré-requis. Ce qu'on cherche c'est des gens motivés qui veulent apprendre et contribuer." },
  { question: "Comment on rejoint ?", answer: "Le recrutement se fait en début de semestre. On poste les annonces sur @project.initiative.usthb sur Instagram. Tu remplis un formulaire, tu passes un entretien, et si ça matche — bienvenue dans la famille." },
  { question: "Faut-il être à l'USTHB ?", answer: "En principe oui, nos activités sont sur le campus. Mais pour des profils exceptionnels ou des collabs ponctuelles, on reste ouverts. Écris-nous." },
  { question: "C'est quoi la différence avec les autres clubs ?", answer: "On ne fait pas de théorie. On construit, on crée, on innove. Chaque membre travaille sur quelque chose de concret. PI c'est pas un CV filler — c'est une expérience qui te transforme." },
  { question: "Ça coûte combien ?", answer: "Rien. PI est une association à but non lucratif. On est bénévoles, passionnés, et on fait tout ça parce qu'on y croit." },
];

const FAQItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-[#0f172a]/[0.04]">
    <button
      onClick={toggle}
      className="w-full py-6 flex items-center justify-between gap-6 text-left"
    >
      <span
        className={`text-[15px] font-semibold transition-colors duration-200 ${
          isOpen ? 'text-[#0f172a]' : 'text-[#0f172a]/50'
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {faq.question}
      </span>
      <span className="flex-shrink-0 text-[#0f172a]/15">
        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p
            className="pb-6 text-[14px] text-[#0f172a]/40 leading-[1.8] max-w-2xl"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0f172a]/25 mb-4 block"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                FAQ
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-[1.2] mb-5"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Les questions qu'on nous pose tout le temps.
              </h2>
              <p
                className="text-sm text-[#0f172a]/35 leading-[1.8] mb-8"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Si ta question n'est pas ici, écris-nous. On répond vite.
              </p>
              <a
                href="https://www.instagram.com/project.initiative.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#0f172a] text-white text-[11px] font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-[#1e293b] transition-colors"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};