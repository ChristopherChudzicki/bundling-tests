import { resolve } from 'node:path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        bundle: resolve(__dirname, 'src/index.js'),
      },
      output: {
        dir: resolve(__dirname, 'vite_output'),
        entryFileNames: '[name].js',
      }
    },
  },
})