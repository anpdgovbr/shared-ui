// src/theme/foundations/breakpoints.ts

/**
 * Sistema de breakpoints baseado no GovBR Design System
 *
 * @security Valores fixos garantem consistência em ambientes diversos
 * @resilience Abordagem mobile-first para acessibilidade em qualquer dispositivo
 *
 * Referência: Especificações responsive do Gov.br DS
 *
 * O GovBR-DS segue uma abordagem mobile-first com breakpoints
 * definidos para garantir consistência em dispositivos governamentais
 */

// Valores de breakpoint em pixels (conforme Gov.br DS)
export const govbrBreakpointValues = {
  xs: 0, // Extra small devices (portrait phones)
  sm: 576, // Small devices (landscape phones)
  md: 768, // Medium devices (tablets)
  lg: 992, // Large devices (desktops)
  xl: 1200, // Extra large devices (large desktops)
  xxl: 1400, // Extra extra large devices (larger desktops)
}

/**
 * Breakpoints configurados para MUI Theme
 * Usa os valores padrão do GovBR-DS para máxima compatibilidade
 */
export const breakpoints = {
  values: govbrBreakpointValues,

  // Unidade padrão para breakpoints
  unit: 'px' as const,

  // Definição de queries responsivas personalizadas
  up: (key: keyof typeof govbrBreakpointValues | number) => {
    const value = typeof key === 'number' ? key : govbrBreakpointValues[key]
    return `@media (min-width:${value}px)`
  },

  down: (key: keyof typeof govbrBreakpointValues | number) => {
    const value = typeof key === 'number' ? key : govbrBreakpointValues[key]
    return `@media (max-width:${value - 0.05}px)`
  },

  between: (
    start: keyof typeof govbrBreakpointValues | number,
    end: keyof typeof govbrBreakpointValues | number,
  ) => {
    const startValue = typeof start === 'number' ? start : govbrBreakpointValues[start]
    const endValue = typeof end === 'number' ? end : govbrBreakpointValues[end]
    return `@media (min-width:${startValue}px) and (max-width:${endValue - 0.05}px)`
  },

  only: (key: keyof typeof govbrBreakpointValues) => {
    const keys = Object.keys(govbrBreakpointValues) as Array<keyof typeof govbrBreakpointValues>
    const keyIndex = keys.indexOf(key)

    if (keyIndex === keys.length - 1) {
      // Se é o último breakpoint, só aplica min-width
      return `@media (min-width:${govbrBreakpointValues[key]}px)`
    }

    const nextKey = keys[keyIndex + 1]
    return `@media (min-width:${govbrBreakpointValues[key]}px) and (max-width:${govbrBreakpointValues[nextKey] - 0.05}px)`
  },
}

/**
 * Containers responsivos baseados no GovBR-DS
 * Define larguras máximas para diferentes breakpoints
 */
export const containerBreakpoints = {
  // Larguras máximas do container em cada breakpoint
  maxWidth: {
    xs: '100%',
    sm: '540px', // Container pequeno
    md: '720px', // Container médio
    lg: '960px', // Container grande
    xl: '1140px', // Container extra grande
    xxl: '1320px', // Container extra extra grande
  },

  // Padding lateral do container em cada breakpoint
  padding: {
    xs: 'var(--spacing-scale-2x, 2rem)', // 16px em mobile
    sm: 'var(--spacing-scale-2x, 2rem)', // 16px em landscape phone
    md: 'var(--spacing-scale-2xh, 1.714rem)', // 24px em tablet
    lg: 'var(--spacing-scale-4x, 2.857rem)', // 32px em desktop
    xl: 'var(--spacing-scale-4x, 2.857rem)', // 32px em desktop grande
    xxl: 'var(--spacing-scale-5x, 5rem)', // 40px em desktop extra grande
  },
}

/**
 * Grid system responsivo baseado no GovBR-DS
 * Sistema de 12 colunas com gutters responsivos
 */
export const gridBreakpoints = {
  // Número de colunas (padrão GovBR-DS)
  columns: 12,

  // Gutters (espaço entre colunas) responsivos
  spacing: {
    xs: 'var(--spacing-scale-2x, 2rem)', // 16px
    sm: 'var(--spacing-scale-2x, 2rem)', // 16px
    md: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
    lg: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    xl: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    xxl: 'var(--spacing-scale-5x, 5rem)', // 40px
  },

  // Margins laterais do grid
  margin: {
    xs: 'var(--spacing-scale-2x, 2rem)', // 16px
    sm: 'var(--spacing-scale-2x, 2rem)', // 16px
    md: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
    lg: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    xl: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    xxl: 'var(--spacing-scale-5x, 5rem)', // 40px
  },
}

/**
 * Utilitários para media queries responsivas
 * Facilita o uso consistente de breakpoints em componentes
 */
export const mediaQueries = {
  // Mobile first
  mobile: '@media (max-width: 575.95px)',
  tabletUp: '@media (min-width: 576px)',
  tabletOnly: '@media (min-width: 576px) and (max-width: 767.95px)',
  desktopUp: '@media (min-width: 768px)',
  desktopOnly: '@media (min-width: 768px) and (max-width: 991.95px)',
  largeUp: '@media (min-width: 992px)',
  largeOnly: '@media (min-width: 992px) and (max-width: 1199.95px)',
  xlUp: '@media (min-width: 1200px)',
  xlOnly: '@media (min-width: 1200px) and (max-width: 1399.95px)',
  xxlUp: '@media (min-width: 1400px)',

  // Orientação
  landscape: '@media (orientation: landscape)',
  portrait: '@media (orientation: portrait)',

  // Densidade de pixel
  highDensity: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',

  // Preferências de usuário
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
  darkMode: '@media (prefers-color-scheme: dark)',
  lightMode: '@media (prefers-color-scheme: light)',

  // Print
  print: '@media print',
}
