import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import React from 'react'

import { GovBRRadio } from './index'

const meta: Meta<typeof GovBRRadio> = {
  title: 'Components/GovBRRadio',
  component: GovBRRadio,
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
      description: 'Nome único do grupo de radio buttons para agrupamento lógico',
    },
    value: {
      control: 'text',
      description: 'Valor único que identifica esta opção dentro do grupo',
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo exibido ao lado do botão de rádio',
    },
    helpText: {
      control: 'text',
      description: 'Texto explicativo adicional exibido abaixo do rótulo',
    },
    text: {
      control: 'text',
      description: 'Texto exibido na opção de seleção (alternativa ao label)',
    },
    checked: {
      control: 'boolean',
      description: 'Define se esta opção está selecionada no grupo',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o radio button impedindo seleção pelo usuário',
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro que aplica estilização visual de validação falhou',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Cor semântica do radio button conforme padrões GovBR-DS',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do radio button: small (16px), medium (20px), large (24px)',
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Aplica estilos rigorosos do GovBR Design System (classes .br-radio)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRRadio - Componente GovBR-DS

Componente de botão de rádio que segue as diretrizes visuais do GovBR Design System para seleção única.

### Características Principais:
- 🎯 **Seleção Única**: Permite apenas uma seleção por grupo de opções
- 🎨 **Cores Semânticas**: Utiliza paleta oficial do GovBR-DS
- 🔍 **Acessibilidade**: Labels associados, navegação por teclado e WAI-ARIA
- 📏 **Tamanhos Responsivos**: Small, Medium, Large para diferentes contextos
- 💬 **Texto de Ajuda**: Suporte a helpText para explicações adicionais
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Renderização otimizada com eventos nativos
- 🌐 **Agrupamento**: Sistema de name para agrupamento lógico de opções

### Exemplo de Uso:
\`\`\`typescript
// Grupo de opções mutuamente exclusivas
const [selectedValue, setSelectedValue] = useState('opcao1')

<GovBRRadio
  name="preferencia"
  value="opcao1"
  label="Primeira Opção"
  helpText="Descrição da primeira opção"
  checked={selectedValue === 'opcao1'}
  onChange={(e) => setSelectedValue(e.target.value)}
/>
<GovBRRadio
  name="preferencia"
  value="opcao2"
  label="Segunda Opção"
  checked={selectedValue === 'opcao2'}
  onChange={(e) => setSelectedValue(e.target.value)}
/>
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRRadio>

export const Default: Story = {
  args: {
    name: 'genero',
    value: 'masculino',
    label: 'Masculino',
    helpText: 'Selecione sua identidade de gênero',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo básico de radio button com rótulo e texto de ajuda.',
      },
    },
  },
}

export const InteractiveExample: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('online')

    const handleChange = (value: string) => {
      setSelectedValue(value)
    }

    const mockSubmit = () => {
      console.log('Preferência selecionada:', selectedValue)
      alert(`Você selecionou: ${selectedValue}`)
    }

    return (
      <Stack spacing={2}>
        <Typography variant="h6" component="h3">
          Como você prefere ser contatado pela ANPD?
        </Typography>

        <Stack spacing={2} sx={{ ml: 1 }}>
          <GovBRRadio
            name="contato"
            value="online"
            label="Portal Online"
            helpText="Receber notificações através do portal web da ANPD"
            checked={selectedValue === 'online'}
            onClick={() => handleChange('online')}
          />
          <GovBRRadio
            name="contato"
            value="email"
            label="E-mail Institucional"
            helpText="Receber comunicados por e-mail do órgão"
            checked={selectedValue === 'email'}
            onClick={() => handleChange('email')}
          />
          <GovBRRadio
            name="contato"
            value="telefone"
            label="Ligação Telefônica"
            helpText="Contato direto via telefone nos horários comerciais"
            checked={selectedValue === 'telefone'}
            onClick={() => handleChange('telefone')}
          />
          <GovBRRadio
            name="contato"
            value="presencial"
            label="Atendimento Presencial"
            helpText="Agendamento para atendimento nas unidades da ANPD"
            checked={selectedValue === 'presencial'}
            onClick={() => handleChange('presencial')}
            disabled
          />
        </Stack>

        <Box sx={{ mt: 3 }}>
          <button
            type="button"
            onClick={mockSubmit}
            style={{
              padding: '12px 24px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Confirmar Preferência
          </button>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de grupo de radio buttons com controle de estado e simulação de uso real no contexto ANPD.',
      },
    },
  },
}

export const Checked: Story = {
  args: {
    name: 'gender',
    value: 'female',
    label: 'Feminino',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    name: 'option',
    value: 'disabled',
    label: 'Opção desabilitada',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    name: 'option',
    value: 'disabled-checked',
    label: 'Opção desabilitada e selecionada',
    disabled: true,
    checked: true,
  },
}

export const GroupSelection: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>
        Selecione o tipo de usuário:
      </Typography>
      <Stack spacing={1} sx={{ ml: 1 }}>
        <GovBRRadio
          name="tipoUsuario"
          value="cidadao"
          label="Cidadão"
          helpText="Pessoa física interessada em proteção de dados"
        />
        <GovBRRadio
          name="tipoUsuario"
          value="empresa"
          label="Empresa Privada"
          helpText="Organização do setor privado"
        />
        <GovBRRadio
          name="tipoUsuario"
          value="orgaoPublico"
          label="Órgão Público"
          helpText="Instituição do poder público"
        />
        <GovBRRadio
          name="tipoUsuario"
          value="terceirosetor"
          label="Terceiro Setor"
          helpText="ONGs, associações e organizações sem fins lucrativos"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de grupo estático de radio buttons com múltiplas opções.',
      },
    },
  },
}
