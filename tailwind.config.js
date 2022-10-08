/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Inter',
        secondary: 'Barlow',
      },
      colors: {
        primary: '#4c51bf',
        secondary: '#5a67d8',
      },
    },
  },
  plugins: [],
};
