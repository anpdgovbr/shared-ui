import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormLabel para GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Estados visuais adequados para acessibilidade
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ fontSize com token GovBR
 * - ✅ fontWeight medium para destaque
 * - ✅ color padrão e estados (focused, error, disabled)
 * - ✅ fontFamily do design system
 * - ✅ marginBottom para espaçamento
 * - ✅ lineHeight para melhor legibilidade
 * - ✅ letterSpacing para melhor legibilidade
 * - ✅ padding para alinhamento com inputs
 * - ✅ asterisco (*) para campos obrigatórios
 */
export const MuiFormLabelOverrides: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      fontSize: 'var(--font-size-scale-base, 1rem)',
      fontWeight: 'var(--font-weight-medium, 500)',
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 8px
      lineHeight: 'var(--font-line-height-medium, 1.45)', // ✅ melhor legibilidade
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // ✅ espaçamento das letras
      padding: '0 var(--spacing-scale-quarter, 0.25rem)', // ✅ alinhamento com input

      // ✅ Asterisco para campos obrigatórios
      '&.Mui-required::after': {
        content: '" *"',
        color: 'var(--feedback-error-vivid, #D04F4F)',
        marginLeft: 'var(--spacing-scale-quarter, 0.25rem)',
      },

      // ✅ Estados visuais para acessibilidade
      '&.Mui-focused': {
        color: 'var(--interactive, #1351B4)',
        fontWeight: 'var(--font-weight-semi-bold, 600)', // ✅ mais destaque no foco
      },
      '&.Mui-error': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
        fontWeight: 'var(--font-weight-semi-bold, 600)', // ✅ destaque no erro
      },
      '&.Mui-disabled': {
        color: 'var(--gray-60, #888888)',
        cursor: 'not-allowed', // ✅ indicação visual
      },
    },
  },
}
