// src/theme/components/Button.ts

import type { Components, Theme } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'

/**
 * Overrides para o componente Button do MUI
 * Baseado nos tokens e padrões do GovBR Design System
 *
 * IMPORTANTE: Usa callbacks `({ theme }) => ({ ... })` para permitir que
 * temas derivados (como anpdTheme) sobrescrevam as cores dinamicamente.
 * Nunca use valores fixos de paletteValues.ts nos styleOverrides.
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
      // Usar minHeight em vez de height para permitir que sizeSmall/sizeLarge
      // sobreponham o tamanho quando necessário.
      minHeight: 'var(--button-medium, 40px)',
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
      },

      // ✅ Acessibilidade: focus básico sem outline (navegação por mouse)
      '&:focus': {
        outline: 'none',
      },

      // ✅ Acessibilidade: focus-visible para navegação por teclado (Tab)
      // Atende WCAG 2.1 SC 2.4.7 (Focus Visible) - Nível AA
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
    contained: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.primary.main,
      color: (theme as Theme).palette.primary.contrastText,
      boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',

      '&:hover': {
        backgroundColor: (theme as Theme).palette.primary.dark,
        boxShadow: 'var(--shadow-level-3, 0px 8px 16px rgba(0, 0, 0, 0.15))',
      },

      '&:focus': {
        backgroundColor: (theme as Theme).palette.primary.main,
        boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',
      },

      '&:active': {
        backgroundColor: (theme as Theme).palette.primary.dark,
        boxShadow: 'var(--shadow-level-3, 0px 8px 16px rgba(0, 0, 0, 0.15))',
      },
    }),

    // Variante outlined (secundária)
    outlined: ({ theme }) => ({
      backgroundColor: 'var(--background-light, #FFFFFF)',
      color: (theme as Theme).palette.primary.main,
      border: `1px solid ${(theme as Theme).palette.primary.main}`,

      '&:hover': {
        backgroundColor: alpha((theme as Theme).palette.primary.main, 0.08),
        border: `1px solid ${(theme as Theme).palette.primary.dark}`,
        color: (theme as Theme).palette.primary.dark,
      },

      '&:focus': {
        backgroundColor: 'transparent',
      },

      '&:active': {
        backgroundColor: (theme as Theme).palette.primary.main,
        color: (theme as Theme).palette.primary.contrastText,
      },
    }),

    // Variante text (terciária)
    text: {
      backgroundColor: 'transparent',
      padding: 'var(--spacing-scale-base, 1rem) var(--spacing-scale-2x, 2rem)', // 8px 16px
      '&:focus': {
        backgroundColor: 'transparent', // Reseta para a cor padrão
      },
    },

    // Tamanhos
    sizeSmall: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      // menor padding e minHeight para small (32px)
      padding: 'var(--spacing-scale-small, 0.5rem) var(--spacing-scale-2x, 1rem)', // 8px 16px fallback
      minHeight: 'var(--button-small, 32px)', // 32px
    },

    sizeLarge: {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
      // maior padding e minHeight para large (48px)
      padding: 'var(--spacing-scale-large, 1rem) var(--spacing-scale-4x, 2rem)', // 16px 32px fallback
      minHeight: 'var(--button-large, 48px)', // 48px
    },

    // Ícones
    startIcon: {
      marginRight: 'var(--spacing-scale-base, 1rem)', // 8px
      marginLeft: 0,
      // Fazer com que o ícone herde o font-size do botão
      '& > *': {
        fontSize: 'inherit',
        lineHeight: 1,
      },
    },

    endIcon: {
      marginLeft: 'var(--spacing-scale-base, 1rem)', // 8px
      marginRight: 0,
      '& > *': {
        fontSize: 'inherit',
        lineHeight: 1,
      },
    },
  },

  variants: [
    // Variante de perigo/destrutiva
    {
      props: { color: 'error', variant: 'contained' },
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
      props: { color: 'success', variant: 'contained' },
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
    // Variante de sucesso (aplica para contained)
    {
      props: { color: 'success', variant: 'contained' },
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
      props: { color: 'warning', variant: 'contained' },
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
    // Variante de aviso (aplica para contained)
    {
      props: { color: 'warning', variant: 'contained' },
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

    // Variante outlined para cores semânticas: garante que a borda siga a prop `color`
    {
      props: { variant: 'outlined', color: 'primary' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.primary.main,
        border: `1px solid ${(theme as Theme).palette.primary.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.primary.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.primary.dark}`,
          color: (theme as Theme).palette.primary.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.primary.main,
          color: (theme as Theme).palette.primary.contrastText,
        },
      }),
    },

    {
      props: { variant: 'outlined', color: 'secondary' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.secondary.main,
        border: `1px solid ${(theme as Theme).palette.secondary.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.secondary.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.secondary.dark}`,
          color: (theme as Theme).palette.secondary.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.secondary.main,
          color: (theme as Theme).palette.secondary.contrastText,
        },
      }),
    },

    {
      props: { variant: 'outlined', color: 'success' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.success.main,
        border: `1px solid ${(theme as Theme).palette.success.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.success.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.success.dark}`,
          color: (theme as Theme).palette.success.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.success.main,
          color: (theme as Theme).palette.success.contrastText,
        },
      }),
    },

    {
      props: { variant: 'outlined', color: 'warning' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.warning.main,
        border: `1px solid ${(theme as Theme).palette.warning.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.warning.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.warning.dark}`,
          color: (theme as Theme).palette.warning.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.warning.main,
          color: (theme as Theme).palette.warning.contrastText,
        },
      }),
    },

    {
      props: { variant: 'outlined', color: 'info' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.info.main,
        border: `1px solid ${(theme as Theme).palette.info.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.info.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.info.dark}`,
          color: (theme as Theme).palette.info.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.info.main,
          color: (theme as Theme).palette.info.contrastText,
        },
      }),
    },

    {
      props: { variant: 'outlined', color: 'error' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: (theme as Theme).palette.error.main,
        border: `1px solid ${(theme as Theme).palette.error.main}`,

        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.error.main, 0.08),
          border: `1px solid ${(theme as Theme).palette.error.dark}`,
          color: (theme as Theme).palette.error.dark,
        },

        '&:active': {
          backgroundColor: (theme as Theme).palette.error.main,
          color: (theme as Theme).palette.error.contrastText,
        },
      }),
    },

    // Variantes text por cor semântica
    {
      props: { variant: 'text', color: 'primary' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.primary.main,
        '&:hover': { backgroundColor: alpha((theme as Theme).palette.primary.main, 0.06) },
        '&:active': { backgroundColor: alpha((theme as Theme).palette.primary.main, 0.12) },
      }),
    },
    {
      props: { variant: 'text', color: 'secondary' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.secondary.main,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.secondary.main, 0.06),
        },
        '&:active': {
          backgroundColor: alpha((theme as Theme).palette.secondary.main, 0.12),
        },
      }),
    },
    {
      props: { variant: 'text', color: 'success' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.success.main,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.success.main, 0.06),
        },
        '&:active': {
          backgroundColor: alpha((theme as Theme).palette.success.main, 0.12),
        },
      }),
    },
    {
      props: { variant: 'text', color: 'warning' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.warning.main,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.warning.main, 0.06),
        },
        '&:active': {
          backgroundColor: alpha((theme as Theme).palette.warning.main, 0.12),
        },
      }),
    },
    {
      props: { variant: 'text', color: 'info' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.info.main,
        '&:hover': { backgroundColor: alpha((theme as Theme).palette.info.main, 0.06) },
        '&:active': { backgroundColor: alpha((theme as Theme).palette.info.main, 0.12) },
      }),
    },
    {
      props: { variant: 'text', color: 'error' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.error.main,
        '&:hover': { backgroundColor: alpha((theme as Theme).palette.error.main, 0.06) },
        '&:active': {
          backgroundColor: alpha((theme as Theme).palette.error.main, 0.12),
        },
      }),
    },

    // Variante invertida por cor: fundo claro + texto/borda na cor semântica
    {
      props: { variant: 'inverted', color: 'primary' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.primary.main,
        border: `1px solid ${(theme as Theme).palette.primary.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.primary.main, 0.08),
          color: (theme as Theme).palette.primary.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.primary.main,
          color: (theme as Theme).palette.primary.contrastText,
        },
      }),
    },

    {
      props: { variant: 'inverted', color: 'secondary' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.secondary.main,
        border: `1px solid ${(theme as Theme).palette.secondary.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.secondary.main, 0.08),
          color: (theme as Theme).palette.secondary.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.secondary.main,
          color: (theme as Theme).palette.secondary.contrastText,
        },
      }),
    },

    {
      props: { variant: 'inverted', color: 'success' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.success.main,
        border: `1px solid ${(theme as Theme).palette.success.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.success.main, 0.08),
          color: (theme as Theme).palette.success.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.success.main,
          color: (theme as Theme).palette.success.contrastText,
        },
      }),
    },

    {
      props: { variant: 'inverted', color: 'warning' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.warning.main,
        border: `1px solid ${(theme as Theme).palette.warning.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.warning.main, 0.08),
          color: (theme as Theme).palette.warning.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.warning.main,
          color: (theme as Theme).palette.warning.contrastText,
        },
      }),
    },

    {
      props: { variant: 'inverted', color: 'info' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.info.main,
        border: `1px solid ${(theme as Theme).palette.info.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.info.main, 0.08),
          color: (theme as Theme).palette.info.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.info.main,
          color: (theme as Theme).palette.info.contrastText,
        },
      }),
    },

    {
      props: { variant: 'inverted', color: 'error' },
      style: ({ theme }) => ({
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: (theme as Theme).palette.error.main,
        border: `1px solid ${(theme as Theme).palette.error.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.error.main, 0.08),
          color: (theme as Theme).palette.error.dark,
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.error.main,
          color: (theme as Theme).palette.error.contrastText,
        },
      }),
    },

    // Variante circular: reduz padding e aplica tamanho circular
    {
      props: { variant: 'circle' },
      style: ({ theme }) => ({
        borderRadius: '50%',
        border: '1px solid transparent',
        // padrão (medium)
        minWidth: 'var(--button-medium, 40px)',
        width: 'var(--button-medium, 40px)',
        height: 'var(--button-medium, 40px)',
        padding: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.primary.main, 0.08),
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.primary.main,
          color: (theme as Theme).palette.primary.contrastText,
        },
        // ajustar por classe de tamanho do MUI
        '&.MuiButton-sizeSmall': {
          minWidth: 'var(--button-small, 32px)',
          width: 'var(--button-small, 32px)',
          height: 'var(--button-small, 32px)',
          // garantir que ícones herdem e ocupem corretamente o espaço
          '& svg': {
            fontSize: 'inherit',
            width: '1em',
            height: '1em',
            lineHeight: 1,
          },
        },
        '&.MuiButton-sizeLarge': {
          minWidth: 'var(--button-large, 48px)',
          width: 'var(--button-large, 48px)',
          height: 'var(--button-large, 48px)',
          '& svg': {
            fontSize: 'inherit',
            width: '1em',
            height: '1em',
            lineHeight: 1,
          },
        },
        // garantir que ícones diretos no botão circle herdem por padrão
        '& svg': {
          fontSize: 'inherit',
          width: '1em',
          height: '1em',
          lineHeight: 1,
        },
      }),
    },

    // Circle variants per color: ensure circle buttons have border matching color
    {
      props: { variant: 'circle', color: 'primary' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.primary.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.primary.main, 0.08),
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.primary.main,
          color: (theme as Theme).palette.primary.contrastText,
        },
      }),
    },
    {
      props: { variant: 'circle', color: 'secondary' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.secondary.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.secondary.main, 0.08),
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.secondary.main,
          color: (theme as Theme).palette.secondary.contrastText,
        },
      }),
    },
    {
      props: { variant: 'circle', color: 'success' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.success.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.success.main, 0.08),
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.success.main,
          color: (theme as Theme).palette.success.contrastText,
        },
      }),
    },
    {
      props: { variant: 'circle', color: 'warning' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.warning.main}`,
        '&:hover': {
          backgroundColor: alpha((theme as Theme).palette.warning.main, 0.08),
        },
        '&:active': {
          backgroundColor: (theme as Theme).palette.warning.main,
          color: (theme as Theme).palette.warning.contrastText,
        },
      }),
    },
    {
      props: { variant: 'circle', color: 'info' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.info.main}`,
        '&:hover': { backgroundColor: alpha((theme as Theme).palette.info.main, 0.08) },
        '&:active': {
          backgroundColor: (theme as Theme).palette.info.main,
          color: (theme as Theme).palette.info.contrastText,
        },
      }),
    },
    {
      props: { variant: 'circle', color: 'error' },
      style: ({ theme }) => ({
        border: `1px solid ${(theme as Theme).palette.error.main}`,
        '&:hover': { backgroundColor: alpha((theme as Theme).palette.error.main, 0.08) },
        '&:active': {
          backgroundColor: (theme as Theme).palette.error.main,
          color: (theme as Theme).palette.error.contrastText,
        },
      }),
    },

    // Ensure info color works for contained as well
    {
      props: { color: 'info', variant: 'contained' },
      style: ({ theme }) => ({
        backgroundColor: (theme as Theme).palette.info.main,
        color: (theme as Theme).palette.info.contrastText,
        '&:hover': { backgroundColor: (theme as Theme).palette.info.dark },
      }),
    },
  ],
}
