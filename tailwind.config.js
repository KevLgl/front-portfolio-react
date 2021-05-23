module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '7': '-7.48deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
    },
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
