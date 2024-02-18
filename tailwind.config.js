/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        rightarrow: 'url("/src/assets/images/right-arrow.png")',
      }
    },
  },
  plugins: [],
}