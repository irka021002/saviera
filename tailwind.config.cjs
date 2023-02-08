/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#eeeadf",
        "primary-2": "#f1f1f1",
        "secondary-1": "#bf9553",
        "secondary-2": "#3a3a3a",
        "accent-1": "#800020",
        "accent-2": "#016064",
        "accent-3": "#12448d",
        "cream-1": "#f0eade",
        "cream-2": "#e8d8c9"
      }
    },
    fontFamily: {
      'aboreto': ['Aboreto', 'cursive'],
      'forum': ['Forum', 'cursive'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'unbounded': ['Unbounded', 'cursive']
    }
  },
  plugins: [],
}
