/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
         'guest-background': "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/Guest-Background.jpeg')"
      },
      fontFamily: {
         'netflix-sans': ["Bebas Neue", "serif"]
      }
    },
  },
  plugins: [],
}

