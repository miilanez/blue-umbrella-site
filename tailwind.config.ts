import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      mg: '768px',
      lg: '1024px',
      xl: '1480px',
    },
    extend: {
      backgroundImage: {
        hero: '',
      },
    },
  },
  plugins: [],
};
export default config;
