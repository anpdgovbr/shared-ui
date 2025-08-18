// src/theme/components/InputBase.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente InputBase do MUI
 * Base para todos os inputs (TextField, Select, etc.)
 */
export const MuiInputBaseOverrides: Components['MuiInputBase'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--background, #ffffff)', // Fundo dos inputs
      borderColor: 'var(--gray-40, #999999)', // Borda padrão
      borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      borderStyle: 'solid',
      borderWidth: '1px',
      color: 'var(--color, #333333)', // Texto do input
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      height: 'var(--spacing-scale-5x, 5rem)', // 40px
      padding: '0 var(--spacing-scale-2x, 2rem)', // 0 16px

      '&:hover': {
        borderColor: 'var(--gray-60, #777777)',
        backgroundColor: 'var(--background-light, #f8f8f8)',
      },

      '&.Mui-focused': {
        borderColor: 'var(--interactive, #1351B4)', // Azul GovBR
        boxShadow: '0 0 0 2px var(--focus, #1351B4)', // Sombra de foco
        outline: 'none',
      },

      '&.Mui-error': {
        borderColor: 'var(--feedback-error-vivid, #D04F4F)',
        borderWidth: '2px',

        '&:focus, &.Mui-focused': {
          boxShadow: '0 0 0 2px var(--feedback-error-light, #F8A8A8)',
        },
      },

      '&.Mui-disabled': {
        backgroundColor: 'var(--gray-10, #eeeeee)',
        borderColor: 'var(--gray-20, #cccccc)',
        color: 'var(--gray-60, #777777)',
        cursor: 'not-allowed',
        opacity: 1, // Remove opacidade, controle via cores
      },
    },

    // Tamanhos
    sizeSmall: {
      height: 'var(--spacing-scale-4x, 2.857rem)', // 32px
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      padding: '0 var(--spacing-scale-1xh, 0.75rem)', // 0 12px
    },

    // Input multiline (textarea)
    multiline: {
      height: 'auto',
      minHeight: 'var(--spacing-scale-8x, 8rem)', // 64px
      padding: 'var(--spacing-scale-1xh, 0.75rem) var(--spacing-scale-2x, 2rem)', // 12px 16px
      alignItems: 'flex-start',

      '& textarea': {
        resize: 'vertical',
        minHeight: 'var(--spacing-scale-6x, 6rem)', // 48px
      },
    },

    // Input para adornments (ícones)
    adornedStart: {
      paddingLeft: 'var(--spacing-scale-half, 0.5rem)', // 4px
    },

    adornedEnd: {
      paddingRight: 'var(--spacing-scale-half, 0.5rem)', // 4px
    },
  },
}
