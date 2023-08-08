/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': value => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') },
    );
  }),
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial':
        'radial-gradient(circle, rgba(152, 11, 238, 1) 0%, rgba(118, 15, 181, 1) 35%, rgba(58, 13, 85, 1) 100%)',
    },
    colors: {
      layer: '#ffffff1a',
      purple: {
        DEFAULT: '#3a0d54',
        light: '#740fb3',
      },
      red: '#e74651be',
      yellow: {
        DEFAULT: '#ffcc00',
        dark: '#e6b800',
      },
    },
    fontFamily: {
      display: ['baloo', 'sans-serif'],
    },
    textShadow: {
      DEFAULT: '0 2px 0 #000000, 0 2px 40px #000000',
    },
  },
};
