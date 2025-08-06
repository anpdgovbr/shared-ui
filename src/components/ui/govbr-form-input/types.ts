import type { FieldValues, FieldPath, Control, RegisterOptions } from 'react-hook-form'
import type { GovBRInputProps } from '../govbr-input/types'

export interface GovBRFormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends Omit<GovBRInputProps, 'name'> {
  name: TName
  control: Control<TFieldValues>
  rules?: RegisterOptions<TFieldValues, TName>
}
