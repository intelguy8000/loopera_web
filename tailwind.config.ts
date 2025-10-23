import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Loopera Brand Colors
        primary: {
          red: '#EA2839', // PANTONE 1788 C
          DEFAULT: '#EA2839',
        },
        secondary: {
          black: '#2A2623', // PANTONE BLACK C
          gray: '#D5D2CA', // PANTONE WARM GRAY 2 C
          blue: '#0065BD', // PANTONE 300 C
          cream: '#E1D8B7', // PANTONE 7500 C
        },
        loopera: {
          red: '#EA2839',
          black: '#2A2623',
          gray: '#D5D2CA',
          blue: '#0065BD',
          cream: '#E1D8B7',
        }
      },
      fontFamily: {
        sans: ['var(--font-lexend-deca)', 'system-ui', 'sans-serif'],
        lexend: ['var(--font-lexend-deca)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
