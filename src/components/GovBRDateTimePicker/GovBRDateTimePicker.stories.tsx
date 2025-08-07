import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDateTimePicker } from './GovBRDateTimePicker'
import { useState } from 'react'
import { start } from 'repl'



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

const Template = (args: any) => {
  const [value, setValue] = useState<any>(
    args.type === 'range' ? {start: null, end: null}
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
