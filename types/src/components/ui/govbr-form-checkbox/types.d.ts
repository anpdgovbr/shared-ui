import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import type { GovBRCheckboxProps } from '../govbr-checkbox/types'
/**
 * Propriedades do componente GovBRFormCheckbox.
 */
export type GovBRFormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<GovBRCheckboxProps, 'checked' | 'name'> & {
  /**
   * Nome do campo no formulário.
   */
  name: TName
  /**
   * Controle do react-hook-form.
   */
  control: ControllerProps<TFieldValues, TName>['control']
  /**
   * Regras de validação.
   */
  rules?: ControllerProps<TFieldValues, TName>['rules']
  /**
   * Indica se o campo é obrigatório.
   * @default false
   */
  required?: boolean
}
//# sourceMappingURL=types.d.ts.map
