/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#C83A2B',
          'red-dark': '#A92E22',
          'red-light': '#E25041',
          gold: '#C8A45D',
          'gold-light': '#DDBA76',
        },
        charcoal: {
          DEFAULT: '#171717',
          50:  '#F5F5F5',
          100: '#E5E2DD', // Borders/dividers
          200: '#D0D0D0',
          300: '#B0B0B0',
          400: '#8A8A8A',
          500: '#6B6B6B', // Secondary text
          600: '#4A4A4A',
          700: '#333333',
          800: '#2C2C2C',
          900: '#171717',
        },
        cream: '#F8F7F4',
        'warm-grey': '#F5F3F0',
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      lineHeight: {
        tight2: '1.15',
      },
      screens: {
        xs: '375px',
      },
      animation: {
        'ken-burns': 'kenBurns 8s ease-out forwards',
        'line-draw': 'lineDraw 1.2s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1.08)', },
          '100%': { transform: 'scale(1)', },
        },
        lineDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
