import type { Meta, StoryObj } from '@storybook/react'
import { GovBRButton } from 'src/components/ui/govbr-button'

import { GovBRItem } from './index'

const meta: Meta<typeof GovBRItem> = {
  title: 'Components/GovBRItem',
  component: GovBRItem,
  tags: ['autodocs'],
  argTypes: {
    estado: {
      control: { type: 'select' },
      options: ['active', 'disabled', 'selected'],
      description: 'Define o estado do item. Pode ser "active", "disabled" ou "selected".',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    divider: {
      control: { type: 'boolean' },
      description: 'Se verdadeiro, renderiza uma linha divisória abaixo do item.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    strictgovbr: {
      control: { type: 'boolean' },
      description: 'Se verdadeiro, aplica as classes CSS do padrão GovBR.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Conteúdo do item. Pode ser texto ou outros componentes React.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    estado: 'active',
    divider: false,
    strictgovbr: false,
  },
}

export default meta
type Story = StoryObj<typeof GovBRItem>

export const Default: Story = {
  render: (args) => (
    <GovBRItem {...args}>
      <GovBRButton variant="contained" color="primary">
        Botão dentro do GovBRItem
      </GovBRButton>
    </GovBRItem>
  ),
}

export const WithDivider: Story = {
  render: (args) => (
    <GovBRItem {...args} divider>
      Item com divisor
    </GovBRItem>
  ),
}

export const DisabledItem: Story = {
  render: (args) => (
    <GovBRItem {...args} estado="disabled">
      Item desabilitado
    </GovBRItem>
  ),
}

export const SelectedItem: Story = {
  render: (args) => (
    <GovBRItem {...args} estado="selected">
      Item selecionado
    </GovBRItem>
  ),
}

export const StrictGovBRMode: Story = {
  render: (args) => (
    <GovBRItem {...args} strictgovbr>
      Item em modo estrito GovBR
    </GovBRItem>
  ),
}

export const StrictGovBRWithDivider: Story = {
  render: (args) => (
    <GovBRItem {...args} strictgovbr divider>
      Item em modo estrito GovBR com divisor
    </GovBRItem>
  ),
}

export const StrictGovBRDisabled: Story = {
  render: (args) => (
    <GovBRItem {...args} strictgovbr estado="disabled">
      Item desabilitado em modo estrito GovBR
    </GovBRItem>
  ),
}

export const StrictGovBRSelected: Story = {
  render: (args) => (
    <GovBRItem {...args} strictgovbr estado="selected">
      Item selecionado em modo estrito GovBR
    </GovBRItem>
  ),
}
