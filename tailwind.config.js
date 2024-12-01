/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'luxury': {
          dark: '#1a1a1a',
          light: '#f5f5f5',
          accent: '#c9a55c',
          'accent-dark': '#b38f3f',
        },
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'glass': '8px',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d, #1f1f1f)',
        'gradient-light': 'linear-gradient(to bottom right, #f5f5f5, #e5e5e5, #f0f0f0)',
      },
    },
  },
  plugins: [],
}
