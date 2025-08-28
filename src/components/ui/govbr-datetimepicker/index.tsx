'use client'

import { DatePicker, DateTimePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { GovBRDateTimePickerProps } from 'src/components/ui/govbr-datetimepicker/types'

export function GovBRDateTimePicker(props: Readonly<GovBRDateTimePickerProps>) {
  const { pickerType, label, onChange } = props

  switch (pickerType) {
    case 'date':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label={label} onChange={onChange} />
        </LocalizationProvider>
      )
    case 'time':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label={label} onChange={onChange} />
        </LocalizationProvider>
      )
    case 'date-time':
      ;<LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label={label} onChange={onChange} />
      </LocalizationProvider>
    default:
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label={label} onChange={onChange} />
        </LocalizationProvider>
      )
  }
}
