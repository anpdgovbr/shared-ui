import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI Menu para GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Valores responsivos para prevenir overflow
 */
export const MuiMenuOverrides: Components['MuiMenu'] = {
  styleOverrides: {
    paper: {
      backgroundColor: 'var(--background, #ffffff)',
      borderRadius: 'var(--surface-rounder-md, 8px)',
      boxShadow: 'var(--shadow-level-2, 0 4px 8px rgba(0,0,0,0.1))',
      border: '1px solid var(--gray-20, #e0e0e0)',
      minWidth: '200px',
      maxWidth: '300px',
      padding: 'var(--spacing-scale-half, 0.5rem) 0',

      '@media (max-width: 600px)': {
        minWidth: '150px',
        maxWidth: '250px',
      },
    },

    list: {
      padding: 0,
    },
  },
}
