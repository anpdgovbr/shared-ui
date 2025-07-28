import React from 'react'
import { Switch, FormControlLabel } from '@mui/material'
import { GovBRSwitchProps } from './types'

const sizeMap = {
  small: { width: 40, height: 24, thumb: 16, translateX: 16 },
  medium: { width: 52, height: 30, thumb: 22, translateX: 22 },
  large: { width: 64, height: 36, thumb: 28, translateX: 28 },
}

const GovBRSwitch: React.FC<GovBRSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'medium', // padrão gov.br
  labelPlacement = 'end',
}) => {
  const { width, height, thumb, translateX } = sizeMap[size]

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          sx={{
            width,
            height,
            padding: 0,

            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: `${(height - thumb) / 2}px`,
              transitionDuration: '200ms',

              '&.Mui-checked': {
                transform: `translateX(${translateX}px)`,
                '& .MuiSwitch-thumb': {
                  backgroundColor: '#5992ed',
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: '#ffffff',
                  opacity: 1,
                },
              },

              '&.Mui-disabled': {
                '& .MuiSwitch-thumb': {
                  width: thumb,
                  height: thumb,
                  backgroundColor: '#cccccc',
                },
              },
            },

            '& .MuiSwitch-thumb': {
              width: thumb,
              height: thumb,
              borderRadius: '50%',
              backgroundColor: '#cccccc',
              boxShadow: 'none',
              '&::before, &::after': {
                content: 'none',
              },
            },

            '& .MuiSwitch-track': {
              width,
              height,
              borderRadius: 30,
              backgroundColor: '#ffffff',
              opacity: 1,
              border: '1px solid #cccccc',
              boxSizing: 'border-box',
            },
          }}
        />
      }
      sx={{
        // Alinhamento e estilo do texto
        '& .MuiTypography-root': {
          color: '#333333',
          fontFamily: 'Rawline, "Open Sans", sans-serif',
          fontSize: '16px',
        },
      }}
    />
  )
}

export default GovBRSwitch
