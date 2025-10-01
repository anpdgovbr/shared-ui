import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { GovBRButton } from '../govbr-button'
import { GovBRFormInput } from './index'

// Esquema de validação com Zod
const formSchema = z.object({
  nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
})

type FormValues = z.infer<typeof formSchema>

// Componente de formulário para o Storybook
const FormWrapper = (props: Partial<ComponentProps<typeof GovBRFormInput>>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: '' },
  })

  const onSubmit = (data: FormValues) => {
    alert('Formulário enviado com sucesso!\n' + JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, padding: '2rem' }}>
      <GovBRFormInput
        name="nome"
        control={control}
        label={props.label}
        strictgovbr={props.strictgovbr} // Passa strictgovbr diretamente
        disabled={props.disabled} // Passa disabled diretamente
        placeholder={props.placeholder} // Passa placeholder diretamente
        errorMessage={errors.nome?.message}
      />
      <GovBRButton type="submit" style={{ marginTop: '1rem' }}>
        Enviar
      </GovBRButton>
    </form>
  )
}

const meta: Meta<typeof GovBRFormInput> = {
  title: 'Components/GovBRFormInput',
  component: GovBRFormInput,
  tags: ['autodocs'],
  render: (args) => <FormWrapper {...args} />,
  argTypes: {
    label: {
      control: 'text',
      description: 'O rótulo de texto do campo.',
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito para o input filho.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do input.',
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRFormInput>

export const MuiDefault: Story = {
  name: 'Padrão (MUI)',
  args: {
    label: 'Nome Completo (MUI)',
    strictgovbr: false,
    placeholder: 'Digite seu nome aqui',
  },
}

export const StrictDefault: Story = {
  name: 'Estrito (GovBR)',
  args: {
    label: 'Nome Completo (Estrito)',
    strictgovbr: true,
    placeholder: 'Digite seu nome aqui',
    id: 'form-input-strict',
  },
}
