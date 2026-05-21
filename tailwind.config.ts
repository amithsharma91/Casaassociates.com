/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          serif: ['Cormorant Garamond', 'Georgia', 'serif'],
          sans: ['DM Sans', 'system-ui', 'sans-serif'],
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-40px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(40px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
        },
        animation: {
          fadeInUp: 'fadeInUp 0.7s ease forwards',
          fadeIn: 'fadeIn 0.8s ease forwards',
          slideInLeft: 'slideInLeft 0.7s ease forwards',
          slideInRight: 'slideInRight 0.7s ease forwards',
        },
      },
    },
    plugins: [],
  }