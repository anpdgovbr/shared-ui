import type { Meta, StoryObj } from '@storybook/react'
import { GovBRSignIn } from './GovBRSignIn'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'GovBR/SignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Define a cor do botão.',
    },
    signInVariant: {
      control: 'radio',
      options: ['internal', 'external-image', 'external-text'],
      description: 'Variante de conteúdo do botão.',
    },
    onClick: { action: 'clicked' },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
  },
}

export const Secundario: Story = {
  args: {
    signInVariant: 'internal',
    color: 'secondary',
  },
}

export const Circular: Story = {
  args: {
    ...Padrao.args,
    circle: true,
    'aria-label': 'Entrar na sua conta Gov.br',
  },
}

export const ExternoComImagem: Story = {
  args: {
    signInVariant: 'external-image',
    color: 'secondary',
  },
}

export const ExternoComTexto: Story = {
  args: {
    signInVariant: 'external-text',
    color: 'secondary',
  },
}

export const Desativado: Story = {
  args: {
    ...Padrao.args,
    disabled: true,
  },
}

export const Bloco: Story = {
  args: {
    ...Padrao.args,
    block: true,
  },
}
