import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { GovBRSignIn } from './index'

const meta: Meta<typeof GovBRSignIn> = {
  title: 'Components/GovBRSignIn',
  component: GovBRSignIn,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '600px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['internal', 'external-text', 'external-image'],
      description:
        'Tipo de autenticação: interna (gov.br), externa com texto ou externa com imagem',
    },
    emphasis: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Ênfase visual que define hierarquia: primary (destaque) ou secondary (sutil)',
    },
    density: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Densidade de informações: small (compacto), medium (padrão), large (espaçoso)',
    },
    circle: {
      control: 'boolean',
      description: 'Aplica formato circular ao botão de autenticação (ideal para ícones)',
    },
    block: {
      control: 'boolean',
      description: 'Expande o componente para ocupar toda a largura disponível',
    },
    inverted: {
      control: 'boolean',
      description: 'Inverte o esquema de cores para uso em fundos escuros',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente impedindo cliques e interação',
    },
    iconUrl: {
      control: 'text',
      description: 'URL customizada para o ícone ou imagem do gov.br',
    },
    strictGovBr: {
      control: 'boolean',
      description: 'Aplica estilos rigorosos do GovBR Design System (classes .br-sign-in)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRSignIn - Componente GovBR-DS

Componente de autenticação/login que segue as diretrizes de identidade visual e segurança do GovBR Design System.

### Características Principais:
- 🔐 **Autenticação Gov.br**: Integração com o sistema oficial de autenticação do governo
- 🎨 **Variantes Múltiplas**: Suporte a autenticação interna, externa com texto e com imagem
- 🎯 **Ênfases Visuais**: Primary para destaque principal, Secondary para uso discreto
- 📏 **Densidades Flexíveis**: Small, Medium, Large para diferentes contextos de uso
- 🌓 **Modo Invertido**: Adaptação automática para fundos claros e escuros
- 🔄 **Estados Dinâmicos**: Loading, Disabled e outros estados de interação
- 🏛️ **GovBR Strict Mode**: Aplicação rigorosa dos padrões governamentais
- ⚡ **Performance**: Renderização otimizada com lazy loading de recursos

### Casos de Uso Comuns:
\`\`\`typescript
// Autenticação padrão Gov.br
<GovBRSignIn
  variant="internal"
  emphasis="primary"
  block
  onClick={handleGovBrLogin}
/>

// Login externo para parceiros
<GovBRSignIn
  variant="external-text"
  emphasis="secondary"
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

### Integração ANPD:
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
    emphasis: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Configuração padrão para autenticação gov.br com ênfase primária.',
      },
    },
  },
}

export const ANPDPortalLogin: Story = {
  render: () => {
    const handleGovBrLogin = () => {
      console.log('Redirecionando para autenticação gov.br...')
      // Simula redirecionamento para autenticação
      alert(
        'Redirecionamento para o portal gov.br\n\n🔐 Funcionalidades:\n• Single Sign-On (SSO)\n• Autenticação de dois fatores\n• Integração com CPF\n• Controle de sessão seguro'
      )
    }

    const handleExternalLogin = () => {
      console.log('Login externo iniciado...')
      alert(
        'Autenticação externa para parceiros\n\n🔗 Integrações:\n• SIAPE\n• SUAP\n• Sistemas Corporativos\n• APIs Terceirizadas'
      )
    }

    return (
      <Stack spacing={4} sx={{ maxWidth: 400 }}>
        <Box>
          <h3 style={{ marginBottom: '16px', color: '#1565C0' }}>Portal ANPD - Área Restrita</h3>
          <Stack spacing={2}>
            <GovBRSignIn
              variant="external-text"
              emphasis="primary"
              block
              onClick={handleGovBrLogin}
            />
            <GovBRSignIn
              variant="external-image"
              emphasis="secondary"
              block
              onClick={handleExternalLogin}
            />
          </Stack>
        </Box>

        <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>💡 Sobre a Autenticação</h4>
          <ul style={{ margin: 0, fontSize: '12px', paddingLeft: '18px' }}>
            <li>
              <strong>Gov.br:</strong> Autenticação oficial do governo brasileiro
            </li>
            <li>
              <strong>Segurança:</strong> Criptografia e validação de identidade
            </li>
            <li>
              <strong>Praticidade:</strong> Um login para todos os serviços públicos
            </li>
            <li>
              <strong>LGPD:</strong> Conformidade total com a Lei Geral de Proteção de Dados
            </li>
          </ul>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exemplo prático de implementação no Portal ANPD com múltiplas opções de autenticação e informações contextuais.',
      },
    },
  },
}

export const VariantsShowcase: Story = {
  render: () => {
    const mockLogin = (variant: string) => {
      console.log(`Login ${variant} ativado`)
      alert(`Demonstração: ${variant}`)
    }

    return (
      <Stack spacing={4}>
        <Box>
          <h4 style={{ marginBottom: '16px' }}>Variantes de Autenticação</h4>
          <Stack spacing={2}>
            <Box>
              <small style={{ color: '#666', display: 'block', marginBottom: '8px' }}>
                <strong>Internal:</strong> Para uso em headers e barras de navegação
              </small>
              <GovBRSignIn
                variant="internal"
                emphasis="primary"
                onClick={() => mockLogin('internal')}
              />
            </Box>

            <Box>
              <small style={{ color: '#666', display: 'block', marginBottom: '8px' }}>
                <strong>External Text:</strong> Para páginas de login principais
              </small>
              <GovBRSignIn
                variant="external-text"
                emphasis="primary"
                block
                onClick={() => mockLogin('external-text')}
              />
            </Box>

            <Box>
              <small style={{ color: '#666', display: 'block', marginBottom: '8px' }}>
                <strong>External Image:</strong> Para parceiros e integração visual
              </small>
              <GovBRSignIn
                variant="external-image"
                emphasis="secondary"
                block
                onClick={() => mockLogin('external-image')}
              />
            </Box>
          </Stack>
        </Box>

        <Box>
          <h4 style={{ marginBottom: '16px' }}>Densidades e Formatos</h4>
          <Stack direction="row" spacing={2} alignItems="center">
            <GovBRSignIn variant="internal" density="small" onClick={() => mockLogin('small')} />
            <GovBRSignIn variant="internal" density="medium" onClick={() => mockLogin('medium')} />
            <GovBRSignIn variant="internal" density="large" onClick={() => mockLogin('large')} />
            <GovBRSignIn variant="internal" circle onClick={() => mockLogin('circle')} />
          </Stack>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase completo de todas as variantes, densidades e formatos disponíveis.',
      },
    },
  },
}

export const ResponsiveLayout: Story = {
  render: () => {
    const handleAuthFlow = (step: string) => {
      const steps = {
        step1: 'Identificação do usuário',
        step2: 'Validação de dados',
        step3: 'Autenticação de dois fatores',
        step4: 'Acesso liberado',
      }

      console.log(`Fluxo de autenticação - ${steps[step as keyof typeof steps]}`)
      alert(
        `🔒 Fluxo de Autenticação ANPD\n\nEtapa: ${steps[step as keyof typeof steps]}\n\n• Verificação automática de CPF\n• Validação de identidade\n• Controle de acesso por perfil\n• Auditoria de segurança`
      )
    }

    return (
      <Stack spacing={3}>
        <Box sx={{ p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
          <h4 style={{ margin: '0 0 16px 0', color: '#1565C0' }}>
            🏛️ Ambiente Governamental Seguro
          </h4>

          {/* Desktop Layout */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 2 }}>
            <small style={{ color: '#555' }}>Layout Desktop:</small>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <GovBRSignIn
                variant="internal"
                emphasis="secondary"
                density="small"
                onClick={() => handleAuthFlow('step1')}
              />
              <GovBRSignIn
                variant="external-text"
                emphasis="primary"
                onClick={() => handleAuthFlow('step2')}
              />
            </Stack>
          </Box>

          {/* Mobile Layout */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <small style={{ color: '#555' }}>Layout Mobile:</small>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <GovBRSignIn
                variant="external-text"
                emphasis="primary"
                block
                onClick={() => handleAuthFlow('step3')}
              />
              <GovBRSignIn
                variant="external-image"
                emphasis="secondary"
                block
                onClick={() => handleAuthFlow('step4')}
              />
            </Stack>
          </Box>

          {/* Universal Layout */}
          <Box sx={{ mt: 2 }}>
            <small style={{ color: '#555' }}>Todos os dispositivos:</small>
            <Box sx={{ mt: 1 }}>
              <GovBRSignIn
                variant="external-text"
                emphasis="primary"
                block
                density="large"
                onClick={() => handleAuthFlow('step4')}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, fontSize: '14px' }}>
          <strong>🔐 Funcionalidades de Segurança Implementadas:</strong>
          <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
            <li>Autenticação multifator obrigatória</li>
            <li>Sessões com timeout automático</li>
            <li>Logs de auditoria detalhados</li>
            <li>Validação de integridade de dados</li>
            <li>Conformidade LGPD nativa</li>
          </ul>
        </Box>
      </Stack>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Layout responsivo com simulação de fluxo completo de autenticação governamental.',
      },
    },
  },
}

export const Circle: Story = {
  args: {
    variant: 'internal',
    circle: true,
  },
}

export const Block: Story = {
  args: {
    variant: 'internal',
    block: true,
  },
}

export const Inverted: Story = {
  args: {
    variant: 'internal',
    inverted: true,
  },
  decorators: [
    Story => (
      <GovBRThemeProvider>
        <div
          style={{
            padding: '2rem',
            maxWidth: '600px',
            backgroundColor: '#1351b4',
            color: 'white',
          }}
        >
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
}

export const WithCustomIcon: Story = {
  args: {
    variant: 'external-image',
    iconUrl: 'https://via.placeholder.com/24x24/1351b4/FFFFFF?text=G',
  },
}
