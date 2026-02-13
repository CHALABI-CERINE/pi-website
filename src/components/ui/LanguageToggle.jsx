import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageToggle = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion. button
      onClick={toggleLanguage}
      className={`relative flex items-center gap-1 px-3 py-2 rounded-xl bg-black/5 hover:bg-black/10 transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      {/* FR */}
      <span 
        className={`text-xs font-bold uppercase tracking-wider transition-colors ${
          language === 'fr' 
            ? 'text-[#FF6B00]' 
            : 'text-black/40'
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        FR
      </span>
      
      {/* Separator */}
      <span className="text-black/20">|</span>
      
      {/* EN */}
      <span 
        className={`text-xs font-bold uppercase tracking-wider transition-colors ${
          language === 'en' 
            ? 'text-[#FF6B00]' 
            : 'text-black/40'
        }`}
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        EN
      </span>

      {/* Animated underline */}
      <motion.div
        className="absolute bottom-1 h-0.5 bg-[#FF6B00] rounded-full"
        initial={false}
        animate={{
          left: language === 'fr' ? '8px' : '32px',
          width: '16px'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </motion. button>
  );
};