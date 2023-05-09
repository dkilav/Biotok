/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
      fontFamily: {
        soul: ['My Soul'],
        heebo: ['Heebo'],
      },
      colors: {
        red: "#ff6464",
     },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('prettier-plugin-tailwindcss'),
  ],
}

