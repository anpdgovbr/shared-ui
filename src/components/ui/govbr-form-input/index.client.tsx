'use client'

import React from 'react'
import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRInput } from '../govbr-input'
import type { GovBRFormInputProps } from './types'

export function GovBRFormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(props: Readonly<GovBRFormInputProps<TFieldValues, TName>>) {
  // Extraímos apenas as props necessárias e construímos um objeto limpo para o spread
  const { name, control, rules, required, label } = props

  const govbrInputProps: Record<string, unknown> = {
    ...(props as unknown as Record<string, unknown>),
  }
  // Remover propriedades que não devem ser repassadas
  delete govbrInputProps.name
  delete govbrInputProps.control
  delete govbrInputProps.rules
  delete govbrInputProps.required
  delete govbrInputProps.label
  delete govbrInputProps.strictgovbr

  // Const usado para forçar o literal booleano `false` e satisfazer a união de tipos do GovBRInput
  const STRICT_FALSE = false as const

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <GovBRInput
          strictgovbr={STRICT_FALSE} // Always false for this component
          {...govbrInputProps}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          inputRef={field.ref}
          label={label}
          required={required}
          error={!!fieldState.error} // Passa o estado de erro para o GovBRInput
          helperText={fieldState.error?.message} // Passa a mensagem de erro
        />
      )}
    />
  )
}
