/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: "#0f172a",
        accent: "#FF8C00",
        surface: "#f8fafc",
        offwhite: "#FAFAF9",
        canvas: "#F5F5F5",

        // PI Brand
        'pi-orange': '#FF6B00',
        'pi-blue': '#1E3A8A',
        'pi-orange-light': '#FF8C00',
        'pi-blue-light': '#3B82F6',

        // Semantic Colors
        foreground: "#0f172a",
        background: "#ffffff",
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "rgba(15, 23, 42, 0.5)",
        },
        border: "rgba(15, 23, 42, 0.1)",

        // UI Colors
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },
      },

      fontFamily: {
        display: ["Syncopate", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
        '11xl': ['12rem', { lineHeight: '1' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'accent': '0 20px 40px -10px rgba(255, 140, 0, 0.25)',
        'accent-lg': '0 30px 60px -15px rgba(255, 140, 0, 0.35)',
        'elevation': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },

      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scroll': 'scroll 40s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 140, 0, 0.5)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};