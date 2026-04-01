/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "dark"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
