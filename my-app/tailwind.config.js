/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'buttonColour': "#1D2F6F",
        'rightColour': "#90EE90",
        'backgroundColour': '#DDE1FF',
      }
    },
  },
  plugins: [require("daisyui")],
}

