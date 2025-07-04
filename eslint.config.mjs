// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    ignores: ['dist/**', 'storybook-static/**'],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  tseslint.configs.recommended,

  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      semi: ['error', 'never'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['*.stories.*', '*.story.*'],
    plugins: { storybook },
    rules: storybook.configs.recommended.rules,
  },
])
