import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check localStorage or browser language, default to French
  const getInitialLanguage = () => {
    const saved = localStorage.getItem('pi-language');
    if (saved) return saved;
    
    // Check browser language
    const browserLang = navigator.language. slice(0, 2);
    return browserLang === 'en' ? 'en' : 'fr';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('pi-language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between FR and EN
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Get translation by key (supports nested keys like "nav.home")
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(`⚠️ Translation missing: ${key}`);
        return key; // Return key if translation not found
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      toggleLanguage, 
      t,
      isEnglish: language === 'en',
      isFrench: language === 'fr'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};