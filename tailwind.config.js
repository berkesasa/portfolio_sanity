/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sasaDark': '#111111',
        'sasaGreenLM': '#14b8a6',
        'sasaGreenDM': '#5eead4'
      },
      borderRadius: {
        '4xl': '40px'
      },
      boxShadow: {
        'center': '0px 0px 50px 0px rgba(0,0,0,0.1)',
        'center-xl': '0px 0px 50px 0px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')
  ],
}
