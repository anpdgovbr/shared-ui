import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GovBRRadio } from './index'

const meta: Meta<typeof GovBRRadio> = {
  title: 'Components/GovBRRadio',
  component: GovBRRadio,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, maxWidth: '600px' }}>
        <Story />
      </Box>
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
      description: 'Texto do rótulo exibido ao lado do radio button para identificar a opção',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Desabilita o radio button impedindo seleção e aplicando estilos visuais apropriados',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Define se o radio button está selecionado - controlado externamente pelo grupo',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor único que identifica esta opção dentro do grupo de radio buttons',
      table: {
        category: 'Dados',
        type: { summary: 'string | number' },
      },
    },
    name: {
      control: 'text',
      description: 'Nome do grupo - todos os radio buttons do mesmo grupo devem ter o mesmo name',
      table: {
        category: 'Dados',
        type: { summary: 'string' },
      },
    },
    labelPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      description:
        'Posição do rótulo: top (acima), bottom (abaixo), start (esquerda), end (direita)',
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
## GovBRRadio - Seleção Única Governamental

Componente de radio button padronizado que permite seleção única dentro de um grupo de opções conforme GovBR Design System.

### Características Principais:
- 🎨 **Modo Duplo**: Suporte a MUI com tema personalizado ou HTML puro com classes GovBR-DS
- 🔄 **Grupos Inteligentes**: Gerenciamento automático de seleção mutuamente exclusiva
- ♿ **Acessibilidade WCAG**: ARIA labels, navegação por setas, foco visível, screen readers
- 🎭 **Estados Completos**: Normal, hover, focus, selected, disabled com feedback visual
- 📍 **Posicionamento Flexível**: Rótulos em qualquer posição (top, bottom, start, end)
- 🏛️ **Compliance GovBR**: Segue rigorosamente diretrizes de interface governamental
- ⚡ **Performance**: Renderização otimizada para formulários com muitas opções

### Casos de Uso Ideais:
- Formulários de pesquisa e questionários governamentais
- Seleção de preferências em sistemas administrativos  
- Opções de configuração em painéis de controle
- Escolhas mutuamente exclusivas em processos de decisão
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRRadio>

export const Default: Story = {
  args: {
    label: 'Opção padrão',
    value: 'default',
  },
}

export const WithStrictGovBr: Story = {
  args: {
    strictgovbr: true,
    label: 'Modo estrito GovBR-DS',
    value: 'strict',
    name: 'example-strict',
    id: 'strict-radio',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button seguindo rigorosamente o padrão GovBR-DS com classes `.br-radio`',
      },
    },
  },
}

export const RadioGroupExample: Story = {
  render: function RadioGroupDemo() {
    const [value, setValue] = React.useState('opcao1')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Escolha uma opção (Modo MUI)</FormLabel>
        <RadioGroup name="radio-group-mui" value={value} onChange={handleChange}>
          <GovBRRadio value="opcao1" label="Primeira opção" />
          <GovBRRadio value="opcao2" label="Segunda opção" />
          <GovBRRadio value="opcao3" label="Terceira opção" />
          <GovBRRadio value="opcao4" label="Opção desabilitada" disabled />
        </RadioGroup>
      </FormControl>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo de radio buttons com controle de estado (modo MUI)',
      },
    },
  },
}

export const StrictRadioGroup: Story = {
  render: function StrictRadioGroupDemo() {
    const [value, setValue] = React.useState('governo')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Tipo de organização (Modo Estrito GovBR)
        </Typography>
        <Stack spacing={1}>
          <GovBRRadio
            strictgovbr
            name="organizacao"
            value="governo"
            label="Órgão governamental"
            id="governo"
            checked={value === 'governo'}
            onChange={handleChange}
          />
          <GovBRRadio
            strictgovbr
            name="organizacao"
            value="empresa"
            label="Empresa privada"
            id="empresa"
            checked={value === 'empresa'}
            onChange={handleChange}
          />
          <GovBRRadio
            strictgovbr
            name="organizacao"
            value="ong"
            label="Organização não governamental"
            id="ong"
            checked={value === 'ong'}
            onChange={handleChange}
          />
          <GovBRRadio
            strictgovbr
            name="organizacao"
            value="outro"
            label="Outro (especificar)"
            id="outro"
            disabled
          />
        </Stack>

        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          <Typography variant="body2">
            Selecionado: <strong>{value}</strong>
          </Typography>
        </Box>
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Grupo de radio buttons no modo estrito com controle de estado',
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
        <GovBRRadio label="Label à direita (padrão)" labelPlacement="end" checked />
        <GovBRRadio label="Label à esquerda" labelPlacement="start" />
        <GovBRRadio label="Label acima" labelPlacement="top" />
        <GovBRRadio label="Label abaixo" labelPlacement="bottom" />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes posicionamentos do label em relação ao radio (apenas modo MUI)',
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
        <GovBRRadio label="Primary (padrão)" checked radioProps={{ color: 'primary' }} />
        <GovBRRadio label="Secondary" radioProps={{ color: 'secondary' }} />
        <GovBRRadio label="Success" radioProps={{ color: 'success' }} />
        <GovBRRadio label="Warning" radioProps={{ color: 'warning' }} />
        <GovBRRadio label="Error" radioProps={{ color: 'error' }} />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons com diferentes cores semânticas do tema GovBR-DS',
      },
    },
  },
}

export const FormExample: Story = {
  render: function FormExample() {
    const [formData, setFormData] = React.useState({
      nivelAcesso: 'publico',
      tipoDocumento: 'oficio',
    })

    const handleNivelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, nivelAcesso: event.target.value }))
    }

    const handleTipoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, tipoDocumento: event.target.value }))
    }

    return (
      <Box sx={{ maxWidth: 500 }}>
        <Typography variant="h6" gutterBottom>
          Classificação de Documento - ANPD
        </Typography>

        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Nível de Acesso
            </Typography>
            <Stack spacing={1}>
              <GovBRRadio
                strictgovbr
                name="nivel"
                value="publico"
                label="Público"
                id="publico"
                checked={formData.nivelAcesso === 'publico'}
                onChange={handleNivelChange}
              />
              <GovBRRadio
                strictgovbr
                name="nivel"
                value="restrito"
                label="Restrito"
                id="restrito"
                checked={formData.nivelAcesso === 'restrito'}
                onChange={handleNivelChange}
              />
              <GovBRRadio
                strictgovbr
                name="nivel"
                value="sigiloso"
                label="Sigiloso"
                id="sigiloso"
                checked={formData.nivelAcesso === 'sigiloso'}
                onChange={handleNivelChange}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Tipo de Documento
            </Typography>
            <Stack spacing={1}>
              <GovBRRadio
                strictgovbr
                name="tipo"
                value="oficio"
                label="Ofício"
                id="oficio"
                checked={formData.tipoDocumento === 'oficio'}
                onChange={handleTipoChange}
              />
              <GovBRRadio
                strictgovbr
                name="tipo"
                value="parecer"
                label="Parecer técnico"
                id="parecer"
                checked={formData.tipoDocumento === 'parecer'}
                onChange={handleTipoChange}
              />
              <GovBRRadio
                strictgovbr
                name="tipo"
                value="relatorio"
                label="Relatório"
                id="relatorio"
                checked={formData.tipoDocumento === 'relatorio'}
                onChange={handleTipoChange}
              />
            </Stack>
          </Box>

          <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
            <Typography variant="body2">Configuração atual:</Typography>
            <Typography variant="body2" component="pre" sx={{ fontSize: '0.75rem' }}>
              {JSON.stringify(formData, null, 2)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo prático de uso em formulário governamental com múltiplos grupos',
      },
    },
  },
}
