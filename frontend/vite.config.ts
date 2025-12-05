import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Use dynamic import to avoid TS types for node builtins
const { resolve } = await import('path')
const { fileURLToPath } = await import('url')

const frontendRoot = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(frontendRoot),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
