/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["poppins"],
        mulish:["mulish"]
      },
      colors:{
        titleLight: 'rgba(0, 0, 0, 100)',
        titleDark: 'rgba(255, 255, 255, 100)',
        bgLight:'rgba(255, 255, 255, 100)',
        bgDark:'rgba(25, 24, 34, 100)',
        hoverText:'rgba(27,154,170,100)',
      }

    },
  },
  plugins: [],
  darkMode:"class"
}