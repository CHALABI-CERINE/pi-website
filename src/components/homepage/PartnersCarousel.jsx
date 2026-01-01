import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Handshake } from 'lucide-react';

// Replace with your actual partners/sponsors
const partners = [
  { name: "Google", logo: "G", color: "#4285F4" },
  { name:  "Microsoft", logo: "M", color: "#00A4EF" },
  { name:  "Sonatrach", logo: "S", color: "#FF6B00" },
  { name: "Djezzy", logo: "D", color: "#E30613" },
  { name:  "Mobilis", logo: "M", color:  "#00A651" },
  { name: "Ooredoo", logo: "O", color: "#EE1C25" },
  { name:  "USTHB", logo: "U", color:  "#1E3A8A" },
  { name: "Condor", logo: "C", color:  "#003366" },
];

const PartnerCard = ({ partner, index }) => (
  <motion.div
    className="flex-shrink-0 mx-3"
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
  >
    <div className="w-40 h-24 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 flex items-center justify-center group cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        {/* Logo placeholder - replace with actual logos */}
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
          style={{ 
            fontFamily: '"Space Grotesk", sans-serif',
            background: partner.color 
          }}
        >
          {partner.logo}
        </div>
        <span 
          className="text-[10px] font-bold uppercase tracking-wider text-black/40 group-hover:text-black/70 transition-colors"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {partner.name}
        </span>
      </div>
    </div>
  </motion.div>
);

export const PartnersCarousel = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Triple the partners for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section 
      id="partners"
      ref={ref}
      className="py-16 md:py-20 bg-[#f8fafc] overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ?  { scale: 1 } :  {}}
            transition={{ delay:  0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A8A]/10 mb-4"
          >
            <Handshake className="w-4 h-4 text-[#1E3A8A]" />
            <span 
              className="text-xs font-bold uppercase tracking-wider text-[#1E3A8A]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Partenaires
            </span>
          </motion.div>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]"
            style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
          >
            Ils Nous Font <span className="text-[#FF6B00]">Confiance</span>
          </h2>
          
          <p 
            className="mt-4 text-black/50 max-w-lg mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Nos partenaires qui nous soutiennent dans notre mission
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Fade gradients on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <motion.div 
          className="flex"
          animate={{ x: [0, -160 * partners.length] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          whileHover={{ animationPlayState: 'paused' }}
          style={{ width: 'max-content' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard 
              key={`${partner.name}-${index}`} 
              partner={partner} 
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ?  { opacity: 1, y:  0 } : {}}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-6 mt-10 text-center"
      >
        <p 
          className="text-sm text-black/40 mb-3"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Intéressé par un partenariat ?
        </p>
        <motion.a
          href="mailto:contact@pi-usthb.com"
          className="inline-flex items-center gap-2 px-6 py-2. 5 border-2 border-[#1E3A8A]/20 text-[#1E3A8A] font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Devenir Partenaire
        </motion. a>
      </motion.div>
    </section>
  );
};