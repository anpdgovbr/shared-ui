import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI Menu para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ background color padrão usando token GovBR
 * - ✅ border radius usando tokens de superfície
 * - ✅ box-shadow para elevação usando tokens GovBR
 * - ✅ padding interno apropriado
 * - ✅ max-width e min-width responsivos
 *
 * PROPRIEDADES FALTANDO:
 * - ❌ animações de entrada/saída customizadas
 * - ❌ diferentes variações de elevation
 * - ❌ temas dark mode específicos
 */

/**
 * MuiMenuOverrides
 *
 * Overrides de estilo (styleOverrides) para o componente MUI `Menu`, adaptados
 * para o GovBR Design System via tokens CSS.
 *
 * Propósito:
 * - Mapear tokens CSS do Gov.br DS para os slots visuais do componente MUI Menu
 *   (ex.: paper, list), garantindo consistência visual entre componentes MUI e
 *   o Gov.br DS sem alterar comportamento do componente.
 *
 * Uso:
 * - Importar e incluir em `govbrTheme.ts`:
 *   components: {
 *     ...,
 *     MuiMenu: MuiMenuOverrides
 *   }
 *
 * Principais tokens usados (exemplos):
 * - --background
 * - --surface-rounder-md
 * - --shadow-level-2
 * - --border-color
 * - --spacing-scale-2x
 *
 * Boas práticas:
 * - Sempre prefira `var(--token-name)` para manter sincronização com
 *   `@govbr-ds/core`.
 * - Forneça fallbacks (como já presente) para desenvolvimento local quando
 *   os tokens não estiverem carregados.
 *
 * Limitações conhecidas:
 * - Animações de entrada/saída não implementadas.
 * - Variações de elevation e dark mode não totalmente cobertas aqui.
 *
 * Exemplo mínimo de integração:
 * import { createTheme } from '@mui/material/styles'
 * import { MuiMenuOverrides } from './components/Menu'
 *
 * const theme = createTheme({
 *   components: {
 *     MuiMenu: MuiMenuOverrides,
 *   }
 * })
 *
 * @see src/theme/govbrTheme.ts
 */
export const MuiMenuOverrides: Components['MuiMenu'] = {
  styleOverrides: {
    paper: {
      backgroundColor: 'var(--background, #ffffff)',
      borderRadius: 'var(--surface-rounder-md, 8px)',
      boxShadow: 'var(--shadow-level-2, 0 4px 8px rgba(0,0,0,0.1))',
      border: '1px solid var(--border-color, #e0e0e0)',
      minWidth: '200px',
      maxWidth: '300px',
      padding: 'var(--spacing-scale-2x, 0.5rem) 0',

      // Responsive adjustments
      '@media (max-width: 600px)': {
        minWidth: '150px',
        maxWidth: '250px',
      },
    },
    list: {
      padding: 0,
    },
  },
}
