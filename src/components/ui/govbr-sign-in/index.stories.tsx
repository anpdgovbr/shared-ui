import Box from '@mui/material/Box'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { GovBRSignIn } from './index'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'Components/GovBRSignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '600px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['internal', 'external-image', 'external-text'],
      description: 'Variante de conteúdo do botão.',
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Define a cor do botão.',
    },
    circle: {
      control: 'boolean',
      description: 'Aplica formato circular ao botão de autenticação.',
    },
    block: {
      control: 'boolean',
      description: 'Expande o componente para ocupar toda a largura disponível.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente impedindo cliques e interação.',
    },
    externalImageHeight: {
      control: 'text',
      description: 'Altura máxima da imagem do gov.br quando variant é external-image.',
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRSignIn - Componente de Autenticação Gov.br

Componente de autenticação/login que segue as diretrizes de identidade visual e segurança do GovBR Design System.

### Características Principais:
- 🔐 **Autenticação Gov.br**: Integração com o sistema oficial de autenticação do governo
- 🎨 **Variantes Múltiplas**: Suporte a autenticação interna, externa com texto e com imagem
- 🎯 **Cores Flexíveis**: Primary para destaque principal, Secondary para uso discreto
- 📏 **Densidades Adaptáveis**: Small, Medium, Large para diferentes contextos de uso
- 🌓 **Modo Invertido**: Adaptação automática para fundos claros e escuros
- 🔄 **Estados Dinâmicos**: Loading, Disabled e outros estados de interação
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais (@govbr-ds/core)
- ⚡ **Performance**: Renderização otimizada com tree shaking

### Casos de Uso Comuns:
\`\`\`typescript
// Autenticação padrão Gov.br
<GovBRSignIn
  variant="internal"
  color="primary"
  block
  onClick={handleGovBrLogin}
/>

// Login externo para parceiros
<GovBRSignIn
  variant="external-text"
  color="secondary"
  density="small"
  onClick={handleExternalLogin}
/>

// Botão circular para header
<GovBRSignIn
  variant="internal"
  circle
  density="small"
  onClick={handleQuickLogin}
/>
\`\`\`

### Integração com Sistemas Governamentais:
Este componente é essencial para portais governamentais, especialmente no contexto da ANPD onde a autenticação segura é fundamental para acesso a dados pessoais e processos administrativos.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRSignIn>

export const Default: Story = {
  args: {
    variant: 'internal',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração padrão para autenticação gov.br com cor primária e ícone interno.',
      },
    },
  },
}

export const Secundario: Story = {
  args: {
    variant: 'internal',
    color: 'secondary',
  },
}

export const Circular: Story = {
  args: {
    variant: 'internal',
    circle: true,
    'aria-label': 'Entrar na sua conta Gov.br',
  },
}

export const ExternoComImagem: Story = {
  args: {
    variant: 'external-image',
    color: 'secondary',
  },
}

export const ExternoComTexto: Story = {
  args: {
    variant: 'external-text',
    color: 'secondary',
  },
}

export const Desativado: Story = {
  args: {
    variant: 'internal',
    disabled: true,
  },
}

export const Bloco: Story = {
  args: {
    variant: 'internal',
    block: true,
  },
}

export const ShowcaseCompleto: Story = {
  render: () => {
    const mockLogin = (variant: string) => {
      console.log(`Login ${variant} iniciado...`)
      alert(`Autenticação ${variant} simulada com sucesso!`)
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <GovBRSignIn variant="internal" color="primary" onClick={() => mockLogin('interno')} />
          <GovBRSignIn
            variant="external-text"
            color="secondary"
            onClick={() => mockLogin('externo texto')}
          />
          <GovBRSignIn
            variant="external-image"
            color="secondary"
            onClick={() => mockLogin('externo imagem')}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <GovBRSignIn
            variant="internal"
            color="secondary"
            size="small"
            onClick={() => mockLogin('pequeno')}
          />
          <GovBRSignIn
            variant="external-text"
            color="primary"
            size="large"
            onClick={() => mockLogin('grande')}
          />
          <GovBRSignIn
            variant="internal"
            color="primary"
            circle
            onClick={() => mockLogin('circular')}
            aria-label="Login circular"
          />
          <GovBRSignIn
            variant="internal"
            color="secondary"
            circle
            onClick={() => mockLogin('circular')}
            aria-label="Login circular"
          />
        </Box>

        <GovBRSignIn variant="internal" color="primary" block onClick={() => mockLogin('bloco')} />
        <GovBRSignIn
          variant="internal"
          color="secondary"
          block
          onClick={() => mockLogin('bloco')}
        />
      </Box>
    )
  },
}
