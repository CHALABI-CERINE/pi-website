import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ title, category, image, link, linkText = "Explore Project" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group flex flex-col w-full"
    >
      {/* Container Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-lightgray rounded-sm mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s] ease-out"
        />
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Infos */}
      <div className="flex flex-col flex-grow">
        <span className="font-text text-[9px] text-accent font-black uppercase tracking-widest mb-2">
          {category}
        </span>
        <h4 className="font-title text-2xl text-primary uppercase leading-tight mb-4">
          {title}
        </h4>
        
        {/* Lien / Action */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-3 font-text text-[10px] font-bold uppercase tracking-widest text-primary/40 group-hover:text-accent transition-colors duration-300"
        >
          {linkText}
          <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
        </a>
      </div>
    </motion.div>
  );
};