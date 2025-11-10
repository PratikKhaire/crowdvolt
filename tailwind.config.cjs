/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        milk: "#F5F5DC", // Beige/cream color
        "dark-brown": "#3E2723", // Dark brown color
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          md: "4rem",
          lg: "6rem",
          xl: "8rem",
          "2xl": "8rem",
        },
      },
      maxWidth: {
        'centered': '1400px',
      },
      spacing: {
        'section-x': 'clamp(2rem, 5vw, 8rem)',
        'section-y': 'clamp(4rem, 8vw, 10rem)',
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "border-spin": {
          "100%": {
            "--border-angle": "1turn",
          },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "border-spin": "border-spin 4s linear infinite",
      },
    },
  },
  plugins: [],
};

