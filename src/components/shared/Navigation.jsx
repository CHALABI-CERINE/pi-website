import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageToggle } from './LanguageToggle';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.  navHome, href: '/' },
    { name: t. navAbout, href: '/about' },
    { name: t.navEvents, href: '/events' },
    { name: t.navProjects, href: '/projects' },
    { name: t.navAlumni, href: '/alumni' },
    { name: t.navContact, href: '/contact' },
  ];

  return (
    <nav
      className={`transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 left-0 right-0 bg-white shadow-lg z-50'
          : 'relative bg-white'
      } w-full`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Org</span>
            </div>
            <span className="text-xl font-bold text-dark hidden sm:block">Organization</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-dark hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />

            {/* Mobile Menu Button - Using SVG */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-dark text-2xl p-1"
            >
              {isOpen ? (
                // X Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height:  'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link. href}
                  to={link.href}
                  className="px-4 py-2 text-dark hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};