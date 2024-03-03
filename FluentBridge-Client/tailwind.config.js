// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#804000',
          600: '#663300',
          700: '#4d2600',
          800: '#331a00',
          900: '#1a0d00',
        },

        black: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#666666',  // Main black color
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000',  // Darkest black color
        },
      },
    },
  },
  plugins: [],
};
