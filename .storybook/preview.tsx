import type { Preview } from '@storybook/react'
import '@govbr-ds/core/dist/core.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme() // 🔥 MUI theme default

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ]
}

export default preview
