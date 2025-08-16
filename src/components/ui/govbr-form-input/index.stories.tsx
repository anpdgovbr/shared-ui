import { GovBRButton } from '@components/ui/govbr-button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { useForm } from 'react-hook-form'

import { GovBRFormInput } from './index'

const meta: Meta<typeof GovBRFormInput> = {
  title: 'Components/GovBRFormInput',
  component: GovBRFormInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
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
      description: 'Texto do rótulo exibido acima do campo de entrada',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de orientação exibido dentro do campo quando vazio',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda exibido abaixo do campo para orientação adicional',
    },
    required: {
      control: 'boolean',
      description: 'Indica se o campo é obrigatório, exibindo asterisco no label',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo edição e interação do usuário',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de entrada que determina validação e comportamento do campo',
    },
    govbrSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do campo seguindo padrões GovBR-DS',
    },
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
      description: 'Estado visual do campo (default, success, warning, danger)',
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro que sobrescreve status para danger',
    },
    highlight: {
      control: 'boolean',
      description: 'Destaca visualmente o campo com bordas mais evidentes',
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Aplica estilos rigorosos do GovBR Design System (classes .br-input)',
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
## GovBRFormInput - Componente GovBR-DS

Componente de entrada de texto integrado com React Hook Form que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🔗 **React Hook Form**: Integração nativa com controle de formulários
- 🎯 **Tipos de Entrada**: Suporte a text, email, password, number, tel, url, search
- 🔍 **Acessibilidade**: Labels associados, WAI-ARIA e navegação por teclado
- ✅ **Validação**: Suporte completo a regras de validação e estados de erro
- 📱 **Responsividade**: Layout adaptativo para diferentes tamanhos de tela
- 📝 **Multiline**: Suporte a textarea para textos longos
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Renderização otimizada com debounce automático

### Exemplos de Uso:
\`\`\`typescript
// Campo básico obrigatório
<GovBRFormInput
  name="nome"
  control={control}
  label="Nome Completo"
  placeholder="Digite seu nome completo"
  required
  rules={{ required: "Nome é obrigatório" }}
/>

// Campo de email com validação
<GovBRFormInput
  name="email"
  control={control}
  type="email"
  label="E-mail Institucional"
  helperText="Use seu e-mail @gov.br"
  rules={{
    required: "E-mail é obrigatório",
    pattern: {
      value: /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/,
      message: "E-mail inválido"
    }
  }}
/>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRFormInput>

type FormData = {
  name: string
  email: string
  phone: string
  password: string
}

export const Default: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormData>({
      defaultValues: {
        name: '',
      },
    })

    const onSubmit = (data: FormData) => {
      console.log('Dados do formulário:', data)
      alert('Verifique o console para ver os dados submetidos')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <GovBRFormInput
            name="name"
            control={control}
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            helperText="Informe seu nome completo como consta no CPF"
            required
            rules={{
              required: 'Nome é obrigatório',
              minLength: {
                value: 2,
                message: 'Nome deve ter pelo menos 2 caracteres',
              },
            }}
          />
          <GovBRButton type="submit" variant="contained" color="primary">
            Cadastrar
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico com validação obrigatória e feedback visual.',
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => {
    const { control, handleSubmit } = useForm<FormData>({
      defaultValues: {
        name: '',
        email: '',
        phone: '',
        password: '',
      },
      mode: 'onChange',
    })

    const onSubmit = (data: FormData) => {
      console.log('Formulário válido:', data)
      alert('Todos os campos foram validados com sucesso!')
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <GovBRFormInput
            name="name"
            control={control}
            label="Nome Completo *"
            placeholder="Ex: João Silva Santos"
            helperText="Como consta no documento de identidade"
            govbrSize="large"
            rules={{
              required: 'Nome completo é obrigatório',
              minLength: {
                value: 2,
                message: 'Nome deve ter pelo menos 2 caracteres',
              },
              pattern: {
                value: /^[A-Za-zÀ-ÿ\s]{2,}$/,
                message: 'Nome deve conter apenas letras e espaços',
              },
            }}
          />

          <GovBRFormInput
            name="email"
            control={control}
            type="email"
            label="E-mail Institucional *"
            placeholder="usuario@orgao.gov.br"
            helperText="Use seu e-mail institucional @gov.br"
            rules={{
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail deve ter formato válido',
              },
            }}
          />

          <GovBRFormInput
            name="phone"
            control={control}
            type="tel"
            label="Telefone de Contato *"
            placeholder="(11) 99999-9999"
            helperText="Incluir DDD - formato (xx) xxxxx-xxxx"
            rules={{
              required: 'Telefone é obrigatório',
              pattern: {
                value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                message: 'Telefone deve seguir o formato (xx) xxxxx-xxxx',
              },
            }}
          />

          <GovBRFormInput
            name="password"
            control={control}
            type="password"
            label="Senha de Acesso *"
            placeholder="Mínimo 8 caracteres"
            helperText="Senha deve conter pelo menos 8 caracteres, 1 número e 1 letra maiúscula"
            rules={{
              required: 'Senha é obrigatória',
              minLength: {
                value: 8,
                message: 'Senha deve ter pelo menos 8 caracteres',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
                message: 'Senha deve conter ao menos 1 maiúscula, 1 minúscula e 1 número',
              },
            }}
          />

          <GovBRButton type="submit" variant="contained" color="success" size="large">
            Criar Conta
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Formulário completo com múltiplos tipos de campo e validações específicas para cada tipo.',
      },
    },
  },
}

export const WithCustomValidation: Story = {
  render: () => {
    const { control, handleSubmit, watch } = useForm<
      FormData & { confirmPassword: string; cpf: string }
    >({
      defaultValues: {
        password: '',
        confirmPassword: '',
        cpf: '',
      },
    })

    const passwordValue = watch('password')

    const onSubmit = (data: FormData & { confirmPassword: string; cpf: string }) => {
      console.log('Dados validados:', data)
      alert('Validações customizadas aprovadas!')
    }

    // Função para validar CPF
    const validateCPF = (cpf: string) => {
      // Remove caracteres não numéricos
      const cleanCPF = cpf.replace(/\D/g, '')

      if (cleanCPF.length !== 11) return 'CPF deve ter 11 dígitos'
      if (/^(\d)\1+$/.test(cleanCPF)) return 'CPF não pode ter todos os dígitos iguais'

      // Validação dos dígitos verificadores
      let sum = 0
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCPF.charAt(i)) * (10 - i)
      }
      let remainder = (sum * 10) % 11
      if (remainder === 10 || remainder === 11) remainder = 0
      if (remainder !== parseInt(cleanCPF.charAt(9))) return 'CPF inválido'

      sum = 0
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanCPF.charAt(i)) * (11 - i)
      }
      remainder = (sum * 10) % 11
      if (remainder === 10 || remainder === 11) remainder = 0
      if (remainder !== parseInt(cleanCPF.charAt(10))) return 'CPF inválido'

      return true
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <GovBRFormInput
            name="cpf"
            control={control}
            label="CPF *"
            placeholder="000.000.000-00"
            helperText="Digite apenas números - formatação automática"
            govbrSize="large"
            rules={{
              required: 'CPF é obrigatório',
              validate: validateCPF,
            }}
          />

          <GovBRFormInput
            name="password"
            control={control}
            type="password"
            label="Nova Senha *"
            placeholder="Mínimo 8 caracteres"
            helperText="Deve conter ao menos 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial"
            rules={{
              required: 'Senha é obrigatória',
              minLength: {
                value: 8,
                message: 'Senha deve ter pelo menos 8 caracteres',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Senha deve conter pelo menos 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial',
              },
            }}
          />

          <GovBRFormInput
            name="confirmPassword"
            control={control}
            type="password"
            label="Confirmar Nova Senha *"
            placeholder="Digite a senha novamente"
            helperText="Deve ser idêntica à senha digitada acima"
            disabled={!passwordValue}
            rules={{
              required: 'Confirmação de senha é obrigatória',
              validate: (value) => {
                if (!passwordValue) return 'Digite a senha primeiro'
                return value === passwordValue || 'Senhas não conferem'
              },
            }}
          />

          <GovBRButton
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!passwordValue}
          >
            Alterar Senha
          </GovBRButton>
        </Stack>
      </form>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo com validações customizadas complexas, incluindo validação de CPF e confirmação de senha.',
      },
    },
  },
}
