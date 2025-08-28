import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDateTimePicker } from 'src/components/ui/govbr-datetimepicker'

const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'Components/GovBRDateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    pickerType: {
      control: 'select',
      options: ['date', 'time', 'date-time'],
      description: 'Tipo de seletor de data/hora a ser exibido',
    },
    label: {
      control: 'text',
      description: 'Rótulo do campo de seleção de data/hora',
    },
    onChange: {
      action: 'changed',
      description: 'Função chamada quando o valor selecionado muda',
    },
  },

  args: {
    pickerType: 'date',
    label: 'Selecione uma data',
  },
}

export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>

export const Default: Story = {
  args: {
    pickerType: 'date',
    label: 'Selecione uma data',
  },
}

export const TimePicker: Story = {
  args: {
    pickerType: 'time',
    label: 'Selecione um horário',
  },
}

export const DateTimePicker: Story = {
  args: {
    pickerType: 'date-time',
    label: 'Selecione data e horário',
  },
}
