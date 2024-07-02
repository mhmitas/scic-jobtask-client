/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light',
      {
        lightTheme: {
          "primary": "#1f6feb", // 3b82f6
          "secondary": "#a3e635",
          "accent": "#f43f5e",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#fbbf24",
          "error": "#ef4444",
          "base-100": "#ffffff",
          "base-200": "#f0f2f5",
          "base-300": "#f0f2f5",
          'base-content': 'black',
        }, // primary: 3b82f6; secondary: a3e635
        darkTheme: {
          "primary": "#1f6feb", // 3b82f6
          "secondary": "#fff",
          "accent": "#37cdbe",
          "base-100": "#1d1e1f",
          "base-200": "#121212",
          "base-300": "#101010",
          'base-content': 'white',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
