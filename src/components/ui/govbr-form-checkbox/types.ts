import type { Control, ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

import type { GovBRCheckboxProps } from '../govbr-checkbox'

/**
 * Props para o componente GovBRFormCheckbox.
 * Estende as GovBRCheckboxProps e adiciona as props do React Hook Form.
 */
export type GovBRFormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<
  GovBRCheckboxProps,
  'name' | 'defaultValue' | 'checked' | 'onChange' | 'label' // Omit label to redefine it as required
> & {
  name: TName
  control: Control<TFieldValues>
  rules?: ControllerProps<TFieldValues, TName>['rules']
  label: React.ReactNode // Label is now required
}
