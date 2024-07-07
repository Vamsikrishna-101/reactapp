import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react() // Enables React support in Vite
  ],
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for assets like images and fonts
    sourcemap: true, // Generate source maps for debugging
    minify: 'terser' // Minify code using Terser
    // You can add more build options as needed
  }
});
