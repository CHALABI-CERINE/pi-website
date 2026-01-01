import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const partners = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "GreenFuture", logo: "GF" },
  { name: "EduTech", logo: "ET" },
  { name: "StartupHub", logo: "SH" },
  { name: "DigitalWave", logo: "DW" },
  { name: "CloudNet", logo: "CN" },
  { name: "DataFlow", logo: "DF" },
];

export const PartnersCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const duplicatedPartners = [...partners, ...partners, ...partners]; // Triplé pour assurer la continuité

  return (
    <section className="py-24 bg-secondary overflow-hidden border-y border-border">
      <div className="container mb-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-poppins text-xs font-bold uppercase tracking-widest mb-4">
            Partners
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground uppercase">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-16">
        {/* Gradients de fondu sur les côtés */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />
        
        {/* Utilisation de l'animation marquee de ton tailwind.config */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-4 w-48 h-28 bg-card border border-border rounded-xl flex items-center justify-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center font-display text-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  {partner.logo}
                </div>
                <span className="font-poppins text-[10px] font-bold uppercase tracking-tighter text-muted-foreground group-hover:text-foreground">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};