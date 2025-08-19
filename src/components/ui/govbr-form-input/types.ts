import type { Control, ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

import type { GovBRInputProps } from '../govbr-input/types'

/**
 * Props para o componente GovBRFormInput.
 * Estende as GovBRInputProps e adiciona as props do React Hook Form.
 */
export type GovBRFormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<GovBRInputProps, 'name' | 'defaultValue' | 'value' | 'onChange'> & {
  name: TName
  control: Control<TFieldValues>
  rules?: ControllerProps<TFieldValues, TName>['rules']
  errorMessage?: string
}
