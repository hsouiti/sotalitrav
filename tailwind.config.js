/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/sections/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e5bef',
        secondary: '#00f6ff',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1660px',
      },
    },
  },
  plugins: [],
}
