'use client'
import FormHelperText from '@mui/material/FormHelperText'
import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRCheckbox } from '../govbr-checkbox'
import type { GovBRFormCheckboxProps } from './types'

export function GovBRFormCheckbox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({ name, control, rules, label, ...rest }: Readonly<GovBRFormCheckboxProps<TFieldValues, TName>>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        // Omitir props que causam conflito de tipo com FormControlLabelProps
        const { onBlur, onChange, value, ref } = field

        // Construímos um objeto de props compatível com GovBRCheckbox
        const checkboxProps = {
          id: name,
          label,
          ...rest,
          onBlur,
          onChange,
          checked: !!value,
          inputRef: ref,
        } as unknown as Parameters<typeof GovBRCheckbox>[0]

        return (
          <div>
            <GovBRCheckbox {...checkboxProps} />
            {fieldState.error && (
              <FormHelperText error sx={{ ml: '14px' }}>
                {fieldState.error.message}
              </FormHelperText>
            )}
          </div>
        )
      }}
    />
  )
}
