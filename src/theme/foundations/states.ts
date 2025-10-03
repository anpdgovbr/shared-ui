/**
 * Estados interativos avançados do GovBR Design System
 *
 * @security Valores de opacidade controlados previnem vazamento visual
 * @resilience Estados padronizados (hover, focus, pressed) garantem feedback acessível (WCAG 2.1)
 *
 * Define estados como hover, pressed, focus, active, selected, disabled
 * baseados no design system oficial GovBR para melhor feedback visual.
 */

/**
 * Estados de hover por contexto
 */
export const hoverStates = {
  // Hover padrão (modo claro)
  light: 'var(--surface-opacity-xs, 0.05)',
  // Hover modo escuro
  dark: 'var(--surface-opacity-sm, 0.1)',
  // Hover em elementos interativos
  interactive: 'var(--surface-opacity-sm, 0.1)',
} as const

/**
 * Estados pressed/active
 */
export const pressedStates = {
  // Pressed padrão (modo claro)
  light: 'var(--surface-opacity-md, 0.2)',
  // Pressed modo escuro
  dark: 'var(--surface-opacity-lg, 0.4)',
  // Pressed em elementos interativos
  interactive: 'var(--surface-opacity-md, 0.2)',
} as const

/**
 * Estados de focus
 */
export const focusStates = {
  // Estilo de foco
  style: 'dashed',
  // Largura do outline de foco
  width: 'var(--surface-width-lg, 4px)',
  // Offset do outline
  offset: 'var(--spacing-scale-half, 0.5rem)',
  // Cores de foco
  color: {
    light: 'var(--gold-vivid-40, #c2850c)',
    dark: 'var(--gold-vivid-20, #ffbe2e)',
  },
} as const

/**
 * Estados especiais
 */
export const specialStates = {
  // Links visitados
  visited: {
    light: 'var(--blue-warm-vivid-80, #0c326f)',
    dark: 'var(--gray-20, #c5c5f3)',
  },

  // Estado ativo/selecionado
  active: 'var(--blue-warm-vivid-80, #0c326f)',
  selected: 'var(--blue-warm-vivid-50, #2670e8)',

  // Toggle states (switch/checkbox)
  on: 'var(--blue-warm-vivid-40, #5992ed)',
  off: 'var(--gray-20, #c5c5f3)',

  // Estado desabilitado
  disabled: 'var(--surface-opacity-lg, 0.4)',
} as const

/**
 * Efeitos visuais de estado
 */
export const stateEffects = {
  // Efeito de hover usando gradiente
  hoverEffect: (rgb: string, opacity: string) =>
    `linear-gradient(rgba(${rgb}, ${opacity}), rgba(${rgb}, ${opacity}))`,

  // Efeito pressed usando gradiente
  pressedEffect: (rgb: string, opacity: string) =>
    `linear-gradient(rgba(${rgb}, ${opacity}), rgba(${rgb}, ${opacity}))`,

  // Transições suaves
  transition: {
    fast: '150ms ease-out',
    base: '250ms ease-out',
    slow: '500ms ease-out',
  },
} as const

/**
 * Drag & Drop states (para funcionalidades avançadas)
 */
export const dragStates = {
  // Durante drag
  onDrag: {
    borderColor: 'var(--interactive, #1351b4)',
    borderWidth: 'var(--surface-width-md, 2px)',
    borderStyle: 'solid',
    shadowBlur: 'var(--surface-blur-lg, 16px)',
    opacity: 'var(--surface-opacity-xl, 0.8)',
    rotate: '-5deg',
    cursor: 'grabbing',
  },

  // Elemento arrastável
  draggable: {
    cursor: 'grab',
    icon: 'grip-vertical',
  },

  // Zona de drop
  dropZone: {
    borderColor: 'var(--interactive, #1351b4)',
    borderWidth: 'var(--surface-width-sm, 1px)',
    borderStyle: 'dashed',
  },

  // Durante drop
  onDrop: {
    background: 'var(--interactive-rgb, 19, 81, 180)',
    opacity: 'var(--surface-opacity-sm, 0.1)',
    cursor: 'copy',
  },
} as const

/**
 * Tokens CSS de estados compilados
 */
export const stateTokens = {
  // Estados de hover
  '--hover': 'var(--hover-light)',
  '--hover-light': hoverStates.light,
  '--hover-dark': hoverStates.dark,

  // Estados pressed
  '--pressed': 'var(--pressed-light)',
  '--pressed-light': pressedStates.light,
  '--pressed-dark': pressedStates.dark,

  // Estados de foco
  '--focus-style': focusStates.style,
  '--focus-width': focusStates.width,
  '--focus-offset': focusStates.offset,
  '--focus-color': 'var(--focus-color-light)',
  '--focus-color-light': focusStates.color.light,
  '--focus-color-dark': focusStates.color.dark,

  // Estados especiais
  '--visited': 'var(--visited-light)',
  '--visited-light': specialStates.visited.light,
  '--visited-dark': specialStates.visited.dark,
  '--active': specialStates.active,
  '--selected': specialStates.selected,
  '--on': specialStates.on,
  '--off': specialStates.off,
  '--disabled': specialStates.disabled,

  // Efeitos usando color-mix nativo em vez de variáveis aninhadas
  '--hover-effect': `color-mix(in srgb, var(--interactive, #1351B4) 12%, transparent)`,
  '--pressed-effect': `color-mix(in srgb, var(--interactive, #1351B4) 20%, transparent)`,

  // Drag & Drop
  '--ondrag-border-color': dragStates.onDrag.borderColor,
  '--ondrag-border-width': dragStates.onDrag.borderWidth,
  '--ondrag-border-style': dragStates.onDrag.borderStyle,
  '--ondrag-shadow-blur': dragStates.onDrag.shadowBlur,
  '--ondrag-opacity': dragStates.onDrag.opacity,
  '--ondrag-rotate': dragStates.onDrag.rotate,
  '--ondrag-cursor': dragStates.onDrag.cursor,
  '--draggable-cursor': dragStates.draggable.cursor,
  '--draggable-icon': dragStates.draggable.icon,
  '--dropzone-border-color': dragStates.dropZone.borderColor,
  '--dropzone-border-width': dragStates.dropZone.borderWidth,
  '--dropzone-border-style': dragStates.dropZone.borderStyle,
  '--ondrop-background': dragStates.onDrop.background,
  '--ondrop-opacity': dragStates.onDrop.opacity,
  '--ondrop-cursor': dragStates.onDrop.cursor,
} as const

/**
 * Mixins/helpers para aplicar estados
 */
export const stateMixins = {
  // Aplicar estado de hover
  hover: (element: 'button' | 'link' | 'card' = 'button') => ({
    '&:hover': {
      backgroundImage: element === 'button' ? 'var(--hover-effect)' : 'none',
      backgroundColor: element === 'card' ? 'var(--gray-5, #f6f6f6)' : 'transparent',
      transition: stateEffects.transition.fast,
    },
  }),

  // Aplicar estado pressed
  pressed: () => ({
    '&:active': {
      backgroundImage: 'var(--pressed-effect)',
      transition: stateEffects.transition.fast,
    },
  }),

  // Aplicar estado de foco
  focus: () => ({
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      outlineColor: 'var(--focus-color)',
      outlineStyle: 'var(--focus-style)',
      outlineWidth: 'var(--focus-width)',
      outlineOffset: 'var(--focus-offset)',
    },
  }),

  // Aplicar estado desabilitado
  disabled: () => ({
    '&:disabled': {
      opacity: 'var(--disabled)',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  }),
} as const

export type HoverState = keyof typeof hoverStates
export type PressedState = keyof typeof pressedStates
export type SpecialState = keyof typeof specialStates
