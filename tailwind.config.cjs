/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      spartan: ['League Spartan'],
    },
    extend: {
      colors: {
        'sys-color-1': '#151725',
        'sys-color-2': '#1f213a',
        'sys-color-3': '#7c5cf8',
        'sys-color-4': '#494f6f',
        'sys-color-5': '#b2b4ce',
        'sys-color-6': '#7a85bf',
        'sys-color-7': '#33d79e',
        'sys-color-8': '#fcfcfd',
        'sys-color-9': '#fe8f00',
        'sys-color-10': '#dfe3f8',
        'sys-color-11': '#1f203b',
        'sys-color-12': '#252847',
        'sys-color-13': '#ec5759',
        'sys-color-14': '#dee4fb',
        'sys-color-15': '#0a0f15',
        'sys-color-16': '#b4b6cc',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true,
    }),
  ],
}
