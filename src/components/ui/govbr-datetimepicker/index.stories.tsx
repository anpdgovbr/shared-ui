import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { Meta, StoryObj } from '@storybook/react'

import { GovBRDateTimePicker } from './index'

const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'Components/GovBRDateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 3, maxWidth: '600px' }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    pickerType: {
      control: 'select',
      options: ['date', 'time', 'date-time'],
      description:
        'Tipo de seletor de data/hora: date (apenas data), time (apenas hora) ou date-time (data e hora)',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'date' },
      },
    },
    label: {
      control: 'text',
      description: 'Rótulo descritivo exibido acima do campo',
      table: {
        category: 'Conteúdo',
      },
    },
    value: {
      control: false,
      description: 'Valor atual do campo (Dayjs object)',
      table: {
        category: 'Estado',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback executado quando o valor é alterado',
      table: {
        category: 'Eventos',
      },
    },
    format: {
      control: 'text',
      description: 'Formato customizado de exibição da data/hora (padrão: DD/MM/YYYY para date)',
      table: {
        category: 'Formatação',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o campo impedindo interação do usuário',
      table: {
        category: 'Estado',
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marca o campo como obrigatório com indicador visual',
      table: {
        category: 'Validação',
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Indica estado de erro com estilização apropriada',
      table: {
        category: 'Validação',
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar ou mensagem de erro exibida abaixo do campo',
      table: {
        category: 'Conteúdo',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## GovBRDateTimePicker - Componente de Seleção de Data e Hora

Componente de seletor de data e hora totalmente localizado para pt-BR, seguindo padrões brasileiros de formatação e UX.

### Características Principais:
- 📅 **Formato Brasileiro**: Padrão DD/MM/YYYY para datas, conforme costume nacional
- 🌐 **Localização pt-BR**: Interface completamente em português brasileiro
- ⏰ **Três Modos**: Date (data), Time (hora) e DateTime (data + hora)
- 🎨 **Visual Consistente**: Integrado ao GovBR Design System via tema MUI
- ♿ **Acessibilidade**: Navegação por teclado, labels apropriados e suporte a leitores de tela
- 🔧 **Flexível**: Suporte a validação, estados de erro, datas mín/máx e customização via slotProps
- ⚡ **Otimizado**: State management interno com fallbacks inteligentes
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>

export const Default: Story = {
  args: {
    pickerType: 'date',
    label: 'Selecione uma data',
  },
  parameters: {
    docs: {
      description: {
        story: 'Seletor de data padrão com formato brasileiro DD/MM/YYYY',
      },
    },
  },
}

export const TimePicker: Story = {
  args: {
    pickerType: 'time',
    label: 'Selecione um horário',
  },
  parameters: {
    docs: {
      description: {
        story: 'Seletor de hora no formato 24h (HH:mm)',
      },
    },
  },
}

export const DateTimePicker: Story = {
  args: {
    pickerType: 'date-time',
    label: 'Selecione data e horário',
  },
  parameters: {
    docs: {
      description: {
        story: 'Seletor combinado de data e hora (DD/MM/YYYY HH:mm)',
      },
    },
  },
}

export const WithValidation: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <GovBRDateTimePicker pickerType="date" label="Campo obrigatório" required />
      <GovBRDateTimePicker
        pickerType="date"
        label="Campo com erro"
        error
        helperText="Data inválida. Por favor, selecione uma data válida."
      />
      <GovBRDateTimePicker
        pickerType="date"
        label="Campo desabilitado"
        disabled
        helperText="Este campo está desabilitado temporariamente"
      />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplos de validação: campo obrigatório, erro e desabilitado',
      },
    },
  },
}

export const GovernmentExample: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
        Protocolo de Processo - ANPD
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Preencha os dados temporais do protocolo
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <GovBRDateTimePicker
          pickerType="date"
          label="Data de Abertura"
          required
          helperText="Selecione a data de abertura do processo"
        />

        <GovBRDateTimePicker
          pickerType="time"
          label="Horário de Protocolo"
          helperText="Hora em que o processo foi protocolado"
        />

        <GovBRDateTimePicker
          pickerType="date-time"
          label="Prazo de Resposta"
          required
          helperText="Data e hora limite para resposta ao processo"
        />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo realista de uso em sistema governamental da ANPD',
      },
    },
  },
}
