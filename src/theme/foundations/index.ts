// src/theme/foundations/index.ts

/**
 * Exportações centralizadas de todas as foundations do tema GovBR
 *
 * Este arquivo centraliza todos os elementos base do Design System:
 * - Palette (cores e tokens)
 * - Typography (tipografia e fontes)
 * - Spacing (espaçamentos e grid)
 * - Breakpoints (responsividade)
 * - Shadows (elevação e sombras)
 * - Surface (bordas, opacidades, arredondamentos)
 * - States (estados interativos avançados)
 * - Motion (animações e z-index)
 */

// Foundations básicas
export {
  breakpoints,
  containerBreakpoints,
  govbrBreakpointValues,
  gridBreakpoints,
  mediaQueries,
} from './breakpoints'
export {
  animationDurations,
  animationEasings,
  animationHelpers,
  animationTokens,
  commonAnimations,
  componentAnimations,
  motionProperties,
  zIndexTokens,
  zLayers,
} from './motion'
export { palette } from './palette'
export {
  contextualShadows,
  createShadow,
  responsiveShadows,
  shadowColors,
  shadows,
} from './shadows'
export { createSpacing, govbrSpacing, spacingBreakpoints, spacingUtils } from './spacing'
export {
  dragStates,
  focusStates,
  hoverStates,
  pressedStates,
  specialStates,
  stateEffects,
  stateMixins,
  stateTokens,
} from './states'
export {
  surfaceBlurs,
  surfaceMaps,
  surfaceOffsets,
  surfaceOpacities,
  surfaceRounders,
  surfaceTokens,
  surfaceWidths,
} from './surface'
export { typography } from './typography'

// Re-exportação de tipos
export type { AnimationDuration, AnimationEasing, CommonAnimation, ZLayer } from './motion'
export type { HoverState, PressedState, SpecialState } from './states'
export type {
  SurfaceBlur,
  SurfaceOffset,
  SurfaceOpacity,
  SurfaceRounder,
  SurfaceWidth,
} from './surface'
export type { PaletteOptions } from '@mui/material/styles'
