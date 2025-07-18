import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { GovBRBreadcrumb } from './GovBRBreadcrumb.js'

const meta: Meta<typeof GovBRBreadcrumb> = {
  title: 'GovBR/Breadcrumb',
  component: GovBRBreadcrumb,
  tags: ['autodocs'],
  args: {
    onNavigate: fn(),
  },
}
export default meta

type Story = StoryObj<typeof GovBRBreadcrumb>

const defaultItems = [
  { label: 'Página Inicial', href: '/' },
  { label: 'Nível 1', href: '/nivel-1' },
  { label: 'Página Atual' },
]

const shortItems = [{ label: 'Página Inicial', href: '/' }, { label: 'Página Atual' }]

export const Default: Story = {
  name: 'Caminho Completo',
  args: {
    items: defaultItems,
  },
}

export const ShortPath: Story = {
  name: 'Caminho Curto',
  args: {
    items: shortItems,
  },
}

export const AllPaths: Story = {
  name: 'Visão Geral',
  render: args => (
    <Stack spacing={4}>
      <GovBRBreadcrumb {...args} items={defaultItems} />
      <GovBRBreadcrumb {...args} items={shortItems} />
    </Stack>
  ),
}
