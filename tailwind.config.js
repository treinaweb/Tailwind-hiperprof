/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1024px',
        "2xl": '1024px'
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'iceland': ['Iceland']
      },
      colors: {
        purple: "#5840BA",
        lightpurple: "#382194",
        lightgray: '#D9D9D9',
        gray: '#8C8C8C'
      }
    },
  },
  plugins: [],
}

