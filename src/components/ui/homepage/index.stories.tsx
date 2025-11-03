import AssessmentIcon from '@mui/icons-material/Assessment'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import InfoIcon from '@mui/icons-material/Info'
import SecurityIcon from '@mui/icons-material/Security'
import SpeedIcon from '@mui/icons-material/Speed'
import type { Meta, StoryObj } from '@storybook/react'

import { Homepage } from './index'

const meta: Meta<typeof Homepage> = {
  title: 'Components/Custom/Homepage',
  component: Homepage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Homepage - Componente de Página Inicial Customizado ANPD

Componente de composição para criar homepages rapidamente com seções modulares.

### Características Principais:
- 🎨 **Integrado ao GovBRTheme**: Utiliza tokens CSS e paleta do Gov.br DS
- 📦 **Composição Flexível**: Use apenas as seções necessárias
- 🎯 **Design Responsivo**: Layout adaptável a diferentes dispositivos
- ♿ **Acessível**: Estrutura HTML semântica e navegável
- 🧩 **Customizável**: Props sx e customização de estilos por seção

### Seções Disponíveis:
1. **Hero**: Seção de destaque principal com título, descrição e CTAs
2. **Metrics**: Grade de métricas/estatísticas numéricas
3. **Features**: Grade de recursos/funcionalidades com ícones
4. **Highlights**: Cards informativos com destaque opcional
5. **Footer**: Rodapé com mensagem final e CTAs

### Nota sobre Arquitetura:
Este é um **componente customizado da ANPD** e não implementa modo estrito (\`strictgovbr\`) pois não há equivalente no Gov.br DS oficial. Ele é construído usando componentes base do MUI estilizados pelo \`govbrTheme.ts\`, garantindo consistência visual com o Gov.br DS.

### BorderRadius Corrigido:
O componente agora usa corretamente \`theme.shape.borderRadius\` (6px por padrão) através de multiplicadores (ex: 1, 1.5), resultando em bordas sutis e consistentes com o tema.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Homepage>

/**
 * História padrão mostrando todas as seções da homepage
 */
export const Default: Story = {
  args: {
    hero: {
      highlight: 'BETA',
      title: 'Bem-vindo à ANPD',
      description:
        'Sistema integrado de gestão de dados e proteção de privacidade. Desenvolvido seguindo os padrões do Gov.br Design System.',
      actions: [
        { label: 'Começar', variant: 'contained', color: 'primary' },
        { label: 'Saiba mais', variant: 'outlined', color: 'primary' },
      ],
      align: 'center',
    },
    metrics: {
      title: 'Estatísticas do Sistema',
      subtitle: 'Números atualizados em tempo real',
      metrics: [
        { label: 'Usuários Ativos', value: '1.234', helperText: 'últimos 30 dias' },
        { label: 'Processos', value: '567', helperText: 'em andamento' },
        { label: 'Conformidade', value: '98%', helperText: 'LGPD' },
        { label: 'Tempo Médio', value: '2.5h', helperText: 'de resposta' },
      ],
    },
    features: {
      title: 'Recursos Principais',
      subtitle: 'Funcionalidades desenvolvidas para atender às suas necessidades',
      features: [
        {
          icon: <SecurityIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
          title: 'Segurança Avançada',
          description:
            'Proteção de dados com criptografia de ponta a ponta e conformidade com a LGPD.',
        },
        {
          icon: <SpeedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
          title: 'Alta Performance',
          description: 'Sistema otimizado para processamento rápido de grandes volumes de dados.',
        },
        {
          icon: <AssessmentIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
          title: 'Relatórios Detalhados',
          description: 'Dashboards e relatórios customizáveis para análise de dados completa.',
        },
        {
          icon: <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
          title: 'Integração Cloud',
          description: 'Sincronização automática e backup em nuvem para máxima disponibilidade.',
        },
      ],
      cardVariant: 'outlined',
    },
    highlights: [
      {
        icon: <InfoIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'Novidades da Versão Beta',
        description:
          'Estamos constantemente melhorando o sistema. Sua opinião é fundamental para o desenvolvimento contínuo.',
        variant: 'emphasis',
        actions: [{ label: 'Ver Changelog', variant: 'text', color: 'primary' }],
      },
    ],
    footer: {
      title: 'Pronto para começar?',
      description: 'Acesse o sistema e comece a gerenciar seus dados com segurança e eficiência.',
      actions: [{ label: 'Acessar Sistema', variant: 'contained', color: 'primary' }],
      align: 'center',
    },
    spacing: 6,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Homepage completa com todas as seções habilitadas. Demonstra a composição ideal para uma página inicial institucional.',
      },
    },
  },
}

/**
 * Homepage minimalista com apenas hero e footer
 */
export const Minimal: Story = {
  args: {
    hero: {
      title: 'Sistema ANPD',
      description: 'Gestão simplificada de dados e privacidade.',
      actions: [{ label: 'Entrar', variant: 'contained', color: 'primary' }],
      align: 'center',
    },
    footer: {
      description: 'Desenvolvido pela Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD',
      align: 'center',
    },
    spacing: 8,
  },
  parameters: {
    docs: {
      description: {
        story: 'Versão minimalista com apenas as seções essenciais: hero e footer.',
      },
    },
  },
}

/**
 * Homepage focada em métricas e dados
 */
export const MetricsFocused: Story = {
  args: {
    hero: {
      eyebrow: 'Dashboard',
      title: 'Visão Geral do Sistema',
      description: 'Acompanhe as principais métricas em tempo real.',
      align: 'left',
    },
    metrics: {
      title: 'Indicadores de Performance',
      metrics: [
        { label: 'SLA Atingido', value: '99.9%' },
        { label: 'Tickets Resolvidos', value: '2.456' },
        { label: 'Satisfação', value: '4.8/5' },
        { label: 'Uptime', value: '99.95%' },
      ],
      dense: true,
    },
    highlights: [
      {
        title: 'Desempenho Excepcional',
        description:
          'O sistema manteve 99.9% de disponibilidade no último trimestre, superando as metas estabelecidas.',
        variant: 'emphasis',
      },
    ],
    spacing: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Homepage focada em exibição de métricas e indicadores de performance.',
      },
    },
  },
}

/**
 * Homepage focada em features/recursos
 */
export const FeatureShowcase: Story = {
  args: {
    hero: {
      title: 'Conheça Nossos Recursos',
      description: 'Funcionalidades desenvolvidas para facilitar o seu trabalho.',
      align: 'center',
    },
    features: {
      title: 'O que oferecemos',
      features: [
        {
          icon: <SecurityIcon sx={{ fontSize: 48, color: 'success.main' }} />,
          title: 'Segurança de Dados',
          description: 'Proteção avançada e conformidade total com LGPD.',
        },
        {
          icon: <SpeedIcon sx={{ fontSize: 48, color: 'info.main' }} />,
          title: 'Performance',
          description: 'Processamento otimizado e respostas rápidas.',
        },
        {
          icon: <AssessmentIcon sx={{ fontSize: 48, color: 'warning.main' }} />,
          title: 'Análise de Dados',
          description: 'Relatórios completos e dashboards customizáveis.',
        },
        {
          icon: <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
          title: 'Cloud Native',
          description: 'Infraestrutura moderna e escalável.',
        },
        {
          icon: <InfoIcon sx={{ fontSize: 48, color: 'secondary.main' }} />,
          title: 'Suporte Técnico',
          description: 'Equipe dedicada para auxiliar você.',
        },
        {
          icon: <SecurityIcon sx={{ fontSize: 48, color: 'error.main' }} />,
          title: 'Backup Automático',
          description: 'Seus dados sempre protegidos e acessíveis.',
        },
      ],
      cardVariant: 'elevated',
      columns: { xs: 1, sm: 2, md: 2, lg: 3 },
    },
    footer: {
      title: 'Quer saber mais?',
      actions: [
        { label: 'Documentação', variant: 'outlined', color: 'primary' },
        { label: 'Contato', variant: 'text', color: 'primary' },
      ],
      align: 'center',
    },
    spacing: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Homepage focada em apresentação de recursos e funcionalidades do sistema.',
      },
    },
  },
}

/**
 * Hero section alinhada à esquerda
 */
export const HeroLeftAligned: Story = {
  args: {
    hero: {
      eyebrow: 'Nova Versão',
      title: 'Sistema ANPD 2.0',
      description:
        'Redesenhado do zero para oferecer melhor experiência, performance superior e novos recursos.',
      actions: [
        { label: 'Explorar Novidades', variant: 'contained', color: 'primary' },
        { label: 'Release Notes', variant: 'outlined', color: 'primary' },
      ],
      align: 'left',
    },
    spacing: 6,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero section com alinhamento à esquerda, ideal para layouts assimétricos.',
      },
    },
  },
}

/**
 * Configuração densa (espaçamentos reduzidos)
 */
export const DenseLayout: Story = {
  args: {
    hero: {
      title: 'Layout Compacto',
      description: 'Ideal para dashboards e áreas com muito conteúdo.',
      actions: [{ label: 'Continuar', variant: 'contained', color: 'primary' }],
    },
    metrics: {
      metrics: [
        { label: 'Itens', value: '1.234' },
        { label: 'Ações', value: '567' },
        { label: 'Status', value: 'OK' },
      ],
      dense: true,
    },
    features: {
      features: [
        { title: 'Recurso 1', description: 'Descrição compacta do recurso.' },
        { title: 'Recurso 2', description: 'Descrição compacta do recurso.' },
        { title: 'Recurso 3', description: 'Descrição compacta do recurso.' },
      ],
      dense: true,
    },
    spacing: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout com espaçamentos reduzidos para melhor aproveitamento de tela.',
      },
    },
  },
}

/**
 * Customização avançada com gradiente e cores
 */
export const CustomStyling: Story = {
  args: {
    hero: {
      highlight: '🚀 NOVO',
      title: 'Design Customizado',
      description: 'Demonstração de customização visual com gradientes e cores personalizadas.',
      actions: [{ label: 'Experimentar', variant: 'contained', color: 'secondary' }],
      align: 'center',
      backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      sx: {
        color: 'white',
        '& .MuiTypography-root': {
          color: 'white',
        },
      },
    },
    metrics: {
      title: 'Métricas Destacadas',
      metrics: [
        { label: 'Crescimento', value: '+42%' },
        { label: 'Novos Usuários', value: '1.2K' },
        { label: 'Avaliação', value: '5.0' },
      ],
    },
    spacing: 7,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo de customização visual avançada usando props sx e gradientes personalizados.',
      },
    },
  },
}

/**
 * Highlights com diferentes variantes
 */
export const HighlightVariants: Story = {
  args: {
    hero: {
      title: 'Sistema de Notificações',
      description: 'Demonstração de cards de destaque com diferentes estilos visuais.',
    },
    highlights: [
      {
        icon: <InfoIcon sx={{ fontSize: 40, color: 'info.main' }} />,
        title: 'Informação Importante',
        description: 'Este é um card de destaque com variante neutra (padrão).',
        variant: 'neutral',
      },
      {
        icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        title: 'Destaque Enfatizado',
        description:
          'Este card usa a variante emphasis para chamar mais atenção com borda colorida.',
        variant: 'emphasis',
        actions: [{ label: 'Saber Mais', variant: 'text', color: 'primary' }],
      },
      {
        icon: <AssessmentIcon sx={{ fontSize: 40, color: 'success.main' }} />,
        title: 'Outro Destaque',
        description: 'Cards de highlight podem ter ícones, ações e diferentes configurações.',
        variant: 'neutral',
        actions: [
          { label: 'Ação Primária', variant: 'contained', color: 'primary', size: 'small' },
          { label: 'Ação Secundária', variant: 'outlined', color: 'primary', size: 'small' },
        ],
      },
    ],
    spacing: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração das diferentes variantes de highlight cards (neutral e emphasis).',
      },
    },
  },
}

/**
 * Grid responsivo de features
 */
export const ResponsiveFeatureGrid: Story = {
  args: {
    features: {
      title: 'Grid Responsivo',
      subtitle: 'As colunas se adaptam automaticamente ao tamanho da tela',
      features: [
        { title: 'Feature 1', description: 'Descrição da funcionalidade 1' },
        { title: 'Feature 2', description: 'Descrição da funcionalidade 2' },
        { title: 'Feature 3', description: 'Descrição da funcionalidade 3' },
        { title: 'Feature 4', description: 'Descrição da funcionalidade 4' },
        { title: 'Feature 5', description: 'Descrição da funcionalidade 5' },
        { title: 'Feature 6', description: 'Descrição da funcionalidade 6' },
      ],
      columns: {
        xs: 1, // 1 coluna em mobile
        sm: 2, // 2 colunas em tablet
        md: 2, // 2 colunas em desktop pequeno
        lg: 3, // 3 colunas em desktop grande
      },
    },
    spacing: 5,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Grid de features totalmente responsivo com controle fino de colunas por breakpoint.',
      },
    },
  },
}
