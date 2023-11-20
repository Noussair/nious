/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      '3xl': '2rem',
      '4xl': '2.441rem',
    },
    
      colors:{
        'darker':'#6d6d6d',
        'dark': '#262626',
        'light': '#f2f2f2',
        'green': '#04d3c0',
        'grey': '#969696'
      }
    
  },
  plugins: [],
}