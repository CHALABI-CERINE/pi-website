import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Ahmed",
    role: "Participant - Founder's Camp",
    quote: "Project Initiative changed my perspective on engineering. The hands-on experience is unmatched.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    id: 2,
    name: "Lina",
    role: "Member - Dev Team",
    quote: "A community where innovation meets collaboration. I learned more here than in any classroom.",
    stars: 5,
    img: "https://i.pravatar.cc/150?u=lina"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-offwhite overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="font-title text-4xl md:text-6xl text-primary text-center uppercase mb-20">
          What People <span className="text-accent">Say</span>
        </h3>

        <div className="max-w-4xl mx-auto relative h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <img src={testimonials[index].img} className="w-20 h-20 rounded-full mb-8 border-2 border-accent p-1" alt="" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[index].stars)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="font-body text-2xl md:text-3xl italic text-primary/80 mb-8 leading-relaxed">
                "{testimonials[index].quote}"
              </p>
              <h4 className="font-text text-sm font-black uppercase tracking-widest text-primary">
                {testimonials[index].name}
              </h4>
              <p className="font-text text-[10px] text-accent uppercase tracking-widest mt-2">
                {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};