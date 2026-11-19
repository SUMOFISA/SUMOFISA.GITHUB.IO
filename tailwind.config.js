/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        luxury: {
          dark: '#111111',
          gray: '#8A8A8A',
          light: '#F9F9F9',
          champagne: '#E5DFD3',
        }
      }
    },
  },
  plugins: [],
}