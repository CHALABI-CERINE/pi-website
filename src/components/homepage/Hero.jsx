import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const HERO_IMAGES = [
  '/assets/hero/hero-1.jpg',
  '/assets/hero/hero-2.jpg',
  // '/assets/hero/hero-3.jpg',
  '/assets/hero/hero-4.jpg',
  '/assets/hero/hero-6.jpg',
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary"
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
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

        

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 font-heading"
          >
            On n'attend pas d'avoir un diplôme pour entreprendre.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-base md:text-lg text-white/50 max-w-xl mb-12 font-body"
            style={{ lineHeight: 1.8 }}
          >
            Project Initiative est le club d'entrepreneuriat de l'USTHB.
            On forme, on accompagne, on connecte — et on construit des choses concrètes.
          </motion.p>

          <motion.a
            href="/#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-white text-primary text-sm font-bold rounded-full hover:bg-white/90 transition-colors font-heading"
          >
            Découvrir PI
          </motion.a>
        </div>
      </div>

      {/* Slide indicators */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === current ? 32 : 8,
                backgroundColor: i === current ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};