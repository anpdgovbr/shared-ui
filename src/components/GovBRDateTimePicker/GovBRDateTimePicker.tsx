import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Typography } from '@mui/material'
import { GovBRDateTimePickerProps } from './types'


export const GovBRDateTimePicker: React.FC<GovBRDateTimePickerProps> = ({
  label,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Typography sx={{margin: 0, fontWeight: 'bold'}}>{label}</Typography>
        <DatePicker slotProps={{
          textField: {
            size: 'small',
              },
        }}/>

    </LocalizationProvider>
  )
}