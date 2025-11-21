import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LoginIcon from '@mui/icons-material/Login'
import type { Meta, StoryObj } from '@storybook/react'

import { GovBRSignIn } from './index'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'Components/GovBRSignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto a ser exibido no botão de login.',
      table: {
        defaultValue: { summary: 'Entrar com gov.br' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão.',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'small | medium | large' },
      },
    },
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa o modo de renderização estrito para o botão interno.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão.',
    },
    loading: {
      control: 'boolean',
      description: 'Exibe estado de carregamento no botão.',
    },
    startIcon: {
      control: false,
      description:
        'Ícone exibido no início do botão (à esquerda). Use ícones do @mui/icons-material.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    endIcon: {
      control: false,
      description:
        'Ícone exibido no final do botão (à direita). Use ícones do @mui/icons-material.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: "Função executada no clique. Recebe 'govbr' como argumento.",
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRSignIn>

export const MuiDefault: Story = {
  name: 'Padrão (MUI)',
  args: {
    strictgovbr: false,
  },
}

export const StrictDefault: Story = {
  name: 'Estrito (GovBR)',
  args: {
    strictgovbr: true,
  },
}

export const CustomLabel: Story = {
  name: 'Texto Customizado',
  args: {
    strictgovbr: false,
    label: 'Acessar com conta gov.br',
  },
}

export const ANPDTheme: Story = {
  name: 'Tema ANPD',
  args: {
    strictgovbr: false,
    label: 'Login ANPD',
  },
}

// ===== VARIANTES DE TAMANHO =====

export const SmallSize: Story = {
  name: 'Tamanho Pequeno',
  args: {
    size: 'small',
    label: 'Entrar',
  },
}

export const MediumSize: Story = {
  name: 'Tamanho Médio (Padrão)',
  args: {
    size: 'medium',
  },
}

export const LargeSize: Story = {
  name: 'Tamanho Grande',
  args: {
    size: 'large',
    label: 'Acessar Sistema',
  },
}

// ===== VARIANTES COM ÍCONES =====

export const WithStartIcon: Story = {
  name: 'Com Ícone à Esquerda',
  args: {
    startIcon: <LoginIcon />,
    label: 'Fazer Login',
  },
}

export const WithEndIcon: Story = {
  name: 'Com Ícone à Direita',
  args: {
    endIcon: <ArrowForwardIcon />,
    label: 'Avançar para Login',
  },
}

export const WithBothIcons: Story = {
  name: 'Com Ícones em Ambos os Lados',
  args: {
    startIcon: <LockOpenIcon />,
    endIcon: <ArrowForwardIcon />,
    label: 'Login Seguro',
  },
}

// ===== EXEMPLOS PRÁTICOS =====

export const ANPDWithIcon: Story = {
  name: 'ANPD com Ícone',
  args: {
    startIcon: <AccountCircleIcon />,
    label: 'Entrar na ANPD',
    size: 'large',
  },
}

export const CompactLogin: Story = {
  name: 'Login Compacto',
  args: {
    size: 'small',
    startIcon: <LoginIcon />,
    label: 'Entrar',
  },
}

export const LoadingState: Story = {
  name: 'Estado de Carregamento',
  args: {
    loading: true,
    startIcon: <LoginIcon />,
    label: 'Entrando...',
  },
}

// ===== COMPARAÇÃO DE TAMANHOS =====

export const SizeComparison: Story = {
  name: 'Comparação de Tamanhos',
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}
    >
      <GovBRSignIn size="small" startIcon={<LoginIcon />} label="Pequeno" onClick={() => {}} />
      <GovBRSignIn
        size="medium"
        startIcon={<LoginIcon />}
        label="Médio (Padrão)"
        onClick={() => {}}
      />
      <GovBRSignIn size="large" startIcon={<LoginIcon />} label="Grande" onClick={() => {}} />
    </div>
  ),
}

// ===== VARIAÇÕES DE ÍCONES =====

export const IconVariations: Story = {
  name: 'Variações de Ícones',
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}
    >
      <GovBRSignIn startIcon={<LoginIcon />} label="Login Icon" onClick={() => {}} />
      <GovBRSignIn startIcon={<LockOpenIcon />} label="Lock Open Icon" onClick={() => {}} />
      <GovBRSignIn startIcon={<AccountCircleIcon />} label="Account Icon" onClick={() => {}} />
      <GovBRSignIn endIcon={<ArrowForwardIcon />} label="Com Seta" onClick={() => {}} />
    </div>
  ),
}
