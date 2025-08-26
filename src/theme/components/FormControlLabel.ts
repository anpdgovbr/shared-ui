import type { Components } from '@mui/material/styles'

/**
 * Overrides do MUI FormControlLabel para GovBR Design System
 *
 * PROPRIEDADES IMPLEMENTADAS:
 * - ✅ gap entre control (checkbox/radio) e label
 * - ✅ alignItems para alinhamento vertical
 * - ✅ fontSize do label
 * - ✅ fontWeight e fontFamily
 * - ✅ color padrão e disabled
 * - ✅ lineHeight para legibilidade
 * - ✅ paddingTop para alinhamento fino
 *
 * PROPRIEDADES COMUNS FALTANDO:
 * - ❌ margin para espaçamento entre múltiplos controles
 * - ❌ hover state no label
 * - ❌ cursor pointer no label clickável
 * - ❌ text-decoration para links no label
 * - ❌ estados focus/active
 */
export const MuiFormControlLabelOverrides: Components['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      gap: 'var(--spacing-scale-half, 0.5rem)', // 8px entre checkbox/radio e label
      alignItems: 'flex-start', // alinhamento superior para textos multi-linha
      margin: 0, // Remove margem padrão
      cursor: 'pointer', // indicação de clicável

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // margin: '0 0 var(--spacing-scale-base, 1rem) 0', // espaçamento entre controles

      // Hover state
      // '&:hover': {
      //   '& .MuiFormControlLabel-label': {
      //     color: 'var(--interactive-light, #5992ed)',
      //   },
      // },

      // Focus state (quando control interno tem focus)
      // '&:focus-within': {
      //   '& .MuiFormControlLabel-label': {
      //     color: 'var(--interactive, #1351B4)',
      //   },
      // },
    },
    label: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      fontWeight: 'var(--font-weight-medium, 500)', // Seguindo padrão Gov.br
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      lineHeight: 'var(--font-line-height-medium, 1.45)', // 1.45 - legibilidade
      paddingTop: '2px', // Alinhamento visual com checkbox (24px)
      cursor: 'pointer', // clicável
      userSelect: 'none', // não selecionável

      // PROPRIEDADES FALTANDO - Implementar se necessário:
      // letterSpacing: 'var(--font-letter-spacing-normal, 0)',

      // Para links no label
      // '& a': {
      //   color: 'var(--interactive, #1351B4)',
      //   textDecoration: 'none',
      //   '&:hover': {
      //     textDecoration: 'underline',
      //   },
      // },
    },
    disabled: {
      '& .MuiFormControlLabel-label': {
        color: 'var(--gray-60, #888888)',
        cursor: 'not-allowed',
      },
    },

    // SLOTS FALTANDO - Implementar se necessário:
    // labelPlacementStart: {
    //   flexDirection: 'row-reverse',
    //   marginLeft: 0,
    //   marginRight: 'var(--spacing-scale-base, 1rem)',
    // },
    // labelPlacementTop: {
    //   flexDirection: 'column-reverse',
    //   alignItems: 'center',
    // },
    // labelPlacementBottom: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  },
}
