// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// opcional: só gera o relatório se build local (não em CI)
const isCi = process.env.CI === 'true'
const basePath = '/shared-ui/'

const aliases = {
  '@components': path.resolve(__dirname, '../src/components'),
  '@stories': path.resolve(__dirname, '../src/stories'),
  '@theme': path.resolve(__dirname, '../src/theme'),
  '@docs': path.resolve(__dirname, '../docs'),
}

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(ts|tsx)',
    '../docs/**/*.stories.@(ts|tsx)',
    // '../docs/**/*.mdx',
  ],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    defaultName: 'Documentação',
    docsMode: false,
  },
  async viteFinal(cfg, { configType }) {
    // Publicação sob subdiretório
    cfg.base = basePath

    // Aliases
    cfg.resolve = cfg.resolve || {}
    cfg.resolve.alias = { ...(cfg.resolve.alias || {}), ...aliases }

    // Pré-empacotar deps pesadas para dev mais rápido
    cfg.optimizeDeps = {
      ...(cfg.optimizeDeps ?? {}),
      include: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
        '@mui/material',
        '@mui/system',
        '@mui/utils',
        'dayjs',
      ],
    }

    // Ajustes de build
    cfg.build = {
      ...(cfg.build ?? {}),
      sourcemap: false,
      chunkSizeWarningLimit: 1500, // reduz ruído do warning
      rollupOptions: {
        ...(cfg.build?.rollupOptions ?? {}),
        output: {
          ...(cfg.build?.rollupOptions?.output ?? {}),
          // Split explícito para reduzir um único mega-chunk
          manualChunks: {
            react: ['react', 'react-dom'],
            emotion: ['@emotion/react', '@emotion/styled'],
            mui: ['@mui/material', '@mui/system', '@mui/utils'],
            dayjs: ['dayjs'],
          },
        },
      },
    }

    // Relatório de bundle (opcional) — abra storybook-stats.html
    if (configType === 'PRODUCTION' && !isCi) {
      const { visualizer } = await import('rollup-plugin-visualizer')
      cfg.plugins = [
        ...(cfg.plugins || []),
        visualizer({
          filename: 'storybook-stats.html',
          gzipSize: true,
          brotliSize: true,
        }),
      ]
    }

    return cfg
  },
}

export default config
