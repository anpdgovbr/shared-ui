import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDivider } from 'src/components/ui/govbr-divider'

const meta: Meta<typeof GovBRDivider> = {
  title: 'Components/GovBRDivider',
  component: GovBRDivider,
  tags: ['autodocs'],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description:
        'Ativa o modo estrito, renderizando o componente em html puro com a formatação do govBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Define se o divisor é horizontal ou vertical',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'horizontal' },
      },
    },
    dashed: {
      control: 'boolean',
      description: 'Define se o divisor é tracejado ou sólido',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Define o tamanho do divisor',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'md' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRDivider>

export const Default: Story = {
  args: {
    strictgovbr: false,
    orientation: 'horizontal',
    dashed: false,
    size: 'md',
  },
}

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <GovBRDivider size="sm" />
      <GovBRDivider size="md" />
      <GovBRDivider size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exibe os divisores em todos os tamanhos disponíveis (sm, md, lg).',
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px', width: '1px' }}>
      <span>Item 1</span>
      <GovBRDivider orientation="vertical" />
      <span>Item 2</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exibe um divisor vertical separando dois itens.',
      },
    },
  },
}

export const Dashed: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <GovBRDivider dashed size="sm" />
      <GovBRDivider dashed size="md" />
      <GovBRDivider dashed size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exibe divisores tracejados em todos os tamanhos disponíveis (sm, md, lg).',
      },
    },
  },
}

export const StrictGovBR: Story = {
  args: {
    strictgovbr: true,
    orientation: 'horizontal',
    dashed: false,
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exibe o divisor no modo estrito, utilizando HTML puro com as classes do GovBR-DS.',
      },
    },
  },
}

export const TodosOsModos: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p>Modo MUI</p>
      <GovBRDivider size="sm" />
      <GovBRDivider size="md" />
      <GovBRDivider size="lg" />
      <GovBRDivider dashed size="sm" />
      <GovBRDivider dashed size="md" />
      <GovBRDivider dashed size="lg" />
      <p>Modo Estrito GovBR</p>
      <GovBRDivider strictgovbr size="sm" />
      <GovBRDivider strictgovbr size="md" />
      <GovBRDivider strictgovbr size="lg" />
      <GovBRDivider strictgovbr dashed size="sm" />
      <GovBRDivider strictgovbr dashed size="md" />
      <GovBRDivider strictgovbr dashed size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Exibe todas as combinações possíveis de tamanho, estilo e modo de renderização do divisor.',
      },
    },
  },
}
