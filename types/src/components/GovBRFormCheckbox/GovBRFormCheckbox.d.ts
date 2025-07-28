import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { type GovBRCheckboxProps } from '../GovBRCheckbox/GovBRCheckbox'
export interface GovBRFormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends Omit<GovBRCheckboxProps, 'checked' | 'name'> {
  name: TName
  control: ControllerProps<TFieldValues, TName>['control']
  rules?: ControllerProps<TFieldValues, TName>['rules']
  required?: boolean
}
export declare function GovBRFormCheckbox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  required,
  ...govBRCheckboxProps
}: Readonly<GovBRFormCheckboxProps<TFieldValues, TName>>): import('react/jsx-runtime').JSX.Element
export default GovBRFormCheckbox
//# sourceMappingURL=GovBRFormCheckbox.d.ts.map
