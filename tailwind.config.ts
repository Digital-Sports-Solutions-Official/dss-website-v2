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
        // Documentation-only palette, defined for light and dark in
        // src/app/docs/[[...slug]]/docs.css and flipped by the docs theme
        // toggle. Nothing outside /docs uses them.
        //   surface       static raised fill (code, table head, drawer)
        //   hover/active  interaction states, kept distinct so hovering a row
        //                 never looks the same as selecting it
        docs: {
          bg: 'var(--docs-bg)',
          surface: 'var(--docs-surface)',
          heading: 'var(--docs-heading)',
          text: 'var(--docs-text)',
          muted: 'var(--docs-muted)',
          border: 'var(--docs-border)',
          hover: 'var(--docs-hover)',
          active: 'var(--docs-active)',
          accent: 'var(--docs-accent)',
          'accent-hover': 'var(--docs-accent-hover)',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
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
