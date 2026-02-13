import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HERO_LOGO = '/assets/logo.png';

const HERO_IMAGES = [
  '/assets/hero/hero-1.jpg',
  '/assets/hero/hero-2.jpg',
  '/assets/hero/hero-3.jpg',
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.2s ease-in-out, transform 1.2s ease-in-out',
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          <motion.img
            src={HERO_LOGO}
            alt="Project Initiative"
            className="w-[140px] md:w-[180px] h-auto mb-12"
            style={{ opacity: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8"
            style={{ fontFamily: '"Space Grotesk", sans-serif', lineHeight: 1.15 }}
          >
            On n'attend pas d'avoir un diplôme pour entreprendre.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base md:text-lg max-w-xl mb-12"
            style={{ fontFamily: '"Inter", sans-serif', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}
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
            className="px-8 py-3.5 text-sm font-bold rounded-full"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              backgroundColor: '#ffffff',
              color: '#0f172a',
            }}
          >
            Découvrir PI
          </motion.a>
        </div>
      </div>

      {/* Slide indicators */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-10 flex gap-2" style={{ transform: 'translateX(-50%)' }}>
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                height: 4,
                width: i === current ? 32 : 8,
                borderRadius: 9999,
                backgroundColor: i === current ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
                transition: 'all 0.5s',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};