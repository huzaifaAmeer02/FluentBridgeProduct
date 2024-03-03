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

        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main green color
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d', // Darkest green color
        },
        
        yellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Main yellow color
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f', // Darkest yellow color
        },
        
        gray: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#666666', // Main gray color
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000', // Darkest black color
        },
        
      },
    },
  },
  plugins: [],
};
