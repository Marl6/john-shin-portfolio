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
        primary: '#8A2BE2', // Violet/Purple
        secondary: '#1E90FF', // Dodger Blue
        dark: {
          background: '#121212', // Very dark gray
          surface: '#1E1E1E', // Dark gray (for cards, etc.)
          text: '#FFFFFF',
          'text-secondary': '#B3B3B3',
          border: '#333333',
        }
      },
      fontFamily: {
        sueEllen: ['"Sue Ellen Francisco"', 'cursive'], 
        lora: ["Lora", "serif"],
        jacques: ['Jacques François Shadow', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        Baskerville: ['Libre Baskerville', 'serif']
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 20s) linear infinite var(--animation-direction, forwards)',
      },
      extend: {
          perspective: {
            '1000': '1000px',
          },
      },
    },
  },
  plugins: [],
}
