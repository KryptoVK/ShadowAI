import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 10000,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  preview: {
    host: true,
    port: 10000,
    strictPort: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
