/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue UltraLight'],
      'body': ['"Poppins"'],
      'neue': ['Helvetica Neue'],
      'light': ['Helvetica 55 Roman']
    },
    extend: {},
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px'
    }
  },
  plugins: []
};
