/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#181C14"
        }
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    
    },
  },
  plugins: [
    require('daisyui'),
    ('@tailwindcss/forms')
  ],
  daisyui: {
    themes: ['dracula']
  }
}