// src/theme/components/Typography.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Typography do MUI
 * Baseado na hierarquia tipográfica do GovBR Design System
 */
export const MuiTypographyOverrides: Components['MuiTypography'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      color: 'var(--color, #333333)',
      margin: 0,
      padding: 0,

      // Links dentro de typography
      '& a': {
        color: (theme as Theme).palette.primary.main,
        textDecoration: 'underline',

        '&:hover': {
          color: (theme as Theme).palette.primary.dark,
        },
      },

      '&.MuiTypography-gutterBottom': {
        marginBottom: 0,
      },
    }),

    // Display (títulos muito grandes)
    h1: {
      fontSize: 'var(--font-size-scale-up-04, 2.074rem)', // 2.074rem (33.2px)
      fontWeight: 'var(--font-weight-bold, 700)', // 700
      lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
      letterSpacing: 'var(--font-letter-spacing-tight, -0.02em)', // -0.02em

      // Responsividade
      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-04, 1.728rem)', // 1.728rem em mobile
      },
    },

    // Títulos principais
    h2: {
      fontSize: 'var(--font-size-scale-up-04, 1.728rem)', // 1.728rem (27.6px)
      fontWeight: 'var(--font-weight-bold, 700)', // 700
      lineHeight: 'var(--font-line-height-medium, 1.25)', // 1.25
      letterSpacing: 'var(--font-letter-spacing-tight, -0.02em)', // -0.02em

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-03, 1.44rem)', // 1.44rem em mobile
      },
    },

    // Títulos de seção
    h3: {
      fontSize: 'var(--font-size-scale-up-03, 1.44rem)', // 1.44rem (23px)
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      lineHeight: 'var(--font-line-height-medium, 1.25)', // 1.25
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-02, 1.2rem)', // 1.2rem em mobile
      },
    },

    // Subtítulos
    h4: {
      fontSize: 'var(--font-size-scale-up-02, 1.2rem)', // 1.2rem (19.2px)
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      lineHeight: 'var(--font-line-height-medium, 1.25)', // 1.25
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0

      '@media (max-width: 768px)': {
        fontSize: 'var(--font-size-scale-up-01, 1rem)', // 1rem em mobile
      },
    },

    // Títulos menores
    h5: {
      fontSize: 'var(--font-size-scale-up-01, 1rem)', // 1rem (16px)
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      lineHeight: 'var(--font-line-height-medium, 1.25)', // 1.25
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
    },

    // Títulos pequenos
    h6: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem (16px)
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      lineHeight: 'var(--font-line-height-medium, 1.25)', // 1.25
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
      textTransform: 'uppercase',
    },

    // Subtítulos e lead text
    subtitle1: {
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem (19.2px)
      fontWeight: 'var(--font-weight-regular, 400)', // 400
      lineHeight: 'var(--font-line-height-high, 1.6)', // 1.6
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
    },

    subtitle2: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem (16px)
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      lineHeight: 'var(--font-line-height-medium, 1.45)', // 1.45
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
    },

    // Corpo de texto principal
    body1: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem (16px)
      fontWeight: 'var(--font-weight-regular, 400)', // 400
      lineHeight: 'var(--font-line-height-high, 1.6)', // 1.6
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
    },

    // Texto secundário
    body2: {
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.875rem (14px)
      fontWeight: 'var(--font-weight-regular, 400)', // 400
      lineHeight: 'var(--font-line-height-high, 1.6)', // 1.6
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
    },

    // Texto de botões
    button: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem (16px)
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
      textTransform: 'none', // Remove uppercase padrão
    },

    // Texto pequeno
    caption: {
      fontSize: 'var(--font-size-scale-down-02, 0.75rem)', // 0.75rem (12px)
      fontWeight: 'var(--font-weight-regular, 400)', // 400
      lineHeight: 'var(--font-line-height-medium, 1.45)', // 1.45
      letterSpacing: 'var(--font-letter-spacing-normal, 0)', // 0
      color: 'var(--gray-60, #777777)', // Cor mais suave para caption
    },

    // Texto overline
    overline: {
      fontSize: 'var(--font-size-scale-down-02, 0.75rem)', // 0.75rem (12px)
      fontWeight: 'var(--font-weight-medium, 500)', // 500
      lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
      letterSpacing: 'var(--font-letter-spacing-wide, 0.08em)', // 0.08em
      textTransform: 'uppercase',
      color: 'var(--gray-70, #666666)', // Cor mais suave para overline
    },
  },

  variants: [
    // Variante de destaque
    {
      props: { variant: 'h1', color: 'primary' },
      style: ({ theme }) => ({
        color: (theme as Theme).palette.primary.main,
        fontWeight: 'var(--font-weight-bold, 700)', // 700
      }),
    },

    // Variante de lead (texto de introdução)
    {
      props: { variant: 'body1' },
      style: {
        '&.lead': {
          fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
          fontWeight: 'var(--font-weight-regular, 400)', // 400
          lineHeight: 'var(--font-line-height-high, 1.6)', // 1.6
          color: 'var(--gray-80, #333333)',
        },
      },
    },

    // Variante de texto pequeno com ênfase
    {
      props: { variant: 'caption' },
      style: {
        '&.emphasis': {
          fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
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
          fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.875rem
          backgroundColor: 'var(--gray-10, #eeeeee)',
          padding: 'var(--spacing-scale-quarter, 0.25rem) var(--spacing-scale-half, 0.5rem)',
          borderRadius: 'var(--surface-rounder-sm, 0.25rem)',
          border: '1px solid var(--gray-20, #dddddd)',
        },
      },
    },
  ],
}
