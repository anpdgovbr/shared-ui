// src/theme/components/Button.ts
import { Components } from '@mui/material/styles'

import { muiPalette } from '../foundations/paletteValues'

/**
 * Overrides para o componente Button do MUI
 * Baseado nos tokens e padrões do GovBR Design System
 */
export const MuiButtonOverrides: Components['MuiButton'] = {
  styleOverrides: {
    root: {
      // Tipografia
      fontSize: 'var(--font-size-scale-up-01, 16.8px)', // 1.2rem
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
      textTransform: 'none', // Remove uppercase padrão do MUI

      // Espaçamento
      padding: 'var(--spacing-scale-1xh, 0.75rem) var(--spacing-scale-2xh, 1.714rem)', // 12px 24px
      height: 'var(--button-medium, 40px)',
      // minHeight: 'var(--spacing-scale-5x, 5rem)', // 40px

      // Bordas e cantos
      borderRadius: 'var(--button-radius, 100em)', // 100em
      border: '1px solid transparent',
      outline: 'none',

      // Transições
      transition: 'all 0.2s ease-in-out',

      // Estados de hover e focus
      '&:hover': {
        boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',
        // transform: 'translateY(-1px)',
      },
      //TODO: verificar problema de acessibilidade, quando tem foco com tab
      '&:focus': {
        outline: 'none',
        // outlineOffset: '2px',
      },
      '&:focus-visible': {
        outlineStyle: 'dashed',
        outlineWidth: '4px',
        outlineColor: 'var(--feedback-warning-vivid, #b38c00)',
        outlineOffset: '4px',
        boxShadow: 'none',
      },

      '&:active': {
        transform: 'translateY(0)',
        boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))',
      },

      '&:disabled': {
        backgroundColor: '#cccccc',
        color: '#757575',
        cursor: 'not-allowed',
        boxShadow: 'none',

        '&:hover': {
          backgroundColor: '#cccccc',
          transform: 'none',
          boxShadow: 'none',
        },
      },
    },

    // Variante contained (primária)
    contained: {
      backgroundColor: muiPalette.primary.main, // #1351B4
      color: '#ffffff', // Branco
      boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',

      '&:hover': {
        backgroundColor: muiPalette.primary.dark, // #0c326f
        boxShadow: 'var(--shadow-level-3, 0px 8px 16px rgba(0, 0, 0, 0.15))',
      },

      '&:focus': {
        backgroundColor: muiPalette.primary.main, // Reseta para a cor padrão
        boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))', // Reseta para a sombra padrão
      },

      '&:active': {
        backgroundColor: muiPalette.primary.dark,
        boxShadow: 'var(--shadow-level-3, 0px 8px 16px rgba(0, 0, 0, 0.15))',
      },
    },

    // Variante outlined (secundária)
    outlined: {
      backgroundColor: '#FFFFFF',
      color: muiPalette.primary.main, // #1351B4
      borderColor: muiPalette.primary.main, // #1351B4

      '&:hover': {
        backgroundColor: muiPalette.primary.light, // #5992ed
        borderColor: muiPalette.primary.dark, // #0c326f
        color: muiPalette.primary.dark, // #0c326f
      },

      '&:focus': {
        backgroundColor: 'transparent', // Reseta para a cor padrão
      },

      '&:active': {
        backgroundColor: muiPalette.primary.main, // #1351B4
        color: '#ffffff',
      },
    },

    // Variante text (terciária)
    text: {
      backgroundColor: 'transparent',
      color: muiPalette.primary.main, // #1351B4
      padding: 'var(--spacing-scale-base, 1rem) var(--spacing-scale-2x, 2rem)', // 8px 16px

      '&:hover': {
        backgroundColor: muiPalette.primary.light, // #5992ed
        color: muiPalette.primary.dark, // #0c326f
      },

      '&:focus': {
        backgroundColor: 'transparent', // Reseta para a cor padrão
      },

      '&:active': {
        backgroundColor: muiPalette.primary.main, // #1351B4
        color: '#ffffff',
      },
    },

    // Tamanhos
    sizeSmall: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      padding: 'var(--spacing-scale-base, 1rem) var(--spacing-scale-2x, 2rem)', // 8px 16px
      minHeight: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    },

    sizeLarge: {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
      padding: 'var(--spacing-scale-2x, 2rem) var(--spacing-scale-4x, 2.857rem)', // 16px 32px
      minHeight: 'var(--spacing-scale-6x, 6rem)', // 48px
    },

    // Ícones
    startIcon: {
      marginRight: 'var(--spacing-scale-base, 1rem)', // 8px
      marginLeft: 0,
    },

    endIcon: {
      marginLeft: 'var(--spacing-scale-base, 1rem)', // 8px
      marginRight: 0,
    },
  },

  variants: [
    // Variante de perigo/destrutiva
    {
      props: { color: 'error' },
      style: {
        backgroundColor: 'var(--feedback-error-vivid, #D04F4F)',
        color: 'var(--color-lightest, #ffffff)',

        '&:hover': {
          backgroundColor: 'var(--feedback-error-dark, #B73E3E)',
        },

        '&:active': {
          backgroundColor: 'var(--feedback-error-darker, #9E2B2B)',
        },
      },
    },

    // Variante de sucesso
    {
      props: { color: 'success' },
      style: {
        backgroundColor: 'var(--feedback-success-vivid, #168821)',
        color: 'var(--color-lightest, #ffffff)',

        '&:hover': {
          backgroundColor: 'var(--feedback-success-dark, #0F5E1A)',
        },

        '&:active': {
          backgroundColor: 'var(--feedback-success-darker, #0A4A15)',
        },
      },
    },

    // Variante de aviso
    {
      props: { color: 'warning' },
      style: {
        backgroundColor: 'var(--feedback-warning-vivid, #F29F05)',
        color: 'var(--color-dark, #000000)',

        '&:hover': {
          backgroundColor: 'var(--feedback-warning-dark, #C8850A)',
        },

        '&:active': {
          backgroundColor: 'var(--feedback-warning-darker, #9F6B08)',
          color: 'var(--color-lightest, #ffffff)',
        },
      },
    },
  ],
}
