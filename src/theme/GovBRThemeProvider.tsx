'use client'
// src/theme/GovBRThemeProvider.tsx
import 'dayjs/locale/pt-br'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { animationTokens, stateTokens, surfaceTokens, zIndexTokens } from './foundations'
import { govbrTheme } from './govbrTheme'

// Configurar dayjs para pt-BR globalmente
dayjs.locale('pt-br')

// Combinar todos os tokens CSS personalizados
const customTokens = {
  ...surfaceTokens,
  ...stateTokens,
  ...animationTokens,
  ...zIndexTokens,
}

type Mode = 'theme' | 'css'

interface GovBRThemeContextType {
  mode: Mode
  toggle: () => void
}

const GovBRThemeContext = createContext<GovBRThemeContextType>({
  mode: 'theme',
  toggle: () => {},
})

export const useGovBRThemeMode = () => useContext(GovBRThemeContext)

export function GovBRThemeProvider({ children }: Readonly<PropsWithChildren>) {
  const [mode, setMode] = useState<Mode>('theme')

  const contextValue = useMemo(
    () => ({
      mode,
      toggle: () => setMode((prev) => (prev === 'theme' ? 'css' : 'theme')),
    }),
    [mode],
  )

  return (
    <GovBRThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={govbrTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <CssBaseline />
          <GlobalStyles
            styles={{
              ':root': customTokens,
            }}
          />
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    </GovBRThemeContext.Provider>
  )
}
