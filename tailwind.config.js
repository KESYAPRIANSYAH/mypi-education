/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "cust-white": "#F1F1F1",
      "cust-black": "#1A1C20",
      "cust-gray": "#868789",
      "cust-yellow": "#FFD966",
      "cust-pink": "#F66062",
      "cust-shoft-pink": "#FFB4B4",
      "cust-purple": "#7833AD",
      "cust-blue": "#336FF4",
      "cust-green": "#47625D",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      cursive: ["Comic Neue", "cursive"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/hero-img.jpg')",
        biology: "url('/src/assets/images/biology.jpg')",
        chemistry: "url('/src/assets/images/chemistry.jpg')",
        physics: "url('/src/assets/images/physics.jpg')",
        math: "url('/src/assets/images/math.jpg')",
      },
    },
  },
  plugins: [],
};
