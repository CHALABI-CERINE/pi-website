import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────
const pillars = [
  { number: '01', title: 'Former', desc: 'Workshops, hackathons et formations pratiques pour développer vos compétences.' },
  { number: '02', title: 'Innover', desc: 'Transformer les idées en projets concrets à travers l\'entrepreneuriat.' },
  { number: '03', title: 'Connecter', desc: 'Créer un réseau d\'étudiants, de mentors et de partenaires à l\'USTHB.' },
];

// ─── PILLAR ROW ───────────────────────────────────────
const PillarRow = ({ pillar, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="group flex items-start gap-6 py-6 border-b border-primary/5 last:border-b-0 cursor-default"
  >
    {/* Number */}
    <span 
      className="text-xs font-bold tracking-widest text-accent/40 group-hover:text-accent transition-colors duration-300 pt-1 select-none"
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {pillar.number}
    </span>

    {/* Content */}
    <div className="flex-1">
      <h4 
        className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 mb-1"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {pillar.title}
      </h4>
      <p 
        className="text-sm text-primary/50 leading-relaxed max-w-md"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {pillar.desc}
      </p>
    </div>

    {/* Arrow hint on hover */}
    <motion.div
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1"
      initial={false}
    >
      <ArrowRight className="w-4 h-4 text-accent" />
    </motion.div>
  </motion.div>
);

// ─── MAIN COMPONENT ───────────────────────────────────
export const AboutSnippet = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Subtle background texture — single diagonal line */}
      <div 
        className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        style={{ right: '33%' }}
      />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* ─── TWO-COLUMN LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* ─── LEFT: Headline + Statement ─── */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-accent" />
                <span 
                  className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  À Propos
                </span>
              </div>

              {/* Title */}
              <h2 
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-primary leading-[1.1] mb-8"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Le club qui
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FF8C00]">
                  transforme
                </span>
                <br />
                les idées.
              </h2>

              {/* Mission text */}
              <p 
                className="text-base text-primary/50 leading-[1.8] max-w-lg mb-10"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                <strong className="text-primary/80">Project Initiative</strong> est le premier club 
                d'entrepreneuriat de l'USTHB. Nous créons un espace où les étudiants 
                passent de l'idée à l'action — à travers des expériences concrètes 
                qui préparent la prochaine génération d'innovateurs algériens.
              </p>

              {/* CTA */}
              <motion.button
                onClick={() => navigate('/about')}
                className="group inline-flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span 
                  className="text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Découvrir notre histoire
                </span>
                <div className="w-10 h-10 rounded-full border border-primary/10 group-hover:border-accent group-hover:bg-accent flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* ─── RIGHT: Pillars + Accent ─── */}
          <div>
            {/* Accent block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-10 p-8 rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-[60px]" />
              
              <blockquote 
                className="relative z-10 text-lg md:text-xl text-white/90 font-medium leading-relaxed"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                "Chaque expérience est une chance de créer et bâtir l'avenir ensemble."
              </blockquote>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-6 h-px bg-accent" />
                <span 
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Project Initiative
                </span>
              </div>
            </motion.div>

            {/* Pillar list */}
            <div>
              {pillars.map((pillar, index) => (
                <PillarRow key={pillar.number} pillar={pillar} index={index} />
              ))}
            </div>

         
          </div>
        </div>
      </div>
    </section>
  );
};