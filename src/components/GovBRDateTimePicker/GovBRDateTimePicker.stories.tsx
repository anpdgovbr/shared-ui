import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDateTimePicker } from './GovBRDateTimePicker'



const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'GovBR/DateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    label: { control: 'text' },  
  }
}



export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>

export const Default: Story = {
  name: 'Padrão',
  args: {
    label: 'Digite a data',
    },
}
