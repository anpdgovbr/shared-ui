import type { Meta, StoryObj } from '@storybook/react'
import { GovBRRadio } from './GovBRRadio.js'
import { Stack } from '@mui/material'
import { Disabled } from '../GovBRButton/GovBRButton.stories.js'


const meta: Meta<typeof GovBRRadio> = {
  title:'GovBR/Radio',
  component: GovBRRadio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    status: {
      control: 'radio',
      options: ['valid', 'invalid', undefined]
    },
    disabled: {
      control: 'radio',
      options: ['true', 'false']
    }
  }
}
export default meta
type Story = StoryObj<typeof GovBRRadio>

export const Default: Story = {
  name: 'Padrão',
  args: {
    id: 'radio-default',
    label: 'Rótulo',
    helpText: 'Informações adicionais',
    text: 'Opção'
  }
}

export const States: Story = {
  name: 'Todos os Estados',
  render: () => (
    <Stack>
      <GovBRRadio id='state-unchecked' label='Desmarcado'/>
      <GovBRRadio id='state-checked' label='Marcado' checked/>
      <GovBRRadio id='state-disabled' label='Desativado' disabled/>
      <GovBRRadio id='state-valid' label='Válido' status='valid' />
      <GovBRRadio id='state-invalid' label='Inválido' status='invalid'/>
    </Stack>
  )
}