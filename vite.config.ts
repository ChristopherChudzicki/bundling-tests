import { resolve } from 'node:path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    minify: false,
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