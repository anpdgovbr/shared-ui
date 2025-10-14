import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { SideMenu } from './index'
import type { SideMenuItem } from './types'

const baseItems: SideMenuItem[] = [
  {
    label: 'Visão Geral',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    label: 'Perfil',
    href: '/dashboard/profile',
    icon: <AccountCircleIcon />,
  },
  {
    label: 'Gestão',
    icon: <PeopleAltIcon />,
    onlyExpand: true,
    children: [
      {
        label: 'Equipe',
        href: '/dashboard/management/team',
        icon: <PeopleAltIcon fontSize="small" />,
      },
      {
        label: 'Configurações avançadas',
        href: '/dashboard/management/settings',
        icon: <SettingsIcon fontSize="small" />,
      },
    ],
  },
  {
    label: 'Admin',
    icon: <AdminPanelSettingsIcon />,
    onlyExpand: true,
    children: [
      {
        label: 'Usuários',
        href: '/dashboard/admin/users',
        icon: <PeopleAltIcon fontSize="small" />,
      },
    ],
  },
]

const meta: Meta<typeof SideMenu> = {
  title: 'Components/Custom/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  args: {
    items: baseItems,
    currentPath: '/dashboard/management/team',
    title: 'Dashboard',
    linkComponent: 'button',
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: 'flex',
          minHeight: 400,
          bgcolor: 'background.default',
          p: 2,
        }}
      >
        <Story />
        <Box
          sx={{
            flex: 1,
            ml: 3,
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="h6">Conteúdo</Typography>
          <Typography variant="body2" color="text.secondary">
            Clique nos itens do menu para visualizar interações
          </Typography>
        </Box>
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## SideMenu - Menu Lateral Reutilizável

Componente personalizado da ANPD para navegação lateral com suporte a hierarquia e estados.

### Características:
- 🎯 **Hierarquia de Menus**: Suporte a submenus aninhados com expansão/colapso
- 🔄 **Modo Colapsado**: Menu compacto exibindo apenas ícones com tooltips
- 🎨 **Tema Integrado**: Totalmente compatível com GovBR-DS e Material-UI
- 📍 **Rota Ativa**: Destaque automático do item ativo baseado na rota atual
- 💾 **Persistência**: Opção de salvar estado do menu no localStorage
- 🎛️ **Controlado/Não-controlado**: Suporte a ambos os modos de operação
- ⚡ **Renderização Customizada**: Headers e footers personalizáveis via render props
- ♿ **Acessibilidade**: Suporte completo a navegação por teclado e screen readers
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description: 'Lista de itens exibidos no menu, incluindo submenus aninhados.',
    },
    currentPath: {
      control: 'text',
      description: 'Rota atual usada para destacar o item ativo.',
    },
    title: {
      control: 'text',
      description: 'Título exibido no cabeçalho padrão do menu.',
    },
    open: {
      control: false,
      description: 'Controla o estado aberto/fechado (modo controlado).',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Define estado inicial quando o componente é não-controlado.',
    },
    persistKey: {
      control: 'text',
      description:
        'Chave usada no localStorage para persistir o estado do menu em modo não-controlado.',
    },
    linkComponent: {
      control: false,
      description: 'Componente usado para renderizar links (ex: Next.js Link, React Router Link).',
    },
    variant: {
      control: 'select',
      options: ['permanent', 'persistent', 'temporary'],
      description: 'Variante do Drawer do Material-UI.',
    },
    dense: {
      control: 'boolean',
      description: 'Reduz o espaçamento entre itens para layouts mais compactos.',
    },
  },
}

export default meta
type Story = StoryObj<typeof SideMenu>

export const Default: Story = {
  args: {
    linkComponent: 'button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração padrão do menu lateral com itens e submenus.',
      },
    },
  },
}

export const Collapsed: Story = {
  args: {
    open: false,
    linkComponent: 'button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Menu em modo colapsado, exibindo apenas ícones com tooltips. Ideal para maximizar espaço de conteúdo.',
      },
    },
  },
}

export const DenseMode: Story = {
  args: {
    dense: true,
    linkComponent: 'button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu com espaçamento reduzido entre itens para interfaces mais compactas.',
      },
    },
  },
}

export const InteractiveNavigation: Story = {
  render: function InteractiveDemo(args) {
    const [currentPath, setCurrentPath] = useState('/dashboard/management/team')

    const interactiveItems: SideMenuItem[] = baseItems.map((item) => ({
      ...item,
      onClick: (e, clickedItem) => {
        e.preventDefault()
        if (clickedItem.href) {
          setCurrentPath(clickedItem.href)
        }
      },
      children: item.children?.map((child) => ({
        ...child,
        onClick: (e, clickedChild) => {
          e.preventDefault()
          if (clickedChild.href) {
            setCurrentPath(clickedChild.href)
          }
        },
      })),
    }))

    return (
      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
        <SideMenu
          {...args}
          items={interactiveItems}
          currentPath={currentPath}
          linkComponent="button"
        />
        <Box
          sx={{
            flex: 1,
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 2,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6">Área de Conteúdo</Typography>
          <Typography variant="body2" color="text.secondary">
            Rota atual: <strong>{currentPath}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Clique nos itens do menu para simular navegação
          </Typography>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstração interativa com simulação de navegação. Clique nos itens para ver a rota ativa mudar.',
      },
    },
  },
}

export const WithCustomFooter: Story = {
  render: (args) => (
    <SideMenu
      {...args}
      linkComponent="button"
      renderFooter={({ open }) => (
        <Stack spacing={1}>
          {open ? (
            <>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Ações rápidas
              </Typography>
              <Button size="small" variant="contained" startIcon={<MenuIcon />}>
                Criar item
              </Button>
              <Button size="small" variant="outlined">
                Sair
              </Button>
            </>
          ) : (
            <Tooltip title="Ações rápidas">
              <Button size="small" variant="contained">
                <MenuIcon fontSize="small" />
              </Button>
            </Tooltip>
          )}
        </Stack>
      )}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Customização do rodapé usando `renderFooter`. O conteúdo se adapta automaticamente ao estado aberto/fechado do menu.',
      },
    },
  },
}

export const ControlledExample: Story = {
  render: function ControlledDemo(args) {
    const [open, setOpen] = useState(true)
    return (
      <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ width: '100%' }}>
        <SideMenu
          {...args}
          open={open}
          onOpenChange={(next) => setOpen(next)}
          linkComponent="button"
          renderFooter={() => null}
        />
        <Box
          sx={{
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="body2" gutterBottom>
            Estado controlado: <strong>{open ? 'Aberto' : 'Fechado'}</strong>
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
              Abrir
            </Button>
            <Button variant="outlined" size="small" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Stack>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de controle externo via `open` e `onOpenChange`. Útil para sincronizar com outros componentes ou layouts responsivos.',
      },
    },
  },
}

export const WithPersistence: Story = {
  args: {
    persistKey: 'storybook-sidemenu-state',
    linkComponent: 'button',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Menu com persistência no localStorage. O estado aberto/fechado é mantido entre recarregamentos da página usando a prop `persistKey`.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: function AllVariantsDemo() {
    return (
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Permanent (padrão)
          </Typography>
          <Box sx={{ display: 'flex', minHeight: 300 }}>
            <SideMenu
              items={baseItems}
              currentPath="/dashboard"
              title="Permanent"
              variant="permanent"
              linkComponent="button"
            />
            <Box sx={{ flex: 1, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="body2" color="text.secondary">
                Menu sempre visível
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Dense Mode
          </Typography>
          <Box sx={{ display: 'flex', minHeight: 300 }}>
            <SideMenu
              items={baseItems}
              currentPath="/dashboard/profile"
              title="Dense"
              dense
              linkComponent="button"
            />
            <Box sx={{ flex: 1, p: 2, bgcolor: 'background.paper' }}>
              <Typography variant="body2" color="text.secondary">
                Espaçamento compacto
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparação visual entre diferentes variantes e modos do menu.',
      },
    },
  },
}
