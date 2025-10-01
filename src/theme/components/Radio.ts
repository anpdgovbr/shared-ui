// src/theme/components/Radio.ts
import { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Radio do MUI
 * Baseado nos padrões de formulário do GovBR Design System
 *
 * ✨ Migrado para cores dinâmicas do tema (theme.palette.primary)
 */
export const MuiRadioOverrides: Components<Theme>['MuiRadio'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'var(--gray-40, #999999)', // Cor da borda não marcada
      padding: 'var(--spacing-scale-base, 1rem)', // 8px

      '&:hover': {
        backgroundColor: 'var(--interactive-rgb, rgba(89, 146, 237, 0.1))',
        borderRadius: '50%',
      },

      '&.Mui-checked': {
        color: (theme as Theme).palette.primary.main, // ✅ Cor dinâmica do tema

        '&:hover': {
          backgroundColor: 'var(--interactive-rgb, rgba(89, 146, 237, 0.1))',
        },
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
      '&.MuiRadio-sizeSmall': {
        padding: 'var(--spacing-scale-half, 0.5rem)', // 4px

        '& .MuiSvgIcon-root': {
          fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
        },
      },

      '&.MuiRadio-sizeMedium': {
        '& .MuiSvgIcon-root': {
          fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
        },
      },

      // Personalização do ícone
      '& .MuiSvgIcon-root': {
        borderRadius: '50%',
      },
    }),
  },
}
