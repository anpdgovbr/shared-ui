// src/theme/components/Typography.ts
import { Components } from '@mui/material/styles'

import { muiPalette } from '../foundations/paletteValues'

/**
 * Overrides para o componente Typography do MUI
 * Baseado na hierarquia tipográfica otimizada do GovBR Design System
 *
 * OTIMIZAÇÕES APLICADAS:
 * - Margens reduzidas para melhor composabilidade
 * - Remoção de margin-top padrão (controle manual)
 * - Alinhamento com foundations/typography.ts
 * - Melhor responsividade
 */
export const MuiTypographyOverrides: Components['MuiTypography'] = {
  styleOverrides: {
    root: {
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      color: 'var(--color, #333333)',

      // Links dentro de typography
      '& a': {
        color: muiPalette.primary.main, // #1351B4
        textDecoration: 'underline',
        transition: 'color 0.2s ease-in-out',

        '&:hover': {
          color: muiPalette.primary.dark, // #0c326f
        },
      },
    },

    // HEADINGS - Otimizados para composição
    h1: {
      fontSize: 'var(--font-size-scale-up-04, 2.074rem)', // ~33px
      fontWeight: 'var(--font-weight-bold, 700)',
      lineHeight: 'var(--font-line-height-low, 1.15)',
      letterSpacing: 'var(--font-letter-spacing-tight, -0.02em)',
      // Margins otimizadas
      marginBottom: 'var(--spacing-scale-2x, 1rem)', // 16px
      marginTop: 0,

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // ~28px em mobile
      },
    },

    h2: {
      fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // ~28px
      fontWeight: 'var(--font-weight-bold, 700)',
      lineHeight: 'var(--font-line-height-medium, 1.25)',
      letterSpacing: 'var(--font-letter-spacing-tight, -0.01em)',
      // Margins balanceadas
      marginBottom: 'var(--spacing-scale-1xh, 0.75rem)', // 12px
      marginTop: 0,

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // ~23px em mobile
      },
    },

    h3: {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // ~23px
      fontWeight: 'var(--font-weight-semi-bold, 600)',
      lineHeight: 'var(--font-line-height-medium, 1.25)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Margins pequenas
      marginBottom: 'var(--spacing-scale-base, 0.5rem)', // 8px
      marginTop: 0,

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // ~19px em mobile
      },
    },

    h4: {
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // ~19px
      fontWeight: 'var(--font-weight-semi-bold, 600)',
      lineHeight: 'var(--font-line-height-medium, 1.25)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Margins mínimas
      marginBottom: 'var(--spacing-scale-base, 0.5rem)', // 8px
      marginTop: 0,
    },

    h5: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-semi-bold, 600)',
      lineHeight: 'var(--font-line-height-medium, 1.25)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Margins micro
      marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
      marginTop: 0,
    },

    h6: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-medium, 500)',
      lineHeight: 'var(--font-line-height-medium, 1.25)',
      letterSpacing: 'var(--font-letter-spacing-wide, 0.05em)',
      textTransform: 'uppercase',
      // Margins micro
      marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
      marginTop: 0,
    },

    // SUBTÍTULOS - Flexibilidade máxima
    subtitle1: {
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 19px
      fontWeight: 'var(--font-weight-medium, 500)',
      lineHeight: 'var(--font-line-height-medium, 1.45)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Margin mínima
      marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
    },

    subtitle2: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-medium, 500)',
      lineHeight: 'var(--font-line-height-medium, 1.45)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Sem margin
      marginBottom: 0,
    },

    // CORPO DE TEXTO - Sem margens padrão
    body1: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
      fontWeight: 'var(--font-weight-regular, 400)',
      lineHeight: 'var(--font-line-height-high, 1.6)', // Melhor legibilidade
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Sem margin - controle pelos containers
      marginBottom: 0,
    },

    body2: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
      fontWeight: 'var(--font-weight-regular, 400)',
      lineHeight: 'var(--font-line-height-high, 1.6)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      // Sem margin
      marginBottom: 0,
    },

    // TEXTOS ESPECIAIS - Sem margens
    button: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 16px (menor que antes)
      fontWeight: 'var(--font-weight-semi-bold, 600)',
      lineHeight: 'var(--font-line-height-low, 1.15)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      textTransform: 'none', // Remove uppercase padrão
    },

    caption: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
      fontWeight: 'var(--font-weight-regular, 400)',
      lineHeight: 'var(--font-line-height-medium, 1.45)',
      letterSpacing: 'var(--font-letter-spacing-normal, 0)',
      color: 'var(--gray-60, #777777)', // Cor mais suave
      marginBottom: 0,
    },

    overline: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
      fontWeight: 'var(--font-weight-medium, 500)',
      lineHeight: 'var(--font-line-height-low, 1.15)',
      letterSpacing: 'var(--font-letter-spacing-wide, 0.05em)', // Menos espaçamento
      textTransform: 'uppercase',
      color: 'var(--gray-70, #666666)', // Cor mais suave
      marginBottom: 0,
    },
  },

  variants: [
    // Variante de destaque - com margens controladas
    {
      props: { variant: 'h1', color: 'primary' },
      style: {
        color: muiPalette.primary.main, // #1351B4
        fontWeight: 'var(--font-weight-bold, 700)',
      },
    },

    // Variante de lead (texto de introdução) - margin customizada
    {
      props: { variant: 'body1' },
      style: {
        '&.lead': {
          fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 19px
          fontWeight: 'var(--font-weight-regular, 400)',
          lineHeight: 'var(--font-line-height-high, 1.6)',
          color: 'var(--gray-80, #333333)',
          marginBottom: 'var(--spacing-scale-base, 0.5rem)', // 8px - menor que antes
        },
      },
    },

    // Variante de texto pequeno com ênfase
    {
      props: { variant: 'caption' },
      style: {
        '&.emphasis': {
          fontWeight: 'var(--font-weight-semi-bold, 600)',
          color: 'var(--color, #333333)',
        },
      },
    },

    // Variante para código inline
    {
      props: { variant: 'body2' },
      style: {
        '&.code': {
          fontFamily: 'var(--font-family-code, "Roboto Mono", monospace)',
          fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
          backgroundColor: 'var(--gray-10, #f8f9fa)',
          padding: 'var(--spacing-scale-quarter, 0.25rem) var(--spacing-scale-half, 0.5rem)',
          borderRadius: 'var(--surface-rounder-sm, 0.25rem)',
          border: '1px solid var(--gray-20, #e9ecef)',
          // Reset margins for inline code
          margin: 0,
          display: 'inline',
        },
      },
    },

    // Variante para controle de margens SSR-safe
    {
      props: { className: 'first-element' },
      style: {
        marginTop: '0 !important',
      },
    },

    {
      props: { className: 'last-element' },
      style: {
        marginBottom: '0 !important',
      },
    },

    // Variante para títulos sem margin-bottom (útil em composições)
    {
      props: { className: 'no-margin' },
      style: {
        margin: 0,
        padding: 0,
      },
    },

    // Variante para textos compactos (densidades altas)
    {
      props: { className: 'compact' },
      style: {
        '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6':
          {
            marginBottom: 'var(--spacing-scale-quarter, 0.25rem)', // 4px ultra compacto
          },
        '&.MuiTypography-body1, &.MuiTypography-body2': {
          marginBottom: 0,
        },
      },
    },
  ],
}
