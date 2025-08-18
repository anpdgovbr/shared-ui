import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { GovBRSwitch } from './index'
import type { GovBRSwitchProps } from './types'

const meta: Meta<typeof GovBRSwitch> = {
  title: 'components/GovBRSwitch',
  component: GovBRSwitch,
  tags: ['autodocs'], // cspell:disable-line
  parameters: {
    docs: {
      description: {
        component: `
## 🔄 GovBRSwitch

Componente de switch personalizado seguindo o padrão do GovBR Design System, construído sobre o Material-UI Switch.

### ✨ Características Principais

- 🎨 **Design GovBR**: Cores e estilos alinhados com o design system
- 📐 **Múltiplos Tamanhos**: Small, medium e large
- 🏷️ **Posicionamento de Label**: Start, end ou top
- 💬 **Texto de Estado**: Exibe "Ligado/Desligado" ou textos customizados
- ♿ **Acessibilidade**: Totalmente acessível e navegável por teclado
- 🎯 **Modo Strict GovBR**: Aplicação rigorosa das cores oficiais

### 🚀 Uso Básico

\`\`\`tsx
import { GovBRSwitch } from '@anpdgovbr/shared-ui' // cspell:disable-line

function MyComponent() {
  const [checked, setChecked] = useState(false)
  
  return (
    <GovBRSwitch
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="Habilitar notificações"
    />
  )
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Estado do switch (ligado/desligado)',
    },
    label: {
      control: { type: 'text' },
      description: 'Texto da label do switch',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do switch',
    },
    labelPlacement: {
      control: { type: 'select' },
      options: ['start', 'end', 'top'],
      description: 'Posição da label em relação ao switch',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o switch está desabilitado',
    },
    textEnabled: {
      control: { type: 'text' },
      description: 'Texto exibido quando o switch está ligado',
    },
    textDisabled: {
      control: { type: 'text' },
      description: 'Texto exibido quando o switch está desligado',
    },
    strictGovBr: {
      control: { type: 'boolean' },
      description: 'Aplica rigorosamente as cores oficiais do GovBR',
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRSwitch>

// Template com estado controlado
const ControlledTemplate = (args: GovBRSwitchProps) => {
  const [checked, setChecked] = useState(args.checked ?? false)

  return <GovBRSwitch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch Padrão',
    checked: false,
  },
}

export const Checked: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch Ativado',
    checked: true,
  },
}

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch Desabilitado',
    checked: false,
    disabled: true,
  },
}

export const Small: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch Pequeno',
    checked: false,
    size: 'small',
  },
}

export const Large: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch Grande',
    checked: false,
    size: 'large',
  },
}

export const WithStateText: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Notificações',
    checked: true,
    textEnabled: 'Ligado',
    textDisabled: 'Desligado',
  },
}

export const WithCustomStateText: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Aceitar termos',
    checked: false,
    textEnabled: 'Concordo',
    textDisabled: 'Discordo',
  },
}

export const StrictGovBr: Story = {
  render: ControlledTemplate,
  args: {
    label: 'Switch GovBR Oficial',
    checked: true,
    strictGovBr: true,
    textEnabled: 'Ativo',
    textDisabled: 'Inativo',
  },
}

export const LabelPositions: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <GovBRSwitch
          label="Label no final (padrão)"
          checked={checked1}
          onChange={(e) => setChecked1(e.target.checked)}
          labelPlacement="end"
        />
        <GovBRSwitch
          label="Label no início"
          checked={checked2}
          onChange={(e) => setChecked2(e.target.checked)}
          labelPlacement="start"
        />
        <GovBRSwitch
          label="Label no topo"
          checked={checked3}
          onChange={(e) => setChecked3(e.target.checked)}
          labelPlacement="top"
        />
      </div>
    )
  },
}
