import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['sqlocal']
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    proxy: {
      '/search': 'http://localhost:5001',
      '/status': 'http://localhost:5001',
      '/get-details': 'http://localhost:5001',
      '/set-up': 'http://localhost:5001'
    }
  },
})