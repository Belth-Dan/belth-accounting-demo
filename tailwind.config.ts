import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          50: '#F0F4FF',
          100: '#E0EAFF',
          200: '#C0D4FF',
          300: '#90B0F0',
          400: '#6090E0',
          500: '#3A5ECC',
          600: '#1A3AA8',
          700: '#0F2280',
          800: '#0A1655',
          900: '#0A0F1E',
          950: '#060B14',
        },
        cyan: {
          DEFAULT: '#00b4ff',
          dark: '#0099d6',
          glow: 'rgba(0,180,255,0.12)',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease forwards',
        'slide-up': 'slideUp 0.4s ease forwards',
        'blink': 'blink 1.2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'toast-in': 'toastIn 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 80%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '40%': { opacity: '1', transform: 'scale(1.15)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(0,180,255,0.06) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,180,255,0.15), transparent)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
    },
  },
  plugins: [],
}

export default config
