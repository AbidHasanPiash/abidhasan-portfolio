/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0px 5px 50px 12px',
      },
      fontFamily: {
        main: ['Space Mono', 'monospa']
      }
    },
  },
  plugins: [],
}
