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
      navHome: 'Home',
      navAbout: 'About',
      navEvents: 'Events',
      navProjects: 'Projects',
      navAlumni: 'Alumni',
      navContact: 'Contact',
      footerAbout: 'Building a community of innovators and changemakers.',
      footerQuickLinks: 'Quick Links',
      footerFollowUs: 'Follow Us',
      footerAllRights: 'All rights reserved.',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      heroTitle: 'Empowering Tomorrow\'s Leaders',
      heroSubtitle: 'Join our thriving community and make a real impact on the world.',
      heroCTA: 'Get Started',
      heroLearnMore: 'Learn More',
      heroMission: 'We aim to introduce Algerian students to the world of business and initiatives.',
      heroMissionSecondary: 'We empower students through events, workshops, and real-world entrepreneurial experiences.',
      statMembersLabel: 'Active Members',
      statEventsLabel: 'Events Hosted',
      statProjectsLabel: 'Projects Completed',
      statPartnersLabel: 'Partners',
      aboutTitle: 'About Us',
      aboutCTA: 'Learn More',
      programsTitle: 'Why Our Programs Matter',
      portfolioTitle: 'Our Impact in Action',
      portfolioDescription: 'Discover our latest events and projects that are making a difference.',
      viewAll: 'View All',
      partnersTitle: 'Our Trusted Partners',
      testimonialsTitle: 'What Our Community Says',
      faqTitle: 'Frequently Asked Questions',
      faqLoadMore: 'Load More',
      registerNow: 'Register Now',
      registrationOpen: 'Registration Open',
      registrationClosed: 'Registration Closed',
      viewDetails: 'View Details',
      readMore: 'Read More',
    },
    fr: {
      navHome: 'Accueil',
      navAbout: 'À Propos',
      navEvents: 'Événements',
      navProjects: 'Projets',
      navAlumni: 'Anciens Membres',
      navContact: 'Contact',
      footerAbout: 'Construire une communauté d\'innovateurs et de créateurs de changement.',
      footerQuickLinks: 'Liens Rapides',
      footerFollowUs: 'Nous Suivre',
      footerAllRights: 'Tous droits réservés.',
      footerPrivacy: 'Politique de Confidentialité',
      footerTerms: 'Conditions d\'Utilisation',
      heroTitle: 'Autonomiser les Leaders de Demain',
      heroSubtitle: 'Rejoignez notre communauté dynamique et créez un impact réel dans le monde.',
      heroCTA: 'Commencer',
      heroLearnMore: 'En Savoir Plus',
      heroMission: "Nous visons à initier les étudiants algériens au monde des affaires et de l'entrepreneuriat.",
      heroMissionSecondary: "Nous accompagnons les étudiants avec des événements, ateliers et expériences entrepreneuriales concrètes.",
      statMembersLabel: 'Membres Actifs',
      statEventsLabel: 'Événements Organisés',
      statProjectsLabel: 'Projets Réalisés',
      statPartnersLabel: 'Partenaires',
      aboutTitle: 'Qui Sommes-Nous',
      aboutCTA: 'En Savoir Plus',
      programsTitle: 'Pourquoi Nos Programmes Sont Importants',
      portfolioTitle: 'Notre Impact en Action',
      portfolioDescription: 'Découvrez nos derniers événements et projets qui font la différence.',
      viewAll: 'Voir Tout',
      partnersTitle: 'Nos Partenaires de Confiance',
      testimonialsTitle: 'Ce Que Dit Notre Communauté',
      faqTitle: 'Questions Fréquemment Posées',
      faqLoadMore: 'Charger Plus',
      registerNow: 'S\'inscrire',
      registrationOpen: 'Inscriptions Ouvertes',
      registrationClosed: 'Inscriptions Fermées',
      viewDetails: 'Voir Détails',
      readMore: 'Lire Plus',
    },
  };

  return { lang, setLang, t: translations[lang] || translations.en };
};