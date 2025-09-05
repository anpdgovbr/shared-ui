// src/theme/components/Breadcrumbs.ts
import type { Components } from '@mui/material/styles'

export const MuiBreadcrumbsOverrides: Components['MuiBreadcrumbs'] = {
  styleOverrides: {
    root: {
      // Container principal com alinhamento consistente
      '& .MuiBreadcrumbs-ol': {
        alignItems: 'baseline', // Alinha pela linha de base do texto
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },

    li: {
      // Alinhamento e espaçamento consistente para todos os itens
      display: 'inline-flex',
      alignItems: 'baseline',
      lineHeight: 1.5,
      fontSize: '1rem',

      // Links intermediários - estilo gov.br
      '& a': {
        textDecoration: 'none',
        color: '#1351b4', // Interactive color
        fontSize: 'inherit',
        fontWeight: 400,
        lineHeight: 'inherit',
        display: 'inline',
        verticalAlign: 'baseline',

        '&:hover': {
          textDecoration: 'underline',
          color: '#0c326f', // Interactive dark
        },

        '&:focus': {
          outline: '2px solid #1351b4',
          outlineOffset: '2px',
          borderRadius: '2px',
        },

        '&:visited': {
          color: '#1351b4', // Manter cor consistente
        },
      },

      // Página atual (última) - usar classe em vez de :last-child
      '&.breadcrumb-current': {
        fontWeight: 600, // Destaque para página atual

        '& .MuiTypography-root': {
          color: '#333333', // Text primary
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
          display: 'inline',
          verticalAlign: 'baseline',
        },
      },
    },

    separator: {
      // Separador com alinhamento otimizado
      color: '#666666', // Gray 70
      fontSize: '1rem',
      fontWeight: 400,
      margin: '0 0.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      lineHeight: 1,
      verticalAlign: 'baseline',

      // Garante que o separador não afete o alinhamento
      '&::before, &::after': {
        content: 'none',
      },
    },
  },
}
