import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { GovBRSignIn } from './GovBRSignIn.js'
import Stack from '@mui/material/Stack'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'GovBR/SignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  args: { onClick: fn() },
}
export default meta

type Story = StoryObj<typeof GovBRSignIn>

export const Variants: Story = {
  name: 'Variações de Conteúdo',
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <GovBRSignIn variant="internal" emphasis="primary" />
      <GovBRSignIn variant="external-text" />
      <GovBRSignIn variant="external-image" />
    </Stack>
  ),
}

export const Densities: Story = {
  name: 'Variações de Densidade',
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <GovBRSignIn variant="internal" density="small" />
      <GovBRSignIn variant="internal" density="medium" />
      <GovBRSignIn variant="internal" density="large" />
    </Stack>
  ),
}

export const Shapes: Story = {
  name: 'Variações de Formato',
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <GovBRSignIn variant="internal" circle aria-label="Entrar" />
      <GovBRSignIn variant="internal" block />
    </Stack>
  ),
}

export const Inverted: Story = {
  name: 'Modo Invertido (Fundo Escuro)',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <GovBRSignIn variant="internal" inverted />
      <GovBRSignIn variant="internal" emphasis="primary" inverted />
      <GovBRSignIn variant="internal" circle inverted aria-label="Entrar" />
    </Stack>
  ),
}
