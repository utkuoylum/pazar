/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Ubuntu",
        titleFont: "Kumbh Sans"
      },
      height: {
        sliderHeight: "calc(100vh - 5rem)"
      }
    },
  },
  plugins: [],
}

