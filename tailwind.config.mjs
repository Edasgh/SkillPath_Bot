/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        pulser: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        typewriter: "typewriter 2s steps(30) forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        pulse: {
          "0%": { opacity: ".5", transform: "scale(1)" },
          "50%": {
            opacity: ".75",
            transform: "scale(1.12)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
