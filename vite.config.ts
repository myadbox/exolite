import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: `/?page=001`,
  },
  resolve: {
    extensions: [`.mjs`, `.js`, `.ts`, `.jsx`, `.tsx`, `.json`],
    alias: {
      TEMPLATE: `./src`,
    },
  },
  optimizeDeps: {
    exclude: [`@myadbox/exoplanet-toolkit`],
  },
})
