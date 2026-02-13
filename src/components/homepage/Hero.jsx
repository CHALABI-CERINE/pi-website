import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

// ====== EDIT THESE PATHS WHEN YOU ADD IMAGES ======
const HERO_IMAGES = [
  '/assets/hero/hero-1.jpg',
  '/assets/hero/hero-2.jpg',
  '/assets/hero/hero-3.jpg',
];
const HERO_LOGO = '/assets/logo.png';
// ================================================

// ============ PARTICLE SYSTEM (Lighter) ============
const Particle = ({ index }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 4;
  const randomDuration = 5 + Math.random() * 3;
  const randomSize = 2 + Math.random() * 3;
  const colors = ['#FF6B00', '#1E3A8A', '#FF8C00'];

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
        background: colors[index % colors.length],
      }}
      initial={{ y: '110%', opacity: 0 }}
      animate={{ y: '-10%', opacity: [0, 0.6, 0.6, 0] }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// ============ INTERACTIVE LOGO ============
const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 20);
    mouseY.set((e.clientY - centerY) / 20);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-20, 20], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-20, 20], [-10, 10]), springConfig);

  return (
    <motion.div
      ref={logoRef}
      className="relative cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,0,0.35) 0%, rgba(30,58,138,0.2) 50%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.2)',
        }}
        animate={{ opacity: isHovered ? 1 : 0.5, scale: isHovered ? 1.4 : 1.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Logo */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.img
          src={HERO_LOGO}
          alt="Project Initiative Club"
          className="w-[220px] md:w-[300px] lg:w-[360px] h-auto drop-shadow-xl"
          style={{
            filter: isHovered
              ? 'drop-shadow(0 0 30px rgba(255,107,0,0.4))'
              : 'drop-shadow(0 5px 20px rgba(0,0,0,0.1))',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Sparkles on hover */}
        {isHovered && (
          <>
            <motion.div
              className="absolute -top-2 -right-2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-1 -left-2"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.1 }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// ============ MAIN HERO ============
export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  const [activeIndex, setActiveIndex] = useState(0);

  // Gentler parallax - content stays visible longer
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const y = useTransform(scrollY, [0, 600], [0, 50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!HERO_IMAGES.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-white/90" />
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(5)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'rgba(255,107,0,0.08)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'rgba(30,58,138,0.06)', filter: 'blur(80px)' }}
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 px-6 py-10"
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <InteractiveLogo />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl font-bold text-white/90 leading-relaxed mb-6 max-w-2xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {t.heroMission}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-sm md:text-base text-white/80 max-w-xl mb-8"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            {t.heroMissionSecondary}
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          className="flex flex-col items-center gap-1 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-5 h-5 text-orange-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};