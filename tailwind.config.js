/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        bgcol1:"#081326"
      },
      opacity:{
        '35':'.35',
      }
    },
    fontFamily: {
      font1: ["Roboto Slab", "serif"],
      font2: ["Noto Sans JP", "sans-serif"],
      font3: ["Dancing Script", "cursivfont-family: e"],
      font4: ["Indie Flower", "cursive"],
      font5: ["Cinzel", "serif"],
      font6: ["Pixelify Sans", "sans-serif"],
      font7: ["Homemade Apple", "cursive"],
      font8:['Nova Square', "sans-serif"],
      font9:['Space Grotesk', "sans-serif"]
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
