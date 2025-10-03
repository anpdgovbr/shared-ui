import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormControl para GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Valores responsivos para consistência visual
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ borderRadius nos elementos filho (MuiFormLabel, MuiInputBase)
 * - ✅ marginBottom para espaçamento entre grupos
 * - ✅ estados disabled/error para todo o grupo
 * - ✅ background para destaque do grupo
 */
export const MuiFormControlOverrides: Components['MuiFormControl'] = {
  styleOverrides: {
    root: {
      // ✅ Estilização de elementos filhos com tokens CSS
      '& .MuiFormLabel-root': {
        borderRadius: 'var(--surface-rounder-md, 0.5rem)', // 8px
      },
      '& .MuiInputBase-root': {
        borderRadius: 'var(--surface-rounder-lg, 1rem)', // 16px
      },

      // ✅ Espaçamento entre grupos de campos
      marginBottom: 'var(--spacing-scale-2xh, 1.5rem)', // 24px

      // ✅ Estado disabled para todo o grupo
      '&.Mui-disabled': {
        opacity: 0.6,
        pointerEvents: 'none',
      },

      // ✅ Estado error para todo o grupo
      '&.Mui-error': {
        '& .MuiInputBase-root': {
          borderColor: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },

      // ✅ Background para destaque do grupo (opcional)
      backgroundColor: 'var(--background-light, transparent)',
    },
  },
}
