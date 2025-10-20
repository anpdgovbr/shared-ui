import Inbox from '@mui/icons-material/Inbox'
import Mail from '@mui/icons-material/Mail'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRList } from 'src/components/ui/govbr-list'

const meta: Meta<typeof GovBRList> = {
  title: 'Components/GovBRList',
  component: GovBRList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof GovBRList>

export const Default: Story = {
  args: {
    expansible: false,
    itens: [
      { icon: <Inbox />, children: 'Caixa de entrada' },
      { icon: <Mail />, children: 'Mensagens' },
      { children: 'Notificações' },
    ],
  },
}

export const Expansible: Story = {
  args: {
    expansible: true,
    labelDivider: false,
    label: 'Menu expansível',
    itens: [
      { icon: <Inbox />, children: 'Item 1' },
      { icon: <Mail />, children: 'Item 2' },
      { children: 'Item 3' },
    ],
  },
}

export const strictGov: Story = {
  args: {
    strictgovbr: true,
    label: 'List com strictgov',
    labelDivider: true,
    itens: [
      { icon: <Inbox />, children: 'Item govbr 1' },
      { icon: <Mail />, children: 'Item govbr 2', divider: true },
      { children: 'Item 3' },
    ],
  },
}

export const strictGovExpansible: Story = {
  args: {
    strictgovbr: true,
    expansible: true,
    label: 'Lista expansível com strictgov',
    labelDivider: true,
    itens: [
      { icon: <Inbox />, children: 'Item govbr 1' },
      { icon: <Mail />, children: 'Item govbr 2', divider: true },
      { children: 'Item 3' },
    ],
  },
}
