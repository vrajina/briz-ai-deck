/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#fa8669',
          darkOrange: '#e56a4b',
          amber: '#dd8500',
          dark: '#08090e',
          surface: '#12141c',
          card: '#1a1d28',
          border: '#2a2e3d',
          sand: '#f5f0eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
