/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primaryfont:'FordAntenna'
      },
      colors:{
        primary:'Orange'
      },
      spacing:{
        '1':'15px',
        '2':"22px"
      }
    },
  },
  plugins: [],
}

