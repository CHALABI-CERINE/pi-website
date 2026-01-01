import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card } from '../common/Card';

const portfolioData = [
  {
    id: 1,
    title: "Founders Camp",
    category: "Events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    desc: "A high-intensity bootcamp for student entrepreneurs at USTHB.",
    link: "/event/founders-camp"
  },
  {
    id: 2,
    title: "Mars Rover PI",
    category: "Projects",
    image: "https://images.unsplash.com/photo-1533619239233-628103c235bc?q=80&w=2070&auto=format&fit=crop",
    desc: "Autonomous rover designed for rough terrain navigation.",
    link: "https://github.com/project-initiative"
  },
  {
    id: 3,
    title: "Ramadan Meet3",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    desc: "Technical networking session during the holy month.",
    link: "/event/ramadan-meet"
  }
];

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredItems = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header avec Filtres */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-title text-5xl md:text-7xl text-primary uppercase mb-4">
              Our <span className="text-accent">Works</span>
            </h2>
            <div className="flex gap-6 mt-8">
              {['All', 'Projects', 'Events'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-text text-[10px] font-black uppercase tracking-widest transition-all pb-2 border-b-2 
                  ${filter === cat ? 'border-accent text-accent' : 'border-transparent text-primary/30 hover:text-primary'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/portfolio')}
            className="font-text text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-8 py-4 hover:bg-primary hover:text-white transition-all"
          >
            View All Portfolio →
          </button>
        </div>

        {/* Grille de Cartes */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Card 
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  link={item.link}
                  linkText="View Details"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};