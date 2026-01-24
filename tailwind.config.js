/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        secondary: "#0052CC",
        accent: "#00C897",
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
