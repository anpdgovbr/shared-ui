// src/theme/components/Checkbox.ts
import { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Checkbox do MUI
 * Baseado nos padrões de formulário do GovBR Design System
 *
 * ✨ Migrado para cores dinâmicas do tema (theme.palette.primary)
 */
export const MuiCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'var(--gray-40, #999999)', // Cor da borda não marcada
      padding: '2px 8px 2px 2px',

      '&:hover': {
        backgroundColor: 'var(--interactive-rgb, rgba(89, 146, 237, 0.1))',
        borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      },

      '&.Mui-checked': {
        color: (theme as Theme).palette.primary.main, // ✅ Cor dinâmica do tema

        '&:hover': {
          backgroundColor: 'var(--interactive-rgb, rgba(89, 146, 237, 0.1))',
        },
      },

      '&.Mui-indeterminate': {
        color: (theme as Theme).palette.primary.main, // ✅ Cor dinâmica do tema
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
        outline: `2px solid ${(theme as Theme).palette.primary.main}`, // ✅ Cor dinâmica do tema
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
    }),
  },
}
