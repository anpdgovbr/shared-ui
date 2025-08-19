// src/theme/components/Divider.ts
import type { Components } from '@mui/material/styles'

export const MuiDividerOverrides: Components['MuiDivider'] = {
  styleOverrides: {
    root: {
      // Estilo base do divider Gov.br
      borderColor: '#e6e7e8', // Gray-20
      borderWidth: '1px',
      margin: '1rem 0',

      // Variante horizontal (padrão)
      '&.MuiDivider-horizontal': {
        borderBottomWidth: '1px',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
      },

      // Variante vertical
      '&.MuiDivider-vertical': {
        borderLeftWidth: '1px',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        height: 'auto',
        margin: '0 1rem',
      },

      // Variante com texto (middle)
      '&.MuiDivider-withChildren': {
        '&::before, &::after': {
          borderColor: '#e6e7e8',
          borderTopWidth: '1px',
        },
      },

      // Wrapper para texto no meio
      '& .MuiDivider-wrapper': {
        padding: '0 1rem',
        color: '#666666', // Gray-70
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    },

    // Variantes temáticas
    fullWidth: {
      width: '100%',
    },

    inset: {
      marginLeft: '4rem', // Alinhado com conteúdo indentado
    },

    middle: {
      marginLeft: '1rem',
      marginRight: '1rem',
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
