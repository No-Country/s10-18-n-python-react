/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'elipse': "url('src/assets/images/elipse.jpg')",
      },
      borderRadius: {
        'elipse': '50%'
      },
      colors: {
        'greenBrand': '#128983'
      },
      fontFamily: {
        baloo2: ["Baloo2", "sans-serif"],
        latoRegular: ["Lato-regular", "sans-serif"],
        latoMedium: ["Lato-Medium", "sans-serif"],
        latoSemibold: ["Lato-Semibold", "sans-serif"],
        latoBold: ["Lato-Bold", "sans-serif"]
      },
      boxShadow: {
        custom: "inset 0px -26px 39px -19px rgb(166, 222, 247);",
      },
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
    }
  },
  plugins: [],
}