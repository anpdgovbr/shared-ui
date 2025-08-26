import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import React from 'react'

import { GovBRCheckbox } from './index'

const meta: Meta<typeof GovBRCheckbox> = {
  title: 'Components/GovBRCheckbox',
  component: GovBRCheckbox,
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
    strictgovbr: {
      control: 'boolean',
      description:
        'Ativa modo estrito com renderização HTML puro e classes CSS oficiais do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo exibido ao lado do checkbox para descrever a opção',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Desabilita o checkbox impedindo interação e aplicando estilos visuais apropriados',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description:
        'Estado de marcação - true quando checkbox está selecionado, false quando desmarcado',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      description:
        'Posicionamento do rótulo: top (acima), bottom (abaixo), start (esquerda), end (direita)',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'end' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRCheckbox - Seleção Múltipla Governamental

Componente de checkbox padronizado que permite seleções múltiplas independentes conforme diretrizes do GovBR Design System.

### Características Principais:
- 🎨 **Modo Duplo**: Suporte a MUI com tema personalizado ou HTML puro com classes GovBR-DS
- ✅ **Seleções Independentes**: Cada checkbox funciona de forma autônoma permitindo múltiplas escolhas
- ♿ **Acessibilidade WCAG**: Labels associados, navegação por teclado, estados claramente identificáveis
- 🎭 **Estados Visuais**: Normal, hover, focus, checked, indeterminate, disabled
- � **Layout Flexível**: Posicionamento de rótulo configurável para adequar diferentes designs
- 🏛️ **Compliance GovBR**: Implementação rigorosa das diretrizes de interface governamental
- ⚡ **Performance**: Otimizado para formulários com múltiplas opções e validação em tempo real

### Casos de Uso Recomendados:
- Formulários de múltipla escolha em sistemas governamentais
- Seleção de preferências e configurações em painéis administrativos
- Aceite de termos, políticas e condições legais
- Filtros e configurações em sistemas de busca e relatórios
- Listas de verificação (checklists) para processos administrativos
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCheckbox>

export const Default: Story = {
  args: {
    label: 'Aceito os termos e condições',
    checked: false,
  },
}

export const WithStrictGovBr: Story = {
  args: {
    label: 'Modo estrito GovBR-DS',
    strictgovbr: true,
    id: 'strict-checkbox',
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox seguindo rigorosamente o padrão GovBR-DS com classes `.br-checkbox`',
      },
    },
  },
}

export const AllStates: Story = {
  render: function AllStatesDemo() {
    return (
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Estados do Checkbox (Modo MUI)
        </Typography>
        <Stack spacing={1}>
          <GovBRCheckbox label="Checkbox não marcado" checked={false} />
          <GovBRCheckbox label="Checkbox marcado" checked={true} />
          <GovBRCheckbox label="Checkbox desabilitado" disabled={true} />
          <GovBRCheckbox label="Checkbox marcado e desabilitado" checked={true} disabled={true} />
        </Stack>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Estados do Checkbox (Modo Estrito GovBR)
        </Typography>
        <Stack spacing={1}>
          <GovBRCheckbox
            strictgovbr
            label="Checkbox não marcado (estrito)"
            id="strict-1"
            checked={false}
          />
          <GovBRCheckbox
            strictgovbr
            label="Checkbox marcado (estrito)"
            id="strict-2"
            checked={true}
          />
          <GovBRCheckbox
            strictgovbr
            label="Checkbox desabilitado (estrito)"
            id="strict-3"
            disabled={true}
          />
          <GovBRCheckbox
            strictgovbr
            label="Checkbox marcado e desabilitado (estrito)"
            id="strict-4"
            checked={true}
            disabled={true}
          />
        </Stack>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração de todos os estados possíveis do checkbox em ambos os modos',
      },
    },
  },
}

export const LabelPositions: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Posições do Label (Modo MUI)
      </Typography>
      <Stack spacing={1}>
        <GovBRCheckbox label="Label à direita (padrão)" labelPlacement="end" checked={true} />
        <GovBRCheckbox label="Label à esquerda" labelPlacement="start" checked={true} />
        <GovBRCheckbox label="Label acima" labelPlacement="top" checked={true} />
        <GovBRCheckbox label="Label abaixo" labelPlacement="bottom" checked={true} />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes posicionamentos do label em relação ao checkbox (apenas modo MUI)',
      },
    },
  },
}

export const WithColors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Cores Semânticas (Modo MUI)
      </Typography>
      <Stack spacing={1}>
        <GovBRCheckbox
          label="Primary (padrão)"
          checked={true}
          checkboxProps={{ color: 'primary' }}
        />
        <GovBRCheckbox label="Secondary" checked={true} checkboxProps={{ color: 'secondary' }} />
        <GovBRCheckbox label="Success" checked={true} checkboxProps={{ color: 'success' }} />
        <GovBRCheckbox label="Warning" checked={true} checkboxProps={{ color: 'warning' }} />
        <GovBRCheckbox label="Error" checked={true} checkboxProps={{ color: 'error' }} />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkbox com diferentes cores semânticas do tema GovBR-DS',
      },
    },
  },
}

export const FormExample: Story = {
  render: function FormExample() {
    const [agreements, setAgreements] = React.useState({
      terms: false,
      privacy: false,
      newsletter: true,
    })

    const handleChange =
      (field: keyof typeof agreements) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreements((prev) => ({
          ...prev,
          [field]: event.target.checked,
        }))
      }

    return (
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Formulário de Cadastro - ANPD
        </Typography>
        <Stack spacing={2}>
          <GovBRCheckbox
            strictgovbr
            id="terms"
            label="Li e aceito os termos de uso"
            checked={agreements.terms}
            onChange={handleChange('terms')}
          />
          <GovBRCheckbox
            strictgovbr
            id="privacy"
            label="Li e aceito a política de privacidade"
            checked={agreements.privacy}
            onChange={handleChange('privacy')}
          />
          <GovBRCheckbox
            strictgovbr
            id="newsletter"
            label="Desejo receber notificações por email"
            checked={agreements.newsletter}
            onChange={handleChange('newsletter')}
          />

          <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="body2">Estado atual:</Typography>
            <Typography variant="body2" component="pre" sx={{ fontSize: '0.75rem' }}>
              {JSON.stringify(agreements, null, 2)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo prático de uso em formulário governamental com controle de estado',
      },
    },
  },
}

export const AlignmentTest: Story = {
  name: 'Teste de Alinhamento',
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h6" gutterBottom>
        Teste de Alinhamento de Labels
      </Typography>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Modo Padrão (MUI)
        </Typography>
        <Stack spacing={1}>
          <GovBRCheckbox label="Texto curto" checked={true} />
          <GovBRCheckbox
            label="Este é um texto mais longo para testar o alinhamento da label com o checkbox quando há quebra de linha"
            checked={true}
          />
          <GovBRCheckbox
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            checked={false}
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Modo Estrito (Gov.br DS)
        </Typography>
        <Stack spacing={1}>
          <GovBRCheckbox strictgovbr id="strict-short" label="Texto curto" checked={true} />
          <GovBRCheckbox
            strictgovbr
            id="strict-long"
            label="Este é um texto mais longo para testar o alinhamento da label com o checkbox quando há quebra de linha"
            checked={true}
          />
          <GovBRCheckbox
            strictgovbr
            id="strict-very-long"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            checked={false}
          />
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Checkbox com Props Específicas
        </Typography>
        <Stack spacing={1}>
          <GovBRCheckbox
            checkboxProps={{ size: 'small' }}
            label="Checkbox pequeno - texto curto"
            checked={true}
          />
          <GovBRCheckbox
            checkboxProps={{ size: 'small' }}
            label="Checkbox pequeno - Este é um texto mais longo para testar o alinhamento"
            checked={false}
          />
        </Stack>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração específica do alinhamento de labels com textos de diferentes tamanhos em ambos os modos (MUI e Gov.br DS estrito)',
      },
    },
  },
}
