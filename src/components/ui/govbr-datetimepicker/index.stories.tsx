import Box from '@mui/material/Box'
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRDateTimePicker } from 'src/components/ui/govbr-datetimepicker'
import { GovBRThemeProvider } from 'src/theme'

const meta: Meta<typeof GovBRDateTimePicker> = {
  title: 'Components/GovBRDateTimePicker',
  component: GovBRDateTimePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
            <GovBRThemeProvider>
        <Box sx={{ padding: 3, maxWidth: '600px' }}>
          <Story />
        </Box>
      </GovBRThemeProvider>
    )
  ],
  argTypes:{
    label: {
      control: 'text'
    }
  }
}

export default meta
type Story = StoryObj<typeof GovBRDateTimePicker>

export const DatePicker: Story = {
  args: {
    type: 'date',
    label: 'Selecione a data'
  }
}

export const TimePicker: Story = {
  args: {
    type: 'time',
    label: 'Selecione a hora'
  }
}

export const DateTimePicker: Story = {
  args: {
    type: 'datetime',
    label: 'Selecione a data e hora'
  }
}