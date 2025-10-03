// src/theme/foundations/spacing.ts

/**
 * Sistema de espaçamentos baseado nos tokens do GovBR Design System
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 *
 * Tokens mapeados:
 * - --spacing-scale-* (escala de espaçamento padrão)
 * - --spacing-gutter (margens de contêiner)
 */

/**
 * Sistema de espaçamentos otimizado baseado nos tokens do GovBR Design System
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 *
 * OTIMIZAÇÕES:
 * - Escala mais granular para composições flexíveis
 * - Tokens organizados por uso (layout, componentes, micro-spacing)
 * - Fallbacks mais consistentes
 */

// Função para customizar espaçamento usando tokens GovBR
export const createSpacing = () => {
  // Mapeamento explícito usando Map para evitar ambiguidades com chaves numéricas de objetos
  const spacingEntries: Array<[number, string | number]> = [
    [0, 0],
    [0.25, 'var(--spacing-scale-quarter, 0.25rem)'],
    [0.5, 'var(--spacing-scale-half, 0.5rem)'],
    [0.75, 'var(--spacing-scale-3quarter, 0.75rem)'],
    [1, 'var(--spacing-scale-base, 1rem)'],
    [1.5, 'var(--spacing-scale-1xh, 1.5rem)'],
    [2, 'var(--spacing-scale-2x, 2rem)'],
    [2.5, 'var(--spacing-scale-2xh, 2.5rem)'],
    [3, 'var(--spacing-scale-3x, 3rem)'],
    [3.5, 'var(--spacing-scale-3xh, 3.5rem)'],
    [4, 'var(--spacing-scale-4x, 4rem)'],
    [5, 'var(--spacing-scale-5x, 5rem)'],
    [6, 'var(--spacing-scale-6x, 6rem)'],
    [8, 'var(--spacing-scale-8x, 8rem)'],
    [10, 'var(--spacing-scale-10x, 10rem)'],
    [12, 'var(--spacing-scale-12x, 12rem)'],
  ]

  const spacingMap = new Map<number, string | number>(spacingEntries)

  return (factor: number | string): string => {
    // Se já passou uma string (ex: "8px" ou "1rem"), respeita e retorna
    if (typeof factor === 'string') {
      return factor
    }

    // Rejeita valores inválidos de forma defensiva
    if (!Number.isFinite(factor)) {
      // comportamento conservador: retorna 0rem para evitar quebras
      return '0rem'
    }

    // Busca direta no Map
    if (spacingMap.has(factor)) {
      const value = spacingMap.get(factor)!
      return typeof value === 'number' ? `${value}px` : value
    }

    // Lida com imprecisão de ponto flutuante (ex: 0.30000000000000004)
    const normalized = Number(Number(factor).toFixed(6))
    if (spacingMap.has(normalized)) {
      const value = spacingMap.get(normalized)!
      return typeof value === 'number' ? `${value}px` : value
    }

    // Fallback: manter compatibilidade com implementação anterior
    // Interpreta o número como valor em rem (sistema adotado no projeto)
    return `${factor}rem`
  }
}

/**
 * Valores de spacing específicos do GovBR otimizados para composições
 */
export const govbrSpacing = {
  // Spacing micro - para ajustes finos
  none: 0,
  micro: 'var(--spacing-scale-quarter, 0.25rem)', // 4px
  xs: 'var(--spacing-scale-half, 0.5rem)', // 8px
  sm: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px
  md: 'var(--spacing-scale-base, 1rem)', // 16px
  lg: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
  xl: 'var(--spacing-scale-2x, 2rem)', // 32px
  '2xl': 'var(--spacing-scale-3x, 3rem)', // 48px
  '3xl': 'var(--spacing-scale-4x, 4rem)', // 64px

  // Spacing específico para diferentes contextos
  layout: {
    // Para containers principais
    section: {
      mobile: 'var(--spacing-scale-2x, 2rem)', // 32px
      tablet: 'var(--spacing-scale-3x, 3rem)', // 48px
      desktop: 'var(--spacing-scale-4x, 4rem)', // 64px
    },
    // Para margens de página
    page: {
      mobile: 'var(--spacing-scale-base, 1rem)', // 16px
      tablet: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
      desktop: 'var(--spacing-scale-2x, 2rem)', // 32px
    },
  },

  component: {
    // Paddings internos de componentes
    padding: {
      tight: 'var(--spacing-scale-half, 0.5rem)', // 8px
      cozy: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px
      comfortable: 'var(--spacing-scale-base, 1rem)', // 16px
      spacious: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
    },
    // Margins entre componentes
    margin: {
      tight: 'var(--spacing-scale-half, 0.5rem)', // 8px
      default: 'var(--spacing-scale-base, 1rem)', // 16px
      loose: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
      spacious: 'var(--spacing-scale-2x, 2rem)', // 32px
    },
    // Gaps em layouts flex/grid
    gap: {
      tight: 'var(--spacing-scale-half, 0.5rem)', // 8px
      default: 'var(--spacing-scale-base, 1rem)', // 16px
      loose: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
    },
  },

  // Typography spacing - separado do spacing de layout
  typography: {
    // Spacing entre elementos tipográficos
    paragraph: 'var(--spacing-scale-base, 1rem)', // 16px entre parágrafos
    section: 'var(--spacing-scale-1xh, 1.5rem)', // 24px entre seções
    heading: {
      // Margins após headings
      micro: 'var(--spacing-scale-quarter, 0.25rem)', // 4px (h6)
      small: 'var(--spacing-scale-half, 0.5rem)', // 8px (h4, h5)
      medium: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px (h3)
      large: 'var(--spacing-scale-base, 1rem)', // 16px (h1, h2)
    },
  },

  // Formulários - spacing específico
  form: {
    fieldGap: 'var(--spacing-scale-base, 1rem)', // 16px entre campos (era 24px)
    labelGap: 'var(--spacing-scale-half, 0.5rem)', // 8px entre label e input
    helperGap: 'var(--spacing-scale-quarter, 0.25rem)', // 4px entre input e helper
    groupGap: 'var(--spacing-scale-1xh, 1.5rem)', // 24px entre grupos (era 32px)
    buttonGap: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px entre botões
  },

  // Cards e containers
  card: {
    padding: 'var(--spacing-scale-base, 1rem)', // 16px (era 24px)
    gap: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px (era 16px)
    margin: 'var(--spacing-scale-base, 1rem)', // 16px (era 28px)
  },

  // Botões
  button: {
    padding: {
      horizontal: 'var(--spacing-scale-base, 1rem)', // 16px (era 24px)
      vertical: 'var(--spacing-scale-half, 0.5rem)', // 8px (era 12px)
    },
    gap: 'var(--spacing-scale-half, 0.5rem)', // 8px entre ícone e texto
    group: 'var(--spacing-scale-half, 0.5rem)', // 8px entre botões (era 12px)
  },

  // Navegação
  navigation: {
    itemGap: 'var(--spacing-scale-half, 0.5rem)', // 8px (era 16px)
    sectionGap: 'var(--spacing-scale-base, 1rem)', // 16px (era 32px)
    indent: 'var(--spacing-scale-base, 1rem)', // 16px para subníveis (era 24px)
  },
}

/**
 * Breakpoints de spacing otimizados para diferentes tamanhos de tela
 * Valores mais conservadores e práticos para uso real
 */
export const spacingBreakpoints = {
  // Mobile first - valores menores
  mobile: {
    container: 'var(--spacing-scale-base, 1rem)', // 16px
    section: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
    component: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px
  },

  // Tablet - valores moderados
  tablet: {
    container: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
    section: 'var(--spacing-scale-2x, 2rem)', // 32px
    component: 'var(--spacing-scale-base, 1rem)', // 16px
  },

  // Desktop - valores mais espaçosos
  desktop: {
    container: 'var(--spacing-scale-2x, 2rem)', // 32px
    section: 'var(--spacing-scale-3x, 3rem)', // 48px
    component: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
  },
}

/**
 * Utilitários para espaçamentos compostos
 * Facilita uso em componentes que precisam de spacing inteligente
 */
export const spacingUtils = {
  // Stack spacing - para elementos empilhados verticalmente
  stack: {
    tight: 'var(--spacing-scale-quarter, 0.25rem)', // 4px
    default: 'var(--spacing-scale-half, 0.5rem)', // 8px
    loose: 'var(--spacing-scale-base, 1rem)', // 16px
    spacious: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
  },

  // Inline spacing - para elementos lado a lado
  inline: {
    tight: 'var(--spacing-scale-quarter, 0.25rem)', // 4px
    default: 'var(--spacing-scale-half, 0.5rem)', // 8px
    loose: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px
  },

  // Padding responsivo baseado em containers
  responsive: {
    // xs: mobile, sm: tablet, md: desktop
    padding: {
      xs: 'var(--spacing-scale-half, 0.5rem)',
      sm: 'var(--spacing-scale-3quarter, 0.75rem)',
      md: 'var(--spacing-scale-base, 1rem)',
      lg: 'var(--spacing-scale-1xh, 1.5rem)',
      xl: 'var(--spacing-scale-2x, 2rem)',
    },
  },

  // Margins para diferentes contextos semânticos
  semantic: {
    // Após headers
    afterHeader: 'var(--spacing-scale-base, 1rem)', // 16px
    // Antes de footers
    beforeFooter: 'var(--spacing-scale-1xh, 1.5rem)', // 24px
    // Entre seções principais
    betweenSections: 'var(--spacing-scale-2x, 2rem)', // 32px
    // Para separar grupos relacionados
    groupSeparation: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px
  },
}
