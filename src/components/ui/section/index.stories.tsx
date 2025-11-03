import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { Section } from './index'

const meta: Meta<typeof Section> = {
  title: 'Components/Layout/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Section

Componente de seção flexível para organizar conteúdo da ANPD.

## 🎯 Características Principais

- **🎨 Tema Automático**: Cores do tema selecionado (GovBR ou ANPD)
- **📱 Responsivo**: Breakpoints otimizados para mobile e desktop
- **🔄 Colapsável**: Modo opcional para expandir/recolher conteúdo
- **♿ Acessível**: ARIA labels e semântica adequada
- **🎯 Header Flexível**: Título, subtitle, actions personalizáveis

## 📝 Casos de Uso

### Organização de Conteúdo
Ideal para dividir formulários longos, dashboards e páginas complexas em seções lógicas.

### Cards de Informação
Estruture dados relacionados com cabeçalho e ações contextuais.

### Painéis Colapsáveis
Economize espaço vertical permitindo que usuários expandam apenas o que precisam ver.

## 🎨 Integração com Tema

Este componente usa automaticamente:
- \`theme.palette.text.secondary\` para subtítulos
- \`theme.palette.divider\` para separadores
- \`theme.spacing()\` para espaçamentos consistentes
- \`theme.breakpoints\` para responsividade

## ⚖️ Section vs GovBRCard - Quando usar cada um?

| Característica | Section | GovBRCard |
|---------------|---------|-----------|
| **Propósito** | Organizar conteúdo | Container rico com features |
| **Complexidade** | Simples | Completo |
| **Features únicas** | Collapsible, divider | Imagem, avatar, draggable, fixed height |
| **Casos de uso** | Formulários, painéis | Cards de conteúdo, dashboards |

### 💡 Quando usar cada um?

- **Use \`Section\`** quando: organizar conteúdo em páginas, formulários longos, painéis colapsáveis simples
- **Use \`GovBRCard\`** quando: exibir conteúdo rico com imagem, avatar, ou precisar de features avançadas

## �📝 Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| \`title\` | \`string\` | - | Título principal (renderizado como h2) |
| \`subtitle\` | \`string\` | - | Informação adicional no header |
| \`actions\` | \`ReactNode\` | - | Botões ou elementos de ação |
| \`collapsible\` | \`boolean\` | \`false\` | Habilita expansão/recolhimento |
| \`defaultExpanded\` | \`boolean\` | \`true\` | Estado inicial (se collapsible) |
| \`divider\` | \`boolean\` | \`false\` | Adiciona linha entre header e conteúdo |
| \`elevation\` | \`number\` | \`0\` | Sombra do Paper |
| \`tooltip\` | \`string\` | - | Tooltip ao passar mouse no título |

## ♿ Acessibilidade

- Título renderizado como \`<h2>\` semanticamente correto
- ARIA labels para botões de expansão
- \`aria-expanded\` e \`aria-controls\` para state
- IDs gerados automaticamente para ancoragem
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal da seção',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo ou informação secundária',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Habilita modo colapsável',
      table: {
        category: 'Comportamento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Estado inicial quando collapsible',
      table: {
        category: 'Comportamento',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    divider: {
      control: 'boolean',
      description: 'Adiciona divider entre header e conteúdo',
      table: {
        category: 'Aparência',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Elevação do Paper (sombra)',
      table: {
        category: 'Aparência',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip exibido ao passar mouse no título',
      table: {
        category: 'Acessibilidade',
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 3, maxWidth: 800 }}>
        <Story />
      </Box>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Section>

/**
 * Seção básica com apenas título e conteúdo.
 */
export const Default: Story = {
  args: {
    title: 'Dados Pessoais',
    children: (
      <Typography variant="body1" sx={{ mt: 2 }}>
        Conteúdo da seção com informações relevantes.
      </Typography>
    ),
  },
}

/**
 * Seção completa com título, subtitle e actions.
 */
export const WithActions: Story = {
  args: {
    title: 'Configurações',
    subtitle: 'Atualizado há 5 minutos',
    divider: true,
    actions: (
      <>
        <Button variant="outlined" size="small">
          Cancelar
        </Button>
        <Button variant="contained" size="small">
          Salvar
        </Button>
      </>
    ),
    children: (
      <Box sx={{ mt: 2 }}>
        <TextField label="Nome" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
      </Box>
    ),
  },
}

/**
 * Seção colapsável - usuário pode expandir/recolher.
 */
export const Collapsible: Story = {
  args: {
    title: 'Informações Adicionais',
    subtitle: 'Clique para expandir',
    collapsible: true,
    defaultExpanded: true,
    divider: true,
    children: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Este conteúdo pode ser expandido ou recolhido pelo usuário.
        </Typography>
        <Typography variant="body2">
          Útil para economizar espaço vertical em formulários longos.
        </Typography>
      </Box>
    ),
  },
}

/**
 * Seção inicialmente recolhida.
 */
export const CollapsibleClosed: Story = {
  args: {
    title: 'Detalhes Técnicos',
    subtitle: 'Informações avançadas',
    collapsible: true,
    defaultExpanded: false,
    children: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" component="pre" sx={{ fontSize: '0.875rem' }}>
          {JSON.stringify(
            {
              version: '1.0.0',
              environment: 'production',
              lastDeploy: '2024-01-15',
            },
            null,
            2,
          )}
        </Typography>
      </Box>
    ),
  },
}

/**
 * Seção com tooltip no título para informações extras.
 */
export const WithTooltip: Story = {
  args: {
    title: 'Dados Sensíveis',
    tooltip: 'Informações protegidas pela LGPD',
    divider: true,
    actions: <Chip label="Requer aprovação" color="warning" size="small" />,
    children: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Esta seção contém informações sensíveis que requerem cuidado especial.
        </Typography>
      </Box>
    ),
  },
}

/**
 * Múltiplas seções empilhadas - caso de uso real.
 */
export const StackedSections: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Section title="Resumo do Processo" divider>
        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Protocolo
            </Typography>
            <Typography variant="body1">2024.001.12345</Typography>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary">
              Status
            </Typography>
            <Chip label="Em análise" color="info" size="small" />
          </Box>
        </Box>
      </Section>

      <Section title="Documentos Anexados" subtitle="3 arquivos" divider collapsible>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">• documento_identidade.pdf</Typography>
          <Typography variant="body2">• comprovante_residencia.pdf</Typography>
          <Typography variant="body2">• procuracao.pdf</Typography>
        </Box>
      </Section>

      <Section title="Histórico de Movimentações" collapsible defaultExpanded={false} divider>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" gutterBottom>
            15/01/2024 - Processo criado
          </Typography>
          <Typography variant="body2" gutterBottom>
            16/01/2024 - Documentos anexados
          </Typography>
          <Typography variant="body2">17/01/2024 - Em análise</Typography>
        </Box>
      </Section>
    </Box>
  ),
}

/**
 * Seção com elevação (sombra) para destaque.
 */
export const WithElevation: Story = {
  args: {
    title: 'Notificação Importante',
    elevation: 4,
    actions: <Button size="small">Marcar como lida</Button>,
    children: (
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" color="warning.main" gutterBottom>
          ⚠️ Ação necessária
        </Typography>
        <Typography variant="body2">Você tem 5 dias para responder a esta solicitação.</Typography>
      </Box>
    ),
  },
}

/**
 * Formulário dentro de seção - exemplo prático.
 */
export const FormExample: Story = {
  render: () => (
    <Section
      title="Cadastro de Usuário"
      subtitle="Preencha os campos abaixo"
      divider
      actions={
        <>
          <Button variant="outlined">Cancelar</Button>
          <Button variant="contained" color="primary">
            Cadastrar
          </Button>
        </>
      }
    >
      <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nome completo" fullWidth required />
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="CPF" fullWidth required />
        <TextField label="Telefone" fullWidth />
      </Box>
    </Section>
  ),
}
