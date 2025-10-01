import type { Meta, StoryObj } from '@storybook/react'

import { GovBRSwitch } from './index'

const meta: Meta<typeof GovBRSwitch> = {
  title: 'Components/GovBRSwitch',
  component: GovBRSwitch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    // --- Configuração ---
    strictgovbr: {
      control: 'boolean',
      description:
        'Ativa modo estrito com renderização HTML puro e classes CSS oficiais do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto do rótulo que descreve a função do switch - exibido ao lado do controle',
      table: {
        category: 'Conteúdo',
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Desabilita o switch impedindo alterações de estado e aplicando estilos visuais apropriados',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Estado do switch - true quando ligado/ativo, false quando desligado/inativo',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },

    // --- Layout ---
    labelPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      description:
        'Posicionamento do rótulo: top (acima), bottom (abaixo), start (esquerda), end (direita)',
      table: {
        category: 'Layout',
        defaultValue: { summary: 'end' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRSwitch - Controle Liga/Desliga Governamental

Componente de switch (alternador) padronizado para ativação/desativação de funcionalidades conforme GovBR Design System.

### Características Principais:
- 🎨 **Modo Duplo**: Suporte a MUI com tema personalizado ou HTML puro com classes GovBR-DS
- 🔄 **Estados Binários**: Controle claro de ligado/desligado com feedback visual imediato
- ♿ **Acessibilidade WCAG**: Suporte completo a teclado, screen readers e navegação assistiva
- 🎭 **Estados Visuais**: Normal, hover, focus, checked/unchecked, disabled
- 📍 **Layout Adaptável**: Posicionamento flexível do rótulo para diferentes layouts
- 🏛️ **Padrões GovBR**: Implementação fiel às diretrizes de interface governamental
- ⚡ **Performance**: Transições suaves e responsivas para melhor experiência do usuário

### Casos de Uso Típicos:
- Ativação/desativação de notificações em sistemas governamentais
- Controles de privacidade e preferências em painéis administrativos
- Habilitação de funcionalidades opcionais em formulários
- Configurações de sistema em aplicações governamentais
- Controles de exibição e filtros em dashboards administrativos
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRSwitch>

// --- Estórias do Modo Padrão (MUI) ---

export const MuiDefault: Story = {
  name: 'Padrão (MUI): Default',
  args: {
    label: 'Switch Padrão (MUI)',
    checked: true,
  },
}

export const MuiLabelPlacement: Story = {
  name: 'Padrão (MUI): Posição do Rótulo',
  args: {
    label: 'Rótulo no início',
    labelPlacement: 'start',
    checked: true,
  },
}

export const MuiColors: Story = {
  name: 'Padrão (MUI): Cores',
  args: {
    label: 'Switch Colorido (MUI)',
    checked: true,
    switchProps: {
      color: 'secondary',
    },
  },
}

// --- Estórias do Modo Estrito (GovBR-DS) ---

export const StrictDefault: Story = {
  name: 'Estrito (GovBR): Default',
  args: {
    strictgovbr: true,
    label: 'Switch Estrito (Gov.br)',
    id: 'strict-switch-1',
    checked: true,
  },
}

export const StrictDisabled: Story = {
  name: 'Estrito (GovBR): Desabilitado',
  args: {
    strictgovbr: true,
    label: 'Switch Desabilitado',
    id: 'strict-switch-2',
    disabled: true,
  },
}
