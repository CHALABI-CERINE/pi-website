import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, ExternalLink, Facebook, Linkedin } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3. 45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88. 13V9.4a6.84 6.84 0 00-1-. 05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-. 1z"/>
  </svg>
);

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style. overflow = 'unset';
    }
    return () => {
      document. body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Accueil", href: "/#hero", isAnchor: true },
    { name: "À Propos", href: "/#about", isAnchor: true },
    { name: "Portfolio", href: "/#portfolio", isAnchor: true },
    { name: "Partenaires", href: "/#partners", isAnchor: true },
    { name: "Contact", href: "/#contact", isAnchor: true },
  ];

  const socialLinks = [
    { 
      href: "https://www.instagram.com/project.initiative.usthb/", 
      icon:  Instagram, 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      href: "https://www.facebook.com/projectinitiativeclub/", 
      icon: Facebook, 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      href: "https://www.linkedin.com/company/project-initiative-club/", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      href: "https://www.tiktok.com/@projectinitiative.usthb", 
      icon: TikTokIcon, 
      label:  "TikTok",
      color: "hover:text-black",
      isCustom: true
    },
  ];

  const handleNavClick = (e, href, isAnchor) => {
    if (isAnchor && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/assets/logo-icon.png"
              alt="PI"
              className="h-10 w-auto"
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="hidden sm:flex flex-col">
              <span 
                className="text-base font-black tracking-tight leading-none text-[#1E3A8A] group-hover:text-[#FF6B00] transition-colors"
                style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
              >
                PROJECT
              </span>
              <span 
                className="text-base font-black tracking-tight leading-none text-[#FF6B00] group-hover: text-[#1E3A8A] transition-colors"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                INITIATIVE
              </span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                className="relative py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0f172a]/70 hover:text-[#FF6B00] transition-colors"
                style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y:  0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FF6B00] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion. a>
            ))}
          </div>

          {/* RIGHT SIDE - Social Icons & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Mini Social Icons */}
            <div className="flex items-center gap-1 mr-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social. href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg text-[#0f172a]/40 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.isCustom ? (
                    <social.icon className="w-4 h-4" />
                  ) : (
                    <social.icon className="w-4 h-4" />
                  )}
                </motion.a>
              ))}
            </div>

         
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden p-2 rounded-xl bg-[#0f172a]/5 hover:bg-[#0f172a]/10 text-[#0f172a] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ?  (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate:  0, opacity: 1 }}
                  exit={{ rotate:  -90, opacity: 0 }}
                  transition={{ duration:  0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion. button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity:  1 }}
              exit={{ opacity:  0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-black/5">
                <img
                  src="/assets/logo-full.png"
                  alt="Project Initiative"
                  className="h-12 w-auto"
                />
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#0f172a]/5 hover:bg-[#0f172a]/10 text-[#0f172a]"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Links */}
              <div className="flex-1 px-6 py-4 space-y-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-[#0f172a]/5 transition-colors group"
                    initial={{ opacity:  0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span 
                      className="text-lg font-bold text-[#0f172a] group-hover:text-[#FF6B00] transition-colors"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                      {link.name}
                    </span>
                    <span className="text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="p-6 border-t border-black/5 bg-[#f8fafc]">
                {/* Social Links */}
                <p 
                  className="text-xs font-semibold uppercase tracking-wider text-[#0f172a]/40 mb-4"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Suivez-nous
                </p>
                <div className="flex gap-3 mb-6">
                  <motion.a
                    href="https://www.instagram.com/project.initiative.usthb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/projectinitiativeclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1877F2] text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/company/project-initiative-club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0077B5] text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@projectinitiative.usthb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://www.instagram.com/project.initiative.usthb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20"
                  style={{ fontFamily:  '"Space Grotesk", sans-serif' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rejoindre PI
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Nonprofit Badge */}
                <p className="mt-4 text-center text-xs text-[#0f172a]/40">
                   Association à but non lucratif • USTHB
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};