// src/theme/foundations/spacing.ts

/**
 * Sistema de espaçamentos baseado nos tokens do GovBR Design System
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 *
 * Tokens mapeados:
 * - --spacing-scale-* (escala de espaçamento padrão)
 * - --spacing-gutter (margens de contêiner)
 */

// Função para customizar espaçamento usando tokens GovBR
export const createSpacing = () => {
  // Mapeamento de valores usando tokens CSS do GovBR-DS
  const spacingMap = {
    0: 0,
    0.5: 'var(--spacing-scale-half, 0.5rem)', // 0.286rem (4px)
    1: 'var(--spacing-scale-base, 1rem)', // 0.571rem (8px)
    1.5: 'var(--spacing-scale-1xh, 0.75rem)', // 0.857rem (12px)
    2: 'var(--spacing-scale-2x, 2rem)', // 1.142rem (16px)
    2.5: 'var(--spacing-scale-2xh, 1.714rem)', // 1.714rem (24px)
    3: 'var(--spacing-scale-3x, 3rem)', // 1.714rem (24px) - mesmo valor que 2xh
    3.5: 'var(--spacing-scale-3xh, 2rem)', // 2rem (28px)
    4: 'var(--spacing-scale-4x, 2.857rem)', // 2.286rem (32px)
    5: 'var(--spacing-scale-5x, 2.857rem)', // 2.857rem (40px)
    6: 'var(--spacing-scale-6x, 6rem)', // 3.428rem (48px)
    7: 'var(--spacing-scale-7x, 7rem)', // 4rem (56px)
    8: 'var(--spacing-scale-8x, 8rem)', // 4.571rem (64px)
    9: 'var(--spacing-scale-9x, 9rem)', // 5.142rem (72px)
    10: 'var(--spacing-scale-10x, 10rem)', // 5.714rem (80px)
    11: 'var(--spacing-scale-11x, 11rem)', // 6.285rem (88px)
    12: 'var(--spacing-scale-12x, 12rem)', // 6.857rem (96px)
  }

  return (factor: number | string): string => {
    if (typeof factor === 'string') {
      return factor
    }

    // Se existe no mapeamento, usa o token
    if (factor in spacingMap) {
      const value = spacingMap[factor as keyof typeof spacingMap]
      return typeof value === 'number' ? `${value}px` : value
    }

    // Para valores não mapeados, usa cálculo baseado no token base
    // 1 unidade = 8px (--spacing-scale-base)
    return `calc(${factor} * var(--spacing-scale-base, 1rem))`
  }
}

/**
 * Valores de spacing específicos do GovBR para uso direto
 */
export const govbrSpacing = {
  // Spacing padrão da escala
  none: 0,
  xs: 'var(--spacing-scale-half, 0.5rem)', // 4px
  sm: 'var(--spacing-scale-base, 1rem)', // 8px
  md: 'var(--spacing-scale-2x, 2rem)', // 16px
  lg: 'var(--spacing-scale-3xh, 2rem)', // 28px
  xl: 'var(--spacing-scale-5x, 5rem)', // 40px
  '2xl': 'var(--spacing-scale-8x, 8rem)', // 64px
  '3xl': 'var(--spacing-scale-12x, 12rem)', // 96px

  // Spacing específico para componentes
  component: {
    padding: {
      sm: 'var(--spacing-scale-base, 1rem)', // 8px
      md: 'var(--spacing-scale-2x, 2rem)', // 16px
      lg: 'var(--spacing-scale-3xh, 2rem)', // 28px
    },
    margin: {
      sm: 'var(--spacing-scale-2x, 2rem)', // 16px
      md: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
      lg: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    },
    gap: {
      sm: 'var(--spacing-scale-base, 1rem)', // 8px
      md: 'var(--spacing-scale-2x, 2rem)', // 16px
      lg: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
    },
  },

  // Container gutters
  gutter: {
    mobile: 'var(--spacing-gutter, 1rem)', // 16px em mobile
    desktop: 'var(--spacing-gutter, 1.5rem)', // 24px em desktop (breakpoint dependente)
  },

  // Spacing para formulários
  form: {
    fieldGap: 'var(--spacing-scale-2xh, 1.714rem)', // 24px entre campos
    labelGap: 'var(--spacing-scale-base, 1rem)', // 8px entre label e input
    helperGap: 'var(--spacing-scale-half, 0.5rem)', // 4px entre input e helper
    groupGap: 'var(--spacing-scale-4x, 2.857rem)', // 32px entre grupos
  },

  // Spacing para cards e containers
  card: {
    padding: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
    gap: 'var(--spacing-scale-2x, 2rem)', // 16px
    margin: 'var(--spacing-scale-3xh, 2rem)', // 28px
  },

  // Spacing para botões
  button: {
    padding: {
      horizontal: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
      vertical: 'var(--spacing-scale-1xh, 0.75rem)', // 12px
    },
    gap: 'var(--spacing-scale-base, 1rem)', // 8px entre ícone e texto
    group: 'var(--spacing-scale-1xh, 0.75rem)', // 12px entre botões
  },

  // Spacing para navegação
  navigation: {
    itemGap: 'var(--spacing-scale-2x, 2rem)', // 16px
    sectionGap: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    indent: 'var(--spacing-scale-2xh, 1.714rem)', // 24px para subníveis
  },
}

/**
 * Breakpoints de spacing específicos para diferentes tamanhos de tela
 * Baseado nos breakpoints do GovBR-DS
 */
export const spacingBreakpoints = {
  // Mobile first - valores padrão
  mobile: {
    container: 'var(--spacing-scale-2x, 2rem)', // 16px
    section: 'var(--spacing-scale-3xh, 2rem)', // 28px
    component: 'var(--spacing-scale-2x, 2rem)', // 16px
  },

  // Tablet
  tablet: {
    container: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
    section: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    component: 'var(--spacing-scale-2xh, 1.714rem)', // 24px
  },

  // Desktop
  desktop: {
    container: 'var(--spacing-scale-4x, 2.857rem)', // 32px
    section: 'var(--spacing-scale-5x, 5rem)', // 40px
    component: 'var(--spacing-scale-3xh, 2rem)', // 28px
  },
}
