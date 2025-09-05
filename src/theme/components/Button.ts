// src/theme/components/Button.ts

import { alpha, Components } from '@mui/material/styles'

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
      backgroundColor: 'var(--background-light, #FFFFFF)',
      color: muiPalette.primary.main, // #1351B4
      border: `1px solid ${muiPalette.primary.main}`, // #1351B4

      '&:hover': {
        // usar overlay sutil baseado na cor principal para hover
        backgroundColor: alpha(muiPalette.primary.main, 0.08),
        border: `1px solid ${muiPalette.primary.dark}`, // #0c326f
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
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.primary.main,
        border: `1px solid ${muiPalette.primary.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.primary.main, 0.08),
          border: `1px solid ${muiPalette.primary.dark}`,
          color: muiPalette.primary.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.primary.main,
          color: '#ffffff',
        },
      },
    },

    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.secondary.main,
        border: `1px solid ${muiPalette.secondary.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.secondary.main, 0.08),
          border: `1px solid ${muiPalette.secondary.dark}`,
          color: muiPalette.secondary.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.secondary.main,
          color: '#ffffff',
        },
      },
    },

    {
      props: { variant: 'outlined', color: 'success' },
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.success.main,
        border: `1px solid ${muiPalette.success.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.success.main, 0.08),
          border: `1px solid ${muiPalette.success.dark}`,
          color: muiPalette.success.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.success.main,
          color: '#ffffff',
        },
      },
    },

    {
      props: { variant: 'outlined', color: 'warning' },
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.warning.main,
        border: `1px solid ${muiPalette.warning.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.warning.main, 0.08),
          border: `1px solid ${muiPalette.warning.dark}`,
          color: muiPalette.warning.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.warning.main,
          color: '#ffffff',
        },
      },
    },

    {
      props: { variant: 'outlined', color: 'info' },
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.info.main,
        border: `1px solid ${muiPalette.info.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.info.main, 0.08),
          border: `1px solid ${muiPalette.info.dark}`,
          color: muiPalette.info.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.info.main,
          color: '#ffffff',
        },
      },
    },

    {
      props: { variant: 'outlined', color: 'error' },
      style: {
        backgroundColor: 'var(--background-light, #FFFFFF)',
        color: muiPalette.error.main,
        border: `1px solid ${muiPalette.error.main}`,

        '&:hover': {
          backgroundColor: alpha(muiPalette.error.main, 0.08),
          border: `1px solid ${muiPalette.error.dark}`,
          color: muiPalette.error.dark,
        },

        '&:active': {
          backgroundColor: muiPalette.error.main,
          color: '#ffffff',
        },
      },
    },

    // Variantes text por cor semântica
    {
      props: { variant: 'text', color: 'primary' },
      style: {
        color: muiPalette.primary.main,
        '&:hover': { backgroundColor: alpha(muiPalette.primary.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.primary.main, 0.12) },
      },
    },
    {
      props: { variant: 'text', color: 'secondary' },
      style: {
        color: muiPalette.secondary.main,
        '&:hover': { backgroundColor: alpha(muiPalette.secondary.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.secondary.main, 0.12) },
      },
    },
    {
      props: { variant: 'text', color: 'success' },
      style: {
        color: muiPalette.success.main,
        '&:hover': { backgroundColor: alpha(muiPalette.success.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.success.main, 0.12) },
      },
    },
    {
      props: { variant: 'text', color: 'warning' },
      style: {
        color: muiPalette.warning.main,
        '&:hover': { backgroundColor: alpha(muiPalette.warning.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.warning.main, 0.12) },
      },
    },
    {
      props: { variant: 'text', color: 'info' },
      style: {
        color: muiPalette.info.main,
        '&:hover': { backgroundColor: alpha(muiPalette.info.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.info.main, 0.12) },
      },
    },
    {
      props: { variant: 'text', color: 'error' },
      style: {
        color: muiPalette.error.main,
        '&:hover': { backgroundColor: alpha(muiPalette.error.main, 0.06) },
        '&:active': { backgroundColor: alpha(muiPalette.error.main, 0.12) },
      },
    },

    // Variante invertida por cor: fundo claro + texto/borda na cor semântica
    {
      props: { variant: 'inverted', color: 'primary' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.primary.main,
        border: `1px solid ${muiPalette.primary.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.primary.main, 0.08),
          color: muiPalette.primary.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.primary.main,
          color: muiPalette.primary.contrastText || '#ffffff',
        },
      },
    },

    {
      props: { variant: 'inverted', color: 'secondary' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.secondary.main,
        border: `1px solid ${muiPalette.secondary.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.secondary.main, 0.08),
          color: muiPalette.secondary.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.secondary.main,
          color: muiPalette.secondary.contrastText || '#ffffff',
        },
      },
    },

    {
      props: { variant: 'inverted', color: 'success' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.success.main,
        border: `1px solid ${muiPalette.success.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.success.main, 0.08),
          color: muiPalette.success.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.success.main,
          color: muiPalette.success.contrastText || '#ffffff',
        },
      },
    },

    {
      props: { variant: 'inverted', color: 'warning' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.warning.main,
        border: `1px solid ${muiPalette.warning.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.warning.main, 0.08),
          color: muiPalette.warning.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.warning.main,
          color: muiPalette.warning.contrastText || '#ffffff',
        },
      },
    },

    {
      props: { variant: 'inverted', color: 'info' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.info.main,
        border: `1px solid ${muiPalette.info.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.info.main, 0.08),
          color: muiPalette.info.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.info.main,
          color: muiPalette.info.contrastText || '#ffffff',
        },
      },
    },

    {
      props: { variant: 'inverted', color: 'error' },
      style: {
        backgroundColor: 'var(--color-lightest, #ffffff)',
        color: muiPalette.error.main,
        border: `1px solid ${muiPalette.error.main}`,
        '&:hover': {
          backgroundColor: alpha(muiPalette.error.main, 0.08),
          color: muiPalette.error.dark,
        },
        '&:active': {
          backgroundColor: muiPalette.error.main,
          color: muiPalette.error.contrastText || '#ffffff',
        },
      },
    },

    // Variante circular: reduz padding e aplica tamanho circular
    {
      props: { variant: 'circle' },
      style: {
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
          // default hover uses primary overlay if no color specified
          backgroundColor: alpha(muiPalette.primary.main, 0.08),
        },
        '&:active': {
          backgroundColor: muiPalette.primary.main,
          color: muiPalette.primary.contrastText || '#ffffff',
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
      },
    },

    // Circle variants per color: ensure circle buttons have border matching color
    {
      props: { variant: 'circle', color: 'primary' },
      style: {
        border: `1px solid ${muiPalette.primary.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.primary.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.primary.main,
          color: muiPalette.primary.contrastText || '#ffffff',
        },
      },
    },
    {
      props: { variant: 'circle', color: 'secondary' },
      style: {
        border: `1px solid ${muiPalette.secondary.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.secondary.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.secondary.main,
          color: muiPalette.secondary.contrastText || '#ffffff',
        },
      },
    },
    {
      props: { variant: 'circle', color: 'success' },
      style: {
        border: `1px solid ${muiPalette.success.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.success.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.success.main,
          color: muiPalette.success.contrastText || '#ffffff',
        },
      },
    },
    {
      props: { variant: 'circle', color: 'warning' },
      style: {
        border: `1px solid ${muiPalette.warning.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.warning.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.warning.main,
          color: muiPalette.warning.contrastText || '#ffffff',
        },
      },
    },
    {
      props: { variant: 'circle', color: 'info' },
      style: {
        border: `1px solid ${muiPalette.info.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.info.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.info.main,
          color: muiPalette.info.contrastText || '#ffffff',
        },
      },
    },
    {
      props: { variant: 'circle', color: 'error' },
      style: {
        border: `1px solid ${muiPalette.error.main}`,
        '&:hover': { backgroundColor: alpha(muiPalette.error.main, 0.08) },
        '&:active': {
          backgroundColor: muiPalette.error.main,
          color: muiPalette.error.contrastText || '#ffffff',
        },
      },
    },

    // Ensure info color works for contained as well
    {
      props: { color: 'info', variant: 'contained' },
      style: {
        backgroundColor: muiPalette.info.main,
        color: muiPalette.info.contrastText || '#ffffff',
        '&:hover': { backgroundColor: muiPalette.info.dark },
      },
    },
  ],
}
