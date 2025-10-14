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
  title: 'Components/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  args: {
    items: baseItems,
    currentPath: '/dashboard/management/team',
    title: 'Dashboard',
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
            Use o menu ao lado para navegar entre seções.
          </Typography>
        </Box>
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de menu lateral reutilizável com suporte a submenus, modo colapsado e integração com o tema GovBR.',
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
  },
}

export default meta
type Story = StoryObj<typeof SideMenu>

export const Default: Story = {}

export const Collapsed: Story = {
  args: {
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo com o menu controlado em modo colapsado, exibindo apenas ícones e tooltips.',
      },
    },
  },
}

export const WithCustomFooter: Story = {
  render: (args) => (
    <SideMenu
      {...args}
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
          'Demonstra como customizar o rodapé do menu usando a render prop `renderFooter`, adaptando o conteúdo conforme o estado aberto/fechado.',
      },
    },
  },
}

export const ControlledExample: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)
    return (
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <SideMenu
          {...args}
          open={open}
          onOpenChange={(next) => setOpen(next)}
          renderFooter={() => null}
        />
        <Box>
          <Typography variant="body2" gutterBottom>
            Estado controlado: {open ? 'aberto' : 'fechado'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Abrir
            </Button>
            <Button variant="outlined" onClick={() => setOpen(false)}>
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
          'Exemplo completo de controle externo do componente via props `open` e `onOpenChange`, útil para layouts responsivos.',
      },
    },
  },
}
