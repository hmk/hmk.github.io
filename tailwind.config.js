/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.{html,md}",
    "./_includes/**/*.{html,md}",
    "./_posts/**/*.{html,md}",
    "./*.{html,md}",
    "./assets/**/*.{css,js}",
    "./**/*.{html,md}"
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
} 
