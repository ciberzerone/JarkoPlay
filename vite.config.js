import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    build: {
      sourcemap: false,  // Activa los source maps en la build
    },
    alias: {
      '@': '/src', // Si usas alias para la ruta 'src'
    },
  },
  server: {
    sourcemap: true, 
    mimeTypes: {
      'application/javascript': ['js'],
    },
  },
});