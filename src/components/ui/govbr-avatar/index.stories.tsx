import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

import { GovBRAvatar } from './index'
import type { GovBRAvatarMenuItem } from './types'

const meta: Meta<typeof GovBRAvatar> = {
  title: 'Components/GovBRAvatar',
  component: GovBRAvatar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '800px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito (HTML puro com classes CSS)',
    },
    children: {
      control: 'text',
      description: 'Letra, ícone ou conteúdo a ser exibido no avatar (modo MUI)',
    },
    src: {
      control: 'text',
      description: 'URL de uma imagem para o avatar',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para a imagem',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'Formato do avatar (modo MUI)',
    },
    letter: {
      control: 'text',
      description: 'Letra a ser exibida no avatar (modo estrito)',
    },
    density: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do avatar (modo estrito)',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip exibido ao passar o mouse (modo estrito)',
    },
    name: {
      control: 'text',
      description: 'Nome do usuário exibido no dropdown',
    },
    greetingText: {
      control: 'text',
      description: 'Texto de saudação personalizado (padrão: "Olá")',
    },
    menuItems: {
      control: false,
      description: 'Lista de itens do menu dropdown',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Callback executado quando um item do menu é clicado',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRAvatar - Componente GovBR-DS

Componente de avatar padronizado seguindo as diretrizes do GovBR Design System.

### Características Principais:
- 🎨 **Modo Duplo**: MUI theme-based ou HTML puro com classes CSS do GovBR-DS  
- 📷 **Tipos de Conteúdo**: Imagem, letra, ícone
- 📏 **Tamanhos**: Small (32px), Medium (56px), Large (80px)
- 🔔 **Dropdown Menu**: Sistema de navegação completo com menu de usuário
- 🎭 **Formatos**: Circular, quadrado, arredondado (modo MUI)
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Tree shaking otimizado e carregamento eficiente

### Dropdown de Usuário
O componente suporta dropdown completo para navegação do usuário:
- **Modo MUI**: Utiliza Menu/MenuItem com estilização do tema GovBR
- **Modo Estrito**: Usa classes nativas .br-sign-in, .br-list, .br-item
- **Flexibilidade**: Suporte a ícones, callbacks e navegação por links
- **Acessibilidade**: Navegação por teclado e leitores de tela
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRAvatar>

export const Default: Story = {
  args: {
    children: 'JP',
  },
}

export const WithStrictGovBr: Story = {
  args: {
    strictgovbr: true,
    letter: 'A',
    tooltip: 'Usuário ANPD',
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar seguindo rigorosamente o padrão GovBR-DS com classes `.br-avatar`',
      },
    },
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1494790108755-2616b60c-4-ce-4eca-a7a4-3aacd40b5e8f?w=400',
    alt: 'Foto do usuário',
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar com imagem de perfil',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Small (32px)
        </Typography>
        <GovBRAvatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>S</GovBRAvatar>
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Medium (56px)
        </Typography>
        <GovBRAvatar>M</GovBRAvatar>
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Large (80px)
        </Typography>
        <GovBRAvatar sx={{ width: 80, height: 80, fontSize: '1.5rem' }}>L</GovBRAvatar>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos três tamanhos disponíveis (modo MUI)',
      },
    },
  },
}

export const StrictSizes: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Small
        </Typography>
        <GovBRAvatar strictgovbr letter="S" density="small" tooltip="Small avatar" />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Medium
        </Typography>
        <GovBRAvatar strictgovbr letter="M" density="medium" tooltip="Medium avatar" />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Large
        </Typography>
        <GovBRAvatar strictgovbr letter="L" density="large" tooltip="Large avatar" />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos três tamanhos no modo estrito GovBR-DS',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Variantes do Avatar (Modo MUI)
      </Typography>
      <Stack spacing={3} direction="row" alignItems="center">
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Circular (padrão)
          </Typography>
          <GovBRAvatar variant="circular">C</GovBRAvatar>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Arredondado
          </Typography>
          <GovBRAvatar variant="rounded">R</GovBRAvatar>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Quadrado
          </Typography>
          <GovBRAvatar variant="square">Q</GovBRAvatar>
        </Box>
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes formatos do avatar disponíveis no modo MUI',
      },
    },
  },
}

export const WithIcon: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="center">
      <GovBRAvatar>
        <AccountCircleIcon />
      </GovBRAvatar>
      <GovBRAvatar sx={{ bgcolor: 'secondary.main' }}>
        <AccountCircleIcon />
      </GovBRAvatar>
      <GovBRAvatar sx={{ bgcolor: 'success.main' }}>
        <AccountCircleIcon />
      </GovBRAvatar>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar com ícones e diferentes cores de fundo',
      },
    },
  },
}

export const UserProfile: Story = {
  render: () => (
    <Box sx={{ maxWidth: 300, mx: 'auto' }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6">Perfil do Usuário - ANPD</Typography>
        <GovBRAvatar strictgovbr letter="A" density="large" tooltip="Administrador ANPD" />
        <Typography variant="body1" textAlign="center">
          João Silva
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Analista de Proteção de Dados
        </Typography>
      </Stack>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em perfil de usuário governamental',
      },
    },
  },
}

// Dados de exemplo para os menus dropdown
const menuItems: GovBRAvatarMenuItem[] = [
  {
    label: 'Dados pessoais',
    onClick: () => alert('Dados pessoais'),
    icon: <PersonIcon />,
  },
  {
    label: 'Privacidade',
    onClick: () => alert('Privacidade'),
    icon: <SettingsIcon />,
  },
  {
    label: 'Notificações',
    onClick: () => alert('Notificações'),
    icon: <NotificationsIcon />,
  },
  {
    label: 'Perguntas frequentes',
    onClick: () => alert('Perguntas frequentes'),
    icon: <HelpIcon />,
  },
  {
    label: 'Sair',
    onClick: () => alert('Logout'),
    icon: <LogoutIcon />,
  },
]

export const WithDropdownMUI: Story = {
  args: {
    children: 'F',
    name: 'Fulano',
    greetingText: 'Olá',
    menuItems,
    strictgovbr: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Avatar com dropdown usando componentes MUI (Menu/MenuItem) estilizados pelo tema GovBR',
      },
    },
  },
}

export const WithDropdownStrict: Story = {
  args: {
    letter: 'F',
    name: 'Fulano',
    greetingText: 'Olá',
    menuItems,
    strictgovbr: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Avatar com dropdown usando HTML puro e classes CSS do GovBR-DS (.br-sign-in, .br-list, .br-item)',
      },
    },
  },
}

export const DropdownComparison: Story = {
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6">Comparação dos Modos de Dropdown</Typography>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Modo MUI (Theme-based):
        </Typography>
        <GovBRAvatar name="João Silva" greetingText="Olá" menuItems={menuItems} strictgovbr={false}>
          J
        </GovBRAvatar>
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Modo Estrito GovBR-DS:
        </Typography>
        <GovBRAvatar
          letter="J"
          name="João Silva"
          greetingText="Olá"
          menuItems={menuItems}
          strictgovbr={true}
        />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparação lado a lado dos dois modos de renderização do dropdown',
      },
    },
  },
}

export const SimpleDropdown: Story = {
  args: {
    children: 'U',
    name: 'Usuário',
    menuItems: [
      { label: 'Perfil', onClick: () => alert('Perfil') },
      { label: 'Configurações', onClick: () => alert('Configurações') },
      { label: 'Sair', onClick: () => alert('Sair') },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown simples com menu básico sem ícones',
      },
    },
  },
}

export const WithoutDropdown: Story = {
  args: {
    children: 'S',
    name: 'Simples',
    // Sem menuItems - renderiza avatar simples
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar sem dropdown (quando menuItems não é fornecido)',
      },
    },
  },
}
