/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C8CE9',
        dark: '#474747'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

