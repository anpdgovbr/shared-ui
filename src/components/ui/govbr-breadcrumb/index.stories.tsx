import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { GovBRBreadcrumb } from './index'

const meta: Meta<typeof GovBRBreadcrumb> = {
  title: 'Components/GovBRBreadcrumb',
  component: GovBRBreadcrumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, maxWidth: '1200px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    // --- Geral ---
    strictgovbr: {
      control: 'boolean',
      description:
        'Ativa o modo de renderização estrito com HTML puro e classes CSS oficiais do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },

    // --- Modo Padrão (MUI) ---
    children: {
      control: false,
      description:
        'Elementos React renderizados dentro do breadcrumb (geralmente combinação de Links e Typography para navegação hierárquica)',
      table: { category: 'Modo Padrão (MUI)' },
    },
    separator: {
      control: 'text',
      description: 'Caractere ou elemento usado como separador visual entre os itens de navegação',
      table: {
        category: 'Modo Padrão (MUI)',
        defaultValue: { summary: '"/"' },
      },
    },

    // --- Modo Estrito (GovBR) ---
    links: {
      control: 'object',
      description:
        'Array de objetos contendo label e url para renderização no modo estrito GovBR-DS',
      table: {
        category: 'Modo Estrito (GovBR)',
        type: { summary: 'Array<{ label: string; url: string }>' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRBreadcrumb - Componente GovBR-DS

Componente de navegação breadcrumb (migalhas de pão) que exibe o caminho hierárquico de navegação seguindo as diretrizes visuais do GovBR Design System e MUI.

### Características Principais:
- 🎨 **Visual Padronizado**: Aplica automaticamente estilos GovBR-DS com cores e espaçamentos oficiais
- 🔍 **Navegação Contextual**: Permite aos usuários entender sua localização atual na hierarquia do site
- 📏 **Responsividade**: Adapta-se automaticamente a diferentes tamanhos de tela mantendo legibilidade
- 🎭 **Dois Modos de Operação**: Modo padrão (MUI estilizado) e modo estrito (HTML puro com classes GovBR)
- 🔧 **Flexibilidade**: Suporte a separadores customizados e estrutura de links personalizável
- 🏛️ **Conformidade Governamental**: Aderência estrita aos padrões de acessibilidade e design do Gov.br
- ⚡ **Acessibilidade WCAG 2.1**: Navegação por teclado, leitores de tela e contraste de cores otimizados
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRBreadcrumb>

export const Default: Story = {
  name: 'Padrão (MUI): Básico',
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
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumb básico com três níveis de navegação usando componentes MUI estilizados pelo govbrTheme',
      },
    },
  },
}

export const WithStrictGovBr: Story = {
  name: 'Estrito (GovBR): Padrão Oficial',
  args: {
    strictgovbr: true,
    links: [
      { label: 'Página Inicial', url: '#' },
      { label: 'Página Anterior', url: '#' },
      { label: 'Página Atual', url: '#' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumb seguindo rigorosamente o padrão GovBR-DS com classes `.br-breadcrumb` e estrutura HTML pura',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Navegação hierárquica com cinco níveis demonstrando comportamento responsivo',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Navegação governamental completa com múltiplos níveis seguindo padrões oficiais',
      },
    },
  },
}

export const GovernmentExample: Story = {
  name: '🏛️ Exemplo Governamental Completo',
  render: () => (
    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
          Portal de Serviços - ANPD
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Navegação contextual em sistema governamental
        </Typography>

        <Box sx={{ mb: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            Modo Padrão (MUI):
          </Typography>
          <GovBRBreadcrumb>
            <Link underline="hover" color="inherit" href="https://gov.br">
              Gov.br
            </Link>
            <Link underline="hover" color="inherit" href="#">
              ANPD
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Processos
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Protocolo 2024
            </Link>
            <Typography color="text.primary">Processo #45678</Typography>
          </GovBRBreadcrumb>
        </Box>

        <Box
          sx={{ p: 2, bgcolor: 'primary.light', color: 'primary.contrastText', borderRadius: 1 }}
        >
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            Modo Estrito (GovBR-DS):
          </Typography>
          <GovBRBreadcrumb
            strictgovbr
            links={[
              { label: 'Gov.br', url: 'https://gov.br' },
              { label: 'ANPD', url: '#' },
              { label: 'Processos', url: '#' },
              { label: 'Protocolo 2024', url: '#' },
              { label: 'Processo #45678', url: '#' },
            ]}
          />
        </Box>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo realista de uso em portal governamental demonstrando ambos os modos de operação lado a lado',
      },
    },
  },
}

export const Comparison: Story = {
  name: '🔍 Comparação Visual: MUI vs Estrito',
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box>
        <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 600 }}>
          Modo Padrão (MUI) - Estilizado via govbrTheme
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Componente MUI com estilização automática através do sistema de temas
        </Typography>
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
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom sx={{ color: '#333', fontWeight: 600 }}>
          Modo Estrito - Classes CSS do @govbr-ds/core
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          HTML puro com classes oficiais do GovBR Design System para 100% de conformidade
        </Typography>
        <GovBRBreadcrumb
          strictgovbr
          links={[
            { label: 'Portal Gov.br', url: '#' },
            { label: 'ANPD', url: '#' },
            { label: 'Regulamentação', url: '#' },
            { label: 'LGPD', url: '#' },
          ]}
        />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comparação lado a lado dos dois modos de operação mostrando equivalência visual e diferenças arquiteturais',
      },
    },
  },
}
