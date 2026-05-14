import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d4d8e2",
          300: "#aeb5c6",
          400: "#7e88a1",
          500: "#5b6781",
          600: "#475168",
          700: "#3a4256",
          800: "#2b3144",
          900: "#1c2030",
          950: "#11131d",
        },
        accent: {
          50: "#eef5ff",
          100: "#d9e7ff",
          200: "#bcd4ff",
          300: "#8db8ff",
          400: "#5a92ff",
          500: "#356cff",
          600: "#1d4eef",
          700: "#163cd6",
          800: "#1832a8",
          900: "#1a3084",
          950: "#131c50",
        },
        amber: {
          DEFAULT: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(17,19,29,0.04), 0 8px 24px -8px rgba(17,19,29,0.08)",
        slide: "0 1px 0 0 rgba(17,19,29,0.03), 0 18px 40px -16px rgba(17,19,29,0.12)",
        glow: "0 0 0 1px rgba(53,108,255,0.15), 0 12px 32px -12px rgba(53,108,255,0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
