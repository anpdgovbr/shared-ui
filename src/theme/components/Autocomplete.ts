// src/theme/components/Autocomplete.ts
import type { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Autocomplete do MUI
 * Alinha o espaçamento com o padrão utilizado nas aplicações Next
 */
export const MuiAutocompleteOverrides: Components['MuiAutocomplete'] = {
  styleOverrides: {
    root: {
      // Reduz o espaçamento entre campos dentro do autocomplete
      '& .MuiFormControl-root': {
        marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 8px
      },
    },
    listbox: {
      padding: '0.25rem 0', // 4px 0
    },
    option: {
      padding: '6px 12px',
      minHeight: 32,
    },
  },
}
