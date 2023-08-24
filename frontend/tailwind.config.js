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
    }
  },
  plugins: [],
}

