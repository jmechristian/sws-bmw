/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bmw-gold': '#FFB724',
        'bmw-blue': '#173B68',
        'bmw-red': '#B11926',
        'bmw-lightblue': '#04829b',
        'bmw-yellow': '#fad022',
        'bmw-green': '#508130',
        'bmw-coolgray': '#494949',
        'bmw-gray': '#6f6f6f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        helvetica: 'BMW Helvetica, sans-serif',
        'helvetica-bold': 'BMW Helvetica Bold, sans-serif',
      },
    },
  },
  plugins: [],
};
