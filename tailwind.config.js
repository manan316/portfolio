/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FAF7F0',
          100: '#F4EFE6',
          200: '#E8E1D3',
          300: '#D5CCBB',
          800: '#2C2A26',
          900: '#181715',
        },
        sector: {
          orange: '#FF5722',
          gold: '#E5A93C',
          cyan: '#00E5FF',
          dark: '#0A0E17',
          darker: '#06090E',
          card: '#FFFFFF',
          border: '#E2DBD0',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwritten: ['"Caveat"', 'cursive'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
