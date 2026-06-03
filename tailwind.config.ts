import type { Config } from 'tailwindcss';

/**
 * G Adverts design tokens.
 *
 * Colors are driven by CSS variables in app/globals.css (:root) — edit there to
 * retune the whole site. Palette is derived from the actual logos: warm
 * monochrome (charcoal + cream), no chromatic accent.
 */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // surfaces (warm near-blacks)
        ink:        'rgb(var(--ga-ink) / <alpha-value>)',        // page base
        'ink-soft': 'rgb(var(--ga-ink-soft) / <alpha-value>)',   // raised panel
        'ink-mid':  'rgb(var(--ga-ink-mid) / <alpha-value>)',    // card
        line:       'rgb(var(--ga-line) / <alpha-value>)',       // hairline / border
        // paper (cream) — the brand's high-contrast "pop"
        paper:       'rgb(var(--ga-paper) / <alpha-value>)',
        'paper-dim': 'rgb(var(--ga-paper-dim) / <alpha-value>)',
        // text on dark
        'text-hi':  'rgb(var(--ga-text-hi) / <alpha-value>)',
        'text-mid': 'rgb(var(--ga-text-mid) / <alpha-value>)',
        'text-low': 'rgb(var(--ga-text-low) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee:        'marquee 40s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        float:          'float 6s ease-in-out infinite',
        'glow-pulse':   'glow-pulse 4s ease-in-out infinite',
        'fade-up':      'fade-up 0.6s ease-out both',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%':      { opacity: '0.7', filter: 'blur(60px)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
