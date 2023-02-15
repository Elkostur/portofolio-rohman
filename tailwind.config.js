/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary:"#3d6a6c",
        secondary:"#2c4b4e",
        one:"#131a1b",
        two:"#162122",
        textone:"#f2f7f6",
        texttwo:"#d7eaea",
        newcolor: {
          '50': '#f2f7f6',
          '100': '#d7eaea',
          '200': '#b7d7d7',
          '300': '#97c4c4',
          '400': '#559091',
          '500': '#3d6a6c',
          '600': '#2c4b4e',
          '700': '#213436',
          '800': '#162122',
          '900': '#131a1b',
        },        
      }
    },
  },
  plugins: [],
}
