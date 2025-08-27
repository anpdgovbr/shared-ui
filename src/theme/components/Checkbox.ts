// src/theme/components/Checkbox.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Checkbox do MUI
 * Baseado nos padrões de formulário do GovBR Design System
 */
export const MuiCheckboxOverrides: Components['MuiCheckbox'] = {
  styleOverrides: {
    root: {
      color: 'var(--gray-40, #999999)', // Cor da borda não marcada
      padding: '2px 8px 2px 2px',

      '&:hover': {
        backgroundColor: 'var(--interactive-rgb, #5992ed)',
        borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      },

      '&.Mui-checked': {
        color: 'var(--interactive, #1351B4)', // Azul GovBR quando marcado

        '&:hover': {
          backgroundColor: 'var(--interactive-rgb, #5992ed)',
        },
      },

      '&.Mui-indeterminate': {
        color: 'var(--interactive, #1351B4)',
      },

      '&.Mui-disabled': {
        color: 'var(--gray-20, #cccccc)',
        cursor: 'not-allowed',

        '&.Mui-checked': {
          color: 'var(--gray-40, #999999)',
        },
      },

      // Estados de foco para acessibilidade
      '&.Mui-focusVisible': {
        outline: '2px solid var(--focus, #1351B4)',
        outlineOffset: '2px',
      },

      // Tamanhos
      '&.MuiCheckbox-sizeSmall': {
        padding: '1px 4px 1px 1px', // Padding otimizado para tamanho pequeno

        '& .MuiSvgIcon-root': {
          fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
        },
      },

      '&.MuiCheckbox-sizeMedium': {
        '& .MuiSvgIcon-root': {
          fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
        },
      },
    },
  },
}
