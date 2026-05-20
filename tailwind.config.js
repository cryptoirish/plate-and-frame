/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16110D",
        bone: "#F4EFE6",
        cream: "#EDE5D3",
        ember: "#C44536",
        ochre: "#B8772B",
        sage: "#6B7A5A",
        char: "#2A201A",
        mist: "#DCD3BF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};
