import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { GovBRBreadcrumb } from './GovBRBreadcrumb.js'

const meta: Meta<typeof GovBRBreadcrumb> = {
  title: 'GOVBR/GovBRBreadcrumb',
  component: GovBRBreadcrumb,
  tags: ['autodocs'],
  args: {
    // Ação padrão para a prop onNavigate, para logar no painel Actions
    onNavigate: fn(),
  },
}
export default meta

type Story = StoryObj<typeof GovBRBreadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Página Inicial', href: '/' },
      { label: 'Página Anterior', href: '/anterior' },
      { label: 'Página Atual' },
    ],
  },
}

export const ShortPath: Story = {
  args: {
    items: [{ label: 'Página Inicial', href: '/' }, { label: 'Página Atual' }],
  },
}
