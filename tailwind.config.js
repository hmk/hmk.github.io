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
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        mono: ["Commit Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        moss: {
          '50': '#f7f7f6',
          '100': '#ecedeb',
          '200': '#d9dcd6',
          '300': '#adb3a8',
          '400': '#939b8d',
          '500': '#727b6c',
          '600': '#5c6356',
          '700': '#4a4f46',
          '800': '#3d413a',
          '900': '#333631',
          '950': '#191b18',
        }
      }
    },
  },
  plugins: [],
} 
