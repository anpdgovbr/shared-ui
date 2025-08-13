import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRAvatar } from './index'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'Components/GovBRAvatar',
  component: GovBRAvatar,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do usuário para exibir na saudação e gerar iniciais',
    },
    src: {
      control: 'text',
      description: 'URL da imagem do avatar',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para a imagem do avatar',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do avatar conforme padrões GovBR',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
      description: 'Cor de fundo do avatar quando não há imagem',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'Formato visual do avatar',
    },
    menuItems: {
      control: 'object',
      description: 'Lista de itens para o menu dropdown',
    },
    badgeContent: {
      control: 'text',
      description: 'Conteúdo do badge (número ou texto)',
    },
    badgeColor: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Cor do badge',
    },
    badgeVariant: {
      control: 'select',
      options: ['standard', 'dot'],
      description: 'Variante do badge',
    },
    hideGreeting: {
      control: 'boolean',
      description: 'Oculta a saudação, exibindo apenas o avatar',
    },
    onNavigate: { action: 'navigate' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRAvatar - Componente GovBR-DS

Componente de avatar do usuário que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🎨 **Cores Semânticas**: Utiliza paleta oficial do GovBR-DS
- 👤 **Avatar Inteligente**: Exibe imagem ou iniciais do nome automaticamente
- 🔍 **Acessibilidade**: Propriedades ARIA e navegação por teclado
- 📏 **Tamanhos Padrão**: Small (32px), Medium (40px), Large (48px)
- 📋 **Menu Contextual**: Dropdown com ações do usuário
- 🎭 **Variações Visuais**: Circular, arredondado ou quadrado
- 🔔 **Badge de Notificações**: Suporte a badge com números ou indicador de status
- 💬 **Modo Compacto**: Opção para ocultar saudação e exibir apenas o avatar
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRAvatar>

const mockMenuItems = [
  { label: 'Perfil', href: '/perfil', icon: <PersonIcon /> },
  { label: 'Configurações', href: '/config', icon: <SettingsIcon /> },
  { label: 'Notificações', href: '/notifications', icon: <NotificationsIcon /> },
  { label: 'Sair', href: '/logout', icon: <ExitToAppIcon /> },
]

const mockNavigate = (href: string) => {
  console.log('Navegando para:', href)
}

export const Default: Story = {
  args: {
    name: 'João Silva',
    size: 'medium',
    color: 'default',
    variant: 'circular',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
  },
}

export const WithImage: Story = {
  args: {
    name: 'Maria Santos',
    src: 'https://via.placeholder.com/150',
    size: 'medium',
    color: 'primary',
    variant: 'circular',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
  },
}

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
}

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
}

export const NoMenu: Story = {
  args: {
    name: 'Pedro Costa',
    size: 'medium',
    color: 'secondary',
    variant: 'circular',
    // Sem menuItems para mostrar avatar sem dropdown
  },
}

export const AllSizesComparison: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Small (32px)
        </Typography>
        <GovBRAvatar
          name="João Silva"
          size="small"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Medium (40px)
        </Typography>
        <GovBRAvatar
          name="Maria Santos"
          size="medium"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Large (48px)
        </Typography>
        <GovBRAvatar
          name="Pedro Costa"
          size="large"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
    </Stack>
  ),
}

export const AllColorsComparison: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Default
        </Typography>
        <GovBRAvatar
          name="Default User"
          color="default"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Primary
        </Typography>
        <GovBRAvatar
          name="Primary User"
          color="primary"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Secondary
        </Typography>
        <GovBRAvatar
          name="Secondary User"
          color="secondary"
          menuItems={mockMenuItems}
          onNavigate={mockNavigate}
        />
      </Box>
    </Stack>
  ),
}

export const WithBadge: Story = {
  args: {
    name: 'Maria Santos',
    src: 'https://via.placeholder.com/150',
    size: 'medium',
    color: 'primary',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
    badgeContent: '3',
    badgeColor: 'error',
  },
}

export const WithBadgeDot: Story = {
  args: {
    name: 'Carlos Lima',
    size: 'medium',
    color: 'primary',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
    badgeContent: '',
    badgeColor: 'success',
    badgeVariant: 'dot',
  },
}

export const CompactMode: Story = {
  args: {
    name: 'Ana Costa',
    size: 'medium',
    color: 'primary',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
    hideGreeting: true,
  },
}

export const CompactWithBadge: Story = {
  args: {
    name: 'João Santos',
    size: 'large',
    color: 'primary',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
    hideGreeting: true,
    badgeContent: '5',
    badgeColor: 'error',
  },
}

export const CompactWithOnlineStatus: Story = {
  args: {
    name: 'Pedro Silva',
    size: 'medium',
    color: 'primary',
    menuItems: mockMenuItems,
    onNavigate: mockNavigate,
    hideGreeting: true,
    badgeVariant: 'dot',
    badgeColor: 'success',
  },
}

export const IntegrationExample: Story = {
  render: () => (
    <Paper elevation={1} sx={{ p: 3, maxWidth: 600 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Box>
          <Typography variant="h6">Dashboard da ANPD</Typography>
          <Typography variant="body2" color="text.secondary">
            Sistema de Proteção de Dados
          </Typography>
        </Box>
        <GovBRAvatar
          name="Luciano Silva"
          size="medium"
          menuItems={[
            { label: 'Meu Perfil', href: '/perfil', icon: <AccountCircleIcon /> },
            { label: 'Configurações', href: '/config', icon: <SettingsIcon /> },
            { label: 'Sair do Sistema', href: '/logout', icon: <ExitToAppIcon /> },
          ]}
          onNavigate={mockNavigate}
        />
      </Stack>
    </Paper>
  ),
}
