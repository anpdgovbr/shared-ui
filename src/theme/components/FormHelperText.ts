import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormHelperText para GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Estados visuais claros para feedback ao usuário
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ marginLeft zerado (alinhamento limpo)
 * - ✅ marginTop para espaçamento do input
 * - ✅ fontSize reduzido para texto auxiliar
 * - ✅ fontFamily do design system
 * - ✅ color padrão e estados (error, disabled)
 * - ✅ paddingBottom para variant filled
 * - ✅ lineHeight para melhor legibilidade
 * - ✅ maxWidth para quebra de linha adequada
 * - ✅ padding horizontal para alinhamento
 * - ✅ animações de entrada/saída
 */
export const MuiFormHelperTextOverrides: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
      marginTop: 'var(--spacing-scale-2xh, 0.25rem)', // 4px
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      color: 'var(--gray-70, #666666)',
      lineHeight: 'var(--font-line-height-medium, 1.45)', // ✅ legibilidade
      maxWidth: '100%', // ✅ quebra de linha
      wordBreak: 'break-word', // ✅ quebra palavras longas
      padding: '0 var(--spacing-scale-base, 1rem)', // ✅ alinhamento com input

      // ✅ Animação de entrada
      transition: 'opacity var(--duration-quick, 200ms) ease-in-out',
      opacity: 1,

      // ✅ Variante filled
      '&.Mui-filled': {
        marginLeft: 0,
        paddingBottom: 'var(--spacing-scale-2xh, 0.25rem)', // 4px
      },

      // ✅ Estado de erro
      '&.Mui-error': {
        fontSize: 'var(--font-size-scale-down-01, 0.833rem)',
        marginTop: 'var(--spacing-scale-2xh, 0.25rem)',
        marginLeft: 'var(--spacing-scale-half, 0.5rem)', // 8px - indentação para destaque
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        color: 'var(--feedback-error-vivid, #D04F4F)',
      },

      // ✅ Estado desabilitado
      '&.Mui-disabled': {
        color: 'var(--gray-60, #888888)',
      },
    },
  },
}
