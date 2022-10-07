/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        primary: 'Inter',
        secondary: 'Barlow',
      },
    },
  },
  plugins: [],
};
