/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D32F2F', // Rich Pizza Sauce Red
        secondary: '#F57C00', // Cheesy Orange
        accent: '#FFEB3B', // Golden Crust Yellow
        dark: '#4E342E', // Oven-Baked Brown
        light: '#FFF3E0', // Warm Dough White
      },
    },
  },
  plugins: [],
};
