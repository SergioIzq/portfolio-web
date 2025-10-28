/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Importar si deseas fusionar con las fuentes por defecto

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      height: {
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
