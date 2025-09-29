import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'

/**
 * Propriedades do componente de indicador/animação de carregamento GovBR.
 *
 * Esta interface estende SharedUIComponentProps para herdar a prop `strictgovbr`
 * e outras convenções compartilhadas pela biblioteca.
 *
 * O componente suporta três variantes principais:
 * - "default": indicador inline padrão.
 * - "modal": exibe um modal com backdrop (possui comportamento de dismiss).
 * - "skeleton": mostra placeholders de carregamento, pode cobrir a tela inteira com `fullScreen`.
 */
export interface LoadingAnimationProps extends SharedUIComponentProps {
  /** Texto a ser exibido junto ao indicador. Padrão: "Carregando..." */
  text?: string

  /** Tempo (ms) até considerar timeout do carregamento. Padrão: 4000 */
  timeout?: number

  /** Callback executado quando ocorre timeout (após `timeout` ms) */
  onTimeout?: () => void

  /** Controla a visibilidade do componente. Padrão: true */
  isVisible?: boolean

  /** Habilita tentativa automática de recarregar após falha. */
  autoRetry?: boolean

  /** Mostra feedback visual e contador de tentativas quando autoRetry está ativo. */
  enableRetryFeedback?: boolean

  /** Variante de renderização do indicador: 'default' | 'modal' | 'skeleton' */
  variant?: 'default' | 'modal' | 'skeleton'

  /** Quando true, para a variante 'skeleton' ocupa toda a área visível (tela cheia). */
  fullScreen?: boolean // Nova prop para skeleton em tela cheia

  // Backdrop dismiss functionality

  /** Permite fechar o modal clicando no backdrop (apenas para variant 'modal'). */
  dismissible?: boolean // Permite fechar clicando fora (backdrop click)

  /** Callback chamado quando o usuário fecha pelo backdrop/dismiss. */
  onDismiss?: () => void // Callback chamado quando usuário clica fora

  /** Quando true, desabilita fechamento via tecla ESC. */
  disableEscapeKeyDown?: boolean // Permite fechar com tecla ESC

  // Gov.br DS specific props for strict mode

  /** Tamanho do indicador no modo strictgovbr (Gov.br DS): 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large' // Tamanhos do Gov.br DS

  // Progress loading support (Gov.br DS)

  /** Progresso numérico de 0 a 100 para indicadores que suportam porcentagem. */
  progress?: number // Progresso de 0 a 100 para loading com porcentagem

  /** Exibe texto da porcentagem quando true. */
  showProgress?: boolean // Se deve exibir o texto da porcentagem

  /**
   * Label ARIA customizada para o indicador de progresso.
   * Exemplo padrão: "carregando com {progress}%"
   */
  progressLabel?: string // Label customizada para acessibilidade (padrão: "carregando com {progress}%")
}
