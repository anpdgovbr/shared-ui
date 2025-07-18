import { Person as PersonIcon, Search as SearchIcon } from '@mui/icons-material'
import { Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import GovBRInput from './GovBRInput'
import type { GovBRInputProps } from './GovBRInput'

const meta: Meta<typeof GovBRInput> = {
  title: 'GovBR/Input',
  component: GovBRInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de input padronizado com o Design System do Governo Federal (GovBR). Suporta diversos estados visuais, tamanhos, ícones, layout inline e feedbacks de validação.',
      },
    },
  },
}

export default meta
type Story = StoryObj<GovBRInputProps>

// === Story com controles ===
export const Default: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    govbrSize: 'medium',
    status: undefined,
    clearBlock: undefined,
    highlight: false,
    inline: false,
    disabled: false,
    feedbackMessage: '',
    helperText: '',
  },
}

// === Story com ícones e botão ===
export const WithIconsAndButtons: Story = {
  args: {
    label: 'Buscar usuário',
    placeholder: 'Digite o nome',
    startIcon: <PersonIcon />,
    endButtonIcon: <SearchIcon />,
    onEndButtonClick: () => alert('Botão clicado'),
  },
}

// === Story com layout inline ===
export const Inline: Story = {
  args: {
    label: 'Campo em linha',
    placeholder: 'Texto do input',
    inline: true,
  },
}

// === Story com highlight e status ===
export const HighlightWithStatus: Story = {
  args: {
    label: 'Campo destacado',
    placeholder: 'Texto do input',
    highlight: true,
    status: 'info',
    feedbackMessage: 'Informação adicional',
  },
}

// === Story com diferentes tamanhos ===
export const Sizes: Story = {
  render: args => (
    <Stack spacing={3}>
      <GovBRInput {...args} label="Small" govbrSize="small" />
      <GovBRInput {...args} label="Medium" govbrSize="medium" />
      <GovBRInput {...args} label="Large" govbrSize="large" />
    </Stack>
  ),
  args: { placeholder: 'Digite algo' },
}

// === Story com diferentes clearBlock ===
export const ClearBlock: Story = {
  render: args => (
    <Stack spacing={3}>
      <GovBRInput {...args} label="Clear sm" clearBlock="sm" />
      <GovBRInput {...args} label="Clear md" clearBlock="md" />
      <GovBRInput {...args} label="Clear lg" clearBlock="lg" />
      <GovBRInput {...args} label="Clear xl" clearBlock="xl" />
    </Stack>
  ),
  args: { placeholder: 'Texto editável' },
}

// === Story com campo desabilitado ===
export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Texto não editável',
    disabled: true,
    feedbackMessage: 'Este campo está desabilitado',
    status: 'warning',
  },
}
