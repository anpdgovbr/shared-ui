import type { InputHTMLAttributes } from 'react'
import type { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

export interface GovBRCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    SharedUIComponentProps {
  label?: string
  status?: 'valid' | 'invalid'
  indeterminate?: boolean
  hiddenLabel?: boolean
}
