import { GovBRRadioProps } from './types'
import { Radio, Stack, Typography } from '@mui/material'

export const GovBRRadio: React.FC<GovBRRadioProps> = ({
  name,
  value,
  label,
  helpText,
  text,
  disabled,
  checked,
  error,
  valid,
  onChange,
}) => {
  return (
    <Stack
      spacing={1}
      sx={{
        // Reset completo para evitar herança
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        // Neutralizar possíveis estilos herdados
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
        color: 'inherit',
        backgroundColor: 'transparent',
      }}
    >
      <Stack
        sx={{
          // Reset específico para container de labels
          margin: 0,
          padding: 0,
          gap: 0,
        }}
      >
        <Typography
          className="br-label"
          sx={{
            // Reset tipografia para evitar herança
            margin: 0,
            padding: 0,
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.25,
            color: '#333',
          }}
        >
          {label}
        </Typography>
        <Typography
          className="br-text-small"
          sx={{
            // Reset tipografia para help text
            margin: 0,
            padding: 0,
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.25,
            color: '#666',
          }}
        >
          {helpText}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={0}
        sx={{
          // Reset para container do radio
          margin: 0,
          padding: 0,
          minHeight: 'auto',
          position: 'relative',
        }}
      >
        <Radio
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          value={value}
          name={name}
          sx={{
            // Cores baseadas no CSS GovBR-DS
            color: '#ccc', // --border-color padrão
            '&.Mui-checked': {
              color: '#1351B4', // --selected (azul GovBR)
            },
            '& .MuiSvgIcon-root': {
              fontSize: 24, // Tamanho normal
              // SVG rendering otimizado para parecer mais fino
              '& path': {
                strokeWidth: '1px', // Stroke mais fino para o contorno
              },
              '& circle': {
                strokeWidth: '1px', // Stroke mais fino para o círculo
              },
              // Forçar anti-aliasing e suavização
              filter: 'contrast(0.95)',
              WebkitFontSmoothing: 'antialiased',
            },
            // Padding similar ao GovBR-DS - com reset explícito
            padding: '2px',
            margin: 0,
            // Reset completo do botão
            border: 'none',
            outline: 'none',
            boxSizing: 'border-box',
            // Alinhamento vertical com o texto
            marginTop: '-2px', // Ajuste fino para alinhar com primeira linha do texto
            // Hover baseado no GovBR-DS
            '&:hover:not(.Mui-disabled)': {
              backgroundColor: 'rgba(19, 81, 180, 0.08)', // var(--hover) sem CSS var
            },
            // Focus baseado no GovBR-DS
            '&.Mui-focusVisible': {
              outline: 'none',
              boxShadow: '0 0 0 2px #F29F05', // var(--focus)
            },
            // Estados de validação
            ...(error && {
              color: '#D04F4F', // var(--danger)
              '&.Mui-checked': {
                color: '#D04F4F',
              },
            }),
            ...(valid &&
              !error && {
                color: '#168821', // var(--success)
                '&.Mui-checked': {
                  color: '#168821',
                },
              }),
            // Disabled baseado no GovBR-DS
            '&.Mui-disabled': {
              color: 'rgba(0, 0, 0, 0.26)',
              opacity: 0.6,
            },
          }}
        />
        <Typography
          className="br-text"
          sx={{
            // Reset completo da tipografia
            margin: 0,
            padding: 0,
            border: 'none',
            outline: 'none',
            boxSizing: 'border-box',
            // Tipografia baseada no CSS GovBR-DS - valores explícitos
            color: disabled ? 'rgba(0, 0, 0, 0.38)' : '#333',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            fontFamily: 'inherit', // Respeita fonte do tema
            // Comportamento de clique
            userSelect: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            // Espaçamento similar ao GovBR-DS
            paddingLeft: '8px',
            // Reset de possíveis transformações
            textTransform: 'none',
            textDecoration: 'none',
            letterSpacing: 'normal',
          }}
          onClick={() => {
            // Permite clicar no texto para selecionar o radio
            if (!disabled && onChange) {
              onChange()
            }
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Stack>
  )
}
