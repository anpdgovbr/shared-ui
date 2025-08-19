import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI RadioGroup para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ gap entre opções de radio
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ padding interno do grupo
 * - ❌ border para agrupamento visual
 * - ❌ background para destaque do grupo
 * - ❌ diferentes orientações (row/column)
 * - ❌ espaçamento responsivo
 * - ❌ states disabled/error para todo o grupo
 * - ❌ título/legenda do grupo
 */
export const MuiRadioGroupOverrides: Components['MuiRadioGroup'] = {
  styleOverrides: {
    root: {
      gap: 'var(--spacing-scale-1xh, 0.75rem)', // 12px entre opções

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // padding: 'var(--spacing-scale-base, 1rem)', // padding interno
      // border: '1px solid var(--gray-30, #bbbbbb)', // borda para agrupamento
      // borderRadius: 'var(--surface-rounder-md, 8px)', // cantos arredondados
      // backgroundColor: 'var(--background-light, #f8f8f8)', // fundo sutil

      // Estado disabled para todo o grupo
      // '&.Mui-disabled': {
      //   opacity: 0.6,
      //   pointerEvents: 'none',
      // },

      // Estado error para todo o grupo
      // '&.Mui-error': {
      //   borderColor: 'var(--feedback-error-vivid, #D04F4F)',
      //   backgroundColor: 'var(--feedback-error-light, #ffeaea)',
      // },

      // Responsividade
      // '@media (max-width: 768px)': {
      //   gap: 'var(--spacing-scale-base, 1rem)', // mais espaço em mobile
      // },
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // row: {
    //   flexDirection: 'row',
    //   gap: 'var(--spacing-scale-2xh, 1.5rem)', // mais espaço horizontal
    //   flexWrap: 'wrap', // quebra linha se necessário
    // },
    // column: {
    //   flexDirection: 'column',
    //   gap: 'var(--spacing-scale-1xh, 0.75rem)', // já implementado em root
    // },
  },
}
