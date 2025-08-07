import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import React from 'react'
import type { GovBRSwitchProps } from './types'

// Mapeia os tamanhos do switch para dimensões específicas
export const sizeMap = {
  small: { width: 40, height: 24, thumb: 16, translateX: 16 },
  medium: { width: 52, height: 30, thumb: 22, translateX: 22 },
  large: { width: 64, height: 36, thumb: 28, translateX: 28 },
}

export const GovBRSwitch: React.FC<GovBRSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'medium',
  labelPlacement = 'end',
  textEnabled,
  textDisabled,
  strictGovBr = false,
  className,
  ...props
}) => {
  const { width, height, thumb, translateX } = sizeMap[size]

  const isTop = labelPlacement === 'top'
  const isStart = labelPlacement === 'start'
  const stateText = checked ? textEnabled : textDisabled

  return (
    <Box
      className={className}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
      }}
      {...props}
    >
      <FormControlLabel
        label={label}
        labelPlacement={labelPlacement}
        control={
          <Switch
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            disableRipple
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
                    backgroundColor: strictGovBr ? '#1351b4' : '#5992ed',
                  },
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#ffffff',
                    opacity: 1,
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
                border: strictGovBr ? '1px solid #1351b4' : '1px solid #ccccccff',
                boxSizing: 'border-box',
              },
            }}
          />
        }
        sx={{
          display: 'inline-flex',
          alignItems: isTop ? 'flex-start' : 'center',
          flexDirection: isTop ? 'column' : isStart ? 'row-reverse' : 'row',
          gap: isTop ? '4px' : '8px',
          margin: 0,
          '& .MuiTypography-root': {
            color: strictGovBr ? '#1351b4' : '#333333',
            fontFamily: 'Rawline, "Open Sans", sans-serif', // cspell:disable-line
            fontSize: '16px',
            marginTop: '18px',
          },
        }}
      />
      {stateText && (
        <Typography
          sx={{
            color: strictGovBr ? '#1351b4' : '#333333',
            fontFamily: 'Rawline, "Open Sans", sans-serif', // cspell:disable-line
            fontSize: '16px',
            marginTop: '18px',
          }}
        >
          {stateText}
        </Typography>
      )}
    </Box>
  )
}

// Export nomeado para tree shaking
export type { GovBRSwitchProps } from './types'
export default GovBRSwitch
