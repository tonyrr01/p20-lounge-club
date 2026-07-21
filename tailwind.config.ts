import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#171717",
        charcoal: "#23211f",
        marble: "#f7f4ee",
        champagne: "#c8a96a",
        walnut: "#7a573a",
        cellar: "#5b1d2a"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"]
      },
      boxShadow: {
        lounge: "0 24px 80px rgba(0,0,0,0.24)"
      }
    }
  },
  plugins: []
};

export default config;
