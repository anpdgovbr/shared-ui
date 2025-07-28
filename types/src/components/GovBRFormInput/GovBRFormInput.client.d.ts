import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import type { GovBRInputProps } from '../GovBRInput/GovBRInput'
/**
 * Remove a propriedade 'required' do tipo fornecido.
 *
 * @template T Tipo original do qual a propriedade 'required' será omitida.
 * @remarks
 * Esta utilidade é usada para criar um novo tipo que não inclui a propriedade 'required',
 * permitindo que o componente aceite outras propriedades sem a necessidade de especificar 'required'.
 * Isso é útil para evitar conflitos de tipos quando se utiliza o `Controller` do react-hook
 * -form, que já lida com a obrigatoriedade de forma diferente.
 * @param T Tipo original com a propriedade 'required'.
 * @returns Um novo tipo sem a propriedade 'required'.
 * @example
 * ```ts
 * type OriginalType = { name: string; required: boolean }
 * type NewType = WithoutRequired<OriginalType>
 * // // NewType será { name: string }
 * ```
 */
type WithoutRequired<T> = Omit<T, 'required'>
/**
 * Propriedades para o componente GovBRFormInput.
 *
 * @template TFieldValues Tipo dos valores dos campos do formulário.
 * @template TName Nome do campo controlado pelo formulário.
 * @remarks
 * Este componente é uma integração do GovBRInput com o react-hook-form, permitindo que campos
 * sejam facilmente controlados e validados dentro de um formulário gerenciado pelo react-hook-form.
 * Ele utiliza o `Controller` do react-hook-form para gerenciar o estado e as regras
 * de validação do campo de entrada.
 *
 */
export interface GovBRFormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends WithoutRequired<GovBRInputProps> {
  /**
   * Nome do campo no formulário, utilizado para identificar o valor no objeto de valores do react-hook-form.
   */
  name: TName
  /**
   * Instância de controle do react-hook-form.
   * @remarks
   * Deve ser passado o `control` do hook `useForm` do react-hook-form
   * para que o componente possa se integrar corretamente ao formulário.
   * @example
   * ```tsx
   * const { control } = useForm();
   * <GovBRFormInput
   *   name="campo"
   *  control={control}
   *  />
   * ```
   * @see {@link https://react-hook-form.com/docs/useform#Controller | Controller documentation}
   *
   */
  control: ControllerProps<TFieldValues, TName>['control']
  /**
   * Regras de validação do campo.
   * @remarks
   * As regras de validação são passadas diretamente para o `Controller` do react-hook
   * -form, permitindo que o campo seja validado conforme as regras definidas.
   * @example
   * ```tsx
   * <GovBRFormInput
   *  name="campo"
   * control={control}
   * rules={{ required: 'Campo obrigatório' }}
   * />
   * ```
   */
  rules?: ControllerProps<TFieldValues, TName>['rules']
  /**
   * Torna o campo obrigatório.
   * - Se boolean: usa mensagem padrão "Campo obrigatório".
   * - Se string: usa como mensagem customizada.
   * @remarks
   * Esta propriedade é opcional e, se definida, adiciona a regra de validação
   * "required" ao campo, garantindo que o usuário preencha o campo antes de enviar o formulário.
   * Se `true`, utiliza a mensagem padrão "Campo obrigatório". Se for uma string,
   * utiliza essa string como mensagem de erro personalizada.
   * @example
   * ```tsx
   * <GovBRFormInput
   *  name="campo"
   * control={control}
   * required={true} // Usando mensagem padrão
   * />
   * <GovBRFormInput
   * name="campo"
   * control={control}
   * required="Este campo é obrigatório" // Usando mensagem personalizada
   * />
   * ```
   * @default false
   * @see {@link https://react-hook-form.com/docs/useform#Controller | Controller documentation}
   * @see {@link https://react-hook-form.com/docs/useform#register | Register documentation}
   */
  required?: boolean | string
}
/**
 * Componente de formulário integrado ao react-hook-form para campos de entrada do GovBR.
 *
 * @template TFieldValues Tipo dos valores dos campos do formulário.
 * @template TName Nome do campo controlado pelo formulário.
 *
 * @param props Propriedades do componente GovBRFormInput.
 * @returns Elemento React para campo de formulário integrado ao react-hook-form.
 */
export declare function GovBRFormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  required,
  label,
  ...govbrInputProps
}: Readonly<GovBRFormInputProps<TFieldValues, TName>>): import('react/jsx-runtime').JSX.Element
/**
 * Exportação padrão do componente GovBRFormInput.
 */
export default GovBRFormInput
//# sourceMappingURL=GovBRFormInput.client.d.ts.map
