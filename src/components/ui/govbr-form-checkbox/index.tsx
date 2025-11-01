'use client'

import FormHelperText from '@mui/material/FormHelperText'
import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRCheckbox } from '../govbr-checkbox'
import type { GovBRFormCheckboxProps } from './types'

/**
 * GovBRFormCheckbox - Checkbox integrado com React Hook Form
 *
 * Wrapper do GovBRCheckbox que integra perfeitamente com React Hook Form,
 * fornecendo validação automática, mensagens de erro e controle de estado.
 *
 * **Características:**
 * - ✅ Integração nativa com React Hook Form
 * - 🔍 Validação automática via `rules`
 * - ❌ Mensagens de erro estilizadas
 * - 🎨 Segue padrões Gov.br DS via govbrTheme.ts
 * - 📝 Suporte a TypeScript com tipos genéricos
 *
 * **Nota:** Este componente não implementa modo estrito (`strictgovbr`) pois
 * herda o comportamento do GovBRCheckbox subjacente.
 *
 * @typeParam TFieldValues - Tipo do formulário (inferido do control)
 * @typeParam TName - Nome do campo (inferido automaticamente)
 * @param props - GovBRFormCheckboxProps<TFieldValues, TName>
 *
 * @example
 * ```tsx
 * // Uso básico com React Hook Form
 * const { control } = useForm()
 *
 * <GovBRFormCheckbox
 *   name="acceptTerms"
 *   control={control}
 *   label="Aceito os termos e condições"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Com validação obrigatória
 * <GovBRFormCheckbox
 *   name="consent"
 *   control={control}
 *   label="Li e concordo com a política de privacidade"
 *   rules={{
 *     required: 'Você deve aceitar para continuar'
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Formulário completo
 * interface FormData {
 *   notifications: boolean
 *   newsletter: boolean
 * }
 *
 * const { control, handleSubmit } = useForm<FormData>()
 *
 * <form onSubmit={handleSubmit(onSubmit)}>
 *   <GovBRFormCheckbox
 *     name="notifications"
 *     control={control}
 *     label="Receber notificações por email"
 *   />
 *   <GovBRFormCheckbox
 *     name="newsletter"
 *     control={control}
 *     label="Assinar newsletter"
 *   />
 * </form>
 * ```
 */

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
