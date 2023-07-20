/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./src/assets/bg-sidebar-mobile.svg')",
        'desktop': "url('./src/assets/bg-sidebar-desktop.svg')"
      },
      boxShadow: {
        
      },
      screens: {
        'xs': '375px'
      },
      colors: {
        marine: 'hsl(213, 96%, 18%)',
        purplish: 'hsl(243, 100%, 62%)',
        pastel: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%, 30%)',
        strawberry: 'hsl(354, 84%, 57%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)'
      },
      fontWeight: {
        normal: '400',
        semibold: '500',
        bold: '700'
      }
    },
  },
  plugins: [],
}

