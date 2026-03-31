/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "var(--primary-green)",
        "brand-blue-light": "var(--secondary-green)",
        "brand-steel": "var(--accent-gold)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "soft-radial": "radial-gradient(circle at top, rgba(11,29,54,0.08), transparent 60%)"
      }
    }
  },
  plugins: []
};
