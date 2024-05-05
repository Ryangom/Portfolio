/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A',
        'secondary': '#64748B',
        'custom-bg': '#0f172a'
      },


      container: {
        center: true,
        screens: {
          lg: "1300px",
          xl: "1300px",
          "2xl": "1300px",
        }
      },

    },
  },
  plugins: [],
}