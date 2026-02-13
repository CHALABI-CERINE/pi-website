import React from 'react';
import { motion } from 'framer-motion';

const HERO_BG = '/assets/hero-bg.jpg';
const HERO_LOGO = '/assets/logo.png';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0f172a]/65" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <motion.img
            src={HERO_LOGO}
            alt="Project Initiative"
            className="w-[140px] md:w-[180px] h-auto mb-12 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-8"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            On n'attend pas d'avoir un diplôme pour entreprendre.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base md:text-lg text-white/50 max-w-xl leading-[1.8] mb-12"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Project Initiative est le club d'entrepreneuriat de l'USTHB. 
            On forme, on accompagne, on connecte — et on construit des choses concrètes.
          </motion.p>

          <motion.a
            href="/#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-white text-[#0f172a] text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Découvrir PI
          </motion.a>
        </div>
      </div>
    </section>
  );
};