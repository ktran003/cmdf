/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'buttonColour': "#1D2F6F",
        'rightColour': "#90EE90",
        'backgroundColour': '#DDE1FF',
      },
      fontFamily: {
        MadimiOne: ['Madimi One', 'sans-serif']
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}

