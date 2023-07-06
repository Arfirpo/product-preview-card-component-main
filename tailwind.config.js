/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Fraunces': ['Fraunces', 'serif']
      },
      colors:{
        'Darkcyan': 'hsl(158, 36%, 37%)',
        'cyan-hover':'hsl(156, 42%, 18%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-darkblue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'White': 'hsl(0, 0%, 100%)',
        'atributtion-a':'hsl(228, 45%, 44%)'
      },
      fontSize:{
        'parragraph': ['14px']
      }
    },
  },
  plugins: [],
}

