// src\index.ts
// Estilo base GovBR
import '@govbr-ds/core/dist/core.css'

// ===== COMPONENTES =====
export * from './components'

// ===== HELPERS =====
export * from './helpers/muiColorToGovbrClass'
export * from './helpers/iconMap'

// ===== TEMA =====
export { govbrTheme } from './theme/govbrTheme'
export { GovBRThemeProvider } from './theme/GovBRThemeProvider'

// ===== TIPOS =====
export * from './types/GovBRTypes'
export * from './types/SharedUIComponentProps'
export * from './types/CommonTypes'
