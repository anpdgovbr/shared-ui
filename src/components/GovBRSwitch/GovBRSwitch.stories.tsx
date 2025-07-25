import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import GovBRSwitch from './GovBRSwitch'
import { GovBRSwitchProps } from './types'

export default {
  title: 'GovBR/Switch',
  tags: ['autodocs'],
  component: GovBRSwitch,
} as Meta

const Template: StoryFn<GovBRSwitchProps> = args => {
  const [checked, setChecked] = useState(args.checked ?? false)

  return <GovBRSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />
}

export const Padrão = Template.bind({})
Padrão.args = {
  label: 'Ativar recurso',
  checked: false,
}

export const Desativado = Template.bind({})
Desativado.args = {
  label: 'Switch inativo',
  checked: true,
  disabled: true,
}
