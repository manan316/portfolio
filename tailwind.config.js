/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        'warm-white': '#fafaf8',
        'international-orange': '#ff4d00',
        orange: {
          DEFAULT: '#ff4d00',
          hover: '#e04400',
        },
        'mid-grey': '#71717a',
        'rule-grey': '#e4e4e7',
        'off-black': '#18181b',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '0px',
      },
      boxShadow: {
        none: 'none',
      },
      maxWidth: {
        'page': '1600px',
      }
    },
  },
  plugins: [],
}
