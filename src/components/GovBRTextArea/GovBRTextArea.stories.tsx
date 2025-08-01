import type { Meta, StoryObj } from '@storybook/react'
import { GovBRTextArea } from './GovBRTextArea'

const meta: Meta<typeof GovBRTextArea> = {
  title: 'GovBR/TextArea',
  component: GovBRTextArea,
  tags: ['autodocs'],
  argTypes: {
    govbrSize: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Define o tamanho do textarea.',
    },
    status: {
      control: 'radio',
      options: ['success', 'danger', 'info', 'warning'],
      description: 'Define o status visual do textarea.',
    },
    label: {
      control: 'text',
      description: 'Rótulo do campo de textarea.',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder do textarea.',
    },
    feedbackMessage: {
      control: 'text',
      description: 'Mensagem de feedback exibida abaixo do textarea.',
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar exibido abaixo do textarea.',
    },
    maxLength: {
      control: 'number',
      description: 'Número máximo de caracteres permitidos.',
    },
    showCharacterCount: {
      control: 'boolean',
      description: 'Exibe o contador de caracteres.',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o textarea está desabilitado.',
    },
    highlight: {
      control: 'boolean',
      description: 'Destaca visualmente o textarea.',
    },
    inline: {
      control: 'boolean',
      description: 'Exibe o textarea em linha com o rótulo.',
    },
    darkMode: {
      control: 'boolean',
      description: 'Aplica o tema escuro ao componente.',
    },
    rows: {
      control: 'number',
      description: 'Número de linhas visíveis no textarea.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  args: {
    label: 'Label',
    placeholder: 'Exemplo de textarea simples',
    govbrSize: 'medium',
    rows: 4,
    helperText: 'Texto auxiliar ao preenchimento.',
  },
}

export const Pequeno: Story = {
  args: {
    ...Padrao.args,
    govbrSize: 'small',
    label: 'Textarea Pequeno',
    helperText: 'Exemplo com tamanho pequeno',
  },
}

export const Grande: Story = {
  args: {
    ...Padrao.args,
    govbrSize: 'large',
    label: 'Textarea Grande',
    helperText: 'Exemplo com tamanho grande',
  },
}

export const ComLimiteDeCaracteres: Story = {
  args: {
    label: 'Mensagem com limite',
    placeholder: 'Digite sua mensagem...',
    maxLength: 500,
    showCharacterCount: true,
    govbrSize: 'medium',
    rows: 4,
  },
}

export const SemLimiteComContador: Story = {
  args: {
    label: 'Comentários sem limite',
    placeholder: 'Digite seus comentários...',
    showCharacterCount: true,
    govbrSize: 'medium',
    rows: 4,
  },
}

export const StatusSucesso: Story = {
  args: {
    label: 'Label',
    placeholder: 'Exemplo de textarea com sucesso',
    status: 'success',
    feedbackMessage: 'Campo correto',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const StatusErro: Story = {
  args: {
    label: 'Label',
    placeholder: 'Exemplo de textarea com erro',
    status: 'danger',
    feedbackMessage: 'Campo com erro',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const StatusAviso: Story = {
  args: {
    label: 'Label',
    placeholder: 'Exemplo de textarea desabilitado',
    disabled: true,
    feedbackMessage: 'Campo desabilitado',
    status: 'warning',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const StatusInfo: Story = {
  args: {
    label: 'Label',
    placeholder: 'Exemplo de textarea com informação',
    status: 'info',
    feedbackMessage: 'Esta informação ajudará no processamento',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const ValidacaoEEstados: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '250px' }}>
        <GovBRTextArea
          label="Label"
          placeholder="Exemplo de textarea com sucesso"
          status="success"
          feedbackMessage="Campo correto"
          rows={4}
        />
      </div>
      <div style={{ flex: '1', minWidth: '250px' }}>
        <GovBRTextArea
          label="Label"
          placeholder="Exemplo de textarea com erro"
          status="danger"
          feedbackMessage="Campo com erro"
          rows={4}
        />
      </div>
      <div style={{ flex: '1', minWidth: '250px' }}>
        <GovBRTextArea
          label="Label"
          placeholder="Exemplo de textarea desabilitado"
          disabled
          feedbackMessage="Campo desabilitado"
          status="warning"
          rows={4}
        />
      </div>
    </div>
  ),
}

export const Desabilitado: Story = {
  args: {
    label: 'Campo Desabilitado',
    disabled: true,
    defaultValue: 'Este textarea está desabilitado',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const Destacado: Story = {
  args: {
    label: 'Campo em Destaque',
    placeholder: 'Digite aqui...',
    highlight: true,
    helperText: 'Este campo está destacado',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const Inline: Story = {
  args: {
    label: 'Observações:',
    placeholder: 'Digite suas observações...',
    inline: true,
    govbrSize: 'medium',
    rows: 3,
  },
}

export const TemaEscuro: Story = {
  args: {
    label: 'Textarea em Tema Escuro',
    placeholder: 'Digite aqui...',
    darkMode: true,
    helperText: 'Exemplo com tema escuro aplicado',
    govbrSize: 'medium',
    rows: 4,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
}

export const Densidades: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <GovBRTextArea label="Pequeno" placeholder="Textarea pequeno" govbrSize="small" rows={3} />
      <GovBRTextArea label="Médio" placeholder="Textarea médio" govbrSize="medium" rows={4} />
      <GovBRTextArea label="Grande" placeholder="Textarea grande" govbrSize="large" rows={5} />
    </div>
  ),
}

export const ComTextoAuxiliar: Story = {
  args: {
    label: 'Feedback',
    helperText: 'Texto auxiliar ao preenchimento.',
    placeholder: 'Digite seu feedback...',
    govbrSize: 'medium',
    rows: 4,
  },
}

export const MultipleLinhas: Story = {
  args: {
    label: 'Relatório Detalhado',
    rows: 8,
    maxLength: 2000,
    showCharacterCount: true,
    placeholder: 'Digite um relatório detalhado sobre o ocorrido...',
    govbrSize: 'medium',
  },
}
