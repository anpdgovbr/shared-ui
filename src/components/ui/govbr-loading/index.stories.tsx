import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { useState } from 'react'

import { GovBRLoading } from './index'

const meta: Meta<typeof GovBRLoading> = {
  title: 'Components/GovBRLoading',
  component: GovBRLoading,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div style={{ position: 'relative', minHeight: '400px' }}>
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
## GovBRLoading

Componente de loading versátil da biblioteca ANPD que oferece três variantes diferentes:

### 🎯 Características Principais
- **Múltiplas variantes**: Default (tela cheia), Modal (overlay) e Skeleton (adaptável ao container)
- **Sistema de retry inteligente**: Tentativas automáticas com feedback visual
- **Timeout configurável**: Controle total sobre quando acionar ações de fallback
- **Acessibilidade**: Suporte completo a screen readers com \`role="alert"\` e \`aria-live\`
- **Responsive**: Funciona perfeitamente em todos os tamanhos de tela

### 📱 Variantes Disponíveis

#### Default
Loading em tela cheia com centralização vertical, ideal para carregamentos principais da aplicação.

#### Modal
Overlay elegante com backdrop blur, perfeito para operações que não devem bloquear completamente a interface.

#### Skeleton
Carregamento que se adapta ao container pai, ideal para substituir conteúdo específico durante o carregamento.

### 🔄 Sistema de Retry com Reload Automático
- **Tentativas automáticas configuráveis** (máximo 3)
- **Reload da página**: \`window.location.reload()\` quando \`autoRetry=true\`
- **Feedback visual** do progresso das tentativas  
- **Botão manual de retry** quando esgotadas as tentativas automáticas
- **Verificação de conectividade** antes de tentar novamente
- **⚠️ ATENÇÃO**: Em produção, o \`autoRetry\` irá recarregar a página atual

### 🚨 Comportamento de Reload
Quando \`autoRetry={true}\` e o timeout é atingido, o componente executa \`window.location.reload()\` 
que **recarregará toda a página**. No Storybook, isso pode recarregar a própria página de documentação.
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto exibido durante o carregamento',
      table: {
        category: 'Conteúdo',
        defaultValue: { summary: 'Carregando...' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'modal', 'skeleton'],
      description:
        'Variante do loading: default (tela cheia), modal (overlay) ou skeleton (adaptável)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'default' },
      },
    },
    timeout: {
      control: { type: 'number', min: 1000, max: 30000, step: 1000 },
      description: 'Tempo limite em ms antes de acionar onTimeout ou auto retry',
      table: {
        category: 'Comportamento',
        defaultValue: { summary: '4000' },
      },
    },
    isVisible: {
      control: 'boolean',
      description: 'Controla a visibilidade do componente',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'true' },
      },
    },
    autoRetry: {
      control: 'boolean',
      description:
        '⚠️ ATENÇÃO: Executa window.location.reload() após timeout - irá recarregar a página atual!',
      table: {
        category: 'Retry',
        defaultValue: { summary: 'false' },
      },
    },
    enableRetryFeedback: {
      control: 'boolean',
      description: 'Mostra contador de tentativas e botão de retry manual',
      table: {
        category: 'Retry',
        defaultValue: { summary: 'false' },
      },
    },
    onTimeout: {
      action: 'timeout',
      description: 'Callback executado quando o timeout é atingido',
      table: {
        category: 'Eventos',
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite fechar clicando fora (backdrop click) ou pressionando ESC',
      table: {
        category: 'Interação',
        defaultValue: { summary: 'false' },
      },
    },
    onDismiss: {
      action: 'dismiss',
      description: 'Callback executado quando usuário clica fora ou pressiona ESC',
      table: {
        category: 'Eventos',
      },
    },
    disableEscapeKeyDown: {
      control: 'boolean',
      description: 'Desabilita o fechamento com tecla ESC (apenas quando dismissible=true)',
      table: {
        category: 'Interação',
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRLoading>

// Story padrão - loading em tela cheia (SEM autoRetry para segurança no Storybook)
export const Default: Story = {
  args: {
    text: 'Carregando dados...',
    timeout: 10000, // Timeout longo para não interferir na demonstração
    isVisible: true,
    autoRetry: false, // DESABILITADO para não recarregar o Storybook
    enableRetryFeedback: false,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Loading Padrão (Tela Cheia)

Variante principal que ocupa toda a altura da viewport. Ideal para:
- Carregamento inicial da aplicação
- Transições entre páginas principais
- Operações que requerem atenção total do usuário

**Características:**
- Centralização vertical e horizontal
- Altura mínima de 100vh
- Indicador circular de progresso
- Suporte a acessibilidade com \`role="alert"\`
        `,
      },
    },
  },
}

// Story modal - overlay elegante
export const Modal: Story = {
  args: {
    text: 'Processando...',
    timeout: 6000,
    isVisible: true,
    variant: 'modal',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Loading Modal (Overlay)

Overlay elegante com backdrop blur que não bloqueia completamente a interface. Ideal para:
- Operações de salvamento
- Uploads de arquivos
- Processamento de formulários
- Chamadas API específicas

**Características:**
- Backdrop com blur e transparência
- Card centralizado com sombra elegante
- Animações suaves de entrada (fadeIn + slideUp)
- Z-index otimizado para sobreposições
        `,
      },
    },
  },
}

// Story que demonstra funcionalidade de dismiss (click outside / ESC)
export const DismissibleModal: Story = {
  args: {
    text: 'Clique fora ou pressione ESC para cancelar',
    timeout: 15000, // Timeout longo para permitir demonstração
    isVisible: true,
    variant: 'modal',
    dismissible: true,
    disableEscapeKeyDown: false,
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false)
    const [dismissCount, setDismissCount] = useState(0)

    const handleShow = () => {
      setIsVisible(true)
    }

    const handleDismiss = () => {
      setIsVisible(false)
      setDismissCount((prev) => prev + 1)
      console.log('Loading cancelado pelo usuário!')
    }

    return (
      <GovBRThemeProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'info.light',
              color: 'info.contrastText',
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              ✨ Modal Dismissible (Click Outside / ESC)
            </Typography>
            <Typography variant="body2">
              Demonstra como permitir que o usuário cancele o loading clicando fora da área ou
              pressionando a tecla ESC. Ideal para operações que podem ser canceladas.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button variant="contained" onClick={handleShow} disabled={isVisible}>
              Mostrar Loading Cancelável
            </Button>
            {dismissCount > 0 && (
              <Typography variant="body2" color="success.main">
                ✅ Cancelado {dismissCount} {dismissCount === 1 ? 'vez' : 'vezes'}
              </Typography>
            )}
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
            💡 <strong>Dica:</strong> Quando o loading aparecer, tente:
            <br />
            • Clicar fora da área do loading (backdrop)
            <br />
            • Pressionar a tecla ESC
            <br />• Ambos irão cancelar o loading e chamar onDismiss()
          </Typography>

          <GovBRLoading {...args} isVisible={isVisible} onDismiss={handleDismiss} />
        </Box>
      </GovBRThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
### ✨ Modal Dismissible - Click Outside & ESC Key

Demonstra a funcionalidade de **dismiss** que permite ao usuário cancelar o loading de forma intuitiva.

**🎯 Funcionalidades:**
- **Backdrop Click**: Clicar fora da área do loading cancela a operação
- **ESC Key**: Pressionar tecla ESC cancela o loading  
- **Callback onDismiss**: Permite tratar o cancelamento adequadamente
- **Controle de ESC**: Pode ser desabilitado com \`disableEscapeKeyDown=true\`

**✅ Casos de Uso Ideais:**
- **Uploads de arquivos**: Usuário pode cancelar upload em andamento
- **Busca/Filtros**: Cancelar pesquisas demoradas
- **Operações não-críticas**: Permitir escape em processos longos
- **UX melhorada**: Dar controle ao usuário sobre carregamentos

**⚠️ Quando NÃO usar:**
- Operações críticas que não podem ser interrompidas
- Processos de salvamento importantes
- Autenticação/login em andamento
- Transações financeiras

**📝 Implementação:**
\`\`\`tsx
const [loading, setLoading] = useState(true)

const handleCancel = () => {
  setLoading(false)
  // Cancelar requisição HTTP, limpar estado, etc.
}

<GovBRLoading
  variant="modal"
  dismissible={true}
  onDismiss={handleCancel}
  disableEscapeKeyDown={false} // Permite ESC
/>
\`\`\`

**🚨 Importante:** Sempre implemente a lógica de cancelamento no \`onDismiss\`:
- Cancele requisições HTTP em andamento
- Limpe estados relacionados  
- Registre a ação para analytics se necessário
        `,
      },
    },
  },
}

// Story que demonstra dismiss apenas com backdrop (ESC desabilitado)
export const BackdropOnlyDismiss: Story = {
  args: {
    text: 'Apenas clique fora para cancelar (ESC desabilitado)',
    timeout: 15000,
    isVisible: true,
    variant: 'modal',
    dismissible: true,
    disableEscapeKeyDown: true, // ESC desabilitado
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
      <GovBRThemeProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'warning.light',
              color: 'warning.contrastText',
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              🎯 Backdrop Only Dismiss
            </Typography>
            <Typography variant="body2">
              Configuração onde apenas o clique fora (backdrop) cancela o loading. A tecla ESC está
              desabilitada com <code>disableEscapeKeyDown=true</code>.
            </Typography>
          </Box>

          <Button variant="contained" onClick={() => setIsVisible(true)} disabled={isVisible}>
            Mostrar Loading (só backdrop funciona)
          </Button>

          <Typography variant="body2" color="text.secondary">
            💡 Teste: ESC não funcionará, apenas clique fora da área do loading.
          </Typography>

          <GovBRLoading {...args} isVisible={isVisible} onDismiss={() => setIsVisible(false)} />
        </Box>
      </GovBRThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
### 🎯 Backdrop Only Dismiss (ESC Desabilitado)

Variação onde apenas o clique fora funciona, ESC está desabilitado.

**Configuração:**
\`\`\`tsx
<GovBRLoading
  dismissible={true}
  disableEscapeKeyDown={true} // ESC desabilitado
  onDismiss={handleCancel}
/>
\`\`\`

**Casos de uso:**
- Quando ESC conflita com outros elementos da página
- Aplicações que já usam ESC para outras funções
- Quando você quer controle mais restrito sobre cancelamento
- Interfaces touch/mobile onde ESC não é relevante
        `,
      },
    },
  },
}

// Story skeleton - adaptável ao container
export const Skeleton: Story = {
  args: {
    text: 'Carregando conteúdo...',
    timeout: 5000,
    isVisible: true,
    variant: 'skeleton',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Loading Skeleton (Adaptável)

Loading que se adapta perfeitamente ao container pai. Ideal para:
- Substituição de cards durante carregamento
- Loading em seções específicas da página
- Componentes que aguardam dados
- Áreas de conteúdo dinâmico

**Características:**
- Position absolute que se adapta ao container
- Backdrop semi-transparente
- Altura mínima configurável
- Herda border-radius do container pai
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <Box
          sx={{
            position: 'relative',
            width: 400,
            height: 200,
            border: '1px solid #ddd',
            borderRadius: 2,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ color: 'text.secondary', fontSize: '14px', fontStyle: 'italic' }}>
            Container de demonstração
          </Box>
          <Story />
        </Box>
      </GovBRThemeProvider>
    ),
  ],
}

// Story com sistema de retry habilitado (SEM autoRetry para demonstração segura)
export const WithRetrySystem: Story = {
  args: {
    text: 'Conectando ao servidor...',
    timeout: 5000,
    isVisible: true,
    autoRetry: false, // DESABILITADO para demonstração segura no Storybook
    enableRetryFeedback: true,
    variant: 'modal',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Sistema de Retry Inteligente

Demonstra o sistema completo de retry com feedback visual e tentativas automáticas. 

**⚠️ Nota sobre AutoRetry:**
Esta story tem \`autoRetry=false\` para demonstração segura no Storybook. 
Na aplicação real, \`autoRetry=true\` executará \`window.location.reload()\`.

**Funcionalidades:**
- **Sistema de contagem**: Até 3 tentativas com feedback visual
- **Contador visual**: Mostra progresso das tentativas  
- **Retry manual**: Botão "Tentar novamente" executa \`window.location.reload()\`
- **Verificação de conectividade**: Só tenta retry se online
- **Timeout configurável**: Flexibilidade no tempo de espera

**Fluxo de Demonstração:**
1. Carregamento inicial com timeout de 5 segundos
2. Após timeout, inicia contagem de tentativas
3. Exibe contador "Tentativa X de 3"  
4. Após 3 tentativas, mostra botão "Tentar novamente"
5. ⚠️ **O botão manual irá recarregar a página do Storybook!**
        `,
      },
    },
  },
}

// Story que demonstra o comportamento real de reload (⚠️ USO CUIDADOSO)
export const AutoReloadDemo: Story = {
  args: {
    text: '⚠️ ATENÇÃO: Irá recarregar esta página em 8 segundos!',
    timeout: 8000,
    isVisible: false, // INICIA DESABILITADO por segurança
    autoRetry: true, // ⚠️ ESTE IRÁ RECARREGAR A PÁGINA!
    enableRetryFeedback: true,
    variant: 'modal',
  },
  render: (args) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const [countdown, setCountdown] = useState(8)

    const handleEnableReload = () => {
      setIsEnabled(true)
      // Countdown visual para o usuário saber o que está acontecendo
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return (
      <GovBRThemeProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'error.light',
              color: 'error.contrastText',
              borderRadius: 1,
              border: '2px solid',
              borderColor: 'error.main',
            }}
          >
            <Typography variant="h6" gutterBottom>
              ⚠️ DEMONSTRAÇÃO DE RELOAD REAL
            </Typography>
            <Typography variant="body2" paragraph>
              Esta story demonstra o comportamento real do <code>autoRetry=true</code>.
              <br />
              <strong>ATENÇÃO:</strong> Ao ativar, a página será recarregada em 8 segundos!
            </Typography>
            <Typography variant="body2" color="error.dark">
              Use apenas para testar o comportamento real do componente.
            </Typography>
          </Box>

          {!isEnabled ? (
            <Button
              variant="contained"
              color="error"
              onClick={handleEnableReload}
              sx={{ alignSelf: 'flex-start' }}
            >
              🚨 ATIVAR RELOAD AUTOMÁTICO
            </Button>
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" color="error">
                Recarregando página em {countdown} segundos...
              </Typography>
            </Box>
          )}

          <GovBRLoading {...args} isVisible={isEnabled} />
        </Box>
      </GovBRThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
### ⚠️ Demonstração de Reload Real 

Esta story demonstra o comportamento **real** do \`autoRetry=true\`, que executa \`window.location.reload()\`.

**⚠️ ATENÇÃO - USE COM CUIDADO:**
- Clique em "ATIVAR RELOAD AUTOMÁTICO" irá **recarregar esta página** em 8 segundos
- Ideal para testar o comportamento real em ambiente de desenvolvimento
- Em produção, use este recurso para casos onde o reload da aplicação é desejado

**Comportamento:**
1. Timer de 8 segundos é iniciado
2. Componente mostra loading com timeout
3. Após timeout, executa \`window.location.reload()\`
4. **A página inteira será recarregada**

**Casos de uso reais:**
- Falha de conectividade que requer reinicialização da aplicação
- Estados corrompidos que precisam de reload para recuperar
- Atualizações de aplicação que requerem refresh
- Recovery automático de erros críticos
        `,
      },
    },
  },
}

// Story interativa para demonstrar controle de visibilidade
export const InteractiveDemo: Story = {
  args: {
    text: 'Operação em andamento...',
    timeout: 8000,
    variant: 'modal',
    enableRetryFeedback: true,
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false)
    const [variant, setVariant] = useState<'default' | 'modal' | 'skeleton'>('modal')
    const [dismissible, setDismissible] = useState(false)
    const [disableESC, setDisableESC] = useState(false)

    return (
      <GovBRThemeProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'warning.light',
              color: 'warning.contrastText',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <Typography variant="body2">
              <strong>Nota:</strong> Esta demo tem <code>autoRetry=false</code> para segurança. Para
              testar reload automático, use a story &quot;AutoReloadDemo&quot; com cuidado.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" onClick={() => setIsVisible(!isVisible)} size="small">
              {isVisible ? 'Ocultar' : 'Mostrar'} Loading
            </Button>

            <Button
              variant="outlined"
              onClick={() => setVariant('default')}
              size="small"
              disabled={variant === 'default'}
            >
              Default
            </Button>

            <Button
              variant="outlined"
              onClick={() => setVariant('modal')}
              size="small"
              disabled={variant === 'modal'}
            >
              Modal
            </Button>

            <Button
              variant="outlined"
              onClick={() => setVariant('skeleton')}
              size="small"
              disabled={variant === 'skeleton'}
            >
              Skeleton
            </Button>
          </Box>

          {/* Controles para dismiss - apenas no modal */}
          {variant === 'modal' && (
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant={dismissible ? 'contained' : 'outlined'}
                onClick={() => setDismissible(!dismissible)}
                size="small"
                color="secondary"
              >
                {dismissible ? 'Dismissible ON' : 'Dismissible OFF'}
              </Button>

              {dismissible && (
                <Button
                  variant={disableESC ? 'contained' : 'outlined'}
                  onClick={() => setDisableESC(!disableESC)}
                  size="small"
                  color="warning"
                >
                  {disableESC ? 'ESC Desabilitado' : 'ESC Habilitado'}
                </Button>
              )}
            </Box>
          )}

          <Box
            sx={{
              position: 'relative',
              minHeight: variant === 'skeleton' ? 300 : 200,
              border: variant === 'skeleton' ? '2px dashed #ccc' : 'none',
              borderRadius: variant === 'skeleton' ? 2 : 0,
              backgroundColor: variant === 'skeleton' ? '#f9f9f9' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {variant === 'skeleton' && !isVisible && (
              <Box sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                Container para demonstrar variante Skeleton
              </Box>
            )}

            <GovBRLoading
              {...args}
              isVisible={isVisible}
              variant={variant}
              dismissible={variant === 'modal' ? dismissible : false}
              disableEscapeKeyDown={disableESC}
              onDismiss={() => {
                setIsVisible(false)
                console.log('Loading cancelado pelo usuário!')
              }}
              onTimeout={() => {
                console.log('Timeout atingido!')
                // Na prática, aqui você faria algo como mostrar erro ou tentar novamente
              }}
            />
          </Box>
        </Box>
      </GovBRThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
### Demo Interativo

Demonstração interativa que permite testar todas as variantes e funcionalidades do componente em tempo real.

**⚠️ Modo Seguro:**
Esta demo tem \`autoRetry=false\` para não recarregar o Storybook durante a demonstração.

**Controles disponíveis:**
- **Mostrar/Ocultar**: Controla a visibilidade do loading
- **Botões de variante**: Alterna entre Default, Modal e Skeleton  
- **✨ Controles de Dismiss** (apenas Modal): Ativa/desativa cancelamento
  - **Dismissible ON/OFF**: Habilita clique fora + tecla ESC
  - **ESC Habilitado/Desabilitado**: Controla apenas a tecla ESC
- **Timeout configurado**: 8 segundos para demonstrar contador de retry
- **Sistema de retry**: Mostra tentativas sem executar reload

**Experimente:**
1. Clique em "Mostrar Loading" para ativar
2. Troque entre as diferentes variantes
3. **No Modal**: Teste os controles de dismiss
   - Ative "Dismissible ON" e tente clicar fora ou pressionar ESC
   - Desabilite ESC e veja que só o clique fora funciona
4. Aguarde o timeout para ver o contador de tentativas
5. Observe as diferenças visuais e comportamentais de cada variante
6. **Para testar reload real, use a story "AutoReloadDemo"**
        `,
      },
    },
  },
}

// Story com timeout personalizado
export const CustomTimeout: Story = {
  args: {
    text: 'Operação demorada...',
    timeout: 2000, // Timeout menor para demonstração
    isVisible: true,
    variant: 'modal',
    autoRetry: false,
    enableRetryFeedback: true,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Timeout Personalizado

Demonstra o uso de timeout customizado (2 segundos) com feedback de retry manual.

**Configuração:**
- Timeout reduzido para 2 segundos (demonstração)
- Retry automático desabilitado
- Feedback de retry habilitado
- Botão manual aparece após esgotar tentativas

**Ideal para:**
- Operações com tempo limite conhecido
- Testes de timeout em desenvolvimento
- Demonstração do sistema de retry
        `,
      },
    },
  },
}

// Story para diferentes textos e mensagens
export const DifferentMessages: Story = {
  args: {
    text: 'Sincronizando dados com o servidor...',
    timeout: 10000,
    isVisible: true,
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: `
### Mensagens Personalizadas

Exemplos de diferentes textos para contextos específicos:

**Sugestões de mensagens:**
- "Carregando dados..." (genérico)
- "Sincronizando com servidor..." (sync)
- "Processando arquivos..." (upload)
- "Validando informações..." (validação)
- "Conectando ao sistema..." (conexão)
- "Salvando alterações..." (save)
- "Gerando relatório..." (processamento)

**Dicas:**
- Use verbos no gerúndio para indicar ação em andamento
- Seja específico sobre o que está acontecendo
- Evite mensagens muito longas
- Considere o contexto da operação
        `,
      },
    },
  },
}

// Story que demonstra uso recomendado com onTimeout customizado (SEM reload)
export const RecommendedUsage: Story = {
  args: {
    text: 'Carregando dados...',
    timeout: 6000,
    isVisible: true,
    autoRetry: false,
    enableRetryFeedback: false,
    variant: 'modal',
  },
  render: (args) => {
    const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading')

    const handleTimeout = () => {
      setStatus('error')
      console.log('Timeout - mostrando erro ao usuário')
    }

    const handleRetry = () => {
      setStatus('loading')
      console.log('Usuário clicou em tentar novamente')
    }

    const handleSuccess = () => {
      setStatus('success')
      console.log('Operação concluída com sucesso')
    }

    return (
      <GovBRThemeProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: 'info.light',
              color: 'info.contrastText',
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" gutterBottom>
              ✅ Uso Recomendado (Sem Reload Automático)
            </Typography>
            <Typography variant="body2">
              Demonstra como usar o componente com <code>onTimeout</code> personalizado para
              controlar o que acontece após o timeout, sem reload automático da página.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="outlined" onClick={handleRetry} size="small">
              Simular Loading
            </Button>
            <Button variant="outlined" onClick={handleSuccess} size="small">
              Simular Sucesso
            </Button>
          </Box>

          {status === 'loading' && <GovBRLoading {...args} onTimeout={handleTimeout} />}

          {status === 'error' && (
            <Box
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: 'error.light',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" color="error.dark" gutterBottom>
                Ops! Algo deu errado
              </Typography>
              <Typography variant="body2" paragraph>
                Não foi possível carregar os dados. Verifique sua conexão e tente novamente.
              </Typography>
              <Button variant="contained" onClick={handleRetry}>
                Tentar Novamente
              </Button>
            </Box>
          )}

          {status === 'success' && (
            <Box
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: 'success.light',
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" color="success.dark" gutterBottom>
                ✅ Dados carregados com sucesso!
              </Typography>
              <Typography variant="body2">A operação foi concluída sem problemas.</Typography>
            </Box>
          )}
        </Box>
      </GovBRThemeProvider>
    )
  },
  parameters: {
    docs: {
      description: {
        story: `
### ✅ Uso Recomendado para a Maioria dos Casos

Esta story demonstra a **forma recomendada** de usar o GovBRLoading na maioria das situações:

**Características:**
- \`autoRetry={false}\` - Não recarrega a página automaticamente
- \`onTimeout\` personalizado - Controle total sobre o que acontece após timeout
- Estados de erro e sucesso - Interface mais amigável para o usuário
- Feedback claro - Usuário entende o que aconteceu e pode agir

**Vantagens desta abordagem:**
- **Controle total**: Você decide o que fazer no timeout
- **UX melhor**: Mensagens de erro claras em vez de reload abrupto
- **Flexibilidade**: Pode tentar novamente, mostrar erro, redirecionar, etc.
- **Debugging**: Mais fácil de debugar e testar

**Quando usar \`autoRetry=true\`:**
- Erros críticos de infraestrutura
- Estados corrompidos que só se resolvem com refresh
- Atualizações de aplicação que requerem reload
- Casos onde o reload é realmente a melhor solução

**Implementação típica:**
\`\`\`tsx
const [loading, setLoading] = useState(true)

const handleTimeout = () => {
  setLoading(false)
  // Mostrar mensagem de erro ou tentar novamente
}

<GovBRLoading 
  isVisible={loading}
  onTimeout={handleTimeout}
  autoRetry={false} // Recomendado
/>
\`\`\`
        `,
      },
    },
  },
}
