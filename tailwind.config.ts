import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#FFF2D7',
        foreground: '#290D0D',
        primary: {
          DEFAULT: '#290D0D',
          foreground: '#FFF2D7',
        },
        secondary: {
          DEFAULT: '#DA914D',
          foreground: '#290D0D',
        },
        accent: {
          DEFAULT: '#8B4513',
          foreground: '#FFF2D7',
        },
        tertiary: {
          DEFAULT: '#290D0D',
          foreground: '#FFF2D7',
        },
        destructive: {
          DEFAULT: '#B22222',
          foreground: '#FFF2D7',
        },
        dark: {
          DEFAULT: '#290D0D',
          foreground: '#FFF2D7',
        },
        muted: {
          DEFAULT: '#F5E6D3',
          foreground: '#290D0D',
        },
        card: {
          DEFAULT: '#FFF2D7',
          foreground: '#290D0D',
        },
        success: {
          DEFAULT: '#2E8B57',
          foreground: '#FFF2D7',
        },
        white: {
          DEFAULT: '#FFF2D7',
          foreground: '#290D0D',
        },
        black: {
          DEFAULT: '#290D0D',
          foreground: '#FFF2D7',
        },
      },
      fontFamily: {
        sans: ['var(--font-switzer)', 'system-ui', 'sans-serif'],
        display: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
