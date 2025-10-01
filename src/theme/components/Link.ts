// src/theme/components/Link.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Link do MUI
 * Baseado nos padrões de links do GovBR Design System
 */
export const MuiLinkOverrides: Components['MuiLink'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: (theme as Theme).palette.primary.main, // Azul do tema ativo para links
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
        color: (theme as Theme).palette.primary.dark,
        textDecorationColor: (theme as Theme).palette.primary.dark,
        backgroundColor: (theme as Theme).palette.primary.light,
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
        backgroundColor: (theme as Theme).palette.primary.main,
      },

      // Estado visitado
      '&:visited': {
        color: 'var(--blue-cool-vivid-70, #074b69)', // Azul mais escuro para visitado
      },
    }),

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
