/**
 * Tokens de superfície do GovBR Design System
 *
 * Define propriedades de superfície como larguras de borda, raios de arredondamento,
 * opacidades, blur effects e offsets baseados no design system oficial.
 */

/**
 * Larguras de borda padronizadas
 */
export const surfaceWidths = {
  // Larguras de borda
  sm: '1px',
  md: '2px',
  lg: '4px',
  xl: '8px',
} as const

/**
 * Raios de arredondamento padronizados
 */
export const surfaceRounders = {
  // Arredondamentos
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  pill: '100em', // Totalmente arredondado
  circle: '50%', // Circular
} as const

/**
 * Opacidades padronizadas para estados e overlays
 */
export const surfaceOpacities = {
  // Opacidades para estados
  xs: 0.05, // Hover sutil
  sm: 0.1, // Hover normal
  md: 0.2, // Pressed/Active
  lg: 0.4, // Disabled
  xl: 0.8, // Overlay forte
  full: 1.0, // Opaco
} as const

/**
 * Efeitos de blur padronizados
 */
export const surfaceBlurs = {
  // Blur effects
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px',
} as const

/**
 * Offsets para sombras e outros efeitos
 */
export const surfaceOffsets = {
  // Offsets
  none: '0',
  xs: '1px',
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '16px',
} as const

/**
 * Tokens CSS de superfície compilados
 *
 * Estes são os tokens CSS variables que serão disponibilizados
 * globalmente no tema para uso em componentes.
 */
export const surfaceTokens = {
  // Larguras
  '--surface-width-sm': surfaceWidths.sm,
  '--surface-width-md': surfaceWidths.md,
  '--surface-width-lg': surfaceWidths.lg,
  '--surface-width-xl': surfaceWidths.xl,

  // Arredondamentos
  '--surface-rounder-sm': surfaceRounders.sm,
  '--surface-rounder-md': surfaceRounders.md,
  '--surface-rounder-lg': surfaceRounders.lg,
  '--surface-rounder-xl': surfaceRounders.xl,
  '--surface-rounder-pill': surfaceRounders.pill,
  '--surface-rounder-circle': surfaceRounders.circle,

  // Opacidades
  '--surface-opacity-xs': surfaceOpacities.xs,
  '--surface-opacity-sm': surfaceOpacities.sm,
  '--surface-opacity-md': surfaceOpacities.md,
  '--surface-opacity-lg': surfaceOpacities.lg,
  '--surface-opacity-xl': surfaceOpacities.xl,
  '--surface-opacity-full': surfaceOpacities.full,

  // Blur
  '--surface-blur-sm': surfaceBlurs.sm,
  '--surface-blur-md': surfaceBlurs.md,
  '--surface-blur-lg': surfaceBlurs.lg,
  '--surface-blur-xl': surfaceBlurs.xl,

  // Offsets
  '--surface-offset-none': surfaceOffsets.none,
  '--surface-offset-xs': surfaceOffsets.xs,
  '--surface-offset-sm': surfaceOffsets.sm,
  '--surface-offset-md': surfaceOffsets.md,
  '--surface-offset-lg': surfaceOffsets.lg,
  '--surface-offset-xl': surfaceOffsets.xl,
} as const

/**
 * Mapas semânticos para uso específico em componentes
 */
export const surfaceMaps = {
  // Bordas por contexto
  border: {
    default: 'var(--surface-width-sm, 1px)',
    focus: 'var(--surface-width-md, 2px)',
    active: 'var(--surface-width-lg, 4px)',
  },

  // Arredondamentos por contexto
  radius: {
    button: 'var(--surface-rounder-pill, 100em)',
    card: 'var(--surface-rounder-md, 8px)',
    input: 'var(--surface-rounder-md, 8px)',
    modal: 'var(--surface-rounder-lg, 16px)',
    avatar: 'var(--surface-rounder-circle, 50%)',
  },

  // Opacidades por estado
  state: {
    hover: 'var(--surface-opacity-xs, 0.05)',
    pressed: 'var(--surface-opacity-md, 0.2)',
    disabled: 'var(--surface-opacity-lg, 0.4)',
    overlay: 'var(--surface-opacity-xl, 0.8)',
  },

  // Elevação/sombras
  elevation: {
    focus: {
      offset: 'var(--surface-offset-sm, 2px)',
      blur: 'var(--surface-blur-md, 8px)',
    },
    dropdown: {
      offset: 'var(--surface-offset-lg, 8px)',
      blur: 'var(--surface-blur-lg, 16px)',
    },
  },
} as const

export type SurfaceWidth = keyof typeof surfaceWidths
export type SurfaceRounder = keyof typeof surfaceRounders
export type SurfaceOpacity = keyof typeof surfaceOpacities
export type SurfaceBlur = keyof typeof surfaceBlurs
export type SurfaceOffset = keyof typeof surfaceOffsets
