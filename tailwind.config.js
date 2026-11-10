/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc',
        surface: {
          DEFAULT: '#ffffff',
          card: 'rgba(255, 255, 255, 0.88)',
          muted: '#f1f5f9',
          border: 'rgba(226, 232, 240, 0.9)',
          hover: 'rgba(241, 245, 249, 0.9)',
        },
        brand: {
          cyan: '#0284c7',
          emerald: '#059669',
          violet: '#7c3aed',
          indigo: '#4f46e5',
          amber: '#d97706',
          rose: '#e11d48',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'bento': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.04)',
        'bento-hover': '0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'glow-cyan': '0 0 25px -3px rgba(14, 165, 233, 0.2)',
        'glow-emerald': '0 0 25px -3px rgba(16, 185, 129, 0.2)',
        'glow-violet': '0 0 25px -3px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
