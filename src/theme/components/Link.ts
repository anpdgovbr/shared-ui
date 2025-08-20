// src/theme/components/Link.ts
import { Components } from '@mui/material/styles'

import { muiPalette } from '../foundations/paletteValues'

/**
 * Overrides para o componente Link do MUI
 * Baseado nos padrões de links do GovBR Design System
 */
export const MuiLinkOverrides: Components['MuiLink'] = {
  styleOverrides: {
    root: {
      color: muiPalette.primary.main, // #1351B4 - Azul GovBR para links
      textDecoration: 'underline',
      textDecorationColor: 'transparent', // Inicia sem sublinhado visível
      textDecorationThickness: '2px',
      textUnderlineOffset: '2px',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',

      // Hover effect
      '&:hover': {
        color: muiPalette.primary.dark, // #0c326f
        textDecorationColor: muiPalette.primary.dark, // #0c326f
        backgroundColor: muiPalette.primary.light, // #5992ed
      },

      // Estado de foco acessível
      '&:focus-visible': {
        outline: '2px solid var(--focus, #1351B4)',
        outlineOffset: '2px',
        borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      },

      // Estado ativo
      '&:active': {
        color: '#0a2756', // Interactive darker
        backgroundColor: muiPalette.primary.main, // #1351B4
      },

      // Estado visitado
      '&:visited': {
        color: 'var(--blue-cool-vivid-70, #074b69)', // Azul mais escuro para visitado
      },
    },

    // Variantes de sublinhado
    underlineNone: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
        textDecorationColor: 'currentColor',
      },
    },

    underlineHover: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
        textDecorationColor: 'currentColor',
      },
    },

    underlineAlways: {
      textDecoration: 'underline',
      textDecorationColor: 'currentColor',
    },
  },

  variants: [
    // Link externo (indica abertura em nova aba)
    {
      props: { target: '_blank' },
      style: {
        '&::after': {
          content: '"↗"',
          marginLeft: 'var(--spacing-scale-half, 0.5rem)', // 4px
          fontSize: '0.8em',
          opacity: 0.7,
        },
      },
    },
  ],
}
