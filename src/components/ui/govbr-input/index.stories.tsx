import SearchIcon from '@mui/icons-material/Search' // Import SearchIcon
import type { Meta, StoryObj } from '@storybook/react'

import { GovBRInput } from './index'

const meta: Meta<typeof GovBRInput> = {
  title: 'Components/GovBRInput',
  component: GovBRInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa modo estrito com renderização HTML puro e classes CSS do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Rótulo do campo de entrada - texto descritivo exibido acima do input',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo edição e aplicando estilos visuais apropriados',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de exemplo exibido quando o campo está vazio para orientar o usuário',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description:
        'Estilo visual do campo: outlined (contorno), filled (preenchido), standard (linha inferior)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'outlined' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Cor semântica que afeta bordas e estados de foco conforme paleta GovBR-DS',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'primary' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de auxílio exibido abaixo do campo para orientações adicionais',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Ativa estado de erro com bordas vermelhas e cor de texto apropriada',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    govbrSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Tamanho do campo conforme especificações GovBR-DS: small (32px), medium (40px), large (48px)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'medium' },
      },
    },
    status: {
      control: 'select',
      options: ['success', 'danger', 'info', 'warning'],
      description: 'Estado visual para feedback imediato - aplica cores e ícones apropriados',
      table: {
        category: 'Estado',
        type: { summary: 'success | danger | info | warning' },
      },
    },
    feedbackMessage: {
      control: 'text',
      description: 'Mensagem de feedback personalizada exibida no modo estrito GovBR',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    highlight: {
      control: 'boolean',
      description:
        'Aplica destaque visual especial no campo - usado para campos importantes ou em foco',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'false' },
      },
    },
    inline: {
      control: 'boolean',
      description: 'Posiciona o rótulo e campo na mesma linha horizontalmente (modo estrito)',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'false' },
      },
    },
    clearBlock: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg', 'xl'],
      description:
        'Breakpoint responsivo para limpeza de float - controla layout em diferentes telas',
      table: {
        category: 'Layout',
        type: { summary: 'sm | md | lg | xl' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRInput - Campo de Entrada Governamental

Componente de entrada de texto padronizado conforme diretrizes do GovBR Design System, oferecendo flexibilidade entre modo MUI e HTML puro.

### Características Principais:
- 🎨 **Modo Duplo**: Suporte a MUI com tema personalizado ou HTML puro com classes GovBR-DS
- ♿ **Acessibilidade Completa**: Labels associados, navegação por teclado, suporte a screen readers
- 🎭 **Estados Visuais**: Normal, hover, focus, error, disabled, success, warning
- 📏 **Tamanhos Responsivos**: Small (32px), Medium (40px), Large (48px)
- 🔧 **Flexibilidade**: Suporte a ícones, helper text, validation feedback
- 🏛️ **Compliance**: Segue rigorosamente padrões de acessibilidade WCAG 2.1
- ⚡ **Performance**: Otimizado para formulários grandes com debounce e validation

### Casos de Uso:
- Formulários governamentais e administrativos  
- Campos de busca e filtros
- Entrada de dados pessoais e documentos
- Sistemas de cadastro e autenticação
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRInput>

// --- Estórias do Modo Padrão (MUI) ---

export const MuiDefault: Story = {
  name: 'Padrão (MUI): Default',
  args: {
    label: 'Nome (MUI)',
    placeholder: 'Digite seu nome completo',
    fullWidth: true,
  },
}

export const MuiWithAdornments: Story = {
  name: 'Padrão (MUI): Com Ícones',
  args: {
    label: 'Buscar (MUI)',
    fullWidth: true,
    startIcon: <SearchIcon />,
    endButtonIcon: <SearchIcon />,
    onEndButtonClick: () => alert('Busca clicada!'),
  },
}

export const MuiWithError: Story = {
  name: 'Padrão (MUI): Com Erro',
  args: {
    label: 'Email (MUI)',
    fullWidth: true,
    error: true,
    helperText: 'Por favor, insira um email válido.',
  },
}

// --- Estórias do Modo Estrito (GovBR-DS) ---

export const StrictDefault: Story = {
  name: 'Estrito (GovBR): Default',
  args: {
    strictgovbr: true,
    label: 'Nome (Estrito)',
    placeholder: 'Digite seu nome completo',
  },
}

export const StrictWithError: Story = {
  name: 'Estrito (GovBR): Com Erro',
  args: {
    strictgovbr: true,
    label: 'CPF (Estrito)',
    placeholder: 'Digite seu CPF',
    error: true,
    feedbackMessage: 'CPF inválido. Verifique os dados digitados.',
  },
}

export const StrictWithSuccess: Story = {
  name: 'Estrito (GovBR): Com Sucesso',
  args: {
    strictgovbr: true,
    label: 'Email (Estrito)',
    status: 'success',
    feedbackMessage: 'Email válido!',
    value: 'usuario@exemplo.com',
  },
}

export const StrictWithWarning: Story = {
  name: 'Estrito (GovBR): Com Aviso',
  args: {
    strictgovbr: true,
    label: 'Senha (Estrito)',
    type: 'password',
    placeholder: 'Digite sua senha',
    status: 'warning',
    feedbackMessage: 'Senha fraca. Considere adicionar números e símbolos.',
  },
}

export const StrictWithInfo: Story = {
  name: 'Estrito (GovBR): Com Informação',
  args: {
    strictgovbr: true,
    label: 'Código de verificação (Estrito)',
    placeholder: 'Digite o código de 6 dígitos',
    status: 'info',
    feedbackMessage: 'Código enviado para seu email',
  },
}

export const StrictDisabled: Story = {
  name: 'Estrito (GovBR): Desabilitado',
  args: {
    strictgovbr: true,
    label: 'Campo desabilitado (Estrito)',
    placeholder: 'Este campo está desabilitado',
    disabled: true,
  },
}

export const StrictHighlighted: Story = {
  name: 'Estrito (GovBR): Destacado',
  args: {
    strictgovbr: true,
    label: 'Campo destacado (Estrito)',
    placeholder: 'Este campo está destacado',
    highlight: true,
  },
}

export const StrictInline: Story = {
  name: 'Estrito (GovBR): Em Linha',
  args: {
    strictgovbr: true,
    label: 'Buscar (Estrito):',
    placeholder: 'Digite sua busca',
    inline: true,
  },
}

export const StrictWithStartIcon: Story = {
  name: 'Estrito (GovBR): Com Ícone Inicial',
  args: {
    strictgovbr: true,
    label: 'Buscar (Estrito)',
    placeholder: 'Digite sua busca',
    startIcon: <SearchIcon />,
  },
}

export const StrictWithEndButton: Story = {
  name: 'Estrito (GovBR): Com Botão Final',
  args: {
    strictgovbr: true,
    label: 'Campo com botão (Estrito)',
    placeholder: 'Digite algo aqui',
    value: 'Conteúdo para limpar',
    endButtonIcon: <SearchIcon />,
    onEndButtonClick: () => alert('Botão clicado!'),
  },
}

export const StrictSizes: Story = {
  name: 'Estrito (GovBR): Tamanhos',
  args: {
    strictgovbr: true,
    label: 'Campo de Tamanho (Estrito)',
    placeholder: 'Input de tamanho',
    govbrSize: 'small',
  },
}

export const StrictWithClearBlock: Story = {
  name: 'Estrito (GovBR): Com Limpeza Automática',
  args: {
    strictgovbr: true,
    label: 'Campo com limpeza automática (Estrito)',
    placeholder: 'Digite algo',
    clearBlock: 'md',
  },
}
