import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Heart,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Facebook
} from 'lucide-react';

// TikTok Icon Component — FIXED SVG path
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// FIXED: isCustomIcon renders Icon as component, not as JSX element
const SocialLink = ({ href, icon: Icon, label, gradient, isCustomIcon = false }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-center w-11 h-11 rounded-xl ${gradient} text-white shadow-lg transition-all`}
    whileHover={{ scale: 1.1, y: -3 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const FooterLink = ({ href, children, isExternal = false }) => (
  <motion.a
    href={href}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : ""}
    className="group flex items-center gap-2 text-sm text-white/60 hover:text-[#FF6B00] transition-colors"
    style={{ fontFamily: '"Inter", sans-serif' }}
    whileHover={{ x: 5 }}
  >
    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF6B00]" />
    {children}
    {isExternal && <ExternalLink className="w-3 h-3 opacity-50" />}
  </motion.a>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '/#hero' },
    { name: 'À Propos', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  const resources = [
    { name: 'Événements', href: '/portfolio?filter=events' },
    { name: 'Projets', href: '/portfolio?filter=projects' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Partenaires', href: '/#partners' },
  ];

  // FIXED: pass TikTokIcon as component reference, not as <TikTokIcon />
  const socialLinks = [
    {
      href: "https://www.instagram.com/project.initiative.usthb/",
      icon: Instagram,
      label: "Instagram",
      gradient: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500"
    },
    {
      href: "https://www.facebook.com/projectinitiativeclub/",
      icon: Facebook,
      label: "Facebook",
      gradient: "bg-[#1877F2]"
    },
    {
      href: "https://www.linkedin.com/company/project-initiative-club/",
      icon: Linkedin,
      label: "LinkedIn",
      gradient: "bg-[#0077B5]"
    },
    {
      href: "https://www.tiktok.com/@projectinitiative.usthb",
      icon: TikTokIcon,
      label: "TikTok",
      gradient: "bg-black",
      isCustomIcon: true
    },
  ];

  return (
    <footer className="relative bg-[#0f172a] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-6 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <motion.div 
          variants={itemVariants}
          className="relative mb-16 p-8 md:p-12 rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.1) 0%, rgba(30,58,138,0.1) 100%)' }}
        >
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-[#FF6B00]" />
                <span 
                  className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Rejoignez la communauté
                </span>
              </div>
              <h3 
                className="text-2xl md:text-3xl font-black text-white mb-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Prêt à faire la différence ?
              </h3>
              <p className="text-white/50 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
                Rejoignez Project Initiative et transformez votre vie étudiante !
              </p>
            </div>
            <motion.a
              href="https://www.instagram.com/project.initiative.usthb/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-xl shadow-orange-500/25"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(255,107,0,0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram className="w-5 h-5" />
              Suivre PI
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <motion.img
                src="/assets/logo-full.png"
                alt="Project Initiative Club"
                className="h-16 w-auto brightness-0 invert opacity-90"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
              <strong className="text-white/70">Project Initiative Club</strong> — Une communauté à but non lucratif à l'USTHB qui fait la différence dans la vie étudiante.
            </p>
            <p className="text-xs text-white/30 mb-6" style={{ fontFamily: '"Inter", sans-serif' }}>
              Entrepreneuriat • Innovation • Leadership
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <SocialLink 
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  gradient={social.gradient}
                  isCustomIcon={social.isCustomIcon}
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}><FooterLink href={link.href}>{link.name}</FooterLink></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Ressources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}><FooterLink href={link.href}>{link.name}</FooterLink></li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-6" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:projectinitiativeclub@gmail.com" className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group" style={{ fontFamily: '"Inter", sans-serif' }}>
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FF6B00]/20 transition-colors"><Mail className="w-4 h-4 text-[#FF6B00]" /></div>
                  <div><span className="block text-white/40 text-xs mb-1">Email</span>projectinitiativeclub@gmail.com</div>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=P56G+PH7,+Chem.+d'Alia,+Bab+Ezzouar" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group" style={{ fontFamily: '"Inter", sans-serif' }}>
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#FF6B00]/20 transition-colors"><MapPin className="w-4 h-4 text-[#FF6B00]" /></div>
                  <div><span className="block text-white/40 text-xs mb-1">Adresse</span>USTHB, Chem. d'Alia<br />Bab Ezzouar, Alger</div>
                </a>
              </li>
            </ul>
            <motion.a
              href="https://maps.google.com/?q=P56G+PH7,+Chem.+d'Alia,+Bab+Ezzouar"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 rounded-xl overflow-hidden border border-white/10 hover:border-[#FF6B00]/30 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-24 bg-[#1e293b] flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#FF6B00]/50" />
                <span className="absolute bottom-2 right-2 text-[10px] text-white/40 font-medium">Voir sur Maps →</span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center md:text-left" style={{ fontFamily: '"Inter", sans-serif' }}>
              © {currentYear} Project Initiative Club. Tous droits réservés.
            </p>
            <motion.p 
              className="flex items-center gap-2 text-xs text-white/50"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              whileHover={{ scale: 1.05 }}
            >
              Fait avec 
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                <Heart className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
              </motion.span>
              par l'équipe PI @ USTHB
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className="h-1 bg-gradient-to-r from-[#1E3A8A] via-[#FF6B00] to-[#1E3A8A]" />
    </footer>
  );
};