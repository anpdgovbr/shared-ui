// src/theme/components/IconButton.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente IconButton do MUI
 * Baseado nos padrões de botões de ícone do GovBR Design System
 */
export const MuiIconButtonOverrides: Components['MuiIconButton'] = {
  styleOverrides: {
    root: {
      // Formato oficial do gov, porem, como não há componente Icon, está desativado
      // borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      transition: 'all 0.2s ease-in-out',

      // Estado de foco acessível
      '&.Mui-focusVisible': {
        outline: '2px solid var(--focus, #1351B4)',
        outlineOffset: '2px',
      },

      // Hover effect
      '&:hover:not(:disabled)': {
        backgroundColor: 'var(--interactive-rgb, #5992ed)',
      },

      // Estado ativo
      '&:active': {
        backgroundColor: 'var(--interactive, #1351B4)',
        color: 'var(--color-lightest, #ffffff)',
      },

      // Estado desabilitado
      '&:disabled': {
        color: 'var(--gray-40, #999999)',
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },

    // Tamanhos
    sizeSmall: {
      width: 'var(--spacing-scale-4x, 2.857rem)', // 32px
      height: 'var(--spacing-scale-4x, 2.857rem)', // 32px
      padding: 'var(--spacing-scale-half, 0.5rem)', // 4px

      '& .MuiSvgIcon-root': {
        fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem (16px)
      },
    },

    sizeMedium: {
      width: 'var(--spacing-scale-5x, 5rem)', // 40px
      height: 'var(--spacing-scale-5x, 5rem)', // 40px
      padding: 'var(--spacing-scale-base, 1rem)', // 8px

      '& .MuiSvgIcon-root': {
        fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem (20px)
      },
    },

    sizeLarge: {
      width: 'var(--spacing-scale-6x, 6rem)', // 48px
      height: 'var(--spacing-scale-6x, 6rem)', // 48px
      padding: 'var(--spacing-scale-1xh, 0.75rem)', // 12px

      '& .MuiSvgIcon-root': {
        fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem (24px)
      },
    },

    // Cores específicas
    colorPrimary: {
      color: 'var(--interactive, #1351B4)',

      '&:hover': {
        backgroundColor: 'var(--interactive-light, #5992ed)',
      },

      '&:active': {
        backgroundColor: 'var(--interactive, #1351B4)',
        color: 'var(--color-lightest, #ffffff)',
      },
    },

    colorSecondary: {
      color: 'var(--yellow-vivid-30, #ddaa01)',

      '&:hover': {
        backgroundColor: 'var(--yellow-vivid-10, #ffe396)',
      },

      '&:active': {
        backgroundColor: 'var(--yellow-vivid-30, #ddaa01)',
        color: 'var(--color-dark, #000000)',
      },
    },

    colorError: {
      color: 'var(--feedback-error-vivid, #D04F4F)',

      '&:hover': {
        backgroundColor: 'var(--feedback-error-light, #F8A8A8)',
      },

      '&:active': {
        backgroundColor: 'var(--feedback-error-vivid, #D04F4F)',
        color: 'var(--color-lightest, #ffffff)',
      },
    },

    colorWarning: {
      color: 'var(--feedback-warning-vivid, #F29F05)',

      '&:hover': {
        backgroundColor: 'var(--feedback-warning-light, #FFD966)',
      },

      '&:active': {
        backgroundColor: 'var(--feedback-warning-vivid, #F29F05)',
        color: 'var(--color-dark, #000000)',
      },
    },

    colorSuccess: {
      color: 'var(--feedback-success-vivid, #168821)',

      '&:hover': {
        backgroundColor: 'var(--feedback-success-light, #7ED788)',
      },

      '&:active': {
        backgroundColor: 'var(--feedback-success-vivid, #168821)',
        color: 'var(--color-lightest, #ffffff)',
      },
    },

    colorInfo: {
      color: 'var(--blue-cool-vivid-50, #007FA3)',

      '&:hover': {
        backgroundColor: 'var(--blue-cool-vivid-10, #59b9de)',
      },

      '&:active': {
        backgroundColor: 'var(--blue-cool-vivid-50, #007FA3)',
        color: 'var(--color-lightest, #ffffff)',
      },
    },
  },
}
