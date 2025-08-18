import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/shared/**/*.{ts,tsx}",
    "./src/entities/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/widgets/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#3b82f6" },
        bg: { light: "#ffffff", dark: "#0b1220" }
      },
      boxShadow: { card: "0 12px 40px rgba(0,0,0,.25)" },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%)"
      }
    }
  },
  plugins: []
} satisfies Config
