import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRCheckbox } from './GovBRCheckbox.js'

const meta: Meta<typeof GovBRCheckbox> = {
  title: 'GovBR/Checkbox',
  component: GovBRCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    status: {
      control: 'radio',
      options: ['valid', 'invalid', undefined],
    },
  },
}
export default meta

type Story = StoryObj<typeof GovBRCheckbox>

export const Default: Story = {
  name: 'Padrão Interativo',
  args: {
    id: 'checkbox-default',
    label: 'Rótulo do Checkbox',
  },
}

export const States: Story = {
  name: 'Todos os Estados',
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <GovBRCheckbox id="state-unchecked" label="Desmarcado" />
      <GovBRCheckbox id="state-checked" label="Marcado" checked />
      <GovBRCheckbox id="state-indeterminate" label="Indeterminado" indeterminate />
      <GovBRCheckbox id="state-disabled" label="Desativado" disabled />
      <GovBRCheckbox id="state-invalid" label="Inválido" status="invalid" />
      <GovBRCheckbox id="state-valid" label="Válido" status="valid" checked />
    </Stack>
  ),
}

export const HiddenLabel: Story = {
  name: 'Rótulo Oculto',
  args: {
    id: 'hidden-label',
    label: 'Checkbox com rótulo oculto',
    hiddenLabel: true,
  },
}
