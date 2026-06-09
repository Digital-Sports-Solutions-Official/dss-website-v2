import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: 'var(--color-brand-pure-red)',
          orange: 'var(--color-brand-vibrant-orange)',
          burnt: 'var(--color-brand-burnt-orange)',
          peach: 'var(--color-brand-peach)',
          cream: 'var(--color-brand-cream)',
        },
        neutral: {
          white: 'var(--color-neutral-white)',
          light: 'var(--color-neutral-light-gray)',
          medium: 'var(--color-neutral-medium-gray)',
          dark: 'var(--color-neutral-dark-gray)',
          black: 'var(--color-neutral-pure-black)',
        },
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          dark: 'var(--color-bg-dark)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          inverse: 'var(--color-text-inverse)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-primary)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
      },
      spacing: {
        '0': 'var(--spacing-0)',
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '6': 'var(--spacing-6)',
        '8': 'var(--spacing-8)',
        '12': 'var(--spacing-12)',
        '16': 'var(--spacing-16)',
        '24': 'var(--spacing-24)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        hardware: 'var(--shadow-hardware)',
      },
      transitionTimingFunction: {
        dss: 'var(--transition-timing)',
      },
      transitionDuration: {
        fast: 'var(--transition-duration-fast)',
        normal: 'var(--transition-duration-normal)',
      },
    },
  },
  plugins: [],
} satisfies Config;