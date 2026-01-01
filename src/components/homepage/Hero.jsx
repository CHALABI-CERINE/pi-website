import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '../common/Button';
import { ScrollIndicator } from './ScrollIndicator';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { t } = useLanguage();

  return (
   // Inside Hero.jsx
<section className="relative flex flex-col items-center justify-center overflow-hidden">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
      Innovating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Future</span>
    </h1>
    <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
      Building meaningful projects through collaboration and data-driven insights.
    </p>
    <div className="mt-10 flex gap-4 justify-center">
      <button className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-500/30">
        Get Started
      </button>
      <button className="border-2 border-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>
    
  );
};