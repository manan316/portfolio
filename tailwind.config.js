/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#06090E',
          surface: '#0A0E17',
          card: '#0D131F',
          hover: '#131C2E',
          border: '#1E293B',
          highlight: '#253347',
        },
        neon: {
          cyan: '#00E5FF',
          sky: '#38BDF8',
          indigo: '#6366F1',
          purple: '#A855F7',
          orange: '#FF5722',
          emerald: '#10B981',
          gold: '#E5A93C',
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
