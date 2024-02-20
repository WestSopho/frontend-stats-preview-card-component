/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "AB5CDB": "#AB5CDB", 
        "0A0C1C": "#0A0C1C", 
        "1B1937": "#1B1937"
      },
      fontFamily:{
        "sans": ["Inter", "sans-serif"],
        "lexend": "Lexend Deca"
      }
    },
  },
  plugins: [],
}

