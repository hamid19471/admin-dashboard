/** @type {import('tailwindcss').Config} */
import DaisyUIPlugin from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANYekan"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [DaisyUIPlugin],
};
