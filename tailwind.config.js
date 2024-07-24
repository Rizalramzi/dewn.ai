/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main' : '#9DA6FF',
        'light-main' : '#C3C9FF',
        'dark-main' : '#707FFF',
        'dark' : '#1E1E1E',
        'light-dark' : '#252525',
        'text' : '#6E6E6E',
      }
    },
  },
  plugins: [],
}
