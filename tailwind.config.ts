import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindcssTypography from '@tailwindcss/typography';

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
        background: '#F8F5FF',
        foreground: '#241825',
        primary: {
          DEFAULT: '#4B2676',
          foreground: '#F8F5FF',
        },
        secondary: {
          DEFAULT: '#FFCD28',
          foreground: '#241825',
        },
        accent: {
          DEFAULT: '#93D2FF',
          foreground: '#F8F5FF',
        },
        tertiary: {
          DEFAULT: '#B94C65',
          foreground: '#F8F5FF',
        },
        destructive: {
          DEFAULT: '#CF3E3E',
          foreground: '#F8F5FF',
        },
        dark: {
          DEFAULT: '#241825',
          foreground: '#F8F5FF',
        },
        muted: {
          DEFAULT: '#E7E1F2',
          foreground: '#241825',
        },
        card: {
          DEFAULT: '#FFF',
          foreground: '#241825',
        },
        success: {
          DEFAULT: '#2D9964',
          foreground: '#F8F5FF',
        },
        white: {
          DEFAULT: '#F8F5FF',
          foreground: '#241825',
        },
        black: {
          DEFAULT: '#241825',
          foreground: '#F8F5FF',
        },
        brandBlue: {
          DEFAULT: '#0069B4',
        },
        brandRed: {
          DEFAULT: '#CA0C16',
        },
        brandGold: {
          DEFAULT: '#F9B112',
        },
      },
      fontFamily: {
        sans: ['var(--font-switzer)', 'system-ui', 'sans-serif'],
        display: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        spin: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1.4) rotate(0turn)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1.4) rotate(1turn)',
          },
        },
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
} satisfies Config;
