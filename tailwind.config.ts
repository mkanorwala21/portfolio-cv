import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: { bg: '#0d1117', card: '#161b22', border: '#30363d' },
        accent: { cyan: '#00e5ff', purple: '#b388ff', green: '#00e676' },
      },
    },
  },
  plugins: [],
} satisfies Config;
