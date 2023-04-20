/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'green',
        pk:'yellow',
        sahil:'red'
      },
      fontFamily:{
        h1:'FordAntenna',
        primaryfont: 'mono'
      },
      spacing:{
        '1':'15px',
        '2':'22px'
      }
    },
  },
  plugins: [],
}

