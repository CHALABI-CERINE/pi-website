/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222222", // Noir doux (Titres/Paragraphes)
        accent: "#FF6600",  // Orange (Actions/Boutons)
        offwhite: "#FAFAF9", // Blanc cassé (Background alterné)
        lightgray: "#E5E7EB", // Gris clair (Cartes/Bordures)
        canvas: "#F5F5F5",   // Base background
      },
     fontFamily: {
    // Pour les gros titres "Impact"
    display: ["Syncopate", "sans-serif"], 
    // Pour les titres de sections et boutons
    heading: ["Space Grotesk", "sans-serif"],
    // Pour le texte de lecture (plus propre)
    body: ["Inter", "sans-serif"], 
  },
    },
  },
  plugins: [],
}