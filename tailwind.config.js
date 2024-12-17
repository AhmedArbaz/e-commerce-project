/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // deep blue
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#EC4899', // pink
          light: '#F472B6',
          dark: '#BE185D',
        },
        dark: {
          DEFAULT: '#111827', // near black
          light: '#1F2937',
          lighter: '#374151',
        }
      }
    },
  },
  plugins: [],
};