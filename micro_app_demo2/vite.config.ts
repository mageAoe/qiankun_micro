import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react()
    qiankun('micro-app-demo4', { useDevMode: true }),
  ],
  server: {
    port: 6662,
    host: true,
    hmr: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})
