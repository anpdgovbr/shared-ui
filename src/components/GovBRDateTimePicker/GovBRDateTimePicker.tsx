import React from 'react'
import { DatePicker, DateTimePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, TextFieldProps, Typography } from '@mui/material'
import { GovBRDateTimePickerProps, PickerType } from './types'
import { Dayjs } from 'dayjs'
import { BorderColor } from '@mui/icons-material'


export const GovBRDateTimePicker: React.FC<GovBRDateTimePickerProps> = ({
  type,
  label,
  value,
  onChange,
  error,
  helperText,
  minDate,
  maxDate,
  disableFuture = false,
  disablePast = false,
  format,
  textFieldProps,
}) => {

  const defaultFormats: Record<PickerType, string> = {
    date: 'DD/MM/YYYY',
    time: 'HH:mm',
    datetime: 'DD/MM/YYYY HH:mm',
    range: 'DD/MM/YYYY',
  }

  const commonProps = {
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    format: format || defaultFormats[type],
    slotProps: {
      textField: {
        sx: {
          width: '300px' ,
          '& .MuiPickersInputBase-root': {
              
          }
        }, 
        fullWidth: true,
        size: 'small' as TextFieldProps['size'],
        error,
        helperText,
        ...textFieldProps,
      }
    }
  }

  const renderPicker = () => {
    switch(type) {
      case 'date':
        return (
          <DatePicker 
            label={label}
            value={value as Dayjs | null}
            onChange={onChange}
            {...commonProps}
          />
        )
      case 'datetime' :
        return (
          <DateTimePicker 

            label={label}
            value={value as Dayjs | null}
            onChange={onChange}
            ampm={false}
            {...commonProps}
            
          />
        )
        case 'time' :
          return (
          <TimePicker 
            label={label}
            value={value as Dayjs | null}
            onChange={onChange}
            ampm={false}
            {...commonProps}
          />
          )
        case 'range':
          const rangeValue = value as {start: Dayjs | null; end: Dayjs | null}
          return (
            <Box display='flex' gap={2}>
              <DatePicker
              label={`${label || 'Data'} - Início`}
              value={rangeValue?.start || null}
              onChange={(newStart) =>
                onChange({ ...rangeValue, start: newStart })
              }
              {...commonProps}
            />
            <DatePicker
              label={`${label || 'Data'} - Fim`}
              value={rangeValue?.end || null}
              onChange={(newEnd) =>
                onChange({ ...rangeValue, end: newEnd })
              }
              {...commonProps}
            />
            </Box>
          )
          default:
            return null
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
      {renderPicker()}
    </LocalizationProvider>
  )
}