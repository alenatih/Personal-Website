/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/app.tsx",
    "./src/components/Header.tsx",
    "./src/components/AboutMe.tsx",
    "./src/components/Portfolio.tsx",
    "./src/components/Skills.tsx",
    "./src/components/Footer.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}

