import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'

/**
 * Severidade do Toast (baseado no Alert do MUI)
 */
export type ToastSeverity = 'success' | 'info' | 'warning' | 'error'

/**
 * Configuração de um Toast individual
 */
export interface Toast {
  /**
   * Mensagem exibida no toast
   */
  message: string

  /**
   * Severidade visual do toast (cor e ícone)
   * @default 'info'
   */
  severity?: ToastSeverity
}

/**
 * Contexto do Toaster - API para exibir toasts
 */
export interface ToasterCtx {
  /**
   * Exibe um toast na tela
   * @param toast - Configuração do toast
   */
  show: (toast: Toast) => void
}

/**
 * Props do ToasterProvider
 */
export interface ToasterProviderProps extends SharedUIComponentProps {
  /**
   * Elementos filhos que terão acesso ao contexto de toaster
   */
  children: React.ReactNode

  /**
   * Duração em ms antes do toast fechar automaticamente
   * @default 3500
   */
  autoHideDuration?: number

  /**
   * Posição do toast na tela
   * @default { vertical: 'bottom', horizontal: 'right' }
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
}
