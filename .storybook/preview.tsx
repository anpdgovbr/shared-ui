import type { Preview } from '@storybook/react'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

import { GovBRThemeProvider, useGovBRThemeMode } from '../src/theme/GovBRThemeProvider.js'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect } from 'react'

// Decorator para alternar entre os modos de tema
const withGovBRTheme = (Story, context) => {
  const mode = context.globals.govbrThemeMode

  function ThemeWrapper({ children }) {
    const { mode: currentMode, toggle } = useGovBRThemeMode()

    useEffect(() => {
      if (mode !== currentMode) {
        toggle()
      }
    }, [mode, currentMode])

    return <>{children}</>
  }

  return (
    <GovBRThemeProvider>
      <ThemeWrapper>
        <CssBaseline />
        <Story />
      </ThemeWrapper>
    </GovBRThemeProvider>
  )
}

const preview: Preview = {
  decorators: [withGovBRTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    globals: {
      govbrThemeMode: 'theme', // Define o modo padrão como 'theme'
    },
  },
  globalTypes: {
    govbrThemeMode: {
      name: 'GovBR Theme Mode',
      description: 'Alterna entre govbrTheme interno e CSS var(--...) do govbr-ds',
      defaultValue: 'theme',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'theme', title: 'MUI Theme (govbrTheme)' },
          { value: 'css', title: 'GovBR CSS (var(--...))' },
        ],
        showName: true,
      },
    },
  },
}

export default preview
