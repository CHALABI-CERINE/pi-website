import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
          />
          
          {/* Contenu Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed z-[101] bg-white w-full max-w-2xl p-12 rounded-sm shadow-2xl overflow-hidden self-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-primary/20 hover:text-accent font-text text-xl"
            >
              ✕
            </button>
            
            <h2 className="font-title text-4xl text-primary uppercase mb-8 tracking-tighter">
              {title}
            </h2>
            
            <div className="font-body text-primary/70 leading-relaxed overflow-y-auto max-h-[60vh]">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};