import type { Meta, StoryObj } from '@storybook/react'

import { GovBRSignIn } from './index'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'Components/GovBRSignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto a ser exibido no botão de login.',
      table: {
        defaultValue: { summary: 'Entrar com gov.br' },
      },
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito para o botão interno.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão.',
    },
    onClick: {
      action: 'clicked',
      description: "Função executada no clique. Recebe 'govbr' como argumento.",
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRSignIn>

export const MuiDefault: Story = {
  name: 'Padrão (MUI)',
  args: {
    strictgovbr: false,
  },
}

export const StrictDefault: Story = {
  name: 'Estrito (GovBR)',
  args: {
    strictgovbr: true,
  },
}

export const CustomLabel: Story = {
  name: 'Texto Customizado',
  args: {
    strictgovbr: false,
    label: 'Acessar com conta gov.br',
  },
}
