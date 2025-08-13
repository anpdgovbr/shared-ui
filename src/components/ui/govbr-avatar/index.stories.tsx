import type { Meta, StoryObj } from '@storybook/react'
import { GovBRAvatar } from './index'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'Components/GovBRAvatar',
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
  name: 'Com Notificação',
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
    name: 'Marcos Silva',
    hideGreeting: true,
    badgeContent: '1',
    badgeColor: 'error',
    variant: 'circular',
    color: 'primary',
    size: 'medium',
  },
}

export const TamanhosGovBR: Story = {
  name: 'Tamanhos Padrão GovBR',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Small (32px)</div>
        <GovBRAvatar
          name="João Silva"
          size="small"
          hideGreeting={true}
          badgeContent="2"
          badgeColor="error"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Medium (40px)</div>
        <GovBRAvatar
          name="Maria Santos"
          size="medium"
          hideGreeting={true}
          badgeVariant="dot"
          badgeColor="success"
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', color: '#666' }}>Large (48px)</div>
        <GovBRAvatar
          name="Ana Costa"
          size="large"
          hideGreeting={true}
          badgeContent="5"
          badgeColor="warning"
        />
      </div>
    </div>
  ),
}

export const EstiloGovBROriginal: Story = {
  name: 'Estilo Similar ao Design System GovBR',
  render: () => (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h3 style={{ marginBottom: '16px', color: '#333' }}>Avatar com Menu (br-sign-in)</h3>
      <GovBRAvatar
        name="Fulano"
        menuItems={simpleMenuItems}
        size="small"
        onNavigate={(href) => console.log('Navegando para:', href)}
      />
    </div>
  ),
}
