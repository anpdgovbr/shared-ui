// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  // Ajuste esta linha:
  stories: [
    '../src/**/*.stories.@(ts|tsx)', // Mantém suas histórias de componentes em src
    '../docs/**/*.mdx', // Adiciona seus arquivos MDX na pasta docs da raiz
  ],
  addons: [
    '@storybook/addon-a11y',
    // Adicione o addon-docs se ainda não estiver lá, ele é essencial para arquivos MDX
    '@storybook/addon-essentials', // Geralmente inclui docs por padrão, mas é bom verificar
    '@storybook/addon-docs', // Assegura que o addon docs esteja habilitado
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
    }
    return config
  },
}

export default config
