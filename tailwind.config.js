/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: {
          100: "#071B34",
          200: '#022857',
          300: '#03316A'
        },
        codeFlow: '#FF156D',
        codePlace : "#1e1e1e",
      }
    },
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    variants: {
      extend: {
        borderColor: ['hover'],
        scale: ['hover'],
      },
    },
  },
  plugins: [],
})
