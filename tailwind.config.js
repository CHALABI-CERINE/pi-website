export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme:  {
    extend: {
      colors: {
        primary: '#FF8C00', // Orange
        secondary: '#0066CC', // Blue
        accent: '#FFFFFF', // White
        dark: '#000000', // Black
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-arrow': 'bounceArrow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp:  {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':  { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}