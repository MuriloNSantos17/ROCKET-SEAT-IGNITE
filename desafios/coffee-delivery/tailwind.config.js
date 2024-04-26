/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm32': '320px',
      'sm39': '390px',
      'sm60': '600px',
      'xl': '1280px',
      '2xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
}

