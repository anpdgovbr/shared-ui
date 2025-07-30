import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { GovBRSignIn } from './GovBRSignIn'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'GovBR/SignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  args: { onClick: fn() },
}
export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
  },
}

export const Circular: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
    circle: true,
    'aria-label': 'Ícone ilustrativo',
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

export const Invertido: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
    inverted: true,
  },
}

export const Desativado: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
    disabled: true,
  },
}

export const Bloco: Story = {
  args: {
    signInVariant: 'internal',
    color: 'primary',
    block: true,
  },
}
