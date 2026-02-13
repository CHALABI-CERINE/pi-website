import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2. 5 rounded-xl 
        bg-black/5 hover:bg-black/10 
        dark:bg-white/10 dark: hover: bg-white/20
        transition-colors overflow-hidden
        ${className}
      `}
      whileHover={{ scale:  1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' :  'Switch to dark mode'}
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Sun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Moon className="w-5 h-5 text-[#1E3A8A]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: theme === 'dark' 
            ? '0 0 20px rgba(250, 204, 21, 0.3)' 
            : '0 0 20px rgba(30, 58, 138, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion. button>
  );
};