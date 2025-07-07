import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { GovBRSignIn } from './GovBRSignIn.js'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'GovBR/SignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  args: { onClick: fn() },
}
export default meta

type Story = StoryObj<typeof GovBRSignIn>

export const Default: Story = {
  args: {
    variant: 'internal',
  },
}

export const Primary: Story = {
  args: {
    variant: 'internal',
    emphasis: 'primary',
  },
}

export const CircularIcon: Story = {
  args: {
    variant: 'internal',
    emphasis: 'primary',
    isCircle: true,
    ariaLabel: 'Acessar área do usuário',
  },
}

export const ExternalImage: Story = {
  args: {
    variant: 'external-image',
    density: 'large',
  },
}

export const ExternalTextInverted: Story = {
  name: 'External Text (Fundo Escuro)',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    variant: 'external-text',
    emphasis: 'primary',
    isInverted: true,
  },
}
