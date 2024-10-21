/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#243642',  // Dark teal for backgrounds
        secondary: '#387478', // Muted teal for accents
        accent: '#629584',    // Soft green for highlights
        light: '#E2F1E7',     // Light color for text or backgrounds
      },
    },
  },
  plugins: [],
}
