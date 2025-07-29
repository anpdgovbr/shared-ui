import React from 'react'
import { Switch, FormControlLabel, Box, Typography } from '@mui/material'
import { GovBRSwitchProps } from './types'

// Mapeia os tamanhos do switch para dimensões específicas
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
  size = 'medium',
  labelPlacement = 'end',
  textEnabled,
  textDisabled,
}) => {
  const { width, height, thumb, translateX } = sizeMap[size]

  const isTop = labelPlacement === 'top'
  const isStart = labelPlacement === 'start'

  const stateText = checked ? textEnabled : textDisabled

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
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
                // Centraliza o 'thumb' (botão circular) verticalmente na 'track'
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
                border: '1px solid #ccccccff',
                boxSizing: 'border-box',
              },
            }}
          />
        }
        sx={{
          // Controla a posição da label em relação ao switch
          display: 'inline-flex',
          alignItems: isTop ? 'flex-start' : 'center',
          flexDirection: isTop ? 'column' : isStart ? 'row-reverse' : 'row',
          gap: isTop ? '4px' : '8px',
          margin: 0,
          '& .MuiTypography-root': {
            color: '#333333',
            fontFamily: 'Rawline, "Open Sans", sans-serif',
            fontSize: '16px',
          },
        }}
      />
      {/* Renderiza o texto de estado (ex: "Ligado" / "Desligado"), se for fornecido */}
      {stateText && (
        <Typography
          sx={{
            color: '#333333',
            fontFamily: 'Rawline, "Open Sans", sans-serif',
            fontSize: '16px',
          }}
        >
          {stateText}
        </Typography>
      )}
    </Box>
  )
}

export default GovBRSwitch
