import { GovBRButton } from '@components/ui/govbr-button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { useForm } from 'react-hook-form'
import { GovBRFormCheckbox } from './index'

const meta: Meta<typeof GovBRFormCheckbox> = {
  title: 'Components/GovBRFormCheckbox',
  component: GovBRFormCheckbox,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '600px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome único do campo para integração com React Hook Form',
    },
    control: {
      control: false,
      description: 'Objeto de controle do React Hook Form para gerenciar o estado do campo',
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo exibido ao lado do checkbox',
    },
    required: {
      control: 'boolean',
      description: 'Indica se o campo é obrigatório, exibindo mensagem de validação',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o checkbox impedindo interação do usuário',
    },
    status: {
      control: 'select',
      options: ['valid', 'invalid'],
      description: 'Estado visual de validação do campo (valid/invalid)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado do checkbox (nem marcado nem desmarcado)',
    },
    hiddenLabel: {
      control: 'boolean',
      description: 'Oculta visualmente o label mantendo acessibilidade para leitores de tela',
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Aplica estilos rigorosos do GovBR Design System (classes .br-checkbox)',
    },
    rules: {
      control: false,
      description: 'Regras de validação do React Hook Form para o campo',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRFormCheckbox - Componente GovBR-DS

Componente de checkbox integrado com React Hook Form que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🔗 **React Hook Form**: Integração nativa com controle de formulários
- 🎨 **Cores Semânticas**: Utiliza paleta oficial do GovBR-DS  
- 🔍 **Acessibilidade**: Labels associados e navegação por teclado
- ✅ **Validação**: Suporte completo a regras de validação e estados de erro
- 📏 **Tamanhos Responsivos**: Small, Medium, Large otimizados para diferentes contextos
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Renderização otimizada com memoização automática

### Integração com Formulários:
\`\`\`typescript
// Exemplo básico com React Hook Form
const { control } = useForm()

<GovBRFormCheckbox
  name="aceiteTermos"
  control={control}
  label="Li e aceito os termos de uso"
  required
  rules={{ required: "É necessário aceitar os termos" }}
/>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRFormCheckbox>

type FormData = {
  terms: boolean
  newsletter: boolean
  privacy: boolean
  marketing: boolean
}

export const Default: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormData>({
      defaultValues: {
        terms: false,
      },
    })

    const onSubmit = (data: FormData) => {
      console.log('Dados do formulário:', data)
      alert('Verifique o console para ver os dados submetidos')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <GovBRFormCheckbox
            name="terms"
            control={control}
            label="Li e aceito os termos de uso e política de privacidade"
            required
            rules={{ required: 'É necessário aceitar os termos para continuar' }}
          />
          <GovBRButton type="submit" variant="contained" color="primary">
            Prosseguir
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico com validação obrigatória integrada ao React Hook Form.',
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      defaultValues: {
        terms: false,
        newsletter: false,
        privacy: false,
        marketing: false,
      },
    })

    const onSubmit = (data: FormData) => {
      console.log('Formulário válido:', data)
      alert('Formulário submetido com sucesso! Verifique o console.')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <GovBRFormCheckbox
            name="terms"
            control={control}
            label="Aceito os termos de uso e política de privacidade *"
            required
            rules={{ required: 'É obrigatório aceitar os termos' }}
          />
          <GovBRFormCheckbox
            name="newsletter"
            control={control}
            label="Desejo receber newsletters e informações sobre novos serviços"
          />
          <GovBRFormCheckbox
            name="privacy"
            control={control}
            label="Li e compreendo a política de privacidade de dados *"
            required
            rules={{ required: 'É obrigatório aceitar a política de privacidade' }}
          />
          <GovBRFormCheckbox
            name="marketing"
            control={control}
            label="Autorizo o uso dos meus dados para comunicação marketing"
          />
          <GovBRButton type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Cadastrar
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Formulário completo com múltiplos checkboxes, validações obrigatórias e opcionais.',
      },
    },
  },
}

export const WithCustomValidation: Story = {
  render: () => {
    const { control, handleSubmit, watch } = useForm<FormData & { confirmation: boolean }>({
      defaultValues: {
        terms: false,
        confirmation: false,
      },
    })

    const termsValue = watch('terms')

    const onSubmit = (data: FormData & { confirmation: boolean }) => {
      console.log('Dados validados:', data)
      alert('Validações customizadas aprovadas!')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <GovBRFormCheckbox
            name="terms"
            control={control}
            label="Aceito os termos do Portal ANPD"
            required
            rules={{
              required: 'Aceitar os termos é obrigatório',
              validate: value => value === true || 'Você deve marcar o checkbox para aceitar',
            }}
          />
          <GovBRFormCheckbox
            name="confirmation"
            control={control}
            label="Confirmo que li e compreendi todos os termos"
            disabled={!termsValue}
            required
            rules={{
              required: 'Confirmação é obrigatória',
              validate: value => {
                if (!termsValue) return 'Aceite os termos primeiro'
                return value === true || 'Confirmação é obrigatória'
              },
            }}
          />
          <GovBRButton type="submit" variant="contained" color="success" disabled={!termsValue}>
            Confirmar Aceitação
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo com validações customizadas e dependência entre campos.',
      },
    },
  },
}
