/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nature: {
          bg: '#0f1716',         // Глубокий благородный сосново-речной оттенок
          surface: '#152120',    // Поверхность карточек
          card: '#1a2927',       // Акцентная карточка
          border: '#253835',     // Тонкие рамки цвета речной гальки
          borderLight: '#324a46',
          text: '#f2f5f4',       // Чистый светлый текст
          muted: '#9ab0ac',      // Приглушенный природный тон
          terracotta: '#d96b43', // Благородная волжская глина / закат
          terracottaDark: '#bd5833',
          pine: '#243a36',
          sand: '#e8ded2',       // Теплый речной песок
          wood: '#d4bda5',       // Натуральное дерево
          cream: '#f9f6f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
};
