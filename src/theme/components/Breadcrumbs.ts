// src/theme/components/Breadcrumbs.ts
import type { Components, Theme } from '@mui/material/styles'

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

    li: ({ theme }) => ({
      // Alinhamento e espaçamento consistente para todos os itens
      display: 'inline-flex',
      alignItems: 'baseline',
      lineHeight: 1.5,
      fontSize: '1rem',

      // Links intermediários - estilo gov.br
      '& a': {
        textDecoration: 'none',
        color: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD
        fontSize: 'inherit',
        fontWeight: 400,
        lineHeight: 'inherit',
        display: 'inline',
        verticalAlign: 'baseline',

        '&:hover': {
          textDecoration: 'underline',
          color: (theme as Theme).palette.primary.dark, // Dinâmico: dark variant
          backgroundColor: 'transparent',
        },

        '&:focus': {
          outline: `2px solid ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
          borderRadius: '2px',
        },

        '&:visited': {
          color: (theme as Theme).palette.primary.main, // Manter cor consistente
        },
      },

      // Último item (página atual) - destaque visual
      '&:last-child': {
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
    }),

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
