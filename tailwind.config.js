/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,t,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        doto: ["Doto", "sans-serif"],
        edu: ["Edu Australia VIC WA NT Hand Arrows"],
        jaro: ['"Jaro"', "sans-serif"],
      },
      boxShadow: {
        "3xl": "1px 1px 5px 2px orange",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
