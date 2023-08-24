/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'flotar': 'updown 3s linear infinite',
      },
      keyframes: {
        updown: {
          '0%': { transform: 'translateY(-15px)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}

