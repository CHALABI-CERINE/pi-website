import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      
      {/* 1. Effet de fond : Gradients animés */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        
        {/* 2. Badge d'annonce avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-primary/20 bg-primary/5 font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Leading Tech Club @ USTHB
          </span>
        </motion.div>

        {/* 3. Titre Principal (Syncopate) avec stagger effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter"
          >
            PROJECT
          </motion.h1>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 md:gap-8 mt-2"
          >
            <div className="h-[2px] w-12 md:w-32 bg-primary hidden sm:block" />
            <h1 className="font-display text-5xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tighter text-primary italic">
              INITIATIVE
            </h1>
            <div className="h-[2px] w-12 md:w-32 bg-primary hidden sm:block" />
          </motion.div>
        </motion.div>

        {/* 4. Description (Space Grotesk) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 font-heading text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed uppercase tracking-wider"
        >
          Nous façonnons les ingénieurs de demain à travers l'innovation, 
          le partage de connaissances et des projets concrets.
        </motion.p>

        {/* 5. Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="group px-12">
            Register Now
            <motion.span 
              className="ml-2 inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
          <Button variant="outline" size="lg" className="px-12">
            Our Projects
          </Button>
        </motion.div>
      </div>

      {/* 6. Indicateur de scroll minimaliste */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
          <span className="font-heading text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground rotate-90 origin-left translate-x-1">
            Scroll
          </span>
        </div>
      </motion.div>

      {/* 7. Décoration : Logo PI en fond (subtil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1DQCfO0RmKNbSTb5toyzH4hDwtulNkD-o" 
          alt="" 
          className="w-[80vw] max-w-[800px]"
        />
      </div>
    </section>
  );
};