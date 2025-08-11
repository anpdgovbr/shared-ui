import type { Meta, StoryObj } from '@storybook/react'
import { Dayjs } from 'dayjs'
import { ComponentProps, useState } from 'react'
import { GovBRDateTimePicker } from '.'



const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'GovBR/DateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'time', 'datetime', 'range']
    }
  }
}



export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>
type Props = ComponentProps<typeof GovBRDateTimePicker>

const Template = (args: Props) => {
  const [value, setValue] = useState<| {start: Dayjs | null; end: Dayjs | null} 
  | Dayjs 
  | null>(
     args.type === 'range'
      ? { start: null, end: null }
      : null
  ) 

  return (
    <GovBRDateTimePicker
    {...args}
    value={value}
    onChange={setValue}/>
  )
}

export const DatePickerSimples: Story = {
   args: {
    type: 'date',
    label: 'Data',
  },
  render: () => <Template type='date' label='Data'/>
}

export const TimePicker: Story = {
   args: {
    type: 'date',
    label: 'Data',
  },
  render: () => <Template type='time' label='Hora' />
}

export const DateTimePicker: Story = {
   args: {
    type: 'date',
    label: 'Data',
  },
  render: () => <Template type='datetime' label='Data e Hora'/>
}

export const DateRangePicker: Story = {
   args: {
    type: 'date',
    label: 'Data',
  },
  render: () => <Template type='range' label='Período'/>
}
