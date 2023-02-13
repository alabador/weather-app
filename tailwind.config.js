/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.js",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        massive: '5rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["coffee", "luxury", "pastel", "business", "retro", "garden", "forest", "night", "autumn"],
  },
}
