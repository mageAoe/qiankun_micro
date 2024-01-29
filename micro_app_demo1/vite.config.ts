import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://192.168.1.22:6661',
  plugins: [
    // 在开发模式下需要把react()关掉
    // https://github.com/umijs/qiankun/issues/1257
    // react(),
    qiankun('micro-app-demo1', { useDevMode: true }),
  ],
  server: {
    port: 6661,
    host: true,
    hmr: true,
  }
})
