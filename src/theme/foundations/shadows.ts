// src/theme/foundations/shadows.ts

/**
 * Sombras baseadas nos tokens do GovBR Design System
 * Referência: @govbr-ds/core/dist/core-tokens.min.css
 *
 * Tokens mapeados:
 * - --shadow-* (níveis de elevação e sombras)
 * - --shadow-color-* (cores das sombras)
 */

/**
 * Sombras do GovBR-DS organizadas por nível de elevação
 * Seguem a especificação Material Design adaptada para o Gov.br
 *
 * Todos os valores incluem fallbacks seguros para evitar erros de runtime
 */
export const shadows: readonly string[] = [
  'none', // 0 - Sem sombra
  'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))', // 1
  'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))', // 2
  'var(--shadow-level-3, 0px 6px 12px rgba(0, 0, 0, 0.14))', // 3
  'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // 4
  'var(--shadow-level-5, 0px 10px 20px rgba(0, 0, 0, 0.18))', // 5
  'var(--shadow-level-6, 0px 12px 24px rgba(0, 0, 0, 0.2))', // 6
  'var(--shadow-level-7, 0px 14px 28px rgba(0, 0, 0, 0.22))', // 7
  'var(--shadow-level-8, 0px 16px 32px rgba(0, 0, 0, 0.24))', // 8
  'var(--shadow-level-9, 0px 18px 36px rgba(0, 0, 0, 0.26))', // 9
  'var(--shadow-level-10, 0px 20px 40px rgba(0, 0, 0, 0.28))', // 10
  'var(--shadow-level-11, 0px 22px 44px rgba(0, 0, 0, 0.3))', // 11
  'var(--shadow-level-12, 0px 24px 48px rgba(0, 0, 0, 0.32))', // 12
  'var(--shadow-level-13, 0px 26px 52px rgba(0, 0, 0, 0.34))', // 13
  'var(--shadow-level-14, 0px 28px 56px rgba(0, 0, 0, 0.36))', // 14
  'var(--shadow-level-15, 0px 30px 60px rgba(0, 0, 0, 0.38))', // 15
  'var(--shadow-level-16, 0px 32px 64px rgba(0, 0, 0, 0.4))', // 16
  'var(--shadow-level-17, 0px 34px 68px rgba(0, 0, 0, 0.42))', // 17
  'var(--shadow-level-18, 0px 36px 72px rgba(0, 0, 0, 0.44))', // 18
  'var(--shadow-level-19, 0px 38px 76px rgba(0, 0, 0, 0.46))', // 19
  'var(--shadow-level-20, 0px 40px 80px rgba(0, 0, 0, 0.48))', // 20
  'var(--shadow-level-21, 0px 42px 84px rgba(0, 0, 0, 0.5))', // 21
  'var(--shadow-level-22, 0px 44px 88px rgba(0, 0, 0, 0.52))', // 22
  'var(--shadow-level-23, 0px 46px 92px rgba(0, 0, 0, 0.54))', // 23
  'var(--shadow-level-24, 0px 48px 96px rgba(0, 0, 0, 0.56))', // 24 - Máxima elevação do Material Design
] as const

/**
 * Sombras contextuais organizadas por função de uso
 * Facilitam a aplicação semântica das sombras nos componentes
 */
export const contextualShadows = {
  surface: {
    // Superfícies de conteúdo
    paper: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))', // Cards e papéis
    raised: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))', // Elementos elevados
    floating: 'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // Elementos flutuantes
  },

  interactive: {
    // Elementos interativos
    button: {
      rest: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))', // Botão em repouso
      hover: 'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // Botão hover
      pressed: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))', // Botão pressionado
    },
    fab: {
      rest: 'var(--shadow-level-6, 0px 12px 24px rgba(0, 0, 0, 0.2))', // FAB em repouso
      hover: 'var(--shadow-level-8, 0px 16px 32px rgba(0, 0, 0, 0.24))', // FAB hover
      pressed: 'var(--shadow-level-12, 0px 24px 48px rgba(0, 0, 0, 0.32))', // FAB pressionado
    },
  },

  navigation: {
    // Elementos de navegação
    appBar: 'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // Barra de aplicação
    drawer: 'var(--shadow-level-16, 0px 32px 64px rgba(0, 0, 0, 0.4))', // Menu lateral
    bottomNav: 'var(--shadow-level-8, 0px 16px 32px rgba(0, 0, 0, 0.24))', // Navegação inferior
  },

  modal: {
    // Elementos modais e overlays
    dialog: 'var(--shadow-level-24, 0px 48px 96px rgba(0, 0, 0, 0.56))', // Diálogos
    popover: 'var(--shadow-level-8, 0px 16px 32px rgba(0, 0, 0, 0.24))', // Popovers
    tooltip: 'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // Tooltips
    menu: 'var(--shadow-level-8, 0px 16px 32px rgba(0, 0, 0, 0.24))', // Menus dropdown
  },

  form: {
    // Elementos de formulário
    input: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))', // Campos de entrada
    inputFocus: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))', // Campos focados
    dropdown: 'var(--shadow-level-4, 0px 8px 16px rgba(0, 0, 0, 0.16))', // Dropdowns
  },

  // Sombras especiais
  inset: 'inset 0 1px 2px var(--shadow-color-base, rgba(0, 0, 0, 0.1))', // Sombra interna
  outline: '0 0 0 2px var(--focus, #1351B4)', // Outline de foco

  // Estados específicos
  disabled: 'none', // Elementos desabilitados
  error: '0 0 0 2px var(--feedback-error-vivid, #D04F4F)', // Estado de erro
  success: '0 0 0 2px var(--feedback-success-vivid, #168821)', // Estado de sucesso
  warning: '0 0 0 2px var(--feedback-warning-vivid, #F29F05)', // Estado de aviso
}

/**
 * Cores das sombras baseadas nos tokens GovBR
 * Permitem customização da cor da sombra sem alterar a elevação
 */
export const shadowColors = {
  base: 'var(--shadow-color-base, rgba(0, 0, 0, 0.1))', // Cor padrão
  light: 'var(--shadow-color-light, rgba(0, 0, 0, 0.05))', // Cor clara
  dark: 'var(--shadow-color-dark, rgba(0, 0, 0, 0.2))', // Cor escura
  colored: {
    primary: 'var(--shadow-color-primary, rgba(19, 81, 180, 0.15))', // Sombra azul
    success: 'var(--shadow-color-success, rgba(22, 136, 33, 0.15))', // Sombra verde
    warning: 'var(--shadow-color-warning, rgba(242, 159, 5, 0.15))', // Sombra laranja
    error: 'var(--shadow-color-error, rgba(208, 79, 79, 0.15))', // Sombra vermelha
  },
}

/**
 * Criador de sombras customizadas
 * Permite criar sombras com cor e opacidade específicas usando color-mix
 */
export const createShadow = (
  x: number,
  y: number,
  blur: number,
  spread: number = 0,
  color: string = 'black',
  opacity: number = 0.1,
): string => {
  return `${x}px ${y}px ${blur}px ${spread}px color-mix(in srgb, ${color} ${opacity * 100}%, transparent)`
}

/**
 * Utilitários para sombras responsivas
 * Permite ajustar sombras baseado no breakpoint
 */
export const responsiveShadows = {
  mobile: {
    subtle: 'var(--shadow-level-1, 0px 1px 2px rgba(0, 0, 0, 0.1))',
    moderate: 'var(--shadow-level-2, 0px 2px 4px rgba(0, 0, 0, 0.12))',
    strong: 'var(--shadow-level-4, 0px 4px 8px rgba(0, 0, 0, 0.16))',
  },
  tablet: {
    subtle: 'var(--shadow-level-2, 0px 2px 4px rgba(0, 0, 0, 0.12))',
    moderate: 'var(--shadow-level-4, 0px 4px 8px rgba(0, 0, 0, 0.16))',
    strong: 'var(--shadow-level-8, 0px 8px 16px rgba(0, 0, 0, 0.24))',
  },
  desktop: {
    subtle: 'var(--shadow-level-4, 0px 4px 8px rgba(0, 0, 0, 0.16))',
    moderate: 'var(--shadow-level-8, 0px 8px 16px rgba(0, 0, 0, 0.24))',
    strong: 'var(--shadow-level-16, 0px 16px 32px rgba(0, 0, 0, 0.4))',
  },
}
