/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00D0B0",
        navy: "#06062A",
        black: "#000000",
        white: "#FFFFFF",
        celebrationPink: "#FFB3F6",
        electricBlue: "#00A8FF",
        brightYellow: "#FFEB00",
        warmOrange: "#FF9F2F",
        celebrationOrange: "#FF6A00",
      },
      fontFamily: {
        geist: ["var(--font-geist)"],
        poppins: ["var(--font-poppins)"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
}