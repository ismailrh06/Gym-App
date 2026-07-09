import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        card: "#0B0C10",
        border: "#1F2024",
        muted: "#9CA3AF",
        accent: "#D4AF37"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "sans-serif"],
        heading: ["var(--font-heading)", "Playfair Display", "serif"]
      },
      boxShadow: {
        glow: "0 0 52px rgba(79, 140, 255, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
