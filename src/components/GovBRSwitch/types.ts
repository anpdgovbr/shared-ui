import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'
export interface GovBRSwitchProps extends SharedUIComponentProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  size?: 'small' | 'medium' | 'large'
  labelPlacement?: 'start' | 'end' | 'top'
  disabled?: boolean
  textEnabled?: string
  textDisabled?: string
}
