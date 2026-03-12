/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ Dark mode via class — toggle by adding .dark to <html>
  darkMode: 'class',

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      // ========================================
      // COLORS — All reference CSS custom properties
      // This means changing globals.css = everything updates
      // ========================================
      colors: {
        // Brand
        primary: {
          DEFAULT: 'var(--brand-primary)',
          hover: 'var(--brand-primary-hover)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--brand-secondary)',
          hover: 'var(--brand-secondary-hover)',
          light: 'var(--secondary-light)',
        },
        danger: {
          DEFAULT: 'var(--brand-danger)',
          hover: 'var(--brand-danger-hover)',
          light: 'var(--danger-light)',
        },
        warning: {
          DEFAULT: 'var(--brand-warning)',
          hover: 'var(--brand-warning-hover)',
          light: 'var(--warning-light)',
        },
        accent: {
          DEFAULT: 'var(--brand-accent)',
          hover: 'var(--brand-accent-hover)',
          light: 'var(--accent-light)',
        },
        success: 'var(--brand-success)',
        info: 'var(--brand-info)',
        badge: 'var(--brand-badge)',

        // Surfaces (auto-switch in dark mode via CSS vars)
        page: 'var(--bg-page)',
        sidebar: 'var(--bg-sidebar)',
        card: 'var(--bg-card)',
        input: 'var(--bg-input)',
        elevated: 'var(--bg-elevated)',
        disabled: 'var(--bg-disabled)',
        hover: 'var(--bg-hover)',
        overlay: 'var(--bg-overlay)',

        // Text
        'txt': 'var(--text-primary)',
        'txt-secondary': 'var(--text-secondary)',
        'txt-muted': 'var(--text-muted)',
        'txt-disabled': 'var(--text-disabled)',
        'txt-inverse': 'var(--text-inverse)',

        // Border
        'border-default': 'var(--border-default)',
        'border-subtle': 'var(--border-subtle)',
        'border-focus': 'var(--border-focus)',
      },

      // ========================================
      // TYPOGRAPHY
      // ========================================
      fontFamily: {
        sans: ['DM Sans', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'base': '14px',
        'md': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
      },

      // ========================================
      // SPACING — 4px grid
      // ========================================
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },

      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },

      // ========================================
      // SHADOWS
      // ========================================
      boxShadow: {
        'sm': '0 1px 2px var(--shadow)',
        'md': '0 4px 12px var(--shadow)',
        'lg': '0 8px 24px var(--shadow)',
      },

      // ========================================
      // TRANSITIONS
      // ========================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
    },
  },

  plugins: [],
};
