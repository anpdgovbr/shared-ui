// src/theme/components/Accordion.ts
import type { Components } from '@mui/material/styles'

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

    expandIconWrapper: {
      // Ícone de expansão
      color: '#1351b4', // Interactive color
      transform: 'rotate(0deg)',
      transition: 'transform 0.2s ease',

      '&.Mui-expanded': {
        transform: 'rotate(180deg)',
      },
    },

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
    root: {
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
        color: '#1351b4',
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
          color: '#0c326f',
        },

        '&:focus': {
          outline: '2px solid #1351b4',
          outlineOffset: '2px',
          borderRadius: '2px',
        },
      },
    },
  },
}
