import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

import { GovBRBreadcrumb } from './index'

const meta: Meta<typeof GovBRBreadcrumb> = {
  title: 'Components/GovBRBreadcrumb',
  component: GovBRBreadcrumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div style={{ padding: '2rem' }}>
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    // --- Geral ---
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito (HTML puro com classes CSS)',
      table: { category: 'Geral' },
    },

    // --- Modo Padrão (MUI) ---
    children: {
      control: false,
      description:
        'Os elementos a serem renderizados dentro do breadcrumb (geralmente Links e Typography).',
      table: { category: 'Modo Padrão (MUI)' },
    },
    separator: {
      control: 'text',
      description: 'O separador a ser usado entre os itens.',
      table: { category: 'Modo Padrão (MUI)' },
    },

    // --- Modo Estrito (GovBR) ---
    links: {
      control: 'object',
      description: 'Uma lista de objetos de link para o modo estrito.',
      table: { category: 'Modo Estrito (GovBR)' },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRBreadcrumb>

// --- Estórias do Modo Padrão (MUI) ---

export const MuiDefault: Story = {
  name: 'Padrão (MUI): Default',
  render: (args) => (
    <GovBRBreadcrumb {...args}>
      <Link underline="hover" color="inherit" href="#">
        Página Inicial
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Página Anterior
      </Link>
      <Typography color="text.primary">Página Atual</Typography>
    </GovBRBreadcrumb>
  ),
  args: {
    strictgovbr: false,
  },
}

export const MuiWithLongPath: Story = {
  name: 'Padrão (MUI): Caminho Longo',
  render: (args) => (
    <GovBRBreadcrumb {...args}>
      <Link underline="hover" color="inherit" href="#">
        Portal Gov.br
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Ministérios
      </Link>
      <Link underline="hover" color="inherit" href="#">
        ANPD
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Regulamentação
      </Link>
      <Typography color="text.primary">LGPD - Lei Geral de Proteção de Dados</Typography>
    </GovBRBreadcrumb>
  ),
  args: {
    strictgovbr: false,
  },
}

// --- Estórias do Modo Estrito (GovBR-DS) ---

export const StrictDefault: Story = {
  name: 'Estrito (GovBR): Default',
  args: {
    strictgovbr: true,
    links: [
      { label: 'Página Inicial', url: '#' },
      { label: 'Página Anterior', url: '#' },
      { label: 'Página Atual', url: '#' }, // Último item sem URL é tratado como atual
    ],
  },
}

export const StrictLongPath: Story = {
  name: 'Estrito (GovBR): Caminho Longo',
  args: {
    strictgovbr: true,
    links: [
      { label: 'Portal Gov.br', url: 'https://gov.br' },
      { label: 'Ministérios', url: '#' },
      { label: 'ANPD', url: '#' },
      { label: 'Regulamentação', url: '#' },
      { label: 'LGPD - Lei Geral de Proteção de Dados', url: '#' },
    ],
  },
}

// --- Comparação Visual ---

export const Comparison: Story = {
  name: '🔍 Comparação: MUI vs Estrito',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>
          Modo Padrão (MUI) - Estilizado via govbrTheme
        </h3>
        <GovBRBreadcrumb>
          <Link underline="hover" color="inherit" href="#">
            Portal Gov.br
          </Link>
          <Link underline="hover" color="inherit" href="#">
            ANPD
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Regulamentação
          </Link>
          <Typography color="text.primary">LGPD</Typography>
        </GovBRBreadcrumb>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#333' }}>
          Modo Estrito - Classes CSS do @govbr-ds/core
        </h3>
        <GovBRBreadcrumb
          strictgovbr
          links={[
            { label: 'Portal Gov.br', url: '#' },
            { label: 'ANPD', url: '#' },
            { label: 'Regulamentação', url: '#' },
            { label: 'LGPD', url: '#' },
          ]}
        />
      </div>
    </div>
  ),
}
