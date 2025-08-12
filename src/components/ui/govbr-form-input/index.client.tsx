'use client'

import React from 'react'
import { Controller } from 'react-hook-form'
import type { FieldValues, FieldPath } from 'react-hook-form'
import { GovBRInput } from '../govbr-input'
import type { GovBRFormInputProps } from './types'

export function GovBRFormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  required,
  label,
  ...govbrInputProps
}: Readonly<GovBRFormInputProps<TFieldValues, TName>>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <GovBRInput
          {...govbrInputProps}
          {...field}
          label={label}
          required={required}
          status={fieldState.error ? 'danger' : undefined}
          feedbackMessage={fieldState.error?.message}
        />
      )}
    />
  )
}
