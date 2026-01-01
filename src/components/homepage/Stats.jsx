import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, Rocket, Handshake, TrendingUp } from 'lucide-react';

// ============ ANIMATED COUNTER COMPONENT ============
const AnimatedCounter = ({ target, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime;
      const startValue = 0;
      
      const animate = (currentTime) => {
        if (! startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count. toLocaleString()}{suffix}
    </span>
  );
};

// ============ STAT CARD COMPONENT ============
const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce:  true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden:  { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const iconVariants = {
    hidden:  { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration:  0.5,
        delay: index * 0.15 + 0.3,
        type: 'spring',
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        y: -8, 
        transition: { duration:  0.3 } 
      }}
      className="relative group"
    >
      <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
        
        {/* Hover glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-[40px] opacity-50" />

        {/* Icon with animation */}
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate={controls}
          className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl ${stat.iconBg} mb-5`}
        >
          <Icon className={`w-7 h-7 ${stat. iconColor}`} />
          
          {/* Pulse ring on icon */}
          <motion.div
            className={`absolute inset-0 rounded-2xl ${stat.iconBg}`}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </motion. div>

        {/* Counter */}
        <div className="relative z-10 mb-2">
          <span 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
          >
            <AnimatedCounter 
              target={stat.value} 
              duration={2.5} 
              suffix=""
            />
            <span className="text-orange-500">{stat.suffix}</span>
          </span>
        </div>

        {/* Label */}
        <h4 
          className="relative z-10 text-sm md:text-base font-bold text-white/90 mb-1"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {stat.label}
        </h4>

        {/* Description */}
        <p 
          className="relative z-10 text-xs text-white/40"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {stat.description}
        </p>

        {/* Bottom accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-500/0"
          initial={{ width: 0 }}
          whileInView={{ width: '60%' }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

// ============ MAIN STATS COMPONENT ============
export const Stats = () => {
  const stats = [
    { 
      label: 'Membres Actifs', 
      value:  250, 
      suffix: '+',
      icon: Users,
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      description: 'Étudiants dans notre réseau'
    },
    { 
      label: 'Événements', 
      value: 45, 
      suffix: '+',
      icon: Calendar,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      description: 'Workshops & conférences'
    },
    { 
      label: 'Projets Réalisés', 
      value: 20, 
      suffix: '+',
      icon:  Rocket,
      iconBg:  'bg-orange-500/20',
      iconColor: 'text-orange-500',
      description: 'Idées concrétisées'
    },
    { 
      label: 'Partenaires', 
      value: 10, 
      suffix: '+',
      icon:  Handshake,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      description: 'Entreprises & sponsors'
    },
  ];

  const { ref:  sectionRef, inView:  sectionInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Background Effects */}
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)',
          filter:  'blur(60px)'
        }}
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{ duration: 8, repeat: Infinity, ease:  'easeInOut' }}
      />

      {/* Dot pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating particles */}
      {sectionInView && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left:  `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#FF6B00' : '#3B82F6',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat:  Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Section Header */}
        <motion. div
          initial={{ opacity: 0, y:  30 }}
          whileInView={{ opacity: 1, y:  0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4"
          >
            <TrendingUp className="w-4 h-4 text-orange-500" />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-orange-500"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Notre Impact
            </span>
          </motion.div>
          
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-black text-white"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            Des Chiffres Qui <span className="text-orange-500">Parlent</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion. div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:  true }}
          transition={{ delay:  0.8 }}
          className="mt-12 text-center"
        >
          <p 
            className="text-white/40 text-sm mb-4"
            style={{ fontFamily:  '"Inter", sans-serif' }}
          >
            Prêt à faire partie de l'aventure ? 
          </p>
          <motion.a
            href="https://www.instagram.com/project. initiative. usthb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(255,107,0,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Rejoindre PI
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};