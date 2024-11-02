/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,t,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Add Helvetica to the sans family
      },
      boxShadow: {
        "3xl": "1px 1px 5px 2px orange",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
