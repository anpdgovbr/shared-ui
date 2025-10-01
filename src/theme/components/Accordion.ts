// src/theme/components/Accordion.ts
import type { Components, Theme } from '@mui/material/styles'

export const MuiAccordionOverrides: Components['MuiAccordion'] = {
  styleOverrides: {
    root: {
      // Container principal com estilo Gov.br
      borderRadius: 0,
      boxShadow: 'none',
      border: '1px solid #e6e7e8',
      marginBottom: '1px',

      '&:before': {
        display: 'none', // Remove linha padrão do MUI
      },

      '&.Mui-expanded': {
        margin: '0 0 1px 0',
      },
    },
  },
}

export const MuiAccordionSummaryOverrides: Components['MuiAccordionSummary'] = {
  styleOverrides: {
    root: {
      // Header do accordion com estilo Gov.br
      backgroundColor: '#f8f8f8',
      borderBottom: '1px solid #e6e7e8',
      minHeight: '56px',
      padding: '0 1rem',

      '&:hover': {
        backgroundColor: '#f0f0f0',
      },

      '&.Mui-expanded': {
        backgroundColor: '#ffffff',
        minHeight: '56px',
      },

      '&.Mui-focusVisible': {
        backgroundColor: '#e8f4fd',
      },
    },

    expandIconWrapper: ({ theme }) => ({
      // Ícone de expansão
      color: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD
      transform: 'rotate(0deg)',
      transition: 'transform 0.2s ease',

      '&.Mui-expanded': {
        transform: 'rotate(180deg)',
      },
    }),

    content: {
      // Conteúdo do header
      margin: '12px 0',

      '&.Mui-expanded': {
        margin: '12px 0',
      },

      '& .MuiTypography-root': {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#333333',
        lineHeight: 1.5,
      },
    },
  },
}

export const MuiAccordionDetailsOverrides: Components['MuiAccordionDetails'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // Conteúdo expandido
      padding: '1rem',
      backgroundColor: '#ffffff',
      borderTop: 'none',

      '& .MuiTypography-root': {
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: '#333333',
      },

      // Links dentro do conteúdo
      '& a': {
        color: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
          color: (theme as Theme).palette.primary.dark, // Dinâmico: dark variant
        },

        '&:focus': {
          outline: `2px solid ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
          borderRadius: '2px',
        },
      },
    }),
  },
}
