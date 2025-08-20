import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { GovBRTextArea } from './index'
import type { GovBRTextAreaProps } from './types'

const meta: Meta<typeof GovBRTextArea> = {
  title: 'Components/GovBRTextArea',
  component: GovBRTextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## 🎯 GovBRTextArea - Biblioteca de Componentes ANPD

Componente textarea seguindo a **arquitetura híbrida** da shared-ui, baseado no [Gov.br Design System](https://www.gov.br/ds/components/textarea?tab=desenvolvedor).

### 🏛️ Arquitetura Implementada

- **Modo Padrão** (\`strictgovbr={false}\`): Componente MUI estilizado pelo govbrTheme.ts
- **Modo Estrito** (\`strictgovbr={true}\`): HTML textarea puro com classes Gov.br DS

### ✨ Características Principais

- 🎨 **Tokens CSS Gov.br DS**: Cores, espaçamentos e tipografia padronizados
- 📱 **Responsivo**: Adapta-se aos breakpoints do tema
- ♿ **Acessível**: Labels, ARIA e navegação por teclado
- 🔢 **Contador de caracteres**: Opcional com limite configurável
- 🎭 **Estados visuais**: Success, danger, warning, info
- 🌳 **Tree shaking**: Imports otimizados para melhor performance

### 🚀 Como Usar

\`\`\`tsx
import { GovBRTextArea } from '@anpdgovbr/shared-ui'

// Modo Padrão - MUI + govbrTheme
<GovBRTextArea 
  label="Observações" 
  id="obs" 
  maxLength={500}
  showCounter 
/>

// Modo Estrito - HTML puro + Gov.br DS
<GovBRTextArea 
  strictgovbr
  label="Observações"
  id="obs-strict"
  status="success"
  helperText="Campo preenchido corretamente"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa modo estrito com HTML puro e classes Gov.br DS',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Label do textarea',
    },
    status: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info'],
      description: 'Status visual do componente',
    },
    showCounter: {
      control: 'boolean',
      description: 'Exibe contador de caracteres',
    },
    maxLength: {
      control: 'number',
      description: 'Limite máximo de caracteres',
    },
    rows: {
      control: 'number',
      description: 'Número de linhas visíveis',
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRTextArea>

// Template com estado controlado - CORREÇÃO: substituindo 'any' por tipagem específica
const ControlledTemplate = (args: GovBRTextAreaProps) => {
  const [value, setValue] = useState(args.value || '')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <Box sx={{ maxWidth: 600, padding: 2 }}>
      <GovBRTextArea {...args} value={value} onChange={handleChange} />
    </Box>
  )
}

// ===== STORIES PRINCIPAIS =====

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    id: 'textarea-default',
    label: 'Observações',
    placeholder: 'Digite suas observações...',
    rows: 4,
  },
}

export const WithStrictGovBR: Story = {
  render: ControlledTemplate,
  args: {
    id: 'textarea-strict',
    label: 'Observações (Modo Estrito)',
    placeholder: 'Digite suas observações...',
    strictgovbr: true,
    rows: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Modo estrito usando HTML puro com classes CSS do Gov.br DS para 100% de fidelidade visual.',
      },
    },
  },
}

export const WithCounter: Story = {
  render: ControlledTemplate,
  args: {
    id: 'textarea-counter',
    label: 'Descrição',
    placeholder: 'Máximo 300 caracteres...',
    maxLength: 300,
    showCounter: true,
    rows: 6,
  },
}

export const WithStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Estados Visuais - Modo Padrão
      </Typography>

      {/* Success */}
      <GovBRTextArea
        id="success-state"
        label="Estado de Sucesso"
        status="success"
        helperText="Campo preenchido corretamente"
        value="Texto válido"
        readOnly
      />

      {/* Error */}
      <GovBRTextArea
        id="error-state"
        label="Estado de Erro"
        status="danger"
        helperText="Este campo é obrigatório"
        placeholder="Campo com erro..."
      />

      {/* Warning */}
      <GovBRTextArea
        id="warning-state"
        label="Estado de Aviso"
        status="warning"
        helperText="Atenção: verifique as informações"
        value="Texto com aviso"
        readOnly
      />

      {/* Info */}
      <GovBRTextArea
        id="info-state"
        label="Estado Informativo"
        status="info"
        helperText="Informação adicional sobre o campo"
        placeholder="Campo informativo..."
      />
    </Box>
  ),
}

export const StrictGovBRStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Estados Visuais - Modo Estrito (Gov.br DS Puro)
      </Typography>

      {/* Success */}
      <GovBRTextArea
        strictgovbr
        id="strict-success"
        label="Estado de Sucesso"
        status="success"
        helperText="Campo preenchido corretamente"
        value="Texto válido"
        readOnly
      />

      {/* Error */}
      <GovBRTextArea
        strictgovbr
        id="strict-error"
        label="Estado de Erro"
        status="danger"
        helperText="Este campo é obrigatório"
        placeholder="Campo com erro..."
      />
    </Box>
  ),
}

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    id: 'textarea-disabled',
    label: 'Campo Desabilitado',
    placeholder: 'Campo desabilitado...',
    disabled: true,
    value: 'Conteúdo não editável',
  },
}

export const Required: Story = {
  render: ControlledTemplate,
  args: {
    id: 'textarea-required',
    label: 'Campo Obrigatório',
    placeholder: 'Este campo é obrigatório...',
    required: true,
    helperText: 'Campo obrigatório',
  },
}

// ===== STORY DE INTEGRAÇÃO =====
export const IntegrationExample: Story = {
  render: () => {
    const [observacoes, setObservacoes] = useState('')
    const [descricao, setDescricao] = useState('')

    return (
      <Box sx={{ maxWidth: 800, padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Exemplo de Integração - Formulário ANPD
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <GovBRTextArea
            id="descricao-processo"
            label="Descrição do Processo"
            placeholder="Descreva detalhadamente o processo..."
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            maxLength={1000}
            showCounter
            rows={6}
            required
          />

          <GovBRTextArea
            id="observacoes-adicionais"
            label="Observações Adicionais"
            placeholder="Observações complementares (opcional)..."
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            rows={4}
            status={observacoes.length > 0 ? 'success' : undefined}
            helperText={observacoes.length > 0 ? 'Observações adicionadas' : 'Campo opcional'}
          />
        </Box>
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo prático de uso em um formulário da ANPD com múltiplos textareas e estados controlados.',
      },
    },
  },
}
