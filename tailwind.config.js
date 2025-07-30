/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple':'#2F192E',
        'purple-light':'#30192d',
        'dark-blue':'#14213d',
        'even-dark-blue':'#0a0e16',
        'blue':'#5c65c0',
        'skyblue' :'#00b4fc',
        'light-blue':'#005bc5',
        'dark-pink':'#f64c57',
        'dark-magenta':'#e21b5a',
        'light-green':'#61e2c2',
        'light-purple':'#d9abff',
        'white': '#ffffff',
      },
    },
  },
  plugins: [require('daisyui')],
}

