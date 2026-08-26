/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          bg: '#F4EDE2',
          canvas: '#F7EFE4',
          surface: '#FAF7F2',
          card: '#FFFDF9',
          border: '#DECFC0',
          borderHover: '#B85D3B',
          inset: '#EFE6D7',
          muted: '#8C7D6B',
        },
        retro: {
          red: '#B83A3A',
          orange: '#E06D3B',
          amber: '#E8A838',
          sage: '#3D8B7A',
          brown: '#3B281C',
          rust: '#A45238',
          rustDark: '#873B24',
          terracotta: '#B85D3B',
          coral: '#D96B43',
        },
        charcoal: {
          950: '#0D0D0F',
          900: '#121214',
          850: '#18181B',
          800: '#1C1917',
          700: '#2C2723',
          600: '#3D3833',
          500: '#574E45',
          400: '#78716C',
          300: '#A8A29E',
        },
        dark: {
          bg: '#121214',
          surface: '#18181A',
          card: '#1E1E22',
          hover: '#26262B',
          border: '#2E2E35',
          highlight: '#3A3A42',
        },
        neon: {
          cyan: '#0284C7',
          sky: '#38BDF8',
          indigo: '#6366F1',
          purple: '#7C3AED',
          orange: '#E06D3B',
          emerald: '#15803D',
          gold: '#D97706',
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
