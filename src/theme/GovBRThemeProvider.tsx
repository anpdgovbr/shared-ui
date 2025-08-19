'use client'
// src/theme/GovBRThemeProvider.tsx
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { animationTokens, stateTokens, surfaceTokens, zIndexTokens } from './foundations'
import { govbrTheme } from './govbrTheme'

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
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': customTokens,
          }}
        />
        {children}
      </ThemeProvider>
    </GovBRThemeContext.Provider>
  )
}
