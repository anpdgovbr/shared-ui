import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'

export interface GovBRTextAreaProps extends SharedUIComponentProps {
  label: string
  id: string
  placeholder?: string
  disabled?: boolean
  status?: 'success' | 'danger' | 'warning' | 'info'
  helperText?: string
  maxLength?: number
  rows?: number
  cols?: number
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
