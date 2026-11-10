/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdf6e3',
        coral: '#ff6b6b',
        honey: '#feca57',
        'electric-blue': '#48dbfb',
        bubblegum: '#ff9ff3',
        mint: '#1dd1a1',
        grape: '#5f27cd',
        'memphis-black': '#000000',
        'memphis-white': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', '"Arial Black"', 'Helvetica', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Inter', '"Arial Black"', 'sans-serif'],
      },
      boxShadow: {
        'memphis': '6px 6px 0 #000000',
        'memphis-lg': '10px 10px 0 #000000',
        'memphis-sm': '4px 4px 0 #000000',
        'memphis-honey': '4px 4px 0 #feca57',
        'memphis-coral': '6px 6px 0 #ff6b6b',
        'memphis-blue': '6px 6px 0 #48dbfb',
        'memphis-mint': '6px 6px 0 #1dd1a1',
        'memphis-bubblegum': '6px 6px 0 #ff9ff3',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
    },
  },
  plugins: [],
}
