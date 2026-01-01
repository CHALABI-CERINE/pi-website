import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

const facts = [
  {
    title: "What We Do",
    desc: "We bridge the gap between academic theory and industry reality through hands-on technical projects."
  },
  {
    title: "Our Values",
    desc: "Innovation, collaboration, and excellence. We build an environment where every idea can scale."
  },
  {
    title: "Our Team",
    desc: "A multidisciplinary collective of developers, designers, and managers driven by technology."
  }
];

export const AboutSnippet = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-title text-5xl md:text-7xl text-primary uppercase mb-8"
          >
            About <span className="text-accent">Us</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-body text-lg text-primary/70 leading-relaxed mb-10"
          >
            Project Initiative is more than just a club at USTHB; it's a high-performance 
            incubator where students transform bold ideas into technical reality. 
            Since 2020, we've been driving innovation through a community-led approach.
          </motion.p>

          <Button variant="outline" onClick={() => navigate('/about')}>
            Discover Our Story →
          </Button>
        </div>

        {/* Quick Fact Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-white border border-lightgray hover:border-accent transition-colors group"
            >
              <div className="w-8 h-[2px] bg-accent mb-6 group-hover:w-16 transition-all" />
              <h4 className="font-title text-xl text-primary mb-4 uppercase tracking-tighter">
                {fact.title}
              </h4>
              <p className="font-body text-sm text-primary/60 leading-relaxed">
                {fact.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};