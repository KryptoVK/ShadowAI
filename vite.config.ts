import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      clientPort: 443
    }
  },
  preview: {
    port: 5173,
    host: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
          'terminal': ['./src/components/Terminal.tsx', './src/utils/commandHandler.ts'],
          'video': ['./src/components/VideoBackground.tsx', './src/components/VideoControls.tsx', './src/components/AudioControls.tsx']
        }
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react']
  }
});
