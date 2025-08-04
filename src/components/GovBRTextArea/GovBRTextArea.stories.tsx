import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'
import GovBRTextArea from './GovBRTextArea'
import { GovBRTextAreaProps } from './types'

export default {
  title: 'GovBR/TextArea',
  tags: ['autodocs'],
  component: GovBRTextArea,
} as Meta

const Template: StoryFn<GovBRTextAreaProps> = args => {
  const [value, setValue] = useState(args.value || '')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return <GovBRTextArea {...args} value={value} onChange={handleChange} />
}

export const Padrao = Template.bind({})
Padrao.args = {
  id: 'textarea-padrao',
  label: 'Label',
  placeholder: 'Exemplo de textarea simples',
}

export const Desabilitado = Template.bind({})
Desabilitado.args = {
  id: 'textarea-desabilitado',
  label: 'Label',
  placeholder: 'Exemplo de textarea desabilitado',
  disabled: true,
}

export const ComSucesso = Template.bind({})
ComSucesso.args = {
  id: 'textarea-sucesso',
  label: 'Label',
  placeholder: 'Exemplo de textarea com sucesso',
  status: 'success',
  helperText: 'Campo correto',
}

export const ComErro = Template.bind({})
ComErro.args = {
  id: 'textarea-erro',
  label: 'Label',
  placeholder: 'Exemplo de textarea com erro',
  status: 'danger',
  helperText: 'Campo com erro',
}

export const ComAviso = Template.bind({})
ComAviso.args = {
  id: 'textarea-aviso',
  label: 'Label',
  placeholder: 'Exemplo de textarea com aviso',
  status: 'warning',
  helperText: 'Campo com aviso',
}

export const ComContador = Template.bind({})
ComContador.args = {
  id: 'textarea-contador',
  label: 'Label',
  placeholder: 'Exemplo de textarea com contador de caracteres',
  maxLength: 300,
}
