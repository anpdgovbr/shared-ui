import type { Meta, StoryObj } from '@storybook/react'

import { GovBRButton } from '../govbr-button'
import { GovBRCheckbox } from '../govbr-checkbox'
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
    children: {
      control: { type: 'text' },
      description: 'Conteúdo interno do item. Pode ser texto ou outros componentes.',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRItem>

export const Default: Story = {
  args: {
    children: <GovBRButton>Botão dentro do Item</GovBRButton>,
  },
}

export const WithEstado: Story = {
  render: function allStates() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <GovBRItem>
          <GovBRButton>Item Ativo</GovBRButton>
        </GovBRItem>
        <GovBRItem estado="disabled">
          <GovBRButton disabled>Item Desabilitado</GovBRButton>
        </GovBRItem>
        <GovBRItem estado="selected">
          <GovBRButton>Item Selecionado</GovBRButton>
        </GovBRItem>
      </div>
    )
  },
}

export const WithDivider: Story = {
  args: {
    divider: true,
    children: <GovBRButton>Botão dentro do Item</GovBRButton>,
  },
}

export const WithEstadoAndDivider: Story = {
  args: {
    estado: 'selected',
    divider: true,
    children: <GovBRButton>Botão dentro do Item</GovBRButton>,
  },
}

export const WithCheckbox: Story = {
  render: function withCheckbox() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <GovBRItem>
          <GovBRCheckbox label="Opção 1" />
        </GovBRItem>
        <GovBRItem estado="disabled">
          <GovBRCheckbox label="Opção 2" disabled />
        </GovBRItem>
        <GovBRItem estado="selected">
          <GovBRCheckbox label="Opção 3" defaultChecked />
        </GovBRItem>
        <GovBRItem>
          <GovBRCheckbox label="Opção com ds govBR" strictgovbr />
        </GovBRItem>
      </div>
    )
  },
}
