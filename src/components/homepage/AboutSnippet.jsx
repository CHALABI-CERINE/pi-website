import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Target, Users, Zap, ArrowRight } from 'lucide-react';

const factBoxes = [
  {
    icon: Lightbulb,
    title: 'Ce Qu\'on Fait',
    description: 'Formations, hackathons, workshops et événements pour développer vos compétences entrepreneuriales.',
    color: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
  },
  {
    icon: Target,
    title:  'Nos Valeurs',
    description: 'Innovation, collaboration, excellence et impact positif sur notre communauté universitaire.',
    color: 'from-blue-600 to-blue-700',
    iconBg: 'bg-blue-600/10',
    iconColor:  'text-blue-600',
  },
  {
    icon: Users,
    title:  'Notre Équipe',
    description: 'Des étudiants passionnés qui croient au pouvoir des idées et de l\'entrepreneuriat.',
    color: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
  },
  {
    icon:  Zap,
    title:  'Notre Impact',
    description: '+250 membres formés, +45 événements organisés et des projets qui changent les choses.',
    color: 'from-blue-600 to-blue-700',
    iconBg: 'bg-blue-600/10',
    iconColor: 'text-blue-600',
  },
];

const FactBox = ({ box, index }) => {
  const Icon = box.icon;
  
  return (
    <motion. div
      initial={{ opacity: 0, y:  30 }}
      whileInView={{ opacity: 1, y:  0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl bg-white border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
    >
      {/* Gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${box.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
      
      {/* Icon */}
      <motion.div 
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${box.iconBg} ${box.iconColor} mb-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      
      {/* Title */}
      <h4 
        className="text-lg font-bold text-primary mb-2"
        style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
      >
        {box.title}
      </h4>
      
      {/* Description */}
      <p 
        className="text-sm text-primary/60 leading-relaxed"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        {box.description}
      </p>

      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${box.color} opacity-5 rounded-tr-2xl rounded-bl-[40px]`} />
    </motion.div>
  );
};

export const AboutSnippet = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="relative py-16 md:py-20 bg-gradient-to-b from-white via-surface to-white overflow-hidden">
      {/* Background decorations */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(255,107,0,0.03)', filter: 'blur(80px)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'rgba(30,58,138,0.03)', filter: 'blur(60px)' }}
      />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y:  0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              À Propos
            </motion. span>
            
            {/* Title */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-tight mb-4"
              style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
            >
              Qui Sommes-
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Nous</span> ? 
            </h2>
            
            {/* Mission Statement */}
            <p 
              className="text-base md:text-lg text-primary/60 leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Le <strong className="text-primary">Project Initiative Club</strong> est le premier club d'entrepreneuriat et d'innovation de l'USTHB. 
              Depuis notre création, nous aidons les étudiants à transformer leurs idées en projets concrets à travers des formations pratiques, 
              des workshops intensifs et des événements inspirants.  Notre mission :  
              <span className="text-orange-500 font-semibold"> créer la prochaine génération d'entrepreneurs algériens</span> qui osent innover et bâtir l'avenir.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x:  0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={() => navigate('/about')}
              className="group flex items-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-primary/20"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(15,23,42,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Découvrir Notre Histoire
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Fact Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {factBoxes.map((box, index) => (
            <FactBox key={box.title} box={box} index={index} />
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y:  0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <blockquote 
            className="text-lg md:text-xl text-primary/70 italic max-w-2xl mx-auto"
            style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
          >
            "Chaque expérience est une chance de créer et bâtir l'avenir ensemble."
          </blockquote>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-orange-500"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Project Initiative
            </span>
            <div className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};