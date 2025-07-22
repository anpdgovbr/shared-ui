// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  // Ajuste esta linha:
  stories: [
    '../src/**/*.stories.@(ts|tsx)', // Histórias de componentes
    '../docs/**/*.stories.@(ts|tsx)', // Documentação como stories
    // '../docs/**/*.mdx', // MDX temporariamente desabilitado
  ],
  addons: [
    // Testes de acessibilidade
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Opcional: Configuração docs para autodocs
  docs: {
    defaultName: 'Documentação',
    docsMode: true, // Habilita o modo docs
  },
  viteFinal(config) {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': path.resolve(__dirname, '../src/components'),
      '@stories': path.resolve(__dirname, '../src/stories'),
      '@theme': path.resolve(__dirname, '../src/theme'),
      '@docs': path.resolve(__dirname, '../docs'),
    }
    return config
  },
}

export default config
