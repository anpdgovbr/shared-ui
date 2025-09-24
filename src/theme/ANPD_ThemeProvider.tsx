'use client'
// src/theme/anpdThemeProvider.tsx
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { anpdTheme } from './anpdTheme'
import { animationTokens, stateTokens, surfaceTokens, zIndexTokens } from './foundations'

const customTokens = {
  ...surfaceTokens,
  ...stateTokens,
  ...animationTokens,
  ...zIndexTokens,
}

type Mode = 'theme' | 'css'

interface ANPDThemeContextType {
  mode: Mode
  toggle: () => void
}

const ANPDThemeContext = createContext<ANPDThemeContextType>({
  mode: 'theme',
  toggle: () => {},
})

export const useANPDThemeMode = () => useContext(ANPDThemeContext)

export function ANPDThemeProvider({ children }: Readonly<PropsWithChildren>) {
  const [mode, setMode] = useState<Mode>('theme')

  const contextValue = useMemo(
    () => ({
      mode,
      toggle: () => setMode((prev) => (prev === 'theme' ? 'css' : 'theme')),
    }),
    [mode],
  )

  return (
    <ANPDThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={anpdTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': customTokens,
          }}
        />
        {children}
      </ThemeProvider>
    </ANPDThemeContext.Provider>
  )
}
