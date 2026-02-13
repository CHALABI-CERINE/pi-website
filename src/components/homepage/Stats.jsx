import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ─── COUNTER ──────────────────────────────────────────
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;
    setDone(true);
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * ease));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, done]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// ─── DATA ─────────────────────────────────────────────
const stats = [
  { value: 250, suffix: '+', label: 'Membres actifs' },
  { value: 45,  suffix: '+', label: 'Événements organisés' },
  { value: 20,  suffix: '+', label: 'Projets réalisés' },
  { value: 10,  suffix: '+', label: 'Partenaires' },
];

// ─── MAIN ─────────────────────────────────────────────
export const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative py-20 md:py-24 bg-[#0f172a]"
    >
      <div className="container mx-auto px-6">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="block text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 mb-14"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Notre impact
        </motion.span>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span
                className="block text-4xl md:text-5xl font-bold text-white tracking-tight"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                <Counter target={stat.value} duration={2} />
                <span className="text-white/25">{stat.suffix}</span>
              </span>
              <span
                className="block mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/25"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};