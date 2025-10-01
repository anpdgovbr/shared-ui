import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AutoSync } from './index'

const meta: Meta<typeof AutoSync> = {
  title: 'Components/Custom/AutoSync',
  component: AutoSync,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, maxWidth: '800px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    onSync: {
      action: 'synced',
      description: 'Função chamada quando o botão de sincronização é clicado.',
    },
    syncInterval: {
      control: 'number',
      description: 'Intervalo entre sincronizações automáticas em milissegundos',
    },
    maxErrorCount: {
      control: 'number',
      description: 'Número máximo de erros antes de desabilitar sincronização',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita completamente a sincronização',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do ícone do botão',
    },
    tooltipEnabled: {
      control: 'boolean',
      description: 'Habilita/desabilita tooltip explicativo',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## AutoSync - Componente de Sincronização Automática

Componente personalizado da ANPD para controle de sincronização automática de dados.

### Características:
- 🔄 **Estados Visuais**: Idle, Loading, Success, Error, Critical Error
- ⏰ **Intervalo Configurável**: Controle do tempo entre sincronizações
- 🎨 **Cores Semânticas**: Segue paleta do GovBR-DS (primary, success, error, grey)
- 🔧 **Gerenciamento de Erro**: Contador de falhas com desativação automática
- 📏 **Tamanhos Responsivos**: Small, Medium, Large do sistema MUI/GovBR
- 💡 **Tooltip Informativo**: Instruções claras sobre estado atual
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AutoSync>

export const Default: Story = {
  args: {
    onSync: async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
    },
    syncInterval: 10000, // 10 segundos para demonstração
    tooltipEnabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente de sincronização automática com configuração padrão',
      },
    },
  },
}

export const AllSizes: Story = {
  render: function AllSizesDemo() {
    const handleSync = async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
    }

    return (
      <Stack spacing={2} direction="row" alignItems="center">
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Small
          </Typography>
          <AutoSync size="small" onSync={handleSync} syncInterval={15000} />
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Medium
          </Typography>
          <AutoSync size="medium" onSync={handleSync} syncInterval={15000} />
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" gutterBottom>
            Large
          </Typography>
          <AutoSync size="large" onSync={handleSync} syncInterval={15000} />
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração dos três tamanhos disponíveis do componente',
      },
    },
  },
}

export const WithSuccessSimulation: Story = {
  render: function SuccessSimulation() {
    const [successes, setSuccesses] = React.useState(0)

    const handleSyncSuccess = async () => {
      setSuccesses((prev) => prev + 1)
      // Simula sempre sucesso
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 800))
    }

    return (
      <Box>
        <Typography variant="body2" gutterBottom>
          Sincronizações bem-sucedidas: {successes}
        </Typography>
        <AutoSync onSync={handleSyncSuccess} syncInterval={5000} tooltipEnabled={true} />
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstra comportamento com sincronizações sempre bem-sucedidas',
      },
    },
  },
}

export const WithErrorSimulation: Story = {
  render: function ErrorSimulation() {
    const [attempts, setAttempts] = React.useState(0)

    const handleSyncWithError = async () => {
      setAttempts((prev) => prev + 1)
      // Simula erro nas primeiras tentativas
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (attempts < 2) {
            reject(new Error('Erro simulado de sincronização'))
          } else {
            resolve()
          }
        }, 800)
      })
    }

    return (
      <Box>
        <Typography variant="body2" gutterBottom>
          Tentativas de sincronização: {attempts}
        </Typography>
        <AutoSync
          onSync={handleSyncWithError}
          syncInterval={6000}
          maxErrorCount={3}
          tooltipEnabled={true}
        />
      </Box>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstra comportamento com erros de sincronização e recuperação',
      },
    },
  },
}

export const DisabledState: Story = {
  args: {
    onSync: async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
    },
    disabled: true,
    tooltipEnabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado desabilitado - sincronização completamente inativa',
      },
    },
  },
}

export const WithoutTooltip: Story = {
  args: {
    onSync: async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
    },
    tooltipEnabled: false,
    syncInterval: 8000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente sem tooltip para interfaces mais limpas',
      },
    },
  },
}

export const FastSync: Story = {
  args: {
    onSync: async () => {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 500))
    },
    syncInterval: 3000, // 3 segundos - muito rápido para demonstração
    syncAnimationDuration: 1000,
    successDuration: 1500,
    tooltipEnabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sincronização rápida com intervalos curtos para demonstração',
      },
    },
  },
}
