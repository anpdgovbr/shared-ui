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
  fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

  // Tamanho base de fonte - alinhado com padrões web (16px)
  fontSize: 16, // Base para cálculos relativos

  // Pesos de fonte do GovBR-DS
  fontWeightLight: 'var(--font-weight-light, 300)',
  fontWeightRegular: 'var(--font-weight-regular, 400)',
  fontWeightMedium: 'var(--font-weight-medium, 500)',
  fontWeightBold: 'var(--font-weight-bold, 700)',

  // Hierarquia tipográfica otimizada para composições
  // MARGENS REDUZIDAS para melhor composabilidade
  h1: {
    fontSize: 'var(--font-size-scale-up-04, 2.074rem)', // ~33px
    fontWeight: 'var(--font-weight-bold, 700)',
    lineHeight: 'var(--font-line-height-low, 1.15)',
    letterSpacing: 'var(--font-letter-spacing-tight, -0.02em)',
    // Margens menores para melhor composabilidade
    marginBottom: 'var(--spacing-scale-2x, 1rem)', // 16px (era 24px)
    marginTop: 0, // Remove margin-top para controle manual
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    // Responsive - mais conservador
    '@media (max-width: 768px)': {
      fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // ~28px em mobile
    },
  },
  h2: {
    fontSize: 'var(--font-size-scale-up-03, 1.728rem)', // ~28px
    fontWeight: 'var(--font-weight-bold, 700)',
    lineHeight: 'var(--font-line-height-medium, 1.25)',
    letterSpacing: 'var(--font-letter-spacing-tight, -0.01em)',
    // Margens otimizadas
    marginBottom: 'var(--spacing-scale-1xh, 0.75rem)', // 12px (era 24px)
    marginTop: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (max-width: 768px)': {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // ~23px em mobile
    },
  },
  h3: {
    fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // ~23px
    fontWeight: 'var(--font-weight-semi-bold, 600)',
    lineHeight: 'var(--font-line-height-medium, 1.25)',
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    // Margens balanceadas
    marginBottom: 'var(--spacing-scale-base, 0.5rem)', // 8px (era 24px)
    marginTop: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
    '@media (max-width: 768px)': {
      fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // ~19px em mobile
    },
  },
  h4: {
    fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // ~19px
    fontWeight: 'var(--font-weight-semi-bold, 600)',
    lineHeight: 'var(--font-line-height-medium, 1.25)',
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    // Margens mínimas para máxima flexibilidade
    marginBottom: 'var(--spacing-scale-base, 0.5rem)', // 8px (era 24px)
    marginTop: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  h5: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
    fontWeight: 'var(--font-weight-semi-bold, 600)',
    lineHeight: 'var(--font-line-height-medium, 1.25)',
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    // Sem margens - controle total pelos containers
    marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
    marginTop: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  h6: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
    fontWeight: 'var(--font-weight-medium, 500)',
    lineHeight: 'var(--font-line-height-medium, 1.25)',
    letterSpacing: 'var(--font-letter-spacing-wide, 0.05em)',
    textTransform: 'uppercase',
    // Margens mínimas
    marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
    marginTop: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  body1: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
    fontWeight: 'var(--font-weight-regular, 400)',
    lineHeight: 'var(--font-line-height-high, 1.6)', // Melhor legibilidade
    // Sem margin-bottom padrão - controle pelos containers
    marginBottom: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  body2: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
    fontWeight: 'var(--font-weight-regular, 400)',
    lineHeight: 'var(--font-line-height-high, 1.6)',
    // Sem margin-bottom padrão
    marginBottom: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  subtitle1: {
    fontSize: 'var(--font-size-scale-up-01, 1.2rem)', // 19px
    fontWeight: 'var(--font-weight-medium, 500)',
    lineHeight: 'var(--font-line-height-medium, 1.45)',
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    // Margens mínimas para flexibilidade
    marginBottom: 'var(--spacing-scale-half, 0.25rem)', // 4px
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  subtitle2: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 16px
    fontWeight: 'var(--font-weight-medium, 500)',
    lineHeight: 'var(--font-line-height-medium, 1.45)',
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    // Sem margins por padrão
    marginBottom: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  caption: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
    fontWeight: 'var(--font-weight-regular, 400)',
    lineHeight: 'var(--font-line-height-medium, 1.45)',
    color: 'var(--gray-60, #777777)', // Cor mais suave para caption
    // Sem margins
    marginBottom: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  overline: {
    fontSize: 'var(--font-size-scale-down-01, 0.875rem)', // 14px
    fontWeight: 'var(--font-weight-medium, 500)',
    lineHeight: 'var(--font-line-height-low, 1.15)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--font-letter-spacing-wide, 0.05em)', // Menos espaçamento que o original
    color: 'var(--gray-70, #666666)', // Cor mais suave para overline
    // Sem margins
    marginBottom: 0,
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
  button: {
    fontSize: 'var(--font-size-scale-base, 1rem)', // 16px (era 19px)
    fontWeight: 'var(--font-weight-semi-bold, 600)',
    lineHeight: 'var(--font-line-height-low, 1.15)',
    textTransform: 'none', // Remove uppercase padrão do MUI
    letterSpacing: 'var(--font-letter-spacing-normal, 0)',
    fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
  },
}
