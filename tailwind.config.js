module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    cursor: {
      pointer: 'pointer'
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
