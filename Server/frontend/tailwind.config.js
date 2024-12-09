/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // Include all HTML files in your templates directory
    "./frontend/src/**/*.{js,jsx,ts,tsx}", // Include all React components in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
