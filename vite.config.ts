import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@anpdgovbr/shared-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `shared-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
