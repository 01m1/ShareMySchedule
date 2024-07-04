import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkest-purple": "#3D46F2",
        " purple": "#636AF2",
        "light-purple": "#8D92F2",
        "lightest-purple": "#DSD7F2",
        "mustard": "#F2AE30",
        "black": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
