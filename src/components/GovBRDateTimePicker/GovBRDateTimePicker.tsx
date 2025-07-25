import React from 'react'
import { Dayjs } from 'dayjs'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, Typography } from '@mui/material'

interface GovBRDateTimePickerProps {
  label: string
  placeholder?: string
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
}

export const GovBRDateTimePicker: React.FC<GovBRDateTimePickerProps> = ({
  label,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{
          width: '30%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
      }}
      >
        <Typography sx={{margin: 0, fontWeight: 'bold'}}>{label}</Typography>
        <DesktopDatePicker           
          slotProps={{
            textField: {
              helperText: '',
              sx: {
                '& .MuiInputBase-input': {
                  color: 'blue',
                  fontSize: '14px',
                marginTop: '10px'},
                '& .MuiIconButton-root': {
                  color: 'primary.main'},
                '& .MuiSvgIcon-root': {
                  fontSize: '20px'},
                mt: '-15px'
              }
            }
          }}
        />
      </Box>
    </LocalizationProvider>
  )
}