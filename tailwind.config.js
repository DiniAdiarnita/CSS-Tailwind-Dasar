module.exports = {
  // prefix: "da-",
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue:{
          ...colors.blue,
          "100":"#9cdbff"
        }
      }
    },
  },
  variants: {},
  plugins: [],
}