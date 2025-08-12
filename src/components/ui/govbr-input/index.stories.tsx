import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { GovBRInput } from './index'

const meta: Meta<typeof GovBRInput> = {
  title: 'Components/GovBRInput',
  component: GovBRInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    govbrSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do input conforme padrões GovBR',
    },
    status: {
      control: 'select',
      options: ['success', 'danger', 'info', 'warning'],
      description: 'Status visual do input para feedback',
    },
    clearBlock: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Configuração do bloco de limpeza',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o input está desabilitado',
    },
    highlight: {
      control: 'boolean',
      description: 'Aplica destaque visual no input',
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Aplicar estilos estritamente compatíveis com govbr-ds',
    },
    label: {
      control: 'text',
      description: 'Texto do label do input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder do input',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ajuda abaixo do input',
    },
    feedbackMessage: {
      control: 'text',
      description: 'Mensagem de feedback para estados visuais',
    },
    error: {
      control: 'boolean',
      description: 'Define estado de erro (sobrescreve status para danger)',
    },
    required: {
      control: 'boolean',
      description: 'Define se o campo é obrigatório',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRInput - Componente GovBR-DS

Componente de campo de entrada de texto que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🎨 **Estados Visuais**: Success, danger, info, warning
- 🔍 **Acessibilidade**: Labels, aria-labels e navegação por teclado
- 📏 **Tamanhos Padrão**: Small, Medium, Large
- 🎭 **Feedback Visual**: Estados de erro, sucesso e validação
- ✨ **Destaque**: Opção de highlight para campos importantes
- 📝 **Textos de Ajuda**: Helper text e mensagens contextuais
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRInput>

export const Default: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome completo',
    govbrSize: 'medium',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    helperText: 'Digite um email válido para receber notificações',
    govbrSize: 'medium',
  },
}

export const WithError: Story = {
  args: {
    label: 'CPF',
    placeholder: 'Digite seu CPF',
    error: true,
    feedbackMessage: 'CPF inválido. Verifique os dados digitados.',
    govbrSize: 'medium',
  },
}

export const WithErrorDirect: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    error: true,
    feedbackMessage: 'Este campo é obrigatório',
    govbrSize: 'medium',
  },
}

export const WithSuccess: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    status: 'success',
    feedbackMessage: 'Email válido!',
    value: 'usuario@exemplo.com',
    govbrSize: 'medium',
  },
}

export const WithWarning: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    status: 'warning',
    feedbackMessage: 'Senha fraca. Considere adicionar números e símbolos.',
    govbrSize: 'medium',
  },
}

export const WithInfo: Story = {
  args: {
    label: 'Código de verificação',
    placeholder: 'Digite o código de 6 dígitos',
    status: 'info',
    feedbackMessage: 'Código enviado para seu email',
    govbrSize: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Este campo está desabilitado',
    value: 'Valor fixo',
    disabled: true,
    govbrSize: 'medium',
  },
}

export const Highlighted: Story = {
  args: {
    label: 'Campo destacado',
    placeholder: 'Este campo está destacado',
    highlight: true,
    govbrSize: 'medium',
  },
}

export const Inline: Story = {
  args: {
    label: 'Buscar:',
    placeholder: 'Digite sua busca',
    inline: true,
    govbrSize: 'medium',
  },
}

export const WithStartIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Digite sua busca',
    startIcon: <SearchIcon />,
    govbrSize: 'medium',
  },
}

export const WithEndButton: Story = {
  args: {
    label: 'Campo com botão',
    placeholder: 'Digite algo aqui',
    value: 'Conteúdo para limpar',
    endButtonIcon: <ClearIcon />,
    onEndButtonClick: () => alert('Botão clicado!'),
    govbrSize: 'medium',
  },
}

export const Small: Story = {
  args: {
    label: 'Campo pequeno',
    placeholder: 'Input pequeno',
    govbrSize: 'small',
  },
}

export const Large: Story = {
  args: {
    label: 'Campo grande',
    placeholder: 'Input grande',
    govbrSize: 'large',
  },
}

export const WithClearBlock: Story = {
  args: {
    label: 'Campo com limpeza automática',
    placeholder: 'Digite algo',
    clearBlock: 'md',
    govbrSize: 'medium',
  },
}
