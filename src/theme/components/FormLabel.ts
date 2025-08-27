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
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      fontWeight: 'var(--font-weight-medium, 500)', // 500 - destaque do label
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 8px

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // lineHeight: 'var(--font-line-height-medium, 1.45)', // melhor legibilidade
      // letterSpacing: 'var(--font-letter-spacing-normal, 0)', // espaçamento das letras
      // padding: '0 var(--spacing-scale-2xh, 0.25rem)', // alinhamento com input

      // Asterisco para campos obrigatórios
      // '&.Mui-required::after': {
      //   content: '" *"',
      //   color: 'var(--feedback-error-vivid, #D04F4F)',
      // },

      // Estados movidos para dentro de root para evitar warnings do MUI sobre especificidade
      '&.Mui-focused': {
        color: 'var(--interactive, #1351B4)',
        // FALTANDO: fontWeight: 'var(--font-weight-semi-bold, 600)', // mais destaque no foco
      },
      '&.Mui-error': {
        color: 'var(--feedback-error-vivid, #D04F4F)',
        // FALTANDO: fontWeight: 'var(--font-weight-semi-bold, 600)', // destaque no erro
      },
      '&.Mui-disabled': {
        color: 'var(--gray-60, #888888)',
        // FALTANDO: cursor: 'not-allowed', // indicação visual
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
