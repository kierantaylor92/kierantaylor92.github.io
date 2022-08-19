/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-primary':'#D05646',
        'dark-bg-1':'#17181F',
        'dark-bg-2':'#242424',
        'dark-bg-3':'#383838',
        'dark-contrast':'#E9E9E9',
        'dark-default':'#D9D9D9',
        'dark-subtle':'#8D8F93',
      },
      fontFamily: {
        sans: ['neue-haas-grotesk-text', 'sans-serif'],
        degular: ['degular-display', 'serif'],
      },
    },
  }, 
  plugins: [
    // include Flowbite as a plugin in your Tailwind CSS project
    require('flowbite/plugin')
  ]
}
