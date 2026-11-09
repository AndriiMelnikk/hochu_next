import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  prefix: '',
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
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // ui-v2: ізольований неймспейс `v2-*`, значення у src/ui-v2/tokens.css
        'v2-ink': 'var(--v2-ink)',
        'v2-muted': 'var(--v2-text-muted)',
        'v2-subtle': 'var(--v2-text-subtle)',
        'v2-primary': 'var(--v2-primary)',
        'v2-primary-hover': 'var(--v2-primary-hover)',
        'v2-on-primary': 'var(--v2-on-primary)',
        'v2-brand': 'var(--v2-brand)',
        'v2-link': 'var(--v2-link)',
        'v2-surface': 'var(--v2-surface)',
        'v2-surface-muted': 'var(--v2-surface-muted)',
        'v2-hover': 'var(--v2-hover)',
        'v2-surface-subtle': 'var(--v2-surface-subtle)',
        'v2-switch-on': 'var(--v2-switch-on)',
        'v2-switch-off': 'var(--v2-switch-off)',
        'v2-secondary': 'var(--v2-text-secondary)',
        'v2-avatar-blue': 'var(--v2-avatar-blue-bg)',
        'v2-avatar-blue-text': 'var(--v2-avatar-blue-text)',
        'v2-rating': 'var(--v2-rating)',
        'v2-info-bg': 'var(--v2-info-bg)',
        'v2-border': 'var(--v2-border)',
        'v2-border-strong': 'var(--v2-border-strong)',
        'v2-disabled-bg': 'var(--v2-disabled-bg)',
        'v2-disabled-text': 'var(--v2-disabled-text)',
        'v2-success': 'var(--v2-success)',
        'v2-warning': 'var(--v2-warning)',
        'v2-danger': 'var(--v2-danger)',
        'v2-backdrop': 'var(--v2-backdrop)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-hero': 'var(--gradient-hero)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        glow: 'var(--shadow-glow)',
        blue: 'var(--shadow-blue)',
        'v2-pop': 'var(--v2-shadow-pop)',
        'v2-float': 'var(--v2-shadow-float)',
        'v2-outline': 'var(--v2-shadow-outline)',
        'v2-popover': 'var(--v2-shadow-popover)',
      },
      transitionProperty: {
        smooth: 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'v2-sm': 'var(--v2-radius-sm)',
        'v2-md': 'var(--v2-radius-md)',
        'v2-lg': 'var(--v2-radius-lg)',
        'v2-xl': 'var(--v2-radius-xl)',
        'v2-2xl': 'var(--v2-radius-2xl)',
        'v2-pill': 'var(--v2-radius-pill)',
      },
      keyframes: {
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
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
