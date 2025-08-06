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
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: '@mui/material',
              message:
                "🚫 TREE SHAKING QUEBRADO - Para componentes use: import Button from '@mui/material/Button' | Para types use: import type { SxProps } from '@mui/material/styles' | Para useMediaQuery use: import useMediaQuery from '@mui/material/useMediaQuery' | Exceções permitidas apenas: ThemeProvider, useTheme, createTheme, styled (de @mui/material/styles)",
            },
            {
              name: '@mui/icons-material',
              message:
                "🚫 TREE SHAKING QUEBRADO - Evite imports desestruturados de ícones. Use: import XIcon from '@mui/icons-material/X'",
            },
            {
              name: '@mui/icons-material/index',
              message:
                "🚫 TREE SHAKING QUEBRADO - Não use @mui/icons-material/index. Use o ícone diretamente: import CloseIcon from '@mui/icons-material/Close'",
            },
          ],
        },
      ],
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
