import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#7DF90B',
          dark: '#050817',
        },
        blue: {
          50: '#f4f9f0',
          100: '#e5f1dc',
          200: '#cee4ba',
          300: '#a9cd8b',
          400: '#7eb05b',
          500: '#5e953a',
          600: '#4F9013',
          700: '#3c6f12',
          800: '#335914',
          900: '#2c4b15',
          950: '#152907',
        },
      },
      boxShadow: {
        brand: '0 0 20px rgba(125, 249, 11, 0.15)',
        'brand-lg': '0 0 35px rgba(125, 249, 11, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
