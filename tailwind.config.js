/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2A9D8F",
        secondary: "#E9C46A",
        tertiary: "#E76F51",
        text: "#333333",
        background: "#F4F4F4",
        heading: "#264653",
      },
    },
  },
  plugins: [],
}

