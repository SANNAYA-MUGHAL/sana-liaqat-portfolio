import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F8FC",
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#FFFFFF",
          subtle: "#F0F2FA",
          alt: "#EDF0F7",
        },
        border: {
          DEFAULT: "#E1E5EE",
          subtle: "#EAEFF7",
          dark: "#CBD5E1",
        },
        text: {
          primary: "#172033",
          secondary: "#5F687A",
          muted: "#8A94A6",
        },
        primary: {
          DEFAULT: "#6C5CE7",
          foreground: "#FFFFFF",
          50: "#F4F2FE",
          100: "#EEEBFF",
          200: "#DDD7FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B7CF6",
          600: "#6C5CE7",
          700: "#5B4BD5",
          800: "#4834D4",
          900: "#3727A0",
        },
        purpleAccent: {
          DEFAULT: "#6C5CE7",
          secondary: "#8B7CF6",
          soft: "#EEEBFF",
          border: "#D4CCFC",
        },
        cyanAccent: {
          DEFAULT: "#0284C7",
          light: "#0EA5E9",
          soft: "#E0F2FE",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 2px 12px -2px rgba(23, 32, 51, 0.05), 0 1px 3px rgba(23, 32, 51, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(108, 92, 231, 0.12), 0 4px 12px -2px rgba(23, 32, 51, 0.06)",
        dropdown: "0 10px 30px -5px rgba(23, 32, 51, 0.1), 0 4px 10px -2px rgba(23, 32, 51, 0.05)",
      },
      backgroundImage: {
        "light-grid":
          "linear-gradient(to right, rgba(23, 32, 51, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 32, 51, 0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
