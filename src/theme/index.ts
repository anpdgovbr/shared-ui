// src/theme/index.ts
// Exportações específicas do tema para facilitar importação granular

export { govbrTheme } from './govbrTheme'
export { GovBRThemeProvider } from './GovBRThemeProvider'
export type { useGovBRThemeMode } from './GovBRThemeProvider'

// Re-exportando tipos do MUI que podem ser úteis
export type { Theme, ThemeOptions } from '@mui/material/styles'
