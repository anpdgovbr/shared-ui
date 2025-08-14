import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/pt-br'
import React from 'react'
import { GovBRDateTimePickerProps, pickerMap } from 'src/components/ui/govbr-datetimepicker/types'

export function GovBRDateTimePicker({ type, label }: Readonly<GovBRDateTimePickerProps>) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs)

  dayjs.locale('pt-br')

  const PickerComponent = pickerMap[type]
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <PickerComponent
        label={label}
        value={value}
        onChange={(newValue: Dayjs) => setValue(newValue)}
        slotProps={{
          '& .MuiInputLabel-root': {
            color: 'warning.main',
          },
        }}
      />
    </LocalizationProvider>
  )
}
