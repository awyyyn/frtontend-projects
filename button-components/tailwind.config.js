/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'ubuntu': 'Ubuntu Mono'
      },
      colors: {
        "gray-1": "#333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "default": "#E0E0E0",
        "default-state": "#AEAEAE",
        "primary": "#3D5AFE",
        "primary-state": "rgba(41, 98, 255, 0.10)",
        "secondary": '#455A64',
        "secondary-state": "#1C313A",
        "danger": "#D32F2F",
        "danger-state": "#9A0007"
      },
      boxShadow: {
        'default': '0px 2px 3px 0px rgba(51, 51, 51, 0.20)'
      },
    },
  },
  plugins: [],
}

