import type { Meta, StoryObj } from '@storybook/react'
import { GovBRRadio } from './GovBRRadio.js'
import { Stack } from '@mui/material'
import React from 'react'

const meta: Meta<typeof GovBRRadio> = {
  title: 'GovBR/Radio',
  component: GovBRRadio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    valid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof GovBRRadio>

export const Default: Story = {
  name: 'Padrão',
  args: {
    id: 'radio-default',
    label: 'Rótulo',
    helpText: 'Informações adicionais',
    text: 'Opção',
  },
}

export const States: Story = {
  name: 'Todos os Estados',
  render: () => {
    const [selected, setSelected] = React.useState('op2')

    return (
      <Stack>
        <GovBRRadio
          name="opcao"
          value="op1"
          id="state-unchecked"
          text="Desmarcado"
          checked={selected === 'op1'}
          onChange={() => setSelected('op1')}
        />
        <GovBRRadio
          name="opcao"
          value="op2"
          id="state-checked"
          text="Marcado"
          checked={selected === 'op2'}
          onChange={() => setSelected('op2')}
        />
        <GovBRRadio
          name="opcao"
          value="op3"
          id="state-disabled"
          text="Desativado"
          disabled
          checked={selected === 'op3'}
          onChange={() => setSelected('op3')}
        />
        <GovBRRadio
          name="opcao"
          value="op4"
          id="state-valid"
          text="Válido"
          valid
          checked={selected === 'op4'}
          onChange={() => setSelected('op4')}
        />
        <GovBRRadio
          name="opcao"
          value="op5"
          id="state-invalid"
          text="Inválido"
          error
          checked={selected === 'op5'}
          onChange={() => setSelected('op5')}
        />
      </Stack>
    )
  },
}

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => {
    const [selected, setSelected] = React.useState('opcao1')

    return (
      <Stack direction="row" gap={-1}>
        <GovBRRadio
          name="grupo-opcoes"
          text="opção 1"
          value="opcao1"
          checked={selected === 'opcao1'}
          onChange={() => setSelected('opcao1')}
        />
        <GovBRRadio
          name="grupo-opcoes"
          text="opção 2"
          value="opcao2"
          checked={selected === 'opcao2'}
          onChange={() => setSelected('opcao2')}
        />
        <GovBRRadio
          name="grupo-opcoes"
          text="opção 3"
          value="opcao3"
          checked={selected === 'opcao3'}
          onChange={() => setSelected('opcao3')}
        />
      </Stack>
    )
  },
}
