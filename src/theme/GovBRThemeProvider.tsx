// src/theme/GovBRThemeProvider.tsx
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { createContext, useContext, useMemo, useState, PropsWithChildren } from 'react'
import { govbrTheme } from './govbrTheme'

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

export function GovBRThemeProvider({ children }: PropsWithChildren) {
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
        {children}
      </ThemeProvider>
    </GovBRThemeContext.Provider>
  )
}
