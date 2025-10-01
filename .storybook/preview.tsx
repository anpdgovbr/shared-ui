import '@govbr-ds/core/dist/core-tokens.min.css'
import '@govbr-ds/core/dist/core.min.css'
import 'dayjs/locale/pt-br'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import type { Preview, StoryContext } from '@storybook/react'
import dayjs from 'dayjs'
import { useEffect } from 'react'

import { anpdTheme } from '../src/theme/anpdTheme.js'
import { govbrTheme } from '../src/theme/govbrTheme.js'

// Configurar dayjs para pt-BR globalmente
dayjs.locale('pt-br')

// Componente wrapper que força re-render quando o tema muda
function ThemeWrapper({
  children,
  selectedTheme,
}: {
  children: React.ReactNode
  selectedTheme: string
}) {
  const theme = selectedTheme === 'anpd' ? anpdTheme : govbrTheme

  // Force re-render on theme change
  useEffect(() => {
    console.log('🔄 Theme changed to:', selectedTheme, '| Primary:', theme.palette.primary.main)
  }, [selectedTheme, theme])

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <CssBaseline />
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  )
}

// Decorator para alternar entre os temas ANPD e GovBR
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withThemeSelector = (Story: any, context: StoryContext) => {
  const selectedTheme = (context.globals.themeVariant as string) || 'govbr'

  // Log para debug
  console.log('🎨 Theme Switcher Decorator:', {
    selectedTheme,
    storyId: context.id,
    storyName: context.name,
  })

  return (
    <ThemeWrapper selectedTheme={selectedTheme}>
      <Story />
    </ThemeWrapper>
  )
}

const preview: Preview = {
  decorators: [withThemeSelector],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // Importante: preservar o estado ao trocar globals
    layout: 'padded',
  },
  initialGlobals: {
    themeVariant: 'govbr',
  },
  globalTypes: {
    themeVariant: {
      name: 'Theme Variant',
      description: 'Alterna entre govbrTheme (azul) e anpdTheme (verde)',
      defaultValue: 'govbr',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'govbr', title: 'GovBR Theme (Azul #1351B4)', icon: 'circle' },
          { value: 'anpd', title: 'ANPD Theme (Verde #307244)', icon: 'circlehollow' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },
}

export default preview
