import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@emotion/react', '@emotion/styled'], // Add @emotion/react and @emotion/styled to externalize them
    },
  },
  plugins: [
    react(), // Keep the react plugin
    sass(), // Keep the sass plugin
  ],
  resolve: {
    alias: {
      'react-toastify': 'react-toastify', // Keep the existing alias
    },
  },
});
