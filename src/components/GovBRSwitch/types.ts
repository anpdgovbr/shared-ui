export interface GovBRSwitchProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large' // novo
  labelPlacement?: 'start' | 'end' // novo
}
