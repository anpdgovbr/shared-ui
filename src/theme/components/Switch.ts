// src/theme/components/Switch.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Switch do MUI
 * Baseado exatamente nos padrões CSS do GovBR Design System (.br-switch)
 * Replicando a estrutura e comportamento do modo strictgovbr
 */
export const MuiSwitchOverrides: Components['MuiSwitch'] = {
  styleOverrides: {
    root: {
      // Dimensões do switch baseadas no GovBR medium (padrão)
      '--switch-height': '24px', // Ajustado para ficar menor
      '--switch-width': '44px', // Ajustado para ficar menor
      '--switch-toggle-size': '18px', // Ajustado para ficar menor

      display: 'inline-flex',
      minHeight: 'var(--switch-height)',
      width: 'auto',
      height: 'auto',
      padding: 0,
      margin: 0,
      overflow: 'visible',
    },

    switchBase: {
      padding: 0,
      margin: 0,
      color: 'transparent',

      // Estado padrão (não marcado) - thumb à esquerda
      '&:not(.Mui-checked)': {
        transform: 'translateX(0)',

        '& .MuiSwitch-thumb': {
          // Posição à esquerda: 4px do início
          transform: 'translateX(4px)',
          backgroundColor: 'var(--gray-80, #333333)', // --off
        },
      },

      // Estado marcado/ligado - thumb à direita
      '&.Mui-checked': {
        transform: 'translateX(0)',
        color: 'transparent',

        '& .MuiSwitch-thumb': {
          // Posição à direita: calc(44px - 18px - 4px) = 22px
          transform: 'translateX(22px)',
          backgroundColor: 'var(--blue-warm-vivid-70, #1351B4)', // --on
        },

        '& + .MuiSwitch-track': {
          backgroundColor: 'var(--blue-warm-vivid-20, #adcdff)', // Background quando ligado
          borderColor: 'var(--blue-warm-vivid-70, #1351B4)',
          opacity: 1,
        },
      },

      // Estado desabilitado
      '&.Mui-disabled': {
        opacity: 0.6,

        '& .MuiSwitch-thumb': {
          backgroundColor: 'var(--gray-40, #999999)',
        },

        '& + .MuiSwitch-track': {
          backgroundColor: 'var(--gray-20, #cccccc)',
          borderColor: 'var(--gray-30, #bbbbbb)',
        },
      },

      // Estado de foco (replicando o GovBR)
      '&.Mui-focusVisible': {
        '& + .MuiSwitch-track': {
          borderColor: 'var(--focus, #FFCD07) !important',
          boxShadow: '0 0 0 2px var(--focus, #FFCD07)',
          outline: 'none',
        },
      },

      // Hover states (replicando o GovBR)
      '&:hover:not(.Mui-disabled):not(.Mui-checked)': {
        '& + .MuiSwitch-track': {
          backgroundImage: 'linear-gradient(rgba(51, 51, 51, 0.08), rgba(51, 51, 51, 0.08))', // --off-rgb hover
        },
      },

      '&:hover:not(.Mui-disabled).Mui-checked': {
        '& + .MuiSwitch-track': {
          backgroundImage: 'linear-gradient(rgba(19, 81, 180, 0.08), rgba(19, 81, 180, 0.08))', // --on-rgb hover
        },
      },
    },

    thumb: {
      width: 'var(--switch-toggle-size)',
      height: 'var(--switch-toggle-size)',
      borderRadius: '50%',
      backgroundColor: 'var(--gray-80, #333333)', // --off
      boxShadow: 'none',
      transition: 'all 0.3s ease-in-out', // Mesmo timing do GovBR
      marginTop: '3px', // Move a bolinha para baixo

      // Remove estilos padrão do MUI
      '&::before': {
        display: 'none',
      },
    },

    track: {
      width: 'var(--switch-width)',
      height: 'var(--switch-height)',
      borderRadius: '100em', // border-radius: 100em do GovBR
      backgroundColor: 'var(--gray-20, #E6E6E6)', // --background-light
      border: '1px solid var(--gray-60, #777777)', // --border-color
      opacity: 1,
      transition: 'all 0.3s ease-in-out',

      // Remove estilos padrão do MUI
      '&::before, &::after': {
        display: 'none',
      },
    },
  },

  variants: [
    // Variante de sucesso
    {
      props: { color: 'success' },
      style: {
        '& .MuiSwitch-switchBase.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--green-vivid-50, #168821)',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'var(--green-cool-20, #7ED788)',
            borderColor: 'var(--green-vivid-50, #168821)',
          },
        },
      },
    },

    // Variante de erro
    {
      props: { color: 'error' },
      style: {
        '& .MuiSwitch-switchBase.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--red-vivid-50, #D54309)',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'var(--red-cool-20, #F8A8A8)',
            borderColor: 'var(--red-vivid-50, #D54309)',
          },
        },
      },
    },

    // Variante de aviso
    {
      props: { color: 'warning' },
      style: {
        '& .MuiSwitch-switchBase.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--yellow-vivid-60, #F29F05)',
          },
          '& + .MuiSwitch-track': {
            backgroundColor: 'var(--yellow-20, #FFD966)',
            borderColor: 'var(--yellow-vivid-60, #F29F05)',
          },
        },
      },
    },
  ],
}
