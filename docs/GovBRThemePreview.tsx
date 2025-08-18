// docs\GovBRThemePreview.tsx
import { Theme } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { ReactNode, useEffect, useState } from 'react'

export const GovBRThemePreview = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const mod = await import('../src/theme/govbrTheme')
        setTheme(mod.govbrTheme)
      } catch (error) {
        console.error('Erro ao carregar o tema:', error)
      }
    }

    loadTheme()
  }, [])

  if (!theme) return null // evita render até o tema estar pronto

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
