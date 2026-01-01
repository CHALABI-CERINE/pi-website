import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Calendar, Rocket, ArrowRight } from 'lucide-react';

const portfolioData = [
  {
    id: 1,
    title: "Founders Camp",
    category: "Events",
    image:  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    desc: "A high-intensity bootcamp for student entrepreneurs at USTHB.  3 days of workshops, mentoring & pitching.",
    link: "/event/founders-camp",
    date: "March 2025",
    tags: ["Entrepreneurship", "Bootcamp", "Pitching"]
  },
  {
    id: 2,
    title: "Mars Rover PI",
    category:  "Projects",
    image:  "https://images.unsplash.com/photo-1533619239233-628103c235bc?q=80&w=2070&auto=format&fit=crop",
    desc: "Autonomous rover designed for rough terrain navigation. Award-winning robotics project.",
    link: "https://github.com/project-initiative",
    date: "2024",
    tags:  ["Robotics", "AI", "Engineering"]
  },
  {
    id: 3,
    title: "Ramadan Meet3",
    category:  "Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    desc: "Technical networking sessions during the holy month.  Building bridges in our community.",
    link: "/event/ramadan-meet",
    date: "Ramadan 2025",
    tags:  ["Networking", "Community", "Tech Talks"]
  },
];

// Filter button component
const FilterButton = ({ label, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-3 font-heading text-[11px] uppercase tracking-[0.2em] transition-colors ${
      isActive ?  'text-accent' : 'text-primary/40 hover:text-primary/70'
    }`}
    whileHover={{ scale:  1.05 }}
    whileTap={{ scale:  0.98 }}
  >
    {label}
    {isActive && (
      <motion. div
        layoutId="activeFilter"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </motion.button>
);

// Enhanced Project Card
const ProjectCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const CategoryIcon = item.category === 'Events' ? Calendar :  Rocket;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Card Container */}
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-700">
        
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Main Image */}
          <motion.img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ?  'grayscale(0%)' : 'grayscale(30%)'
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.4 }}
          />

          {/* Category Badge */}
          <motion.div 
            className="absolute top-4 left-4"
            animate={{ y: isHovered ? 0 : -10, opacity: isHovered ? 1 :  0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
              <CategoryIcon className="w-3 h-3 text-accent" />
              <span className="font-heading text-[10px] uppercase tracking-widest text-primary">
                {item.category}
              </span>
            </span>
          </motion. div>

          {/* Tags - Appear on Hover */}
          <motion.div 
            className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[60%] justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {item. tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full bg-accent/90 text-white font-heading text-[9px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Content Overlay - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Date */}
            <motion.span 
              className="inline-block font-heading text-[10px] uppercase tracking-widest text-accent mb-3"
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.7 }}
            >
              {item.date}
            </motion.span>
            
            {/* Title */}
            <motion.h3 
              className="font-display text-2xl md:text-3xl text-white uppercase leading-tight mb-3"
              animate={{ y: isHovered ? 0 :  10 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {item. title}
            </motion.h3>
            
            {/* Description - Expand on Hover */}
            <motion.p 
              className="font-body text-sm text-white/70 leading-relaxed"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isHovered ? 'auto' : 0, 
                opacity:  isHovered ? 1 : 0,
                marginBottom: isHovered ? 16 : 0
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {item. desc}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href={item. link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white"
              animate={{ y: isHovered ?  0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ x: 5 }}
            >
              <span className="font-heading text-xs uppercase tracking-widest">
                View Details
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Decorative Number */}
      <motion.div 
        className="absolute -bottom-4 -right-4 font-display text-8xl text-primary/5 pointer-events-none select-none"
        animate={{ opacity: isHovered ? 0.1 : 0.05 }}
      >
        0{index + 1}
      </motion. div>
    </motion.div>
  );
};

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData. filter(item => item.category === filter);

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-surface to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"
      />

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity:  0, y:  40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            <motion.span 
              className="inline-block px-4 py-2 rounded-full border border-primary/10 font-heading text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Featured Work
            </motion. span>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary uppercase tracking-tight leading-none">
              Our Impact
              <br />
              <span className="text-accent">In Action</span>
            </h2>
            
            <p className="font-body text-primary/50 mt-6 max-w-lg">
              Discover our latest events and projects that are shaping the next generation of tech leaders.
            </p>
          </div>

          {/* Filters & View All */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            {/* Filter Buttons */}
            <div className="flex gap-2 p-1 rounded-full bg-primary/5">
              {['All', 'Projects', 'Events']. map((cat) => (
                <FilterButton 
                  key={cat}
                  label={cat}
                  isActive={filter === cat}
                  onClick={() => setFilter(cat)}
                />
              ))}
            </div>
            
            {/* View All Button */}
            <motion. button 
              onClick={() => navigate('/portfolio')}
              className="group flex items-center gap-4 px-8 py-4 border border-primary/10 hover:border-primary/30 rounded-full transition-all"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-heading text-[11px] uppercase tracking-widest text-primary/70 group-hover:text-primary">
                View All Portfolio
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4 text-accent" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <ProjectCard 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
      </div>
    </section>
  );
};