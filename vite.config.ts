import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // The entry points for your extension
        popup: path.resolve(__dirname, 'src/popup.html'),
        options: path.resolve(__dirname, 'src/options.html'),
        background: path.resolve(__dirname, 'src/background.ts'),
        content: path.resolve(__dirname, 'src/content.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.html')) {
            
            return `[name].[ext]`; // Output HTML files directly to dist
          }
          return 'assets/[name].[ext]';
        },
      },
      
    }
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
