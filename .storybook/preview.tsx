import type { Preview } from '@storybook/react'
import '@govbr-ds/core/dist/core.min.css'
import '@govbr-ds/core/dist/core-tokens.min.css'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
