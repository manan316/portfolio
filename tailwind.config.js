/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        washi: {
          DEFAULT: '#f5f0e1',
          light: '#fbf8f0',
          dark: '#ece5d0',
        },
        indigo: {
          DEFAULT: '#1a3055',
          dark: '#112038',
          light: '#234173',
        },
        vermilion: {
          DEFAULT: '#d4553a',
          hover: '#bf442a',
          light: '#e27159',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#dfb73c',
          dark: '#a8851a',
        },
        ultramarine: {
          DEFAULT: '#2a5a8c',
          light: '#366ea9',
        },
        grass: {
          DEFAULT: '#747800',
          light: '#8d9200',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Songti SC"', 'Georgia', 'serif'],
        sans: ['"Noto Serif SC"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'woodblock': '4px 4px 0 #1a3055',
        'woodblock-hover': '6px 6px 0 #1a3055',
        'woodblock-lg': '8px 8px 0 #1a3055',
        'woodblock-vermilion': '4px 4px 0 #d4553a',
        'woodblock-gold': '4px 4px 0 #c9a227',
        'woodblock-sm': '2px 2px 0 #1a3055',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}
