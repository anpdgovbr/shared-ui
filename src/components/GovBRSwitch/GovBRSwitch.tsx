import React from 'react'
import { Switch, FormControlLabel } from '@mui/material'
import { GovBRSwitchProps } from './types'

const GovBRSwitch: React.FC<GovBRSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          color="primary"
          size="medium"
          sx={{
            width: 60,
            height: 38,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 1,
              transitionDuration: '300ms',
              '&.Mui-checked': {
                transform: 'translateX(20px)',
                '& + .MuiSwitch-track': {
                  backgroundColor: '#ffffff',
                  border: '1px solid #cccccc',
                  opacity: 1,
                },
                '& .MuiSwitch-thumb': {
                  backgroundColor: '#5992ed',
                  boxShadow: 'none',
                },
              },
              '&:hover + .MuiSwitch-track': {
                backgroundColor: '#f7f7f7',
              },
              '&.Mui-checked:hover + .MuiSwitch-track': {
                backgroundColor: '#f7f7f7',
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                backgroundColor: '#cccccc',
                boxShadow: 'none',
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: '#ffffff',
                border: '1px solid #cccccc',
                opacity: 1,
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 22,
              height: 22,
              borderRadius: '50%',
              backgroundColor: '#cccccc',
              boxShadow: 'none',
            },
            '& .MuiSwitch-track': {
              borderRadius: 26 / 2,
              backgroundColor: '#ffffff',
              border: '2px solid #cccccc',
              opacity: 1,
              transition: 'background-color 300ms',
            },
          }}
        />
      }
      label={label ?? 'Switch'}
    />
  )
}

export default GovBRSwitch
