import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormLabel para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ fontSize com token GovBR
 * - ✅ fontWeight medium para destaque
 * - ✅ color padrão e estados (focused, error, disabled)
 * - ✅ fontFamily do design system
 * - ✅ marginBottom para espaçamento
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ asterisco (*) para campos obrigatórios
 * - ❌ padding para alinhamento com inputs
 * - ❌ lineHeight adequado
 * - ❌ text-transform (uppercase/capitalize)
 * - ❌ letter-spacing para melhor legibilidade
 */
export const MuiFormLabelOverrides: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-medium, 500)', // 500 - destaque moderado
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginBottom: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (reduzido de 8px - mais compacto)
      lineHeight: 1.4, // Melhor legibilidade

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // lineHeight: 'var(--font-line-height-medium, 1.45)', // melhor legibilidade
      // letterSpacing: 'var(--font-letter-spacing-normal, 0)', // espaçamento das letras
      // padding: '0 var(--spacing-scale-2xh, 0.25rem)', // alinhamento com input

      // Asterisco para campos obrigatórios
      // '&.Mui-required::after': {
      //   content: '" *"',
      //   color: 'var(--feedback-error-vivid, #D04F4F)',
      // },

      // Estados - com melhorias
      '&.Mui-focused': {
        color: 'var(--interactive, #1351B4)',
        fontWeight: 'var(--font-weight-semi-bold, 600)', // Mais destaque no foco
      },
      '&.Mui-error': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
        fontWeight: 'var(--font-weight-semi-bold, 600)', // Destaque no erro
      },
      '&.Mui-disabled': {
        color: 'var(--gray-60, #6c757d)', // Cor mais moderna
        cursor: 'not-allowed', // Indicação visual
      },
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // filled: {
    //   transform: 'translate(12px, 20px) scale(1)',
    // },
    // outlined: {
    //   transform: 'translate(14px, 16px) scale(1)',
    // },
    // shrink: {
    //   transform: 'translate(0, -1.5px) scale(0.75)',
    //   transformOrigin: 'top left',
    // },
  },
}
