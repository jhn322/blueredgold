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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#D4A017',
          foreground: '#222222',
        },
        secondary: {
          DEFAULT: '#A91D22',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#0A3871',
          foreground: '#FFFFFF',
        },
        tertiary: {
          DEFAULT: '#222222',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#AB2222',
          foreground: '#FFFFFF',
        },
        dark: {
          DEFAULT: '#222222',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#E4E4E4',
          foreground: '#555555',
        },
        card: {
          DEFAULT: '#F1F1F1',
          foreground: '#222222',
        },
        success: {
          DEFAULT: '#06643D',
          foreground: '#222222',
        },
        white: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222',
        },
        black: {
          DEFAULT: '#222222',
          foreground: '#FFFFFF',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
