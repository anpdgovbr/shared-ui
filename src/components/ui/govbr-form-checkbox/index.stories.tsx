import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { GovBRButton } from '../govbr-button'
import { GovBRFormCheckbox } from './index'

// Esquema de validação com Zod
const formSchema = z.object({
  aceite: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar os termos para continuar.',
  }),
})

type FormValues = z.infer<typeof formSchema>

// Componente de formulário para o Storybook
interface FormWrapperProps {
  label: string
  strictgovbr?: boolean
  disabled?: boolean
  id?: string
}

const FormWrapper = (props: FormWrapperProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { aceite: false },
  })

  const onSubmit = (data: FormValues) => {
    alert('Formulário enviado com sucesso!\n' + JSON.stringify(data))
  }

  return (
    <GovBRThemeProvider>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 600, padding: '2rem' }}>
        <GovBRFormCheckbox
          name="aceite"
          control={control}
          label={props.label}
          strictgovbr={props.strictgovbr} // Passa strictgovbr diretamente
          disabled={props.disabled} // Passa disabled diretamente
          id={props.id} // Passa id diretamente
        />
        {errors.aceite && <p style={{ color: 'red', marginTop: '4px' }}>{errors.aceite.message}</p>}
        <GovBRButton type="submit" style={{ marginTop: '1rem' }}>
          Enviar
        </GovBRButton>
      </form>
    </GovBRThemeProvider>
  )
}

const meta: Meta<typeof GovBRFormCheckbox> = {
  title: 'Components/GovBRFormCheckbox',
  component: GovBRFormCheckbox,
  tags: ['autodocs'],
  render: (args) => (
    // Garante que label sempre será string (fallback para string vazia)
    <FormWrapper {...args} label={typeof args.label === 'string' ? args.label : ''} />
  ),
  argTypes: {
    label: {
      control: 'text',
      description: 'O rótulo de texto do checkbox.',
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito para o checkbox filho.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o checkbox.',
    },
    id: {
      control: 'text',
      description: 'ID do checkbox.',
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRFormCheckbox>

export const MuiDefault: Story = {
  name: 'Padrão (MUI)',
  args: {
    label: 'Eu li e aceito os termos de uso (MUI)',
    strictgovbr: false,
  },
}

export const StrictDefault: Story = {
  name: 'Estrito (GovBR)',
  args: {
    label: 'Eu li e aceito os termos de uso (Estrito)',
    strictgovbr: true,
    id: 'form-checkbox-strict',
  },
}

export const AlignmentTest: Story = {
  name: 'Teste de Alinhamento',
  render: () => (
    <GovBRThemeProvider>
      <div style={{ maxWidth: 600, padding: '2rem' }}>
        <h3>Teste de Alinhamento - Form Checkbox</h3>

        <div style={{ marginBottom: '2rem' }}>
          <h4>Modo Padrão (MUI)</h4>
          <FormWrapper label="Texto curto" strictgovbr={false} />
          <FormWrapper
            label="Este é um texto mais longo para testar o alinhamento da label com o checkbox quando há quebra de linha em formulários"
            strictgovbr={false}
          />
        </div>

        <div>
          <h4>Modo Estrito (Gov.br DS)</h4>
          <FormWrapper label="Texto curto" strictgovbr={true} />
          <FormWrapper
            label="Este é um texto mais longo para testar o alinhamento da label com o checkbox quando há quebra de linha em formulários utilizando o modo estrito"
            strictgovbr={true}
          />
        </div>
      </div>
    </GovBRThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração específica do alinhamento de labels em FormCheckbox com textos de diferentes tamanhos',
      },
    },
  },
}
