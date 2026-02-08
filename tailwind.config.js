/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        border: "hsl(var(--border))",
        navactive: "hsl(var(--navactive))",
        subnav: "hsl(var(--subnav))",
        roman: "hsl(var(--roman))",
      },
    },
  },
  plugins: [],
}