'use client'

import type { FieldPath, FieldValues } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { GovBRInput } from '../govbr-input'
import type { GovBRFormInputProps } from './types'

/**
 * GovBRFormInput - Campo de texto integrado com React Hook Form
 *
 * Wrapper do GovBRInput que integra perfeitamente com React Hook Form,
 * fornecendo validação automática, mensagens de erro e controle de estado.
 *
 * **Características:**
 * - ✅ Integração nativa com React Hook Form
 * - 🔍 Validação automática via `rules`
 * - ❌ Mensagens de erro estilizadas
 * - 🎨 Segue padrões Gov.br DS via govbrTheme.ts
 * - 📝 Suporte a TypeScript com tipos genéricos
 * - 🔒 Sempre usa modo MUI (strictgovbr=false fixo)
 *
 * **Nota:** Este componente força `strictgovbr=false` pois foi projetado
 * especificamente para integração com React Hook Form no modo MUI.
 *
 * @typeParam TFieldValues - Tipo do formulário (inferido do control)
 * @typeParam TName - Nome do campo (inferido automaticamente)
 * @param props - GovBRFormInputProps<TFieldValues, TName>
 *
 * @example
 * ```tsx
 * // Uso básico com React Hook Form
 * const { control } = useForm()
 *
 * <GovBRFormInput
 *   name="email"
 *   control={control}
 *   label="Email"
 *   placeholder="seu@email.com"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Com validação
 * <GovBRFormInput
 *   name="password"
 *   control={control}
 *   label="Senha"
 *   type="password"
 *   rules={{
 *     required: 'Senha é obrigatória',
 *     minLength: {
 *       value: 8,
 *       message: 'Senha deve ter no mínimo 8 caracteres'
 *     }
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Formulário completo tipado
 * interface LoginForm {
 *   email: string
 *   password: string
 * }
 *
 * const { control, handleSubmit } = useForm<LoginForm>()
 *
 * <form onSubmit={handleSubmit(onSubmit)}>
 *   <GovBRFormInput
 *     name="email"
 *     control={control}
 *     label="Email"
 *     rules={{ required: 'Email obrigatório' }}
 *   />
 *   <GovBRFormInput
 *     name="password"
 *     control={control}
 *     label="Senha"
 *     type="password"
 *     rules={{ required: 'Senha obrigatória' }}
 *   />
 * </form>
 * ```
 */

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
