import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { TextareaHTMLAttributes } from 'react'

export interface GovBRTextAreaProps
  extends SharedUIComponentProps,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  /** Label do textarea */
  label: string
  /** ID único do textarea */
  id: string
  /** Texto de placeholder */
  placeholder?: string
  /** Estado de desabilitado */
  disabled?: boolean
  /** Status visual do componente */
  status?: 'success' | 'danger' | 'warning' | 'info'
  /** Texto de ajuda/erro */
  helperText?: string
  /** Máximo de caracteres permitidos */
  maxLength?: number
  /** Número de linhas visíveis */
  rows?: number
  /** Número de colunas */
  cols?: number
  /** Valor controlado */
  value?: string
  /** Callback para mudanças */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** Exibir contador de caracteres */
  showCounter?: boolean
  /** Tornar o campo obrigatório */
  required?: boolean
}
