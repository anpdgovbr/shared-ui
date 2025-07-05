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
 */
type WithoutRequired<T> = Omit<T, 'required'>

/**
 * Propriedades para o componente FormGovBRInput.
 *
 * @template TFieldValues Tipo dos valores dos campos do formulário.
 * @template TName Nome do campo controlado pelo formulário.
 */
interface FormGovBRInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends WithoutRequired<GovBRInputProps> {
  /**
   * Nome do campo no formulário.
   */
  name: TName
  /**
   * Instância de controle do react-hook-form.
   */
  control: ControllerProps<TFieldValues, TName>['control']
  /**
   * Regras de validação do campo.
   */
  rules?: ControllerProps<TFieldValues, TName>['rules']
  /**
   * Torna o campo obrigatório.
   * - Se boolean: usa mensagem padrão "Campo obrigatório".
   * - Se string: usa como mensagem customizada.
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
  // Gera rules finais baseando no required
  const finalRules = required
    ? {
        ...rules,
        required: typeof required === 'string' ? required : 'Campo obrigatório',
      }
    : rules

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
