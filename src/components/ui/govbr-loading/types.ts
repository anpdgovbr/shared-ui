import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'

export interface LoadingAnimationProps extends SharedUIComponentProps {
  text?: string
  timeout?: number
  onTimeout?: () => void
  isVisible?: boolean
  autoRetry?: boolean
  enableRetryFeedback?: boolean
  variant?: 'default' | 'modal' | 'skeleton'
  fullScreen?: boolean // Nova prop para skeleton em tela cheia

  // Backdrop dismiss functionality
  dismissible?: boolean // Permite fechar clicando fora (backdrop click)
  onDismiss?: () => void // Callback chamado quando usuário clica fora
  disableEscapeKeyDown?: boolean // Permite fechar com tecla ESC

  // Gov.br DS specific props for strict mode
  size?: 'small' | 'medium' | 'large' // Tamanhos do Gov.br DS

  // Progress loading support (Gov.br DS)
  progress?: number // Progresso de 0 a 100 para loading com porcentagem
  showProgress?: boolean // Se deve exibir o texto da porcentagem
  progressLabel?: string // Label customizada para acessibilidade (padrão: "carregando com {progress}%")
}
