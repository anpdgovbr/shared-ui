/**
 * Ponto de entrada da biblioteca shared-ui.
 *
 * Exporta estilos base, componentes, helpers, temas e tipos públicos para consumo
 * por aplicações da ANPD. Este arquivo apenas re-exporta módulos internos e
 * garante que os estilos base do Gov.br sejam carregados.
 *
 * @packageDocumentation
 */

// Estilo base GovBR
import '@govbr-ds/core/dist/core.css'

/**
 * ===== COMPONENTES =====
 *
 * Re-exporta todos os componentes React da biblioteca.
 * Cada componente segue a arquitetura híbrida: modo padrão (MUI + govbrTheme)
 * e modo estrito (HTML puro com classes Gov.br) via prop `strictgovbr`.
 */
export * from './components'

/**
 * ===== HELPERS =====
 *
 * Funções utilitárias e mapeamentos expostos publicamente (ex.: ícones, mapeamentos
 * de cor). São pequenos helpers que auxiliam na integração com Gov.br DS e MUI.
 */
export * from './helpers/iconMap'
export * from './helpers/muiColorToGovbrClass'

/**
 * ===== TEMA =====
 *
 * Exporta temas e providers para integração do MUI com os tokens do Gov.br DS.
 * Inclui temas prontos e providers que facilitam o uso consistente do design system.
 */
export { anpdTheme } from './theme/anpdTheme'
export { ANPDThemeProvider } from './theme/ANPDThemeProvider'
export { govbrTheme } from './theme/govbrTheme'
export { GovBRThemeProvider } from './theme/GovBRThemeProvider'

/**
 * ===== TIPOS =====
 *
 * Tipos e interfaces públicas usadas pelos componentes e helpers desta biblioteca.
 * Facilita tipagem consistente nos projetos consumidores.
 */
export * from './types/CommonTypes'
export * from './types/GovBRTypes'
export * from './types/SharedUIComponentProps'
