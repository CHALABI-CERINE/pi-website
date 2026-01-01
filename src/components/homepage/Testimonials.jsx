import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useGoogleSheets } from '../../hooks/useGoogleSheets';
import { getTestimonials } from '../../services/googleSheetsAPI';
import { motion } from 'framer-motion';
import { FaStar, FaHeart } from 'react-icons/fa';

export const Testimonials = () => {
  const { t, lang } = useLanguage();
  const { ref, inView } = useScrollAnimation();
  const { data: testimonialsData } = useGoogleSheets(getTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = useMemo(() => {
    return testimonialsData. map(row => ({
      id: row[0],
      author: row[1],
      role: row[2],
      quote: lang === 'en' ? row[3] : row[4],
      photo: row[5],
      event: row[7],
    }));
  }, [testimonialsData, lang]);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials. length]);

  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
          {t. testimonialsTitle}
        </h2>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y:  20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y:  -20 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto mb-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-primary text-lg" />
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8 italic">"{current.quote}"</p>

          <div className="flex items-center gap-4">
            {current.photo && (
              <img
                src={current.photo}
                alt={current.author}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-bold text-dark">{current.author}</p>
              <p className="text-gray-600 text-sm">{current.role}</p>
              <p className="text-primary text-xs">{current.event}</p>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ?  'bg-primary w-8' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};