/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "inset 0px -26px 39px -19px rgb(166, 222, 247);",
      },
    },
  },
  plugins: [],
}

