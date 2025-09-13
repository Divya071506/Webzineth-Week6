/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <- important
    "./public/index.html",        // optional, in case you style index.html
  ],
  darkMode: 'class', // <-- Enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
