/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Blue color for primary elements
        secondary: '#f3f4f6', // Light grey for background
        button: '#3b82f6', // Blue color for buttons
        text: '#111827', // Dark grey for text
        background: '#ffffff' // White for background
      },
      borderRadius: {
        'rounded-full': '9999px', // Full rounded buttons
      },
    },
  },
  plugins: [],
};
