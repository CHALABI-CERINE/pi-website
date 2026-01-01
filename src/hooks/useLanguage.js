import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const translations = {
    en: {
      // Navigation
      navHome: 'Home',
      navAbout: 'About',
      navEvents: 'Events',
      navProjects: 'Projects',
      navAlumni: 'Alumni',
      navContact: 'Contact',
      
      // Footer
      footerAbout: 'Building a community of innovators and changemakers.',
      footerQuickLinks: 'Quick Links',
      footerFollowUs: 'Follow Us',
      footerAllRights: 'All rights reserved.',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      
      // Hero Section
      heroTitle: 'Empowering Tomorrow\'s Leaders',
      heroSubtitle: 'Join our thriving community and make a real impact on the world.',
      heroCTA: 'Get Started',
      heroLearnMore: 'Learn More',
      
      // Stats
      statMembersLabel: 'Active Members',
      statEventsLabel: 'Events Hosted',
      statProjectsLabel: 'Projects Completed',
      statPartnersLabel: 'Partners',
      
      // About Section
      aboutTitle: 'About Us',
      aboutCTA: 'Learn More',
      
      // Programs
      programsTitle: 'Why Our Programs Matter',
      
      // Portfolio
      portfolioTitle: 'Our Impact in Action',
      portfolioDescription: 'Discover our latest events and projects that are making a difference.',
      viewAll: 'View All',
      
      // Partners
      partnersTitle: 'Our Trusted Partners',
      
      // Testimonials
      testimonialsTitle: 'What Our Community Says',
      
      // FAQ
      faqTitle: 'Frequently Asked Questions',
      faqLoadMore: 'Load More',
      
      // Buttons
      registerNow: 'Register Now',
      registrationOpen: 'Registration Open',
      registrationClosed: 'Registration Closed',
      viewDetails: 'View Details',
      readMore: 'Read More',
    },
    fr: {
      // Navigation
      navHome: 'Accueil',
      navAbout:  'À Propos',
      navEvents: 'Événements',
      navProjects:  'Projets',
      navAlumni: 'Anciens Membres',
      navContact: 'Contact',
      
      // Footer
      footerAbout: 'Construire une communauté d\'innovateurs et de créateurs de changement.',
      footerQuickLinks: 'Liens Rapides',
      footerFollowUs: 'Nous Suivre',
      footerAllRights: 'Tous droits réservés.',
      footerPrivacy: 'Politique de Confidentialité',
      footerTerms:  'Conditions d\'Utilisation',
      
      // Hero Section
      heroTitle: 'Autonomiser les Leaders de Demain',
      heroSubtitle: 'Rejoignez notre communauté dynamique et créez un impact réel dans le monde.',
      heroCTA: 'Commencer',
      heroLearnMore: 'En Savoir Plus',
      
      // Stats
      statMembersLabel: 'Membres Actifs',
      statEventsLabel: 'Événements Organisés',
      statProjectsLabel: 'Projets Réalisés',
      statPartnersLabel: 'Partenaires',
      
      // About Section
      aboutTitle: 'Qui Sommes-Nous',
      aboutCTA: 'En Savoir Plus',
      
      // Programs
      programsTitle: 'Pourquoi Nos Programmes Sont Importants',
      
      // Portfolio
      portfolioTitle: 'Notre Impact en Action',
      portfolioDescription:  'Découvrez nos derniers événements et projets qui font la différence.',
      viewAll: 'Voir Tout',
      
      // Partners
      partnersTitle: 'Nos Partenaires de Confiance',
      
      // Testimonials
      testimonialsTitle: 'Ce Que Dit Notre Communauté',
      
      // FAQ
      faqTitle: 'Questions Fréquemment Posées',
      faqLoadMore: 'Charger Plus',
      
      // Buttons
      registerNow:  'S\'inscrire',
      registrationOpen: 'Inscriptions Ouvertes',
      registrationClosed: 'Inscriptions Fermées',
      viewDetails: 'Voir Détails',
      readMore: 'Lire Plus',
    },
  };

  return { lang, setLang, t: translations[lang] || translations. en };
};