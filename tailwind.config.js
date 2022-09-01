/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/layouts/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e5bef',
        secondary: '#00f6ff',
      },
      fontFamily: {
        heading: ['Arvo', 'serif'],
        text: ['Poppins', 'sans-serif'],
      },
      screens: {
        '3xl': '1660px',
      },
    },
  },
  plugins: [],
}

// fonts 
// https://www.websitebuilderexpert.com/designing-websites/pick-best-font-style-for-website/