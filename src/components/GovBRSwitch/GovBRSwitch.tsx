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
          sx={{
            width: 47,
            padding: 0,

            // Área interativa do switch
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: '2px', // Centraliza o thumb dentro do track
              transitionDuration: '200ms',

              // Estilo quando o switch está ativado
              '&.Mui-checked': {
                transform: 'translateX(20px)',
                '& .MuiSwitch-thumb': {
                  backgroundColor: '#5992ed', // Azul (gov.br)
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: '#ffffff',
                  opacity: 1,
                },
              },

              // Hover (personalizável se necessário)
              '&:hover': {
                '& + .MuiSwitch-track': {
                  // Ex: filter: 'brightness(95%)'
                },
              },

              // Estilo quando desabilitado
              '&.Mui-disabled': {
                '& .MuiSwitch-thumb': {
                  boxSizing: 'border-box',
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: checked ? '#5992ed' : '#A7A7A7',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before, &::after': {
                    content: 'none',
                  },
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: '#F0F0F0',
                  opacity: 1,
                },
              },
            },

            // Thumb (botão circular que se move)
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 20,
              height: 20,
              borderRadius: '50px',
              backgroundColor: '#A7A7A7',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
              '&::before, &::after': {
                content: 'none',
              },
            },

            // Track (fundo do switch em forma de pílula)
            '& .MuiSwitch-track': {
              width: 44,
              height: 24,
              borderRadius: 12,
              backgroundColor: '#FFFFFF',
              opacity: 1,
              border: 1,
              color: '#e6e6e6',
              transition: 'background-color 400ms',
            },
          }}
        />
      }
      // Estilo do texto ao lado do switch
      label={label}
      sx={{
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
