import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'; // npm install react-countup
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Members', value: 250, suffix: '+' },
  { label: 'Events Organized', value: 45, suffix: '+' },
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Partners & Sponsors', value: 10, suffix: '+' },
];

export const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="stats" ref={ref} className="py-24 bg-[#222222]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center border-l border-white/10 pl-8">
              <h3 className="font-title text-5xl md:text-6xl text-white mb-2">
                {inView ? <CountUp end={stat.value} duration={3} /> : 0}{stat.suffix}
              </h3>
              <p className="font-text text-[10px] font-black uppercase tracking-widest text-accent">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};