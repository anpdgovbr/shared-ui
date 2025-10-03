import type { Meta, StoryObj } from '@storybook/react'

import { GovBRTabs } from '.'

const meta: Meta<typeof GovBRTabs> = {
  title: 'Components/GovBRTabs',
  component: GovBRTabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained'],
    },
    strictgovbr: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof GovBRTabs>

export const Default_Mui: Story = {
  args: {
    tabs: Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      label: `Aba ${i + 1}`,
    })),
    variant: 'text',
    strictgovbr: false,
    children: Array.from({ length: 3 }, (_, i) => (
      <div key={i} style={{ padding: '16px' }}>
        Conteúdo da Aba {i + 1}
      </div>
    )),
  },
}

export const Overflow_Mui: Story = {
  args: {
    tabs: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      label: `Aba ${i + 1}`,
    })),
    variant: 'text',
    strictgovbr: false,
    children: Array.from({ length: 20 }, (_, i) => (
      <div key={i} style={{ padding: '16px' }}>
        Conteúdo da Aba {i + 1}
      </div>
    )),
  },
}

export const StrictGovBR: Story = {
  args: {
    tabs: [
      { id: 1, label: 'Aba 1' },
      { id: 2, label: 'Aba 2' },
      { id: 3, label: 'Aba 3' },
    ],
    variant: 'text',
    strictgovbr: true,
    children: [
      <div key={1} style={{ padding: '16px' }}>
        Conteúdo da Aba 1
      </div>,
      <div key={2} style={{ padding: '16px' }}>
        Conteúdo da Aba 2
      </div>,
      <div key={3} style={{ padding: '16px' }}>
        Conteúdo da Aba 3
      </div>,
    ],
  },
}

export const StrictGovBROverflow: Story = {
  args: {
    tabs: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      label: `Aba ${i + 1}`,
    })),
    variant: 'text',
    strictgovbr: true,
    children: Array.from({ length: 20 }, (_, i) => (
      <div key={i} style={{ padding: '16px' }}>
        Conteúdo da Aba {i + 1}
      </div>
    )),
  },
}

export const WithCounter: Story = {
  args: {
    tabs: [
      { id: 1, label: 'Aba 1', counter: 5 },
      { id: 2, label: 'Aba 2', counter: 10 },
      { id: 3, label: 'Aba 3', counter: 15 },
    ],
    variant: 'text',
    strictgovbr: true,
    children: [
      <div key={1} style={{ padding: '16px' }}>
        Conteúdo da Aba 1
      </div>,
      <div key={2} style={{ padding: '16px' }}>
        Conteúdo da Aba 2
      </div>,
      <div key={3} style={{ padding: '16px' }}>
        Conteúdo da Aba 3
      </div>,
    ],
  },
}
