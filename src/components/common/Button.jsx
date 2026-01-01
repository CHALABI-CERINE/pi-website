import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "font-text text-[11px] font-black uppercase tracking-[0.25em] px-10 py-5 transition-all duration-500 rounded-sm";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-primary hover:shadow-xl hover:shadow-orange-500/20",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:text-accent p-0 tracking-[0.3em]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};