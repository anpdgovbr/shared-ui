import SearchIcon from '@mui/icons-material/Search' // Import SearchIcon
import type { Meta, StoryObj } from '@storybook/react'

import { GovBRInput } from './index'

const meta: Meta<typeof GovBRInput> = {
  title: 'Components/GovBRInput',
  component: GovBRInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa modo estrito com renderização HTML puro e classes CSS do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Rótulo do campo de entrada - texto descritivo exibido acima do input',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo edição e aplicando estilos visuais apropriados',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de exemplo exibido quando o campo está vazio para orientar o usuário',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description:
        'Estilo visual do campo: outlined (contorno), filled (preenchido), standard (linha inferior)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'outlined' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Cor semântica que afeta bordas e estados de foco conforme paleta GovBR-DS',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'primary' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de auxílio exibido abaixo do campo para orientações adicionais',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Ativa estado de erro com bordas vermelhas e cor de texto apropriada',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    govbrSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description:
        'Tamanho do campo conforme especificações GovBR-DS: small (32px), medium (40px), large (48px)',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'medium' },
      },
    },
    status: {
      control: 'select',
      options: ['success', 'danger', 'info', 'warning'],
      description: 'Estado visual para feedback imediato - aplica cores e ícones apropriados',
      table: {
        category: 'Estado',
        type: { summary: 'success | danger | info | warning' },
      },
    },
    feedbackMessage: {
      control: 'text',
      description: 'Mensagem de feedback personalizada exibida no modo estrito GovBR',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    highlight: {
      control: 'boolean',
      description:
        'Aplica destaque visual especial no campo - usado para campos importantes ou em foco',
      table: {
        category: 'Aparência',
        defaultValue: { summary: 'false' },
      },
    },
    inline: {
      control: 'boolean',
      description: 'Posiciona o rótulo e campo na mesma linha horizontalmente (modo estrito)',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'false' },
      },
    },
    clearBlock: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg', 'xl'],
      description:
        'Breakpoint responsivo para limpeza de float - controla layout em diferentes telas',
      table: {
        category: 'Layout',
        type: { summary: 'sm | md | lg | xl' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRInput - Campo de Entrada Governamental

Componente de entrada de texto padronizado conforme diretrizes do GovBR Design System, oferecendo flexibilidade entre modo MUI e HTML puro.

### Características Principais:
- 🎨 **Modo Duplo**: Suporte a MUI com tema personalizado ou HTML puro com classes GovBR-DS
- ♿ **Acessibilidade Completa**: Labels associados, navegação por teclado, suporte a screen readers
- 🎭 **Estados Visuais**: Normal, hover, focus, error, disabled, success, warning
- 📏 **Tamanhos Responsivos**: Small (32px), Medium (40px), Large (48px)
- 🔧 **Flexibilidade**: Suporte a ícones, helper text, validation feedback
- 🏛️ **Compliance**: Segue rigorosamente padrões de acessibilidade WCAG 2.1
- ⚡ **Performance**: Otimizado para formulários grandes com debounce e validation

### Casos de Uso:
- Formulários governamentais e administrativos  
- Campos de busca e filtros
- Entrada de dados pessoais e documentos
- Sistemas de cadastro e autenticação
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRInput>

// --- Estórias do Modo Padrão (MUI) ---

export const MuiDefault: Story = {
  name: 'Padrão (MUI): Default',
  args: {
    label: 'Nome (MUI)',
    placeholder: 'Digite seu nome completo',
    fullWidth: true,
  },
}

export const MuiWithAdornments: Story = {
  name: 'Padrão (MUI): Com Ícones',
  args: {
    label: 'Buscar (MUI)',
    fullWidth: true,
    startIcon: <SearchIcon />,
    endButtonIcon: <SearchIcon />,
    onEndButtonClick: () => alert('Busca clicada!'),
  },
}

export const MuiWithError: Story = {
  name: 'Padrão (MUI): Com Erro',
  args: {
    label: 'Email (MUI)',
    fullWidth: true,
    error: true,
    helperText: 'Por favor, insira um email válido.',
  },
}

// --- Estórias do Modo Estrito (GovBR-DS) ---

export const StrictDefault: Story = {
  name: 'Estrito (GovBR): Default',
  args: {
    strictgovbr: true,
    label: 'Nome (Estrito)',
    placeholder: 'Digite seu nome completo',
  },
}

export const StrictWithError: Story = {
  name: 'Estrito (GovBR): Com Erro',
  args: {
    strictgovbr: true,
    label: 'CPF (Estrito)',
    placeholder: 'Digite seu CPF',
    error: true,
    feedbackMessage: 'CPF inválido. Verifique os dados digitados.',
  },
}

export const StrictWithSuccess: Story = {
  name: 'Estrito (GovBR): Com Sucesso',
  args: {
    strictgovbr: true,
    label: 'Email (Estrito)',
    status: 'success',
    feedbackMessage: 'Email válido!',
    value: 'usuario@exemplo.com',
  },
}

export const StrictWithWarning: Story = {
  name: 'Estrito (GovBR): Com Aviso',
  args: {
    strictgovbr: true,
    label: 'Senha (Estrito)',
    type: 'password',
    placeholder: 'Digite sua senha',
    status: 'warning',
    feedbackMessage: 'Senha fraca. Considere adicionar números e símbolos.',
  },
}

export const StrictWithInfo: Story = {
  name: 'Estrito (GovBR): Com Informação',
  args: {
    strictgovbr: true,
    label: 'Código de verificação (Estrito)',
    placeholder: 'Digite o código de 6 dígitos',
    status: 'info',
    feedbackMessage: 'Código enviado para seu email',
  },
}

export const StrictDisabled: Story = {
  name: 'Estrito (GovBR): Desabilitado',
  args: {
    strictgovbr: true,
    label: 'Campo desabilitado (Estrito)',
    placeholder: 'Este campo está desabilitado',
    disabled: true,
  },
}

export const StrictHighlighted: Story = {
  name: 'Estrito (GovBR): Destacado',
  args: {
    strictgovbr: true,
    label: 'Campo destacado (Estrito)',
    placeholder: 'Este campo está destacado',
    highlight: true,
  },
}

export const StrictInline: Story = {
  name: 'Estrito (GovBR): Em Linha',
  args: {
    strictgovbr: true,
    label: 'Buscar (Estrito):',
    placeholder: 'Digite sua busca',
    inline: true,
  },
}

export const StrictWithStartIcon: Story = {
  name: 'Estrito (GovBR): Com Ícone Inicial',
  args: {
    strictgovbr: true,
    label: 'Buscar (Estrito)',
    placeholder: 'Digite sua busca',
    startIcon: <SearchIcon />,
  },
}

export const StrictWithEndButton: Story = {
  name: 'Estrito (GovBR): Com Botão Final',
  args: {
    strictgovbr: true,
    label: 'Campo com botão (Estrito)',
    placeholder: 'Digite algo aqui',
    value: 'Conteúdo para limpar',
    endButtonIcon: <SearchIcon />,
    onEndButtonClick: () => alert('Botão clicado!'),
  },
}

export const StrictSizeSmall: Story = {
  name: 'Estrito (GovBR): Tamanho Small',
  args: {
    strictgovbr: true,
    label: 'Campo Small (32px altura)',
    placeholder: 'Input tamanho small',
    govbrSize: 'small',
  },
}

export const StrictSizeMedium: Story = {
  name: 'Estrito (GovBR): Tamanho Medium',
  args: {
    strictgovbr: true,
    label: 'Campo Medium (40px altura)',
    placeholder: 'Input tamanho medium',
    govbrSize: 'medium',
  },
}

export const StrictSizeLarge: Story = {
  name: 'Estrito (GovBR): Tamanho Large',
  args: {
    strictgovbr: true,
    label: 'Campo Large (48px altura)',
    placeholder: 'Input tamanho large',
    govbrSize: 'large',
  },
}

export const MuiSizeSmall: Story = {
  name: 'Padrão (MUI): Tamanho Small',
  args: {
    label: 'Campo Small MUI',
    placeholder: 'Input tamanho small',
    govbrSize: 'small' as const,
    fullWidth: true,
  },
}

export const MuiSizeMedium: Story = {
  name: 'Padrão (MUI): Tamanho Medium',
  args: {
    label: 'Campo Medium MUI',
    placeholder: 'Input tamanho medium',
    govbrSize: 'medium' as const,
    fullWidth: true,
  },
}

export const MuiSizeLarge: Story = {
  name: 'Padrão (MUI): Tamanho Large',
  args: {
    label: 'Campo Large MUI',
    placeholder: 'Input tamanho large',
    govbrSize: 'large' as const,
    fullWidth: true,
  },
}

export const SizeComparison: Story = {
  name: '🔍 Comparação de Tamanhos',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Modo Estrito (GovBR-DS)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small (32px)"
            placeholder="Altura esperada: 32px"
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium (40px)"
            placeholder="Altura esperada: 40px"
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large (48px)"
            placeholder="Altura esperada: 48px"
            govbrSize="large"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Modo Padrão (MUI)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            label="Small (32px)"
            placeholder="Altura esperada: 32px"
            govbrSize="small"
            fullWidth
          />
          <GovBRInput
            label="Medium (40px)"
            placeholder="Altura esperada: 40px"
            govbrSize="medium"
            fullWidth
          />
          <GovBRInput
            label="Large (48px)"
            placeholder="Altura esperada: 48px"
            govbrSize="large"
            fullWidth
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Comparação lado a lado dos três tamanhos disponíveis em ambos os modos.

**Dimensões Esperadas (GovBR-DS):**
- Small: 32px de altura
- Medium: 40px de altura  
- Large: 48px de altura

Use o DevTools do navegador para inspecionar e verificar:
- Altura total do input
- Padding interno (vertical e horizontal)
- Border width
- Line height do texto
        `,
      },
    },
  },
}

export const SizeWithContent: Story = {
  name: '🔍 Tamanhos com Conteúdo',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Com Texto Preenchido</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small"
            value="Texto de exemplo para verificar padding"
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium"
            value="Texto de exemplo para verificar padding"
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large"
            value="Texto de exemplo para verificar padding"
            govbrSize="large"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Visualização dos tamanhos com texto preenchido para verificar se o conteúdo está bem posicionado verticalmente.

**Pontos de verificação:**
- O texto está centralizado verticalmente?
- O padding horizontal é consistente?
- O texto não está cortado ou muito próximo das bordas?
        `,
      },
    },
  },
}

export const SizeWithIcons: Story = {
  name: '🔍 Tamanhos com Ícones',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Com Ícone Inicial</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small"
            placeholder="Com ícone"
            startIcon={<SearchIcon />}
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium"
            placeholder="Com ícone"
            startIcon={<SearchIcon />}
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large"
            placeholder="Com ícone"
            startIcon={<SearchIcon />}
            govbrSize="large"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Com Botão Final</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small"
            value="Com botão"
            endButtonIcon={<SearchIcon />}
            onEndButtonClick={() => {}}
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium"
            value="Com botão"
            endButtonIcon={<SearchIcon />}
            onEndButtonClick={() => {}}
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large"
            value="Com botão"
            endButtonIcon={<SearchIcon />}
            onEndButtonClick={() => {}}
            govbrSize="large"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Verificação de alinhamento de ícones e botões em diferentes tamanhos.

**Pontos de verificação:**
- Os ícones estão centralizados verticalmente?
- O espaçamento entre ícone e texto é adequado?
- O botão final mantém proporções consistentes?
- Os ícones têm tamanho apropriado para cada variação?
        `,
      },
    },
  },
}

export const SizeWithStates: Story = {
  name: '🔍 Tamanhos com Estados',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Estado de Erro</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small"
            error
            feedbackMessage="Erro no campo small"
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium"
            error
            feedbackMessage="Erro no campo medium"
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large"
            error
            feedbackMessage="Erro no campo large"
            govbrSize="large"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Estado de Sucesso</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput
            strictgovbr
            label="Small"
            status="success"
            feedbackMessage="Sucesso no campo small"
            value="Válido"
            govbrSize="small"
          />
          <GovBRInput
            strictgovbr
            label="Medium"
            status="success"
            feedbackMessage="Sucesso no campo medium"
            value="Válido"
            govbrSize="medium"
          />
          <GovBRInput
            strictgovbr
            label="Large"
            status="success"
            feedbackMessage="Sucesso no campo large"
            value="Válido"
            govbrSize="large"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', color: '#1351B4' }}>Estado Desabilitado</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <GovBRInput strictgovbr label="Small" disabled value="Desabilitado" govbrSize="small" />
          <GovBRInput strictgovbr label="Medium" disabled value="Desabilitado" govbrSize="medium" />
          <GovBRInput strictgovbr label="Large" disabled value="Desabilitado" govbrSize="large" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Verificação de consistência de tamanhos em diferentes estados visuais.

**Pontos de verificação:**
- A altura do campo permanece constante em todos os estados?
- As bordas de erro/sucesso não aumentam o tamanho total?
- O estado desabilitado mantém as mesmas dimensões?
- As mensagens de feedback estão bem posicionadas?
        `,
      },
    },
  },
}

export const StrictWithClearBlock: Story = {
  name: 'Estrito (GovBR): Com Limpeza Automática',
  args: {
    strictgovbr: true,
    label: 'Campo com limpeza automática (Estrito)',
    placeholder: 'Digite algo',
    clearBlock: 'md',
  },
}

export const PaddingDebug: Story = {
  name: '🐛 Debug: Padding Horizontal',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', color: '#D04F4F' }}>
          ⚠️ Verificação de Padding Horizontal
        </h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Use DevTools para inspecionar o padding dos inputs. Valores esperados:
        </p>
        <ul style={{ marginBottom: '1rem', color: '#666', paddingLeft: '2rem' }}>
          <li>
            <strong>Small:</strong> 8px vertical, 8px horizontal
          </li>
          <li>
            <strong>Medium:</strong> 12px vertical, 16px horizontal
          </li>
          <li>
            <strong>Large:</strong> 16px vertical, 12px horizontal
          </li>
        </ul>
      </div>

      <div style={{ border: '2px dashed #1351B4', padding: '1rem', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '1rem', color: '#1351B4' }}>Modo MUI</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Small - Deve ter 8px de padding horizontal
            </p>
            <GovBRInput label="Small" value="Inspecione este campo" govbrSize="small" fullWidth />
          </div>

          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Medium - Deve ter 16px de padding horizontal
            </p>
            <GovBRInput label="Medium" value="Inspecione este campo" govbrSize="medium" fullWidth />
          </div>

          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Large - Deve ter 12px de padding horizontal
            </p>
            <GovBRInput label="Large" value="Inspecione este campo" govbrSize="large" fullWidth />
          </div>
        </div>
      </div>

      <div style={{ border: '2px dashed #168821', padding: '1rem', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '1rem', color: '#168821' }}>Modo Estrito (GovBR-DS)</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Small - Classe: .small
            </p>
            <GovBRInput strictgovbr label="Small" value="Inspecione este campo" govbrSize="small" />
          </div>

          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Medium - Classe: .medium
            </p>
            <GovBRInput
              strictgovbr
              label="Medium"
              value="Inspecione este campo"
              govbrSize="medium"
            />
          </div>

          <div>
            <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
              Large - Classe: .large
            </p>
            <GovBRInput strictgovbr label="Large" value="Inspecione este campo" govbrSize="large" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
## 🐛 Story de Debug para Padding

Esta story foi criada para facilitar a inspeção visual e técnica dos paddings horizontais dos inputs.

### Como usar:
1. Abra o DevTools (F12)
2. Clique com botão direito no campo de input
3. Selecione "Inspect Element"
4. Na aba "Computed" ou "Layout", verifique os valores de padding

### O que foi corrigido:
- **Antes:** \`govbrSize\` não era mapeado para \`size\` do MUI, sempre usando padding padrão (12px horizontal)
- **Depois:** \`govbrSize="small"\` agora mapeia corretamente para \`size="small"\` do MUI com 8px de padding horizontal

### Nota Técnica:
O MUI TextField não suporta nativamente \`size="large"\`. Para o tamanho large, aplicamos um padding customizado via \`sx\`.
        `,
      },
    },
  },
}
