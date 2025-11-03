import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './index'

const meta: Meta<typeof Loader> = {
  title: 'Components/Custom/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Loader

Indicador de carregamento simples e centralizado para a ANPD.

## 🎯 Características Principais

- **🎨 Tema Automático**: Cores do tema selecionado (GovBR ou ANPD)
- **📦 Leve**: Minimalista para uso embutido
- **🎯 Inline**: Para uso dentro de Cards, Boxes, Containers
- **♿ Acessível**: \`aria-live\` e \`role="status"\`

## 📊 Diferença do GovBRLoading

| Característica | Loader | GovBRLoading |
|---------------|--------|--------------|
| **Uso** | Inline, embutido | Fullscreen, modal |
| **Complexidade** | Simples | Completo |
| **Features** | Spinner + mensagem | Progress, retry, backdrop |
| **Casos de uso** | Cards, seções | Operações críticas |

## 💡 Quando usar cada um?

- **Use \`Loader\`** quando: carregar dados dentro de um card, seção, lista
- **Use \`GovBRLoading\`** quando: operação crítica que bloqueia toda a UI, processamento longo com retry

## 🎨 Integração com Tema

Este componente usa automaticamente as cores do tema ativo:
- \`theme.palette.primary.main\` para o spinner
- \`theme.palette.text.secondary\` para a mensagem
- \`theme.spacing()\` para espaçamentos consistentes

## 📝 Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| \`message\` | \`string\` | - | Mensagem opcional abaixo do spinner |
| \`size\` | \`number\` | \`24\` | Tamanho do spinner em pixels |
| \`fullscreen\` | \`boolean\` | \`false\` | Se true, aumenta padding e altura mínima |

## ♿ Acessibilidade

- \`role="status"\`: Indica área de status dinâmico
- \`aria-live="polite"\`: Anuncia mudanças sem interromper
- \`aria-busy="true"\`: Indica conteúdo em carregamento
        `,
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Mensagem opcional exibida abaixo do spinner',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number', min: 16, max: 72, step: 4 },
      description: 'Tamanho do spinner em pixels',
      table: {
        category: 'Aparência',
        type: { summary: 'number' },
        defaultValue: { summary: '24' },
      },
    },
    fullscreen: {
      control: 'boolean',
      description: 'Se true, aumenta padding vertical e altura mínima',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 3, minHeight: '300px' }}>
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Loader>

/**
 * Loader básico sem mensagem - apenas o spinner.
 * Ideal para indicar carregamento rápido.
 */
export const Default: Story = {
  args: {},
}

/**
 * Loader com mensagem descritiva.
 * Ajuda o usuário a entender o que está sendo carregado.
 */
export const WithMessage: Story = {
  args: {
    message: 'Carregando dados...',
  },
}

/**
 * Loader maior para uso fullscreen ou áreas amplas.
 * Aumenta padding e altura mínima.
 */
export const Fullscreen: Story = {
  args: {
    message: 'Processando sua solicitação...',
    size: 48,
    fullscreen: true,
  },
}

/**
 * Loader pequeno para uso em espaços reduzidos.
 * Perfeito para dentro de botões ou badges.
 */
export const Small: Story = {
  args: {
    size: 16,
  },
}

/**
 * Loader grande com mensagem longa.
 * Para operações que demoram mais tempo.
 */
export const Large: Story = {
  args: {
    message: 'Estamos processando um grande volume de dados. Isso pode levar alguns minutos...',
    size: 56,
    fullscreen: true,
  },
}

/**
 * Loader dentro de um Card - caso de uso comum.
 * Demonstra como usar o Loader embutido em componentes.
 */
export const InsideCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Estatísticas do Sistema
        </Typography>
        <Loader message="Carregando métricas..." />
      </CardContent>
    </Card>
  ),
}

/**
 * Múltiplos loaders em grid - demonstra versatilidade.
 * Mostra diferentes configurações lado a lado.
 */
export const ComparisonGrid: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Pequeno
          </Typography>
          <Loader size={20} message="Carregando..." />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Médio (Padrão)
          </Typography>
          <Loader size={24} message="Carregando..." />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Grande
          </Typography>
          <Loader size={36} message="Carregando..." />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="subtitle2" gutterBottom>
            Extra Grande
          </Typography>
          <Loader size={48} message="Carregando..." />
        </CardContent>
      </Card>
    </Box>
  ),
}

/**
 * Exemplo de uso em lista/tabela - caso real.
 * Mostra estado de carregamento em contexto de dados tabulares.
 */
export const DataTableLoading: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Lista de Processos</Typography>
          <Typography variant="caption" color="text.secondary">
            Atualizado há 2 minutos
          </Typography>
        </Box>
        <Loader message="Buscando processos mais recentes..." size={32} />
      </CardContent>
    </Card>
  ),
}
