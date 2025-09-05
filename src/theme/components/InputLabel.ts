// src/theme/components/InputLabel.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente InputLabel do MUI
 * Labels para inputs e formulários
 */
export const MuiInputLabelOverrides: Components['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      color: 'var(--color, #333333)', // Cor padrão do texto
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 4px
      position: 'static', // Remove posicionamento absoluto para outlined
      transform: 'none',

      // Estado focado
      '&.Mui-focused': {
        color: 'var(--interactive, #1351B4)',
      },

      // Estado de erro
      '&.Mui-error': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
      },

      // Estado desabilitado
      '&.Mui-disabled': {
        color: 'var(--gray-60, #777777)',
      },

      // Asterisco para campos obrigatórios
      '&.Mui-required .MuiInputLabel-asterisk': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
      },
    },

    // Label outlined (flutuante)
    outlined: {
      position: 'absolute',
      transform: 'translate(14px, 12px) scale(1)',
      transformOrigin: 'top left',

      '&.MuiInputLabel-shrink': {
        transform: 'translate(14px, -6px) scale(0.75)',
        backgroundColor: 'var(--background, #ffffff)',
        padding: '0 var(--spacing-scale-half, 0.5rem)', // 0 4px
      },
    },

    // Label filled
    filled: {
      transform: 'translate(12px, 20px) scale(1)',

      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
      },
    },

    // Tamanhos
    sizeSmall: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem

      '&.MuiInputLabel-outlined': {
        transform: 'translate(14px, 9px) scale(1)',

        '&.MuiInputLabel-shrink': {
          transform: 'translate(14px, -6px) scale(0.75)',
        },
      },
    },
  },
}
