'use client'

import React from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import GovBRInput from '../GovBRInput/GovBRInput.js' // ajuste o caminho
import type { GovBRInputProps } from '../GovBRInput/GovBRInput.js'

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
 * Propriedades para o componente FormGovBRInput.
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
interface FormGovBRInputProps<
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
   * <FormGovBRInput
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
   * <FormGovBRInput
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
   * <FormGovBRInput
   *  name="campo"
   * control={control}
   * required={true} // Usando mensagem padrão
   * />
   * <FormGovBRInput
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
 * @param props Propriedades do componente FormGovBRInput.
 * @returns Elemento React para campo de formulário integrado ao react-hook-form.
 */
export function FormGovBRInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  required,
  label,
  ...govbrInputProps
}: Readonly<FormGovBRInputProps<TFieldValues, TName>>) {
  /**
   * Aplica regras de validação ao campo, incluindo a obrigatoriedade se necessário.
   * Se `required` for uma string, usa como mensagem personalizada; se for booleano,
   * usa a mensagem padrão "Campo obrigatório".
   * @remarks
   * As regras de validação são passadas diretamente para o `Controller` do react-hook-form,
   * permitindo que o campo seja validado conforme as regras definidas.
   * @param required Se booleano, aplica a regra de obrigatoriedade com mensagem padrão; se string, usa como mensagem personalizada.
   * @returns Regras finais de validação, incluindo a obrigatoriedade se necessário.
   * @example
   * ```tsx
   * const rules = {
   *   minLength: { value: 3, message: 'Mínimo 3
   * caracteres' },
   * required: 'Campo obrigatório'
   * }
   * ```
   */
  const finalRules = required
    ? {
        ...rules,
        required: typeof required === 'string' ? required : 'Campo obrigatório',
      }
    : rules

  /**
   * Renderiza o componente GovBRInput dentro do Controller do react-hook-form.
   * O `Controller` gerencia o estado do campo e aplica as regras de validação
   * definidas.
   * @remarks
   * O componente GovBRInput recebe as propriedades do campo, incluindo o rótulo,
   * o estado de erro e a mensagem de feedback. Ele também aplica a obrigatoriedade
   * se necessário, exibindo um asterisco vermelho (*) ao lado do rótulo se o campo for obrigatório.
   * O estado do campo é gerenciado pelo react-hook-form, permitindo que o componente
   * seja facilmente integrado a formulários complexos.
   * @returns Elemento React que representa o campo de entrada integrado ao react-hook-form.
   * @example
   * ```tsx
   * <FormGovBRInput
   * name="campo"
   * control={control}
   * rules={{ required: 'Campo obrigatório' }}
   * label="Nome"
   * required
   * placeholder="Digite seu nome"
   * status="info"
   * feedbackMessage="Campo obrigatório"
   * startIcon={<PersonIcon />}
   * endButtonIcon={<SearchIcon />}
   * onEndButtonClick={() => alert('Buscar')}
   * />
   * ```
   *
   */
  return (
    <Controller
      name={name}
      control={control}
      rules={finalRules}
      render={({ field, fieldState }) => (
        <GovBRInput
          {...field}
          {...govbrInputProps}
          required={typeof required === 'boolean' ? required : true}
          label={
            <>
              {label}
              {(finalRules?.required || fieldState.error?.type === 'required') && (
                <span style={{ color: 'var(--danger)' }}> *</span>
              )}
            </>
          }
          status={fieldState.error ? 'danger' : govbrInputProps.status}
          feedbackMessage={fieldState.error?.message ?? govbrInputProps.feedbackMessage}
        />
      )}
    />
  )
}

/**
 * Exportação padrão do componente FormGovBRInput.
 */
export default FormGovBRInput
