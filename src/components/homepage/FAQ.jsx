import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question:  "C'est quoi Project Initiative ?",
    answer: "Project Initiative est le premier club d'entrepreneuriat et d'innovation de l'USTHB. Nous organisons des formations, workshops, hackathons et événements pour aider les étudiants à développer leurs compétences et concrétiser leurs idées."
  },
  {
    question: "Quels sont les départements du club ?",
    answer: "On est structurés en plusieurs pôles : IT (développement), Design (graphisme/UI-UX), Communication, Relations Externes et Ressources Humaines. Chaque pôle travaille en synergie sur nos projets."
  },
  {
    question: "Faut-il être étudiant à l'USTHB pour rejoindre ? ",
    answer: "Principalement oui, car nos activités se déroulent au campus. Cependant, nous restons ouverts aux profils exceptionnels et passionnés venant d'autres établissements pour certaines collaborations."
  },
  {
    question: "Comment devenir membre ?",
    answer: "Le recrutement se fait généralement au début de chaque semestre. Suivez notre compte Instagram @project. initiative. usthb pour être informé des prochaines sessions.  Il suffit de remplir le formulaire en ligne, suivi d'un entretien."
  },
  {
    question: "Quels types d'événements organisez-vous ?",
    answer: "Nous organisons des hackathons, bootcamps (comme Founders Camp), workshops techniques, conférences, sessions de networking et des compétitions. Chaque événement est une opportunité d'apprendre et de se connecter."
  },
  {
    question: "Qu'est-ce qui rend PI unique ?",
    answer: "Notre approche pratique et notre communauté passionnée. On ne se contente pas de théorie - on construit, on crée, on innove ensemble. PI c'est une famille de futurs entrepreneurs et innovateurs."
  }
];

const FAQItem = ({ faq, index, isOpen, toggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-black/5 last:border-none"
    >
      <motion.button
        onClick={toggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {/* Question Number */}
        <span 
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            isOpen 
              ? 'bg-[#FF6B00] text-white' 
              : 'bg-black/5 text-black/40 group-hover:bg-[#FF6B00]/10 group-hover:text-[#FF6B00]'
          }`}
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        
        {/* Question Text */}
        <span 
          className={`flex-grow text-base md:text-lg font-semibold transition-colors duration-300 ${
            isOpen ?  'text-[#FF6B00]' : 'text-[#0f172a] group-hover:text-[#FF6B00]'
          }`}
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {faq.question}
        </span>
        
        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-[#FF6B00] text-white' 
              : 'bg-black/5 text-black/40 group-hover:bg-[#FF6B00]/10 group-hover:text-[#FF6B00]'
          }`}
        >
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-12">
              <p 
                className="text-black/60 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default
  const { ref, inView } = useInView({ triggerOnce:  true, threshold: 0.1 });

  return (
    <section 
      id="faq"
      ref={ref}
      className="py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="lg:sticky lg:top-32"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, type: 'spring', stiffness:  200 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/10 mb-4"
              >
                <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                <span 
                  className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  FAQ
                </span>
              </motion.div>
              
              <h2 
                className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4"
                style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
              >
                Questions <span className="text-[#FF6B00]">Fréquentes</span>
              </h2>
              
              <p 
                className="text-black/50 mb-8"
                style={{ fontFamily:  '"Inter", sans-serif' }}
              >
                Tout ce que vous devez savoir sur Project Initiative.  Vous ne trouvez pas votre réponse ?
              </p>

              {/* Contact CTA */}
              <motion. a
                href="https://www.instagram.com/project.initiative.usthb/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                Nous Contacter
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="bg-[#f8fafc] rounded-3xl p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  toggle={() => setOpenIndex(openIndex === index ?  null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};