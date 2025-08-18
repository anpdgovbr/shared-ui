/**
 * Sistema de Z-Index e Animações do GovBR Design System
 *
 * Define camadas organizadas de z-index e propriedades de animação
 * baseadas no design system oficial para consistência visual.
 */

/**
 * Camadas de z-index organizadas
 *
 * Sistema de camadas para controlar a sobreposição de elementos
 * de forma consistente e previsível.
 */
export const zLayers = {
  // Camada base (conteúdo normal)
  base: 0,

  // Camada 1: Dropdowns, tooltips simples
  dropdown: 1000,

  // Camada 2: Modais, overlays
  modal: 2000,

  // Camada 3: Notificações, alerts
  notification: 3000,

  // Camada 4: Elementos críticos, loading screens
  critical: 4000,

  // Camada 5: Toast messages, debug info
  toast: 5000,
} as const

/**
 * Tokens CSS de z-index
 */
export const zIndexTokens = {
  '--z-index-layer-0': zLayers.base,
  '--z-index-layer-1': zLayers.dropdown,
  '--z-index-layer-2': zLayers.modal,
  '--z-index-layer-3': zLayers.notification,
  '--z-index-layer-4': zLayers.critical,
  '--z-index-layer-5': zLayers.toast,
} as const

/**
 * Durações de animação padronizadas
 */
export const animationDurations = {
  // Animações muito rápidas (micro-interações)
  instant: '50ms',

  // Animações rápidas (hover, focus)
  quick: '150ms',

  // Animação base (padrão)
  base: '250ms',

  // Animações lentas (transições de página)
  slow: '500ms',

  // Animações muito lentas (loading, grandes mudanças)
  slowest: '800ms',
} as const

/**
 * Curvas de animação (easing functions)
 */
export const animationEasings = {
  // Linear
  linear: 'linear',

  // Ease padrão do Material Design
  base: 'ease-out',

  // Aceleração (início lento, fim rápido)
  accelerate: 'cubic-bezier(0.4, 0, 1, 1)',

  // Desaceleração (início rápido, fim lento)
  decelerate: 'cubic-bezier(0, 0, 0.2, 1)',

  // Ease completo (início e fim lentos)
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Bounce effect
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',

  // Elastic effect
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const

/**
 * Propriedades de movimento/transform
 */
export const motionProperties = {
  // Translatee
  translate: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '32px',
  },

  // Scale
  scale: {
    sm: 0.95,
    md: 0.9,
    lg: 0.8,
    grow: 1.05,
    growLg: 1.1,
  },

  // Rotate
  rotate: {
    sm: '2deg',
    md: '5deg',
    lg: '10deg',
    quarter: '90deg',
    half: '180deg',
  },
} as const

/**
 * Tokens CSS de animação compilados
 */
export const animationTokens = {
  // Durações
  '--duration-instant': animationDurations.instant,
  '--duration-quick': animationDurations.quick,
  '--duration-base': animationDurations.base,
  '--duration-slow': animationDurations.slow,
  '--duration-slowest': animationDurations.slowest,

  // Easings
  '--animation-easing-linear': animationEasings.linear,
  '--animation-easing-base': animationEasings.base,
  '--animation-easing-accelerate': animationEasings.accelerate,
  '--animation-easing-decelerate': animationEasings.decelerate,
  '--animation-easing-ease': animationEasings.ease,
  '--animation-easing-bounce': animationEasings.bounce,
  '--animation-easing-elastic': animationEasings.elastic,
} as const

/**
 * Animações pré-definidas comuns
 */
export const commonAnimations = {
  // Fade in/out
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },

  // Slide animations
  slideInUp: {
    from: {
      opacity: 0,
      transform: `translateY(${motionProperties.translate.lg})`,
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  slideInDown: {
    from: {
      opacity: 0,
      transform: `translateY(-${motionProperties.translate.lg})`,
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  slideInLeft: {
    from: {
      opacity: 0,
      transform: `translateX(-${motionProperties.translate.lg})`,
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },

  slideInRight: {
    from: {
      opacity: 0,
      transform: `translateX(${motionProperties.translate.lg})`,
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },

  // Scale animations
  scaleIn: {
    from: {
      opacity: 0,
      transform: `scale(${motionProperties.scale.md})`,
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },

  scaleOut: {
    from: {
      opacity: 1,
      transform: 'scale(1)',
    },
    to: {
      opacity: 0,
      transform: `scale(${motionProperties.scale.md})`,
    },
  },

  // Pulse effect
  pulse: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: `scale(${motionProperties.scale.grow})` },
    '100%': { transform: 'scale(1)' },
  },

  // Shake effect
  shake: {
    '0%, 100%': { transform: 'translateX(0)' },
    '25%': { transform: `translateX(-${motionProperties.translate.sm})` },
    '75%': { transform: `translateX(${motionProperties.translate.sm})` },
  },
} as const

/**
 * Helpers para criar animações
 */
export const animationHelpers = {
  // Criar transição simples
  transition: (
    property: string | string[],
    duration: keyof typeof animationDurations = 'base',
    easing: keyof typeof animationEasings = 'base',
  ) => {
    const props = Array.isArray(property) ? property.join(', ') : property
    return `${props} ${animationDurations[duration]} ${animationEasings[easing]}`
  },

  // Aplicar z-index semântico
  zIndex: (layer: keyof typeof zLayers) => ({
    zIndex: zLayers[layer],
  }),

  // Aplicar animação de entrada
  enterAnimation: (type: keyof typeof commonAnimations) => ({
    '@keyframes enter': commonAnimations[type],
    animation: `enter ${animationDurations.base} ${animationEasings.decelerate}`,
  }),

  // Aplicar animação de saída
  exitAnimation: (type: keyof typeof commonAnimations) => ({
    '@keyframes exit': commonAnimations[type],
    animation: `exit ${animationDurations.base} ${animationEasings.accelerate}`,
  }),
} as const

/**
 * Mixins de animação para componentes específicos
 */
export const componentAnimations = {
  // Animações de botão
  button: {
    hover: {
      transition: animationHelpers.transition(['background-color', 'box-shadow'], 'quick'),
      '&:hover': {
        transform: `translateY(-${motionProperties.translate.sm})`,
      },
    },

    pressed: {
      '&:active': {
        transform: `scale(${motionProperties.scale.sm})`,
        transition: animationHelpers.transition('transform', 'instant'),
      },
    },
  },

  // Animações de modal
  modal: {
    backdrop: {
      ...animationHelpers.enterAnimation('fadeIn'),
    },

    content: {
      ...animationHelpers.enterAnimation('scaleIn'),
      ...animationHelpers.zIndex('modal'),
    },
  },

  // Animações de tooltip
  tooltip: {
    enter: {
      ...animationHelpers.enterAnimation('slideInUp'),
      ...animationHelpers.zIndex('dropdown'),
    },

    exit: {
      ...animationHelpers.exitAnimation('fadeOut'),
    },
  },

  // Animações de notificação
  notification: {
    enter: {
      ...animationHelpers.enterAnimation('slideInRight'),
      ...animationHelpers.zIndex('notification'),
    },

    exit: {
      ...animationHelpers.exitAnimation('slideInRight'),
    },
  },
} as const

export type ZLayer = keyof typeof zLayers
export type AnimationDuration = keyof typeof animationDurations
export type AnimationEasing = keyof typeof animationEasings
export type CommonAnimation = keyof typeof commonAnimations
