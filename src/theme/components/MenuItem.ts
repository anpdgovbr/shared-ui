import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI MenuItem para adequação visual ao GovBR Design System.
 *
 * Este objeto fornece as customizações de `styleOverrides` para o slot `root`
 * do componente `MuiMenuItem`, aplicando tokens CSS do GovBR e ajustes de
 * acessibilidade (hover, focus, focusVisible, disabled) e responsividade.
 *
 * Principais responsabilidades:
 * - Ajustar padding, tipografia e min-height para toque em dispositivos móveis.
 * - Aplicar estados visuais (hover, focus, focusVisible) usando tokens CSS.
 * - Estilizar ícones internos (`.MuiSvgIcon-root`) para manter espaçamento e cor.
 *
 * Notas de implementação:
 * - Use variáveis CSS (`var(--token-name)`) para garantir sincronização com
 *   `@govbr-ds/core` tokens.
 * - Alguns aspectos ainda não implementados neste arquivo: estados
 *   `selected/active`, variações de densidade (compact, comfortable) e
 *   suporte avançado a ícones com espaçamentos diferenciados.
 *
 * Exemplo de uso:
 * import { MuiMenuItemOverrides } from './MenuItem'
 * // Incluir em govbrTheme.ts -> components.MuiMenuItem = MuiMenuItemOverrides
 *
 * @see src/theme/govbrTheme.ts
 */
export const MuiMenuItemOverrides: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      padding: 'var(--spacing-scale-2x, 0.5rem) var(--spacing-scale-3x, 0.75rem)',
      fontSize: 'var(--font-size-scale-base, 1rem)',
      lineHeight: 'var(--line-height-medium, 1.5)',
      minHeight: '48px', // Acessibilidade para toque
      color: 'var(--color, #333333)',

      '&:hover': {
        backgroundColor: 'var(--hover, rgba(19, 81, 180, 0.04))',
        color: 'var(--interactive, #1351B4)',
      },

      '&:focus': {
        backgroundColor: 'var(--hover, rgba(19, 81, 180, 0.04))',
        outline: 'none',
      },

      '&.Mui-focusVisible': {
        backgroundColor: 'var(--hover, rgba(19, 81, 180, 0.04))',
        outline: '2px solid var(--focus-color, #FFD200)',
        outlineOffset: '-2px',
      },

      '&.Mui-disabled': {
        color: 'var(--gray-40, #888888)',
        opacity: 0.6,
      },

      // Ajustes para ícones quando presentes
      '& .MuiSvgIcon-root': {
        marginRight: 'var(--spacing-scale-2x, 0.5rem)',
        fontSize: 'var(--icon-size-2x, 1.25rem)',
        color: 'currentColor',
      },

      // Responsive adjustments
      '@media (max-width: 600px)': {
        padding: 'var(--spacing-scale-2x, 0.5rem) var(--spacing-scale-2x, 0.5rem)',
        minHeight: '44px',
      },
    },
  },
}
