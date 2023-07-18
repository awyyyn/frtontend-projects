/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'around': '0 0 20px #00000080', 
        'around-sm': '0 0 5px #00000030', 
      }, 
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
      fontSize: {
        thin: '300',
        normal: '400',
        bold: '600',
        extrabold: '800'
      },
      colors: {
        whiteHsl: 'hsl(0, 0%, 100%)',
        darkBlueFG: 'hsl(200, 15%, 8%)',
        darkBlueE: 'hsl(209, 23%, 22%)',
        darkGray: 'hsl(0, 0%, 52%)'
      },
      backgroundColor: {
        darkBlue: 'hsl(207, 26%, 17%)',
        lightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}

