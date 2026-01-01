import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useGoogleSheets } from '../../hooks/useGoogleSheets';
import { getStats } from '../../services/googleSheetsAPI';
import { motion } from 'framer-motion';

export const Stats = () => {
  const { t } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { data: statsData } = useGoogleSheets(getStats);
  const [displayStats, setDisplayStats] = useState({
    members: 0,
    events:  0,
    projects: 0,
    partners: 0,
  });

  useEffect(() => {
    if (! inView) return;

    const duration = 2000;
    const start = Date.now();
    const targetStats = statsData || {
      alumni_members: 1250,
      total_events: 45,
      total_projects: 32,
      total_partners: 20,
    };

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setDisplayStats({
        members: Math.floor((targetStats.alumni_members || 1250) * progress),
        events: Math.floor((targetStats.total_events || 45) * progress),
        projects: Math.floor((targetStats. total_projects || 32) * progress),
        partners: Math. floor((targetStats.total_partners || 20) * progress),
      });

      if (progress === 1) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [inView, statsData]);

  const stats = [
    { label: t.statMembersLabel, value: displayStats.members, icon: '👥' },
    { label: t.statEventsLabel, value: displayStats. events, icon: '📅' },
    { label: t. statProjectsLabel, value: displayStats.projects, icon: '🚀' },
    { label:  t.statPartnersLabel, value: displayStats.partners, icon: '🤝' },
  ];

return (
  <section ref={ref} className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
    {/* Subtle background glow effect */}
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15, // This is your staggered delay
              ease: [0.21, 0.45, 0.32, 0.9] 
            }}
            whileHover={{ y: -10 }} // Lifts card on hover
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-accent/30"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,140,0,0.1)]">
              {stat.icon}
            </div>

            {/* Value */}
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              <span className="text-accent group-hover:text-orange-400 transition-colors">
                {stat.value.toLocaleString()}
              </span>
              <span className="text-accent/80">+</span>
            </div>

            {/* Label */}
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
              {stat.label}
            </p>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent rounded-full group-hover:w-1/3 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);};