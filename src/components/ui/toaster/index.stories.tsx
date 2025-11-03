import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { ToasterProvider, useToaster } from './index'

// Componente auxiliar que demonstra o uso do hook
function ToasterDemo() {
  const toaster = useToaster()

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Teste o Sistema de Toasts</Typography>
      <Typography variant="body2" color="text.secondary">
        Clique nos botões abaixo para exibir diferentes tipos de toasts.
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Button
          variant="contained"
          color="success"
          onClick={() =>
            toaster.show({ message: 'Operação realizada com sucesso!', severity: 'success' })
          }
        >
          Success Toast
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={() => toaster.show({ message: 'Informação importante', severity: 'info' })}
        >
          Info Toast
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => toaster.show({ message: 'Atenção necessária', severity: 'warning' })}
        >
          Warning Toast
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() =>
            toaster.show({ message: 'Erro ao processar solicitação', severity: 'error' })
          }
        >
          Error Toast
        </Button>
      </Stack>
    </Stack>
  )
}

const meta: Meta<typeof ToasterProvider> = {
  title: 'Components/Custom/Toaster',
  component: ToasterProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Toaster

Sistema de notificações toast para a ANPD baseado em contexto React.

## 🎯 Características Principais

- **🎨 Tema Automático**: Cores do tema selecionado (GovBR ou ANPD)
- **⏱️ Auto-hide**: Fecha automaticamente após 3.5s (configurável)
- **📍 Posicionamento**: Flexível via props (padrão: bottom-right)
- **🔔 Severidades**: Success, Info, Warning, Error
- **🎯 API Simples**: Hook \`useToaster\` para uso fácil

## 📝 Como Usar

### 1. Wrap sua aplicação com ToasterProvider

\`\`\`tsx
import { ToasterProvider } from '@anpdgovbr/shared-ui'

function App() {
  return (
    <ToasterProvider>
      <YourApp />
    </ToasterProvider>
  )
}
\`\`\`

### 2. Use o hook useToaster em qualquer componente

\`\`\`tsx
import { useToaster } from '@anpdgovbr/shared-ui'

function MyComponent() {
  const toaster = useToaster()

  const handleClick = () => {
    toaster.show({
      message: 'Operação realizada!',
      severity: 'success'
    })
  }

  return <button onClick={handleClick}>Executar</button>
}
\`\`\`

## 🎨 Severidades Disponíveis

| Severity | Cor | Quando usar |
|----------|-----|-------------|
| \`success\` | Verde | Operação concluída com sucesso |
| \`info\` | Azul | Informação neutra |
| \`warning\` | Laranja | Atenção necessária |
| \`error\` | Vermelho | Erro ou falha |

## ⚙️ Configuração Opcional

\`\`\`tsx
<ToasterProvider
  autoHideDuration={5000}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <App />
</ToasterProvider>
\`\`\`

## 📝 Props do ToasterProvider

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| \`children\` | \`ReactNode\` | - | Componentes que usarão o toaster |
| \`autoHideDuration\` | \`number\` | \`3500\` | Tempo em ms antes de fechar |
| \`anchorOrigin\` | \`object\` | \`{ vertical: 'bottom', horizontal: 'right' }\` | Posição na tela |

## 🎨 Integração com Tema

- Cores baseadas no \`theme.palette\` ativo
- Alert variant \`filled\` para melhor contraste
- Animações suaves de entrada/saída

## ♿ Acessibilidade

- Anúncios automáticos para leitores de tela
- Botão de fechar manual sempre disponível
- Auto-close para não bloquear navegação
        `,
      },
    },
  },
  argTypes: {
    autoHideDuration: {
      control: { type: 'number', min: 1000, max: 10000, step: 500 },
      description: 'Tempo em ms antes do toast fechar automaticamente',
      table: {
        category: 'Comportamento',
        type: { summary: 'number' },
        defaultValue: { summary: '3500' },
      },
    },
    anchorOrigin: {
      control: 'object',
      description: 'Posição do toast na tela',
      table: {
        category: 'Layout',
        type: { summary: 'object' },
        defaultValue: { summary: "{ vertical: 'bottom', horizontal: 'right' }" },
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 3, minHeight: '400px' }}>
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ToasterProvider>

/**
 * Demo interativa padrão - teste todos os tipos de toast.
 */
export const Default: Story = {
  render: () => (
    <ToasterProvider>
      <ToasterDemo />
    </ToasterProvider>
  ),
}

/**
 * Toast posicionado no topo ao centro.
 */
export const TopCenter: Story = {
  render: () => (
    <ToasterProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <ToasterDemo />
    </ToasterProvider>
  ),
}

/**
 * Toast com duração customizada (5 segundos).
 */
export const LongerDuration: Story = {
  render: () => (
    <ToasterProvider autoHideDuration={5000}>
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Este toast ficará visível por 5 segundos.
        </Typography>
        <ToasterDemo />
      </Box>
    </ToasterProvider>
  ),
}

/**
 * Toast posicionado no canto superior esquerdo.
 */
export const TopLeft: Story = {
  render: () => (
    <ToasterProvider anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
      <ToasterDemo />
    </ToasterProvider>
  ),
}

/**
 * Caso de uso: Formulário com feedback via toast.
 */
export const FormWithToast: Story = {
  render: () => {
    function FormDemo() {
      const toaster = useToaster()

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toaster.show({
          message: 'Formulário enviado com sucesso!',
          severity: 'success',
        })
      }

      return (
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Formulário de Exemplo
          </Typography>
          <Stack spacing={2}>
            <input type="text" placeholder="Nome" style={{ padding: '8px', fontSize: '14px' }} />
            <input type="email" placeholder="Email" style={{ padding: '8px', fontSize: '14px' }} />
            <Button type="submit" variant="contained">
              Enviar
            </Button>
          </Stack>
        </Box>
      )
    }

    return (
      <ToasterProvider>
        <FormDemo />
      </ToasterProvider>
    )
  },
}

/**
 * Caso de uso: Múltiplas ações com diferentes severidades.
 */
export const MultipleActionsDemo: Story = {
  render: () => {
    function ActionsDemo() {
      const toaster = useToaster()

      return (
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Simulação de Operações
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Simule diferentes cenários e veja o feedback apropriado.
            </Typography>
          </Box>

          <Stack spacing={2}>
            <Button
              variant="outlined"
              onClick={() => {
                setTimeout(() => {
                  toaster.show({
                    message: 'Dados salvos com sucesso',
                    severity: 'success',
                  })
                }, 500)
              }}
            >
              Salvar Dados
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                setTimeout(() => {
                  toaster.show({
                    message: 'Conexão com servidor restabelecida',
                    severity: 'info',
                  })
                }, 500)
              }}
            >
              Verificar Conexão
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                setTimeout(() => {
                  toaster.show({
                    message: 'Espaço de armazenamento baixo',
                    severity: 'warning',
                  })
                }, 500)
              }}
            >
              Verificar Espaço
            </Button>

            <Button
              variant="outlined"
              onClick={() => {
                setTimeout(() => {
                  toaster.show({
                    message: 'Falha ao enviar arquivo',
                    severity: 'error',
                  })
                }, 500)
              }}
            >
              Enviar Arquivo
            </Button>
          </Stack>
        </Stack>
      )
    }

    return (
      <ToasterProvider>
        <ActionsDemo />
      </ToasterProvider>
    )
  },
}
