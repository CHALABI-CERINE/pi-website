import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: '1',
    quote: 'PI m\'a appris que l\'entrepreneuriat c\'est pas un cours — c\'est un muscle. Et ici, on le travaille tous les jours.',
    name: 'Ahmed B.',
    context: 'Founders Camp 2024',
  },
  {
    id: '2',
    quote: 'J\'ai plus appris en 3 mois chez PI qu\'en 2 ans de cours. Parce qu\'ici on fait, on ne regarde pas.',
    name: 'Lina M.',
    context: 'Équipe Dev',
  },
  {
    id: '3',
    quote: 'Grâce à PI, j\'ai lancé ma startup avant même d\'avoir mon diplôme. Le réseau que tu construis ici est inestimable.',
    name: 'Karim H.',
    context: 'Alumni 2023',
  },
  {
    id: '4',
    quote: 'L\'énergie ici est contagieuse. Chaque événement te donne envie de construire quelque chose.',
    name: 'Sara B.',
    context: 'Hackathon PI',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <span
            className="block text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0f172a]/20 mb-16"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Ce qu'ils en disent
          </span>

          {/* Quote */}
          <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p
                  className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold text-[#0f172a] leading-[1.45] mb-8"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="text-[12px] font-semibold text-[#0f172a]/50"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {testimonials[current].name}
                  </span>
                  <span className="text-[#0f172a]/15">·</span>
                  <span
                    className="text-[12px] text-[#0f172a]/30"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {testimonials[current].context}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-14">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-[#0f172a]/25'
                    : 'w-1.5 bg-[#0f172a]/8 hover:bg-[#0f172a]/15'
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};