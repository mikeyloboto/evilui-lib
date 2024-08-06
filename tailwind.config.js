/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, css, ts, scss}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px rgba(0, 0, 0, 0.5)', // Custom shadow with no offset, keeping the color
      },
    },
  },
  plugins: [],
};
