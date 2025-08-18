import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    // Evita instalações múltiplas de React em monorepo ou setups com links
    dedupe: ['react', 'react-dom'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@anpdgovbr/shared-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `shared-ui.${format}.js`,
    },
    rollupOptions: {
      // Tudo isso ficará do lado do app consumidor (não será empacotado)
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        '@govbr-ds/core',
        'classnames',
      ],

      output: {
        // `globals` só é usado para UMD/IIFE;
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
        // Opcional, ajuda bibliotecas com múltiplas entradas a manter assinaturas
        // preserveModules: false,
        // preserveEntrySignatures: 'exports-only',
      },
    },
    // Opcional: garante que CSS seja emitido como arquivo separado (default já faz split em lib mode)
    // cssCodeSplit: true,
    // sourcemap: true, // útil para debug em apps consumidores
  },
})
