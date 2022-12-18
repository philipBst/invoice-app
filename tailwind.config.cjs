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
      },
    },
  },
  plugins: [],
}
