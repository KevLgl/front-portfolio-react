module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#b3bcf5',
          DEFAULT: '#16253A',
          dark: '#202e78',
        },
        secondary: {
          light: '#b3bcf5',
          DEFAULT: '#D11806',
          dark: '#202e78',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
