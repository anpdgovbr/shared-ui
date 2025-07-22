import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Box, Typography, Paper } from '@mui/material'
import AutoSyncButton from './AutoSyncButton'

const meta: Meta<typeof AutoSyncButton> = {
  title: 'GovBR/AutoSyncButton',
  component: AutoSyncButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão conforme padrões GovBR',
    },
    syncInterval: {
      control: { type: 'number', min: 1000, max: 60000, step: 1000 },
      description: 'Intervalo de sincronização em milissegundos',
    },
    maxErrorCount: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Número máximo de erros antes de desabilitar',
    },
    syncAnimationDuration: {
      control: { type: 'number', min: 1000, max: 5000 },
      description: 'Duração da animação de sincronização',
    },
    successDuration: {
      control: { type: 'number', min: 1000, max: 5000 },
      description: 'Duração da exibição do estado de sucesso',
    },
    errorDuration: {
      control: { type: 'number', min: 1000, max: 5000 },
      description: 'Duração da exibição do estado de erro',
    },
    tooltipEnabled: {
      control: 'boolean',
      description: 'Habilitar tooltips explicativos',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitar o componente',
    },
    onSync: { action: 'sync-triggered' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## AutoSyncButton - Componente GovBR-DS

Botão de sincronização automática com visual adaptado ao Design System Governamental.

### Características:
- **Cores semânticas**: Usa paleta oficial do GovBR-DS
- **Estados visuais**: Idle, Loading, Success, Error, Critical Error
- **Acessibilidade**: Foco com outline dashed dourado, tooltips contextuais
- **Responsivo**: Suporte a tamanhos small, medium, large
- **Interações**: Hover effects consistentes com padrão GovBR

### Estados do Componente:
- **Idle**: Estado padrão (azul)
- **Loading**: Sincronizando com animação de rotação (azul)
- **Success**: Sincronização bem-sucedida (verde)
- **Error**: Erro na sincronização (vermelho)
- **Critical Error**: Muitos erros consecutivos (cinza)
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AutoSyncButton>

// Mock da função de sincronização para as stories
const mockSyncSuccess = () => new Promise<void>(resolve => setTimeout(resolve, 1500))

const mockSyncError = () =>
  new Promise<void>((_, reject) => setTimeout(() => reject(new Error('Erro simulado')), 1500))

const mockSyncRandom = () =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject(new Error('Erro aleatório'))
      }
    }, 1500)
  })

export const Default: Story = {
  args: {
    onSync: mockSyncSuccess,
    syncInterval: 10000,
    maxErrorCount: 3,
    size: 'medium',
    tooltipEnabled: true,
    disabled: false,
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

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const FastSync: Story = {
  args: {
    ...Default.args,
    syncInterval: 3000,
    syncAnimationDuration: 1000,
    successDuration: 1000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sincronização rápida com intervalos menores para demonstração.',
      },
    },
  },
}

export const ErrorProne: Story = {
  args: {
    ...Default.args,
    onSync: mockSyncError,
    syncInterval: 5000,
    maxErrorCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simula erros constantes para demonstrar o estado de erro crítico.',
      },
    },
  },
}

export const RandomResults: Story = {
  args: {
    ...Default.args,
    onSync: mockSyncRandom,
    syncInterval: 4000,
    maxErrorCount: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sincronização com resultados aleatórios (sucesso ou erro).',
      },
    },
  },
}

export const NoTooltips: Story = {
  args: {
    ...Default.args,
    tooltipEnabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão sem tooltips para interfaces mais limpas.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: args => (
    <Stack spacing={3} alignItems="flex-start">
      <Box>
        <Typography variant="h6" gutterBottom>
          Tamanhos Disponíveis
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack alignItems="center" spacing={1}>
            <AutoSyncButton {...args} size="small" />
            <Typography variant="caption">Small</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <AutoSyncButton {...args} size="medium" />
            <Typography variant="caption">Medium</Typography>
          </Stack>
          <Stack alignItems="center" spacing={1}>
            <AutoSyncButton {...args} size="large" />
            <Typography variant="caption">Large</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  ),
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração de todos os tamanhos disponíveis.',
      },
    },
  },
}

export const StateDemo: Story = {
  render: args => {
    const [counters, setCounters] = React.useState({
      success: 0,
      error: 0,
      random: 0,
    })

    const handleSuccess = async () => {
      setCounters(prev => ({ ...prev, success: prev.success + 1 }))
      return mockSyncSuccess()
    }

    const handleError = async () => {
      setCounters(prev => ({ ...prev, error: prev.error + 1 }))
      return mockSyncError()
    }

    const handleRandom = async () => {
      setCounters(prev => ({ ...prev, random: prev.random + 1 }))
      return mockSyncRandom()
    }

    return (
      <Stack spacing={3}>
        <Typography variant="h6" gutterBottom>
          Demonstração de Estados
        </Typography>

        <Stack spacing={2}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AutoSyncButton {...args} onSync={handleSuccess} syncInterval={8000} />
              <Typography variant="body2">
                <strong>Sempre Sucesso</strong> - Sincronizações: {counters.success}
              </Typography>
            </Stack>
          </Paper>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AutoSyncButton
                {...args}
                onSync={handleError}
                syncInterval={6000}
                maxErrorCount={3}
              />
              <Typography variant="body2" color="error">
                <strong>Sempre Erro</strong> - Tentativas: {counters.error}
              </Typography>
            </Stack>
          </Paper>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AutoSyncButton
                {...args}
                onSync={handleRandom}
                syncInterval={5000}
                maxErrorCount={4}
              />
              <Typography variant="body2">
                <strong>Resultado Aleatório</strong> - Tentativas: {counters.random}
              </Typography>
            </Stack>
          </Paper>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <AutoSyncButton {...args} disabled={true} />
              <Typography variant="body2" color="text.disabled">
                <strong>Desabilitado</strong> - Não funciona
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    )
  },
  args: {
    size: 'medium',
    tooltipEnabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração interativa de todos os estados possíveis do componente.',
      },
    },
  },
}

export const InHeaderContext: Story = {
  render: args => (
    <Box
      sx={{
        bgcolor: 'background.paper',
        p: 2,
        borderRadius: 1,
        boxShadow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6">Dashboard de Dados</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2" color="text.secondary">
          Última atualização: {new Date().toLocaleTimeString()}
        </Typography>
        <AutoSyncButton {...args} size="small" />
      </Stack>
    </Box>
  ),
  args: {
    ...Default.args,
    syncInterval: 15000,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em contexto de header/barra superior.',
      },
    },
  },
}
