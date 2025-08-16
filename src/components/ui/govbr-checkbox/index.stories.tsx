import type { Meta, StoryObj } from '@storybook/react'

import { GovBRThemeProvider } from '../../../theme/GovBRThemeProvider'
import { GovBRCheckbox } from './index'

const meta: Meta<typeof GovBRCheckbox> = {
  title: 'Components/GovBRCheckbox',
  component: GovBRCheckbox,
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
    label: {
      control: 'text',
      description: 'Rótulo do checkbox',
    },
    status: {
      control: 'select',
      options: ['valid', 'invalid'],
      description: 'Status visual do checkbox para validação',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o checkbox está desabilitado',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado (parcialmente selecionado)',
    },
    hiddenLabel: {
      control: 'boolean',
      description: 'Oculta o rótulo visualmente (mantém para acessibilidade)',
    },
    checked: {
      control: 'boolean',
      description: 'Define se o checkbox está marcado',
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Aplicar estilos estritamente compatíveis com govbr-ds',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRCheckbox - Componente GovBR-DS

Componente de checkbox que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🎨 **Estados Visuais**: Valid, invalid, indeterminate
- 🔍 **Acessibilidade**: Labels ocultos, aria-labels e navegação por teclado
- ✅ **Validação**: Estados de sucesso e erro visuais
- 🎭 **Estado Indeterminado**: Para seleções parciais
- 📝 **Labels Flexíveis**: Visíveis ou ocultos mantendo acessibilidade
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCheckbox>

export const Default: Story = {
  args: {
    id: 'default',
    label: 'Aceito os termos e condições',
  },
}

export const Checked: Story = {
  args: {
    id: 'checked',
    label: 'Opção selecionada',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'Opção desabilitada',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked',
    label: 'Opção desabilitada e selecionada',
    disabled: true,
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    id: 'indeterminate',
    label: 'Estado indeterminado',
    indeterminate: true,
  },
}

export const WithSuccess: Story = {
  args: {
    id: 'success',
    label: 'Validação bem-sucedida',
    status: 'valid',
    checked: true,
  },
}

export const WithError: Story = {
  args: {
    id: 'error',
    label: 'Campo obrigatório',
    status: 'invalid',
  },
}

export const HiddenLabel: Story = {
  args: {
    id: 'hidden-label',
    label: 'Rótulo oculto (mas acessível)',
    hiddenLabel: true,
  },
}

export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Selecione suas preferências:</h3>
      <GovBRCheckbox id="email" label="Receber notificações por email" />
      <GovBRCheckbox id="sms" label="Receber notificações por SMS" />
      <GovBRCheckbox id="push" label="Receber notificações push" />
      <GovBRCheckbox id="newsletter" label="Receber newsletter" checked />
    </div>
  ),
}
