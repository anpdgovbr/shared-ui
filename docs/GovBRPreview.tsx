// docs\GovBRPreview.tsx
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'

export const GovbrPreview = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<any>(null)

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
