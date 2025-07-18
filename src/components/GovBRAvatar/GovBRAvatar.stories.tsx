import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GovBRAvatar from './GovBRAvatar.js'
import { Stack } from '@mui/material'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'GovBR/Avatar',
  tags: ['autodocs'],
  component: GovBRAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    src: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'radio',
      options: ['circular', 'rounded', 'square'],
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary'],
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Usa estilos estritamente do GovBR Design System',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'João Silva',
    strictGovBr: false,
  },
}

export const WithImage: Story = {
  name: 'Com Imagem',
  args: {
    name: 'João Silva',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    alt: 'Foto de João Silva',
  },
}

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <GovBRAvatar name="João Silva" size="small" />
      <GovBRAvatar name="Maria Santos" size="medium" />
      <GovBRAvatar name="Pedro Costa" size="large" />
    </Stack>
  ),
}

export const Variants: Story = {
  name: 'Variações de Formato',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <GovBRAvatar name="João Silva" variant="circular" />
      <GovBRAvatar name="Maria Santos" variant="rounded" />
      <GovBRAvatar name="Pedro Costa" variant="square" />
    </Stack>
  ),
}

export const Colors: Story = {
  name: 'Cores',
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <GovBRAvatar name="João Silva" color="default" />
      <GovBRAvatar name="Maria Santos" color="primary" />
      <GovBRAvatar name="Pedro Costa" color="secondary" />
    </Stack>
  ),
}

export const WithoutName: Story = {
  name: 'Sem Nome (Ícone Padrão)',
  args: {
    alt: 'Usuário sem nome',
    color: 'default',
  },
}
