/** @type {import('tailwindcss').Config} */
import img from 'img/bg.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-arg': "url('img/bg.jpg')",
      },
      opacity: {
        '120': '.120',
      }
    },
  },
  plugins: [],
}