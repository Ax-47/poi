import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "axprimary":"#dd8f21",
        "axsecondary":"#95bd80",
        "axtertiary":"#7691bf",
        "da":"#ff4700"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{
        spinax:{
          "0%, 100%":{transform: 'translateX(0) rotate(0deg)'},
          "25%":{transform: 'translateX(0) rotate(0deg)'},
          "50%":{transform: 'translateX(0) rotate(0deg)'},
          "75%":{transform: 'translateX(0) rotate(0deg)'},
        }
      }
      ,
      animation:{
        "axspin":"spinax 1s infinite"
      }
    },
  },
  plugins: [],
};
export default config;
