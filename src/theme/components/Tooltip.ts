// src/theme/components/Tooltip.ts
import type { Theme } from '@mui/material/styles'
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Tooltip do MUI
 * Baseado nos padrões de tooltip do GovBR Design System
 */
export const MuiTooltipOverrides: Components['MuiTooltip'] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor:
        (theme as Theme).palette.primary.dark || 'var(--blue-cool-vivid-60, #074b69)',
      borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      boxShadow: 'var(--shadow-level-4, 0px 12px 24px rgba(0, 0, 0, 0.18))', // Sombra média
      color: (theme as Theme).palette.primary.contrastText || 'var(--color-lightest, #ffffff)',
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      maxWidth: '240px',
      padding: 'var(--spacing-scale-2x, 2rem)', // 16px
      lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
    }),

    // Seta do tooltip
    arrow: ({ theme }) => ({
      color: (theme as Theme).palette.info.dark || 'var(--blue-cool-vivid-60, #074b69)', // Mesma cor do fundo
    }),

    // Posicionamentos
    tooltipPlacementTop: {
      margin: 'var(--spacing-scale-base, 1rem) 0', // 8px 0
    },

    tooltipPlacementBottom: {
      margin: 'var(--spacing-scale-base, 1rem) 0', // 8px 0
    },

    tooltipPlacementLeft: {
      margin: '0 var(--spacing-scale-base, 1rem)', // 0 8px
    },

    tooltipPlacementRight: {
      margin: '0 var(--spacing-scale-base, 1rem)', // 0 8px
    },
  },

  variants: [
    // Tooltip de erro
    {
      props: { color: 'error' },
      style: ({ theme }) => ({
        '& .MuiTooltip-tooltip': {
          backgroundColor:
            (theme as Theme).palette.error.main || 'var(--feedback-error-vivid, #D04F4F)',
          color:
            (theme as Theme).palette.error.contrastText || (theme as Theme).palette.text.primary,
        },
        '& .MuiTooltip-arrow': {
          color: (theme as Theme).palette.error.main || 'var(--feedback-error-vivid, #D04F4F)',
        },
      }),
    },

    // Tooltip de sucesso
    {
      props: { color: 'success' },
      style: ({ theme }) => ({
        '& .MuiTooltip-tooltip': {
          backgroundColor:
            (theme as Theme).palette.success.main || 'var(--feedback-success-vivid, #168821)',
          color:
            (theme as Theme).palette.success.contrastText || (theme as Theme).palette.text.primary,
        },
        '& .MuiTooltip-arrow': {
          color: (theme as Theme).palette.success.main || 'var(--feedback-success-vivid, #168821)',
        },
      }),
    },

    // Tooltip de aviso
    {
      props: { color: 'warning' },
      style: ({ theme }) => ({
        '& .MuiTooltip-tooltip': {
          backgroundColor:
            (theme as Theme).palette.warning.main || 'var(--feedback-warning-vivid, #F29F05)',
          color: (theme as Theme).palette.warning.contrastText || 'var(--color-dark, #000000)', // Texto escuro em fundo amarelo
        },
        '& .MuiTooltip-arrow': {
          color: (theme as Theme).palette.warning.main || 'var(--feedback-warning-vivid, #F29F05)',
        },
      }),
    },

    // Tooltip de informação
    {
      props: { color: 'info' },
      style: ({ theme }) => ({
        '& .MuiTooltip-tooltip': {
          backgroundColor:
            (theme as Theme).palette.info.main || 'var(--blue-cool-vivid-50, #007FA3)',
          color:
            (theme as Theme).palette.info.contrastText || (theme as Theme).palette.text.primary,
        },
        '& .MuiTooltip-arrow': {
          color: (theme as Theme).palette.info.main || 'var(--blue-cool-vivid-50, #007FA3)',
        },
      }),
    },
  ],
}
