// src\index.ts
// Estilo base GovBR
import '@govbr-ds/core/dist/core.css'

// ===== COMPONENTES =====
export * from './components'

// ===== HELPERS =====
export * from './helpers/iconMap'
export * from './helpers/muiColorToGovbrClass'

// ===== TEMA =====
export { anpdTheme } from './theme/anpdTheme'
export { ANPDThemeProvider } from './theme/ANPDThemeProvider'
export { govbrTheme } from './theme/govbrTheme'
export { GovBRThemeProvider } from './theme/GovBRThemeProvider'

// ===== TIPOS =====
export * from './types/CommonTypes'
export * from './types/GovBRTypes'
export * from './types/SharedUIComponentProps'
