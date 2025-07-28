import { SharedUIComponentProps } from 'src/types/SharedUIComponentProps'
export interface GovBRSwitchProps extends SharedUIComponentProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  disabled?: boolean
}
//# sourceMappingURL=types.d.ts.map
