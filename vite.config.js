import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'   // ✅ add this
import { dirname, resolve } from 'path'  // ✅ add this

// Get __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/Components'),
      '@pages': resolve(__dirname, './src/Pages'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
})
