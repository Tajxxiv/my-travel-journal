/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fushia: "#CC59D2",
        seagray: "#918E9B",
        specialBlue: "#2B283A"
      },
      fontFamily: {
       'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
