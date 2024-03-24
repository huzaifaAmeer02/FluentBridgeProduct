import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [], // Remove @emotion/react and @emotion/styled from external
    },
  },
  plugins: [
    react(),
    sass(),
  ],
  resolve: {
    alias: {
      '@emotion/react': 'react', // Map @emotion/react to react
      '@emotion/styled': '@emotion/styled', // Keep @emotion/styled as it is
      'react-toastify': 'react-toastify',
    },
  },
});
