/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "#393939",
        dark: "#2D2E31",
        orange: "#FFB257",
        "orange-hover": "#FFBC8B",
      },
      animation: {
        "top-down": "top-to-down 0.3s",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
