import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRButton } from '@components/GovBRButton/GovBRButton.js'

const meta: Meta<typeof GovBRButton> = {
  title: 'GovBR/Button',
  component: GovBRButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
    },
    circle: { control: 'boolean' },
    block: { control: 'boolean' },
    inverted: { control: 'boolean' },
    loading: { control: 'boolean' },
    clearBlock: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg', 'xl'],
    },
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof GovBRButton>

export const Default: Story = {
  args: {
    children: 'Botão Padrão',
    color: 'primary',
  },
}

export const Circle: Story = {
  args: {
    children: 'C',
    circle: true,
    color: 'secondary',
  },
}

export const Block: Story = {
  args: {
    children: 'Botão em Bloco',
    block: true,
    color: 'success',
  },
}

export const Inverted: Story = {
  args: {
    children: 'Invertido',
    inverted: true,
    color: 'warning',
  },
}

export const Loading: Story = {
  args: {
    children: 'Carregando',
    loading: true,
    color: 'info',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    loading: false,
    color: 'primary',
    disabled: true,
  },
}

export const ClearBlockSizes: Story = {
  render: args => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <GovBRButton {...args} clearBlock="sm">
        sm
      </GovBRButton>
      <GovBRButton {...args} clearBlock="md">
        md
      </GovBRButton>
      <GovBRButton {...args} clearBlock="lg">
        lg
      </GovBRButton>
      <GovBRButton {...args} clearBlock="xl">
        xl
      </GovBRButton>
    </div>
  ),
  args: {
    color: 'error',
  },
}
