import type { Components } from '@mui/material/styles'

/**
 * Overrides para MuiTooltip seguindo Gov.br Design System
 *
 * Aplica tokens CSS do Gov.br DS para consistência visual:
 * - Cores de fundo e texto
 * - Sombras e bordas
 * - Tipografia padronizada
 * - Espaçamentos e padding
 */
export const MuiTooltipOverrides: Components['MuiTooltip'] = {
  styleOverrides: {
    tooltip: {
      // Usar tokens CSS do Gov.br DS com fallbacks
      backgroundColor: 'var(--gray-80, #636363)',
      color: 'var(--background, #FFFFFF)',
      fontSize: 'var(--font-size-scale-down-01, 12px)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      fontWeight: 'var(--font-weight-regular, 400)',
      lineHeight: 'var(--line-height-medium, 1.5)',
      padding: 'var(--spacing-scale-2x, 8px) var(--spacing-scale-3x, 12px)',
      borderRadius: 'var(--surface-rounder-sm, 4px)',
      boxShadow: 'var(--shadow-md, 0px 4px 8px rgba(0, 0, 0, 0.1))',

      // Transições suaves
      transition: 'opacity var(--duration-base, 250ms) ease-out',

      // Limitar largura máxima
      maxWidth: 'var(--container-sm, 320px)',

      // Melhor quebra de linha
      wordWrap: 'break-word',
      textAlign: 'center',
    },

    arrow: {
      color: 'var(--gray-80, #636363)',
    },

    // Tooltip com variantes baseadas no Gov.br DS
    tooltipPlacementTop: {
      marginBottom: 'var(--spacing-scale-1x, 4px) !important',
    },

    tooltipPlacementBottom: {
      marginTop: 'var(--spacing-scale-1x, 4px) !important',
    },

    tooltipPlacementLeft: {
      marginRight: 'var(--spacing-scale-1x, 4px) !important',
    },

    tooltipPlacementRight: {
      marginLeft: 'var(--spacing-scale-1x, 4px) !important',
    },
  },

  // Variantes personalizadas se necessário
  variants: [
    {
      props: { color: 'primary' },
      style: {
        '& .MuiTooltip-tooltip': {
          backgroundColor: 'var(--interactive, #1351B4)',
          color: 'var(--background, #FFFFFF)',
        },
        '& .MuiTooltip-arrow': {
          color: 'var(--interactive, #1351B4)',
        },
      },
    },
    {
      props: { color: 'error' },
      style: {
        '& .MuiTooltip-tooltip': {
          backgroundColor: 'var(--danger, #D93026)',
          color: 'var(--background, #FFFFFF)',
        },
        '& .MuiTooltip-arrow': {
          color: 'var(--danger, #D93026)',
        },
      },
    },
  ],
}
