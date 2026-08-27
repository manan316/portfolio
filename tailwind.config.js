/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#08090D',
          canvas: '#0B0D14',
          surface: '#0F121E',
          card: '#131828',
          cardHover: '#181F33',
          border: '#1E263D',
          borderHover: '#00F0FF',
          muted: '#64748B',
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        kernel: {
          emerald: '#00FF9D',
          green: '#10B981',
          teal: '#059669',
          cyan: '#00F0FF',
          sky: '#38BDF8',
          blue: '#3B82F6',
          amber: '#FFB800',
          orange: '#FF6B00',
          red: '#EF4444',
          violet: '#8B5CF6',
          purple: '#A855F7',
          dark: '#0A0C13',
        },
        charcoal: {
          950: '#06070A',
          900: '#090A0F',
          850: '#0D0E15',
          800: '#12131C',
          700: '#1A1C28',
          600: '#252838',
          500: '#3D4259',
          400: '#64748B',
          300: '#94A3B8',
          200: '#CBD5E1',
          100: '#F1F5F9',
        },
        neon: {
          cyan: '#00F0FF',
          green: '#00FF9D',
          amber: '#FFB800',
          orange: '#FF5500',
          purple: '#A855F7',
          pink: '#EC4899',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        terminal: ['"Share Tech Mono"', 'monospace'],
        serif: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
