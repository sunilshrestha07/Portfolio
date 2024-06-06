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
    boxShadow: {
      'custom-white': '5px 10px 16px -1px rgba(255, 255, 255, 0.3), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      'custom-black': '5px 10px 16px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
    }
  },
  plugins: [],
  darkMode:"class"
}