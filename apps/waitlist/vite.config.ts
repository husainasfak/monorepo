/* eslint-env node */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@workspace/ui': path.resolve(dir, '../../packages/ui/src'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
