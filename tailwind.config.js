/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('../src/assets/img/contact.jpg')",
      },
    },
  },
  plugins: [],
}