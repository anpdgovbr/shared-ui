import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormControl para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ borderRadius nos elementos filho (MuiFormLabel, MuiInputBase)
 * - ✅ marginBottom para espaçamento entre grupos
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ padding interno do grupo
 * - ❌ estados disabled/error no container
 * - ❌ background para grupos destacados
 * - ❌ border para agrupamento visual
 * - ❌ legend styling para fieldsets
 */
export const MuiFormControlOverrides: Components['MuiFormControl'] = {
  styleOverrides: {
    root: {
      // Estilização de elementos filhos
      '& .MuiFormLabel-root': {
        borderRadius: 'var(--surface-rounder-md, 0.5rem)', // 8px
      },
      '& .MuiInputBase-root': {
        borderRadius: 'var(--surface-rounder-lg, 1rem)', // 16px
      },

      // Espaçamento entre grupos de campos
      marginBottom: 'var(--spacing-scale-2xh, 1.5rem)', // 24px

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // padding: 'var(--spacing-scale-base, 1rem)', // padding interno
      // '&.Mui-disabled': { opacity: 0.6 }, // estado disabled
      // '&.Mui-error': { borderColor: 'var(--feedback-error-vivid, #D04F4F)' }, // erro
      // backgroundColor: 'var(--background-light, #f8f8f8)', // fundo para destaque
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // marginNormal: {
    //   marginTop: 'var(--spacing-scale-base, 1rem)',
    //   marginBottom: 'var(--spacing-scale-base, 1rem)',
    // },
    // marginDense: {
    //   marginTop: 'var(--spacing-scale-half, 0.5rem)',
    //   marginBottom: 'var(--spacing-scale-half, 0.5rem)',
    // },
    // fullWidth: {
    //   width: '100%',
    // },
  },
}
