import type { Meta, StoryObj } from '@storybook/react'
import GovBRAvatar from './GovBRAvatar'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'GovBR/Avatar',
  component: GovBRAvatar,
  tags: ['autodocs'],
  parameters: {},
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
    onNavigate: { action: 'navigatedTo' },
    badgeContent: { control: 'text', description: 'Número ou texto para o badge' },
    badgeColor: {
      control: 'radio',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    badgeVariant: {
      control: 'radio',
      options: ['standard', 'dot'],
    },
    hideGreeting: { control: 'boolean' },
  },
}

export default meta
export type Story = StoryObj<typeof GovBRAvatar>

const simpleMenuItems = [
  { label: 'Dados pessoais', href: '/dadosPessoais' },
  { label: 'Privacidade', href: '/privacidade' },
  { label: 'Notificações', href: '/notificacoes' },
  { label: 'Perguntas frequentes', href: '/faq' },
]

export const Default: Story = {
  name: 'Padrão (Com Saudação e Menu)',
  args: {
    name: 'Fulano de Tal',
    menuItems: simpleMenuItems,
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    alt: 'Foto de perfil de Fulano de Tal',
    size: 'medium',
  },
}

export const ComNotificacao: Story = {
  name: 'Default com Notificação',
  args: {
    name: 'Maria Santos',
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
    alt: 'Foto de perfil de Maria Santos',
    size: 'medium',
    menuItems: simpleMenuItems,
    badgeContent: '3',
    badgeColor: 'error',
  },
}

export const ComStatusOnlineDropdown: Story = {
  name: 'Avatar com Status Online',
  args: {
    name: 'Ana Costa',
    hideGreeting: true,
    badgeVariant: 'dot',
    badgeColor: 'success',
    variant: 'circular',
    color: 'primary',
    size: 'medium',
    menuItems: simpleMenuItems,
  },
}

export const ApenasIniciaisDropdown: Story = {
  name: 'Avatar Apenas com Iniciais',
  args: {
    name: 'Carlos Pereira',
    hideGreeting: true,
    badgeContent: '1',
    badgeColor: 'error',
    variant: 'circular',
    color: 'primary',
    size: 'medium',
    menuItems: simpleMenuItems,
  },
}

export const ComStatusOnline: Story = {
  name: 'Avatar com Status Online',
  args: {
    name: 'Bruno Lima',
    hideGreeting: true,
    badgeVariant: 'dot',
    badgeColor: 'success',
    variant: 'circular',
    color: 'primary',
    size: 'medium',
  },
}

export const ApenasIniciais: Story = {
  name: 'Avatar Apenas com Iniciais',
  args: {
    name: 'MArcos Silva',
    hideGreeting: true,
    badgeContent: '1',
    badgeColor: 'error',
    variant: 'circular',
    color: 'primary', 
    size: 'medium',
  },
}
