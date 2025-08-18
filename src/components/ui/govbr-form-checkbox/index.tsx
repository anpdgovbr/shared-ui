'use client'
import { iconMap } from '@helpers/iconMap'
import Stack from '@mui/material/Stack'
import classNames from 'classnames'
import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRCheckbox } from '../govbr-checkbox'
import type { GovBRFormCheckboxProps } from './types'

export function GovBRFormCheckbox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  name,
  control,
  rules,
  required,
  ...govBRCheckboxProps
}: Readonly<GovBRFormCheckboxProps<TFieldValues, TName>>) {
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
        <Stack>
          <GovBRCheckbox
            {...govBRCheckboxProps}
            id={name}
            {...field}
            checked={!!field.value}
            status={fieldState.error ? 'invalid' : govBRCheckboxProps.status}
          />
          {fieldState.error && (
            <span className={classNames('feedback', 'invalid')} role="alert">
              {iconMap['Error']}
              {fieldState.error.message}
            </span>
          )}
        </Stack>
      )}
    />
  )
}

GovBRFormCheckbox.displayName = 'GovBRFormCheckbox'
