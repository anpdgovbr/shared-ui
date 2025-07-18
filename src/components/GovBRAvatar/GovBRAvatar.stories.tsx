import type { Meta, StoryObj } from '@storybook/react'
import { GovBRAvatar } from './GovBRAvatar.js'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'GovBR/Avatar',
  tags: ['autodocs'],
  component: GovBRAvatar,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof GovBRAvatar>

export const StrictGovBr: Story = {
  args: {
    user: { name: 'Luciano', image: '' },
    menuItems: [
      { label: 'Meu perfil', href: '/perfil' },
      { label: 'Sair', href: '/logout' },
    ],
    onNavigate: href => alert(`Navigating to ${href}`),
    strictGovBr: true,
  },
}

export const Customizable: Story = {
  args: {
    user: { name: 'Luciano', image: 'https://www.gravatar.com/avatar/?d=identicon&s=80' },
    menuItems: [
      { label: 'Perfil', href: '/perfil' },
      { label: 'Logout', href: '/logout' },
    ],
    avatarSize: 40,
    textMaxWidth: 150,
    className: 'custom-shadow',
    onNavigate: href => console.log('Goto', href),
    strictGovBr: false,
  },
}
