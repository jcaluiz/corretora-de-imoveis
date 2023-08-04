/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'house': "url('/images/homepage/house-with-backyard.png')",
      },
      colors: {
        'blue-header': '#00295F',
        'gray-header': '#dfd7c9',
        'gold-button': '#b49156',
      },
      fontFamily: {
        'text-inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
