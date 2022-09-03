/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff5bb9",
          "secondary": "#e3c2f9",
          "accent": "#f2a4ac",
          "neutral": "#222F3A",
          "base-100": "#333135",
          "base-200": "#2b2b2b",
          "info": "#3A91E9",
          "success": "#82E3D3",
          "warning": "#F2D554",
          "error": "#E98072",
        },
      },
    ],
  },
}


