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
  label: 'Label',
  checked: false,
}

export const Desativado = Template.bind({})
Desativado.args = {
  label: 'Switch inativo',
  checked: false,
  disabled: true,
}

export const Pequeno = Template.bind({})
Pequeno.args = {
  label: 'Pequeno',
  checked: false,
  size: 'small',
}

export const Grande = Template.bind({})
Grande.args = {
  label: 'Grande',
  checked: false,
  size: 'large',
}

export const ComTextoDeEstado = Template.bind({})
ComTextoDeEstado.args = {
  checked: true,
  textEnabled: 'Ligado',
  textDisabled: 'Desligado',
}

// SEGUNDO EXEMPLO
export const ComTextoCustomizado = Template.bind({})
ComTextoCustomizado.args = {
  checked: true,
  textEnabled: 'Concordo',
  textDisabled: 'Discordo',
}
