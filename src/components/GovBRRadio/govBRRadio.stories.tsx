import type { Meta, StoryObj } from '@storybook/react'
import { GovBRRadio } from './GovBRRadio.js'
import { Stack } from '@mui/material'

const meta: Meta<typeof GovBRRadio> = {
  title:'GovBR/Radio',
  component: GovBRRadio,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
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
    text: 'Opção',
  }
}

export const States: Story = {
  name: 'Todos os Estados',
  render: () => (
    <Stack>
      <GovBRRadio id='state-unchecked' text='Desmarcado'/>
      <GovBRRadio id='state-checked' text='Marcado' checked={true}/>
      <GovBRRadio id='state-disabled' text='Desativado' disabled/>
      <GovBRRadio id='state-valid' text='Válido' error/>
      <GovBRRadio id='state-invalid' text='Inválido' valid/>
    </Stack>
  )
}