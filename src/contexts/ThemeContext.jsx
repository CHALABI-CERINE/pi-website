import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  // Récupère le thème sauvegardé ou préférence système
  const getInitialTheme = () => {
    // 1. Check localStorage
    const saved = localStorage.getItem('pi-theme');
    if (saved) return saved;
    
    // 2. Check préférence système (OS dark mode)
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // 3. Default:  light
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Applique le thème sur <html> et sauvegarde
  useEffect(() => {
    const root = document.documentElement; // <html>
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('pi-theme', theme);
  }, [theme]);

  // Écoute les changements de préférence système
  useEffect(() => {
    const mediaQuery = window. matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Ne change que si l'utilisateur n'a pas de préférence sauvegardée
      if (!localStorage. getItem('pi-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle light ↔ dark
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
      isLight:  theme === 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans ThemeProvider');
  }
  return context;
};