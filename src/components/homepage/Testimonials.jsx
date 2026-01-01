import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

// PLACEHOLDER DATA - Will be replaced by Google Sheets data
// Structure matches your googleSheetsAPI. js MOCK_TESTIMONIALS
const testimonials = [
  {
    id: '1',
    author_name: 'Ahmed B.',
    role: 'Participant',
    quote_fr: 'Project Initiative a complètement changé ma vision de l\'entrepreneuriat. L\'expérience pratique et le mentorat sont incomparables.',
    event_context: 'Founders Camp 2024',
    // photo_url: will come from Google Drive
  },
  {
    id:  '2',
    author_name: 'Lina M.',
    role: 'Membre',
    quote_fr: 'Une communauté où l\'innovation rencontre la collaboration. J\'ai appris plus ici qu\'en cours magistral.',
    event_context: 'Équipe Dev',
  },
  {
    id:  '3',
    author_name: 'Karim H.',
    role: 'Alumni',
    quote_fr: 'Grâce à PI, j\'ai pu lancer ma startup et créer un réseau professionnel solide. Une expérience transformatrice! ',
    event_context: 'Promotion 2023',
  },
  {
    id: '4',
    author_name: 'Sara B.',
    role: 'Participante',
    quote_fr:  'L\'énergie et la passion de cette communauté sont contagieuses. Chaque événement est une opportunité d\'apprendre.',
    event_context: 'Hackathon PI',
  },
];

// Avatar placeholder component (no external images)
const AvatarPlaceholder = ({ name, size = 'md' }) => {
  const sizes = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-20 h-20 text-xl',
  };
  
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate consistent color based on name
  const colors = [
    'from-orange-400 to-orange-600',
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-green-400 to-green-600',
    'from-pink-400 to-pink-600',
  ];
  const colorIndex = name.length % colors.length;

  return (
    <div 
      className={`${sizes[size]} rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center text-white font-bold shadow-lg`}
      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
    >
      {initials}
    </div>
  );
};

// Single testimonial card for mobile carousel
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity:  1, scale: 1 }}
      exit={{ opacity: 0, scale:  0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-black/5"
    >
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="mb-4">
          {testimonial.photo_url ? (
            <img 
              src={testimonial. photo_url} 
              alt={testimonial.author_name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
          ) : (
            <AvatarPlaceholder name={testimonial. author_name} size="md" />
          )}
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 text-yellow-400 fill-yellow-400" 
            />
          ))}
        </div>

        {/* Quote */}
        <p 
          className="text-base text-[#0f172a]/80 leading-relaxed mb-6"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          "{testimonial.quote_fr}"
        </p>

        {/* Author */}
        <div>
          <h4 
            className="text-sm font-bold text-[#0f172a]"
            style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
          >
            {testimonial.author_name}
          </h4>
          <p 
            className="text-xs text-[#FF6B00] font-medium"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {testimonial.role} • {testimonial.event_context}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      ref={ref}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'rgba(255,107,0,0.03)', filter: 'blur(80px)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'rgba(30,58,138,0.03)', filter: 'blur(60px)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity:  1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ?  { scale: 1 } :  {}}
            transition={{ delay:  0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B00]/10 mb-4"
          >
            <Quote className="w-4 h-4 text-[#FF6B00]" />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]"
              style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
            >
              Témoignages
            </span>
          </motion.div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]"
            style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
          >
            Ce Que Dit Notre <span className="text-[#FF6B00]">Communauté</span>
          </h2>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <motion.div 
              className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] flex items-center justify-center shadow-lg shadow-orange-500/30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Quote className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <TestimonialCard 
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-black/10 text-[#0f172a] hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion. button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'w-8 bg-[#FF6B00]' 
                      : 'w-2 bg-black/20 hover:bg-black/40'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-white border border-black/10 text-[#0f172a] hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Testimonial Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <span 
              className="text-sm text-black/40"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {currentIndex + 1} / {testimonials.length}
            </span>
          </motion. div>
        </div>

        {/* Mini avatars preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-10"
        >
          <div className="flex items-center gap-1">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex ?  'scale-110 z-10' : 'opacity-50 hover:opacity-80'
                }`}
                whileHover={{ scale: 1.15 }}
              >
                <AvatarPlaceholder name={t.author_name} size="sm" />
              </motion.button>
            ))}
            <div className="ml-3 pl-3 border-l border-black/10">
              <span 
                className="text-xs text-black/40"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                +50 avis positifs
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};