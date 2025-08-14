import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
    name: 'Fulano',
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
    size: 'medium',
  },
}

export const TesteBadges: Story = {
  name: 'Teste de Badges (Diversos Cenários)',
  render: () => (
    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
          Badge com Número
        </Typography>
        <GovBRAvatar
          name="João Silva"
          hideGreeting={true}
          size="medium"
          badgeContent="9"
          badgeColor="error"
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
          Badge com Ponto
        </Typography>
        <GovBRAvatar
          name="Maria Santos"
          hideGreeting={true}
          size="medium"
          badgeVariant="dot"
          badgeColor="success"
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
          Badge Grande
        </Typography>
        <GovBRAvatar
          name="Pedro Costa"
          hideGreeting={true}
          size="large"
          badgeContent="99+"
          badgeColor="warning"
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
          Badge Pequeno
        </Typography>
        <GovBRAvatar
          name="Ana Oliveira"
          hideGreeting={true}
          size="small"
          badgeContent="5"
          badgeColor="info"
        />
      </Box>
    </Box>
  ),
}

export const CoresAleatorias: Story = {
  name: 'Cores Aleatórias (Sem Imagem)',
  render: () => (
    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: 'wrap' }}>
      {[
        'João Silva',
        'Maria Santos',
        'Pedro Costa',
        'Ana Oliveira',
        'Carlos Pereira',
        'Fernanda Lima',
        'Roberto Souza',
        'Camila Rocha',
        'Lucas Mendes',
        'Beatriz Alves',
      ].map((name) => (
        <Box key={name} sx={{ textAlign: 'center' }}>
          <GovBRAvatar name={name} hideGreeting={true} size="medium" />
          <Typography variant="caption" sx={{ display: 'block', mt: 1, fontSize: '12px' }}>
            {name}
          </Typography>
        </Box>
      ))}
    </Box>
  ),
}

export const ComparacaoComImagem: Story = {
  name: 'Comparação: Com e Sem Imagem',
  render: () => (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Com Imagem (Cor Padrão)
        </Typography>
        <GovBRAvatar
          name="João Silva"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
          alt="Foto de perfil"
          hideGreeting={true}
          size="large"
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Sem Imagem (Cor Aleatória)
        </Typography>
        <GovBRAvatar name="João Silva" hideGreeting={true} size="large" />
      </Box>
    </Box>
  ),
}

export const TamanhosGovBR: Story = {
  name: 'Tamanhos Padrão GovBR',
  render: () => (
    <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <GovBRAvatar name="João Silva" size="small" hideGreeting={true} />
      <GovBRAvatar name="Maria Santos" size="medium" hideGreeting={true} />
      <GovBRAvatar name="Ana Costa" size="large" hideGreeting={true} />
    </Box>
  ),
}

export const EstiloGovBROriginal: Story = {
  name: 'Estilo Similar ao Design System GovBR',
  render: () => (
    <Box sx={{ p: 2.5, backgroundColor: '#f8f9fa' }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
        Avatar com Menu (br-sign-in)
      </Typography>
      <GovBRAvatar
        name="Fulano"
        menuItems={simpleMenuItems}
        size="small"
        onNavigate={(href) => console.log('Navegando para:', href)}
      />
    </Box>
  ),
}
