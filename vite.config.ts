import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', reels: 'reels.html' },
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'three-core';
          if (id.includes('/node_modules/@react-three/fiber/')) return 'react-three-fiber';
          if (id.includes('/node_modules/@react-three/drei/')) return 'react-three-drei';
          if (id.includes('/node_modules/three-stdlib/')) return 'three-stdlib';
        },
      },
    },
  },
});
