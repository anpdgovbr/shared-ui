import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDateTimePicker } from './GovBRDateTimePicker'
<<<<<<< HEAD
import { useState } from 'react'
import { start } from 'repl'
=======
>>>>>>> 3e77ddf091c2fce383bec924a557a7a7a1693752



const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'GovBR/DateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
<<<<<<< HEAD
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'time', 'datetime', 'range']
    }
=======
  args: {
  },
  argTypes: {
    label: { control: 'text' },  
>>>>>>> 3e77ddf091c2fce383bec924a557a7a7a1693752
  }
}



export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>

<<<<<<< HEAD
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
=======
export const Default: Story = {
  name: 'Padrão',
  args: {
    label: 'Digite a data',
    },
>>>>>>> 3e77ddf091c2fce383bec924a557a7a7a1693752
}
