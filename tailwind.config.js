/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2e8d5',
        ink: '#123d35',
        cyan: '#28aeb9',
        coral: '#eb675b',
        paper: '#f7f0e2',
      },
      fontFamily: {
        display: ['Archivo Black', 'Arial Black', 'sans-serif'],
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      boxShadow: {
        print: '8px 8px 0 #123d35',
      },
    },
  },
  plugins: [],
}
