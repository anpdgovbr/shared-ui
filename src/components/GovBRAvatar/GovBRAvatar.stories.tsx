import type { Meta, StoryObj } from '@storybook/react'
import GovBRAvatar from './GovBRAvatar.js'
import PersonIcon from '@mui/icons-material/Person'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'GovBR/Avatar',
  component: GovBRAvatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
    strictGovBr: { control: 'boolean' },
    onNavigate: { action: 'navigatedTo' },
  },
}

export default meta
export type Story = StoryObj<typeof GovBRAvatar>

const menuItems = [
  { label: 'Meu Perfil', href: '/perfil', icon: <PersonIcon fontSize="small" /> },
  { label: 'Sair', href: '/logout', icon: <ExitToAppIcon fontSize="small" /> },
]

export const Default: Story = {
  name: 'Avatar Simples (Sem Dropdown)',
  args: {
    name: 'João Silva',
    strictGovBr: false,
  },
}

export const WithDropdown: Story = {
  name: 'Com Dropdown (MUI)',
  args: {
    name: 'Maria Santos',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    menuItems: menuItems,
    strictGovBr: false,
  },
}

export const StrictGovBrDropdown: Story = {
  name: 'Com Dropdown (Strict GovBR)',
  args: {
    name: 'Carlos Pereira',
    menuItems: menuItems,
    strictGovBr: false,
    color: 'default',
  },
}

export const StrictGovBrSimple: Story = {
  name: 'Avatar Simples (Strict GovBR)',
  args: {
    name: 'Ana Costa',
    size: 'medium',
    strictGovBr: true,
  },
}
