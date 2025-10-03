// src/theme/components/Divider.ts
import type { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Divider do MUI
 * Baseado nos padrões de separadores do GovBR Design System
 *
 * @security Tokens CSS com fallbacks previnem valores inválidos
 * @resilience Cores e espaçamentos padronizados garantem consistência visual
 */
export const MuiDividerOverrides: Components['MuiDivider'] = {
  styleOverrides: {
    root: {
      // Estilo base do divider Gov.br
      borderColor: 'var(--gray-20, #e6e7e8)', // ✅ Convertido para token
      borderWidth: 'var(--border-width-sm, 1px)', // ✅ Convertido para token
      margin: 'var(--spacing-scale-base, 1rem) 0', // ✅ Convertido para token

      // Variante horizontal (padrão)
      '&.MuiDivider-horizontal': {
        borderBottomWidth: 'var(--border-width-sm, 1px)', // ✅ Convertido para token
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
      },

      // Variante vertical
      '&.MuiDivider-vertical': {
        borderLeftWidth: 'var(--border-width-sm, 1px)', // ✅ Convertido para token
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        height: 'auto',
        margin: '0 var(--spacing-scale-base, 1rem)', // ✅ Convertido para token
      },

      // Variante com texto (middle)
      '&.MuiDivider-withChildren': {
        '&::before, &::after': {
          borderColor: 'var(--gray-20, #e6e7e8)', // ✅ Convertido para token
          borderTopWidth: 'var(--border-width-sm, 1px)', // ✅ Convertido para token
        },
      },

      // Wrapper para texto no meio
      '& .MuiDivider-wrapper': {
        padding: '0 var(--spacing-scale-base, 1rem)', // ✅ Convertido para token
        color: 'var(--gray-70, #666666)', // ✅ Convertido para token
        fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // ✅ Convertido para token
        fontWeight: 'var(--font-weight-medium, 500)', // ✅ Convertido para token
      },
    },

    // Variantes temáticas
    fullWidth: {
      width: '100%',
    },

    inset: {
      marginLeft: 'var(--spacing-scale-4x, 4rem)', // ✅ Convertido para token - Alinhado com conteúdo indentado
    },

    middle: {
      marginLeft: 'var(--spacing-scale-base, 1rem)', // ✅ Convertido para token
      marginRight: 'var(--spacing-scale-base, 1rem)', // ✅ Convertido para token
    },
  },

  variants: [
    // Variante para fundos escuros (inverted)
    {
      props: { color: 'inherit' },
      style: {
        borderColor: 'currentColor',
        opacity: 0.3,
      },
    },
  ],
}
