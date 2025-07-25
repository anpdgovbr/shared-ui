import React from 'react'
import { Switch, FormControlLabel } from '@mui/material'
import { GovBRSwitchProps } from './types' // Certifique-se que o caminho está correto

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
            width: 44,
            height: 24,
            padding: 0,
            // Base para o container do thumb (a bolinha)
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: '2px', // Centraliza o thumb de 20px dentro do track de 24px
              transitionDuration: '300ms',

              // Estilo do Switch quando LIGADO
              '&.Mui-checked': {
                transform: 'translateX(20px)',
                '& .MuiSwitch-thumb': {
                  backgroundColor: '#0055A4', // Cor do thumb LIGADO (Azul gov.br)
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: '#E8F1FC', // Cor do track LIGADO (Azul claro gov.br)
                  opacity: 1,
                  border: 0, // Garante que não há borda
                },
              },

              // Estilo do Switch em modo Hover
              '&:hover': {
                '& + .MuiSwitch-track': {
                  // O design do gov.br não especifica um hover, mas podemos adicionar um se quisermos
                  // Ex: filter: 'brightness(95%)'
                },
              },

              // Estilo do Switch quando DESABILITADO
              '&.Mui-disabled': {
                '& .MuiSwitch-thumb': {
                  backgroundColor: '#E0E0E0', // Cor do thumb DESABILITADO
                },
                '& + .MuiSwitch-track': {
                  backgroundColor: '#F0F0F0', // Cor do track DESABILITADO
                  opacity: 1,
                },
              },
            },

            // Estilo do "polegar" (a bolinha)
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#FFFFFF', // Cor do thumb DESLIGADO (Branco)
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)', // Sombra sutil como no design
            },

            // Estilo do "trilho" (o fundo em pílula)
            '& .MuiSwitch-track': {
              width: 44,
              height: 24,
              borderRadius: 12, // Metade da altura
              backgroundColor: '#A7A7A7', // Cor do track DESLIGADO (Cinza gov.br)
              opacity: 1,
              border: 0, // Garante que não há borda
              transition: 'background-color 200ms',
            },
          }}
        />
      }
      // Estilo para o Label (texto ao lado do switch)
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
