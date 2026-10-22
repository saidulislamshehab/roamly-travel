import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "var(--bg-main)",
        },
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        brand: {
          DEFAULT: "var(--brand-primary)",
          hover: "var(--brand-hover)",
        },
        accent: {
          DEFAULT: "var(--warm-accent)",
          hover: "var(--warm-accent-hover)",
        },
        border: {
          DEFAULT: "var(--border-color)",
        },
        mutedIcon: "var(--muted-icon)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "var(--color-card-shadow)",
        floating: "0 20px 40px -15px rgba(23, 79, 67, 0.12)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
        "3xl": "28px",
      },
    },
  },
  plugins: [],
};
export default config;
