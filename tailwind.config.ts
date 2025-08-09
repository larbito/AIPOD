import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: { '2xl': '72rem' },
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem',
      },
    },
    extend: {
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))',
        primary: {
          DEFAULT: '#6d28d9',
        },
        secondary: {
          DEFAULT: '#2563eb',
        },
        accent: {
          DEFAULT: '#22d3ee',
        },
        brand: {
          400: '#818cf8',
          500: '#6366f1',
        },
      },
      boxShadow: {
        md: '0 8px 24px rgba(0,0,0,0.25)',
        xl: '0 25px 50px -12px rgba(0,0,0,0.35)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
