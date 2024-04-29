import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        marquee: 'marquee 60s linear infinite',
        marquee2: 'marquee2 60s linear infinite',
        marqueePrj: 'marqueePrj 45s linear infinite',
        marqueePrj2: 'marqueePrj2 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueePrj: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marqueePrj2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        libre: ['"Workbench"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          '50': '#fcffe7',
          '100': '#f6ffc1',
          '200': '#f1ff86',
          '300': '#f2ff41',
          '400': '#faff0d',
          '500': '#fff700',
          '600': '#d1b800',
          '700': '#a68602',
          '800': '#89680a',
          '900': '#74540f',
          '950': '#442e04',
        },
        'brand-dark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#030303',
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
