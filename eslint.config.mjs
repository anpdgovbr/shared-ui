// .eslintrc.mjs ou eslint.config.mjs
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import parser from '@typescript-eslint/parser'
import tseslint from '@typescript-eslint/eslint-plugin'
import pluginReact from 'eslint-plugin-react'
import storybook from 'eslint-plugin-storybook'

export default defineConfig([
  {
    ignores: ['dist/**', 'storybook-static/**', 'node_modules/**', 'types/**', '.husky/**'],
  },

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Next.js does not require React in scope
      'react/prop-types': 'off', // Use TypeScript for type checking
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
