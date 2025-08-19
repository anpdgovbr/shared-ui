'use client'
import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRInput } from '../govbr-input'
import type { GovBRFormInputProps } from './types'

export function GovBRFormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(props: Readonly<GovBRFormInputProps<TFieldValues, TName>>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, control, rules, errorMessage, strictgovbr: _forcedStrictGovbr, ...rest } = props
  // Const usado para forçar o tipo literal `false` no JSX e satisfazer a união de tipos
  const STRICT_FALSE = false as const
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <GovBRInput
          strictgovbr={STRICT_FALSE} // Always false for this component; cast para satisfazer a união de tipos
          {...rest} // Passa props como label, placeholder, etc.
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          inputRef={field.ref}
          error={!!errorMessage}
          helperText={errorMessage}
        />
      )}
    />
  )
}
