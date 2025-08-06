import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { GovBRBreadcrumb } from './index'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'

const meta: Meta<typeof GovBRBreadcrumb> = {
  title: 'Components/GovBRBreadcrumb',
  component: GovBRBreadcrumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '800px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    items: {
      control: 'object',
      description:
        'Array de objetos breadcrumb com propriedades label (obrigatório) e href (opcional)',
    },
    onNavigate: {
      action: 'navigate',
      description: 'Função callback executada ao clicar em um item navegável',
    },
    className: {
      control: 'text',
      description: 'Classes CSS customizadas para estilização adicional',
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Aplica estilos rigorosos do GovBR Design System (classes .br-breadcrumb)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRBreadcrumb - Componente GovBR-DS

Componente de breadcrumb (trilha de navegação) que segue as diretrizes visuais do GovBR Design System.

### Características Principais:
- 🧭 **Navegação Hierárquica**: Mostra o caminho atual na estrutura do site
- 🔍 **Acessibilidade**: Suporte a navegação por teclado e leitores de tela  
- 🎨 **Estilo GovBR**: Seguindo padrões visuais governamentais
- 📱 **Responsivo**: Adaptação automática para dispositivos móveis
- ⚡ **Performance**: Renderização otimizada com callback de navegação
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRBreadcrumb>

// Mock function para simular navegação
const mockNavigate = (href: string) => {
  console.log('Navegando para:', href)
  // Em uma aplicação real, seria usado React Router ou Next.js Router
  // router.push(href) ou navigate(href)
}

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Consulta', href: '/servicos/consulta' },
      { label: 'Resultado' }, // Último item sem href (página atual)
    ],
    onNavigate: mockNavigate,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb padrão com 4 níveis, onde o último representa a página atual',
      },
    },
  },
}

export const WithStrictGovBr: Story = {
  args: {
    items: [
      { label: 'Portal Gov.br', href: '/' },
      { label: 'ANPD', href: '/anpd' },
      { label: 'Serviços Públicos', href: '/anpd/servicos' },
      { label: 'Proteção de Dados', href: '/anpd/servicos/protecao' },
      { label: 'Consultar Processos' },
    ],
    strictGovBr: true,
    onNavigate: mockNavigate,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb seguindo rigorosamente o padrão GovBR-DS com 5 níveis',
      },
    },
  },
}

export const Short: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'Página Atual' }],
    onNavigate: mockNavigate,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb mínimo com apenas 2 níveis',
      },
    },
  },
}

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Portal', href: '/' },
      { label: 'Cidadão', href: '/cidadao' },
      { label: 'Serviços', href: '/cidadao/servicos' },
      { label: 'Documentos', href: '/cidadao/servicos/documentos' },
      { label: 'Certidões', href: '/cidadao/servicos/documentos/certidoes' },
      {
        label: 'Certidão de Nascimento',
        href: '/cidadao/servicos/documentos/certidoes/nascimento',
      },
      { label: 'Solicitar Certidão' },
    ],
    onNavigate: mockNavigate,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb com caminho longo (7 níveis) demonstrando comportamento responsivo',
      },
    },
  },
}

export const SingleLevel: Story = {
  args: {
    items: [{ label: 'Dashboard' }],
    onNavigate: mockNavigate,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb com apenas um nível (sem navegação)',
      },
    },
  },
}

export const ANPDPortalExample: Story = {
  render: () => (
    <Box>
      <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Portal ANPD - Exemplo Real
        </Typography>
        <GovBRBreadcrumb
          items={[
            { label: 'ANPD', href: '/' },
            { label: 'Cidadão', href: '/cidadao' },
            { label: 'Denúncias', href: '/cidadao/denuncias' },
            { label: 'Nova Denúncia' },
          ]}
          strictGovBr
          onNavigate={mockNavigate}
        />
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Seção Empresas
        </Typography>
        <GovBRBreadcrumb
          items={[
            { label: 'ANPD', href: '/' },
            { label: 'Empresas', href: '/empresas' },
            { label: 'Relatórios de Impacto', href: '/empresas/relatorios' },
            { label: 'Submeter DPIA' },
          ]}
          strictGovBr
          onNavigate={mockNavigate}
        />
      </Paper>

      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Área Institucional
        </Typography>
        <GovBRBreadcrumb
          items={[
            { label: 'ANPD', href: '/' },
            { label: 'Institucional', href: '/institucional' },
            { label: 'Legislação', href: '/institucional/legislacao' },
            { label: 'LGPD', href: '/institucional/legislacao/lgpd' },
            { label: 'Artigo 46' },
          ]}
          strictGovBr
          onNavigate={mockNavigate}
        />
      </Paper>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos de uso em diferentes seções do Portal ANPD',
      },
    },
  },
}

export const Long: Story = {
  args: {
    items: [
      { label: 'Início', href: '/' },
      { label: 'Cidadão', href: '/cidadao' },
      { label: 'Serviços', href: '/cidadao/servicos' },
      { label: 'Proteção de Dados', href: '/cidadao/servicos/protecao' },
      { label: 'Relatório de Impacto', href: '/cidadao/servicos/protecao/relatorio' },
      { label: 'Visualização' },
    ],
    onNavigate: (href) => console.log('Navegando para:', href),
  },
}
