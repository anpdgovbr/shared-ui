import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormHelperText para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ marginLeft zerado (alinhamento limpo)
 * - ✅ marginTop para espaçamento do input
 * - ✅ fontSize reduzido para texto auxiliar
 * - ✅ fontFamily do design system
 * - ✅ color padrão e estados (error, disabled)
 * - ✅ paddingBottom para variant filled
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ lineHeight para melhor legibilidade
 * - ❌ maxWidth para quebra de linha adequada
 * - ❌ ícones para diferentes tipos de mensagem
 * - ❌ animações de entrada/saída
 * - ❌ padding horizontal para alinhamento
 */
export const MuiFormHelperTextOverrides: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      marginLeft: 0, // remove indentação padrão do MUI
      marginTop: 'var(--spacing-scale-2xh, 0.25rem)', // 4px - espaçamento do input
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.875rem - menor que input
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      color: 'var(--gray-70, #666666)', // cor sutil para texto auxiliar

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // lineHeight: 'var(--font-line-height-medium, 1.45)', // legibilidade
      // maxWidth: '100%', // quebra de linha
      // wordBreak: 'break-word', // quebra palavras longas
      // padding: '0 var(--spacing-scale-base, 1rem)', // alinhamento com input

      // Animação de entrada
      // transition: 'opacity 0.2s ease-in-out',
      // opacity: 1,

      // filled variant adjustments moved into root with selector
      '&.Mui-filled': {
        marginLeft: 0, // consistência com root
        paddingBottom: 'var(--spacing-scale-2xh, 0.25rem)', // 4px - espaçamento inferior
      },

      // error state moved into root
      '&.Mui-error': {
        fontSize: 'var(--font-size-scale-down-01, 0.833rem)', // 0.833rem - ligeiramente menor
        marginTop: 'var(--spacing-scale-2xh, 0.25rem)', // 4px
        marginLeft: 'var(--spacing-scale-half, 0.5rem)', // 8px - pequena indentação para destaque
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
        color: 'var(--feedback-error-vivid, #D04F4F)',
      },

      // disabled state moved into root
      '&.Mui-disabled': {
        color: 'var(--gray-60, #888888)', // cor mais clara para desabilitado
      },
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // sizeSmall: {
    //   fontSize: 'var(--font-size-scale-down-02, 0.75rem)',
    //   marginTop: 'var(--spacing-scale-quarter, 0.125rem)',
    // },
    // contained: {
    //   marginLeft: 'var(--spacing-scale-base, 1rem)',
    //   marginRight: 'var(--spacing-scale-base, 1rem)',
    // },
  },
}
