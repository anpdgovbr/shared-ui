import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AutoSyncButton } from './index'

const meta: Meta<typeof AutoSyncButton> = {
  title: 'Components/AutoSyncButton',
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

Componente de sincronização automática que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🎨 **Cores Semânticas**: Utiliza paleta oficial do GovBR-DS
- 🔍 **Acessibilidade**: Foco visual e tooltips contextuais  
- 🎭 **Estados Visuais**: Feedback claro para cada operação
- 📏 **Tamanhos Padrão**: Small (32px), Medium (40px), Large (48px)
- 🔄 **Auto-recuperação**: Gerencia erros e tenta reconectar automaticamente
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AutoSyncButton>

// Mock function para simular sincronização
const mockSync = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.3 // 70% de chance de sucesso
    setTimeout(() => {
      if (isSuccess) {
        resolve()
      } else {
        reject(new Error('Erro de sincronização simulado'))
      }
    }, 1000)
  })
}

export const Default: Story = {
  args: {
    onSync: mockSync,
    size: 'medium',
    syncInterval: 10000,
    maxErrorCount: 3,
    syncAnimationDuration: 2000,
    successDuration: 2000,
    errorDuration: 2000,
    tooltipEnabled: true,
    disabled: false,
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
}

export const Large: Story = {
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
    errorDuration: 1000,
  },
}

export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Small (32px)
        </Typography>
        <AutoSyncButton size="small" onSync={mockSync} />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Medium (40px)
        </Typography>
        <AutoSyncButton size="medium" onSync={mockSync} />
      </Box>
      <Box textAlign="center">
        <Typography variant="body2" gutterBottom>
          Large (48px)
        </Typography>
        <AutoSyncButton size="large" onSync={mockSync} />
      </Box>
    </Stack>
  ),
}

export const IntegrationExample: Story = {
  render: () => (
    <Paper elevation={1} sx={{ p: 3, maxWidth: 400 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <Box>
          <Typography variant="h6">Dashboard da ANPD</Typography>
          <Typography variant="body2" color="text.secondary">
            Dados atualizados automaticamente
          </Typography>
        </Box>
        <AutoSyncButton onSync={mockSync} size="small" tooltipEnabled />
      </Stack>
    </Paper>
  ),
}

export const WithoutTooltips: Story = {
  args: {
    ...Default.args,
    tooltipEnabled: false,
  },
}
