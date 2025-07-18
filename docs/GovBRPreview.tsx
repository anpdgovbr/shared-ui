// docs\GovBRPreview.tsx
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Theme } from '@emotion/react'

export const GovbrPreview = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const loadTheme = async () => {
      const isDev = import.meta.env.MODE === 'development'
      const mod = isDev ? await import('../src/theme/govbrTheme') : await import('@anpd/shared-ui')
      setTheme(mod.govbrTheme)
    }

    loadTheme()
  }, [])

  if (!theme) return null // evita render até o tema estar pronto

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
