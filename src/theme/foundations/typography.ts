// src/theme/foundations/typography.ts
import { TypographyVariantsOptions } from '@mui/material/styles'

/**
 * Sistema de tipografia baseado nos tokens do GovBR Design System
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 *
 * Tokens mapeados:
 * - --font-family-* para fontFamily
 * - --font-size-scale-* para fontSize
 * - --font-weight-* para fontWeight
 * - --font-line-height-* para lineHeight
 * - --spacing-scale-* para margins
 */
export const typography: TypographyVariantsOptions & {
  fontFamily: string
  fontSize: number
  fontWeightLight: string | number
  fontWeightRegular: string | number
  fontWeightMedium: string | number
  fontWeightBold: string | number
} = {
  // Família de fonte padrão do GovBR-DS
  fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)', // "Rawline", "Raleway", sans-serif

  // Tamanho base de fonte
  fontSize: 14, // Base para cálculos relativos (--font-size-scale-base = 1rem = 14px)

  // Pesos de fonte do GovBR-DS
  fontWeightLight: 'var(--font-weight-light, 300)', // 300
  fontWeightRegular: 'var(--font-weight-regular, 400)', // 400
  fontWeightMedium: 'var(--font-weight-medium, 500)', // 500
  fontWeightBold: 'var(--font-weight-bold, 700)', // 700

  // Hierarquia tipográfica completa baseada no GovBR-DS
  h1: {
    fontSize: 'var(--font-size-scale-up-04, 2.036rem)', // 2.036rem (29.036px)
    fontWeight: 'var(--font-weight-medium, 500)', // 500
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem (24px)
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    // Responsive design - maior em breakpoints maiores
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-06, 2.986rem)', // 2.986rem (41.804px)
      fontWeight: 'var(--font-weight-light, 300)', // 300
      marginBottom: 'var(--spacing-scale-4x, 2.857rem)', // 2.857rem (40px)
    },
  },
  h2: {
    fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // 1.728rem (24.192px)
    fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem
    marginTop: 'var(--spacing-scale-3xh, 2rem)', // 2rem (28px)
    paddingBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-05, 2.488rem)', // 2.488rem (34.832px)
      fontWeight: 'var(--font-weight-regular, 400)', // 400
    },
  },
  h3: {
    fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem (20.16px)
    fontWeight: 'var(--font-weight-bold, 700)', // 700
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem
    marginTop: 'var(--spacing-scale-3xh, 2rem)', // 2rem
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-04, 2.036rem)', // 2.036rem
      fontWeight: 'var(--font-weight-medium, 500)', // 500
    },
  },
  h4: {
    fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem (16.8px)
    fontWeight: 'var(--font-weight-bold, 700)', // 700
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem
    marginTop: 'var(--spacing-scale-2x, 1.142rem)', // 1.142rem (16px)
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // 1.728rem
      fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
      marginTop: 'var(--spacing-scale-3xh, 2rem)', // 2rem
    },
  },
  h5: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
    fontWeight: 'var(--font-weight-extra-bold, 800)', // 800
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2x, 2rem)', // 1.142rem
    marginTop: 'var(--spacing-scale-2x, 2rem)', // 1.142rem
    paddingBottom: 'var(--spacing-scale-base, 0.571rem)', // 0.571rem (8px)
    textTransform: 'uppercase',
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
      fontWeight: 'var(--font-weight-bold, 700)', // 700
      marginTop: 'var(--spacing-scale-3xh, 2rem)', // 2rem
    },
  },
  h6: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem (11.662px)
    fontWeight: 'var(--font-weight-extra-bold, 800)', // 800
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    marginBottom: 'var(--spacing-scale-2x, 2rem)', // 1.142rem
    marginTop: 'var(--spacing-scale-2x, 2rem)', // 1.142rem
    paddingBottom: 'var(--spacing-scale-base, 1rem)', // 0.571rem
    textTransform: 'uppercase',
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (min-width:576px)': {
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
      fontWeight: 'var(--font-weight-extra-bold, 800)', // 800
      marginTop: 'var(--spacing-scale-3xh, 2rem)', // 2rem
    },
  },
  body1: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
    fontWeight: 'var(--font-weight-regular, 400)', // 400
    lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
    marginBottom: 'var(--spacing-scale-2x, 2rem)', // 1.142rem
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  body2: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
    fontWeight: 'var(--font-weight-regular, 400)', // 400
    lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
    marginBottom: 'var(--spacing-scale-base, 1rem)', // 0.571rem
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  subtitle1: {
    fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem
    fontWeight: 'var(--font-weight-medium, 500)', // 500
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  subtitle2: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
    fontWeight: 'var(--font-weight-medium, 500)', // 500
    lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  caption: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
    fontWeight: 'var(--font-weight-regular, 400)', // 400
    lineHeight: 'var(--font-line-height-medium, 1.5)', // 1.45
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  overline: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 0.833rem
    fontWeight: 'var(--font-weight-bold, 700)', // 700
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  button: {
    fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 1.2rem (para botões)
    fontWeight: 'var(--font-weight-semi-bold, 600)', // 600
    lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    textTransform: 'none', // Remove uppercase padrão do MUI
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
}
