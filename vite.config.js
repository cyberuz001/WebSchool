import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx'],
      'text/html': ['html'],
      // Boshqa kerakli MIME turlarini qo'shish
    }
  }
})
