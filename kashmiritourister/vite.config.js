import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/proxy': {
        target: 'https://localhost:7248', // Your backend API URL
        changeOrigin: true,
        secure: false, // Set to false if using self-signed certificates
        rewrite: (path) => path.replace(/^\/proxy/, ''), // Optional: rewrite path if needed
      },
    },
  },
});