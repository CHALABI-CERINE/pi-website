import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlight } from '../ui/Highlight';

const HERO_LOGO = '/assets/logo.png';

const HERO_IMAGES = [
  '/assets/hero/hero-1.jpg',
  '/assets/hero/hero-2.jpg',
  '/assets/hero/hero-4.jpg',
];

// ─── The rotating words — what PI actually does ───
const ACTIVITIES = [
  { text: 'on organise des hackathons', emoji: '🚀' },
  { text: 'on lance des startups', emoji: '💡' },
  { text: 'on code des projets réels', emoji: '⚡' },
  { text: 'on crée des connexions', emoji: '🤝' },
  { text: 'on forme des leaders', emoji: '🎯' },
  { text: 'on casse les codes', emoji: '🔥' },
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(0);

  // Rotate background images
  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Rotate activities text
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % ACTIVITIES.length);
    }, 2500);
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
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === currentImage ? 1 : 0,
              transform: i === currentImage ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 1.2s ease-in-out, transform 1.2s ease-in-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/65" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Logo */}
          <motion.img
            src={HERO_LOGO}
            alt="Project Initiative"
            className="w-28 md:w-36 h-auto mb-10 opacity-90"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-heading"
          >
            Le club où les étudiants{' '}
            <Highlight color="orange">arrêtent d'attendre</Highlight>{' '}
            et commencent à construire.
          </motion.h1>

          {/* ─── Activity Ticker — the special touch ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="text-sm text-white/40 font-body">Ici,</span>
              <div className="relative h-6 overflow-hidden" style={{ minWidth: 260 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentActivity}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 text-sm font-bold text-white font-heading whitespace-nowrap flex items-center gap-2"
                  >
                    <span>{ACTIVITIES[currentActivity].emoji}</span>
                    <span>{ACTIVITIES[currentActivity].text}</span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-sm md:text-base text-white/40 max-w-lg mb-10 font-body"
            style={{ lineHeight: 1.8 }}
          >
            Project Initiative — le premier club d'entrepreneuriat
            de l'USTHB. Depuis 2022, on transforme les idées en actions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="/#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white text-primary text-sm font-bold rounded-full hover:bg-white/90 transition-colors font-heading"
            >
              Découvrir PI
            </a>
            <a
              href="https://www.instagram.com/project.initiative.usthb/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-bold rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors font-heading"
            >
              Nous suivre →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      {HERO_IMAGES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: i === currentImage ? 32 : 8,
                backgroundColor: i === currentImage ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};