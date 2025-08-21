// src/theme/components/Switch.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente Switch do MUI
 * Baseado nos padrões de switch do GovBR Design System
 */
export const MuiSwitchOverrides: Components['MuiSwitch'] = {
  styleOverrides: {
    root: {
      // Configurações base do switch
      padding: 'var(--spacing-scale-base, 1rem)', // 8px

      // Tamanho pequeno
      '&.MuiSwitch-sizeSmall': {
        '& .MuiSwitch-track': {
          height: '24px',
          width: '40px',
          borderRadius: '12px',
        },
        '& .MuiSwitch-thumb': {
          height: '16px',
          width: '16px',
        },
      },

      // Tamanho médio (padrão)
      '&.MuiSwitch-sizeMedium': {
        '& .MuiSwitch-track': {
          height: '30px',
          width: '52px',
          borderRadius: '15px',
        },
        '& .MuiSwitch-thumb': {
          height: '22px',
          width: '22px',
        },
      },

      // Estado de foco acessível
      '&.Mui-focusVisible': {
        '& .MuiSwitch-track': {
          outline: '2px solid var(--focus, #1351B4)',
          outlineOffset: '2px',
        },
      },

      // Estado marcado/ligado
      '&.Mui-checked': {
        '& .MuiSwitch-thumb': {
          backgroundColor: 'var(--interactive, #1351B4)', // Azul quando ligado
          transform: 'translateX(22px)', // Move para direita
        },
        '& .MuiSwitch-track': {
          backgroundColor: 'var(--interactive-rgb, #5992ed)', // Fundo azul claro
          borderColor: 'var(--interactive, #1351B4)',
        },
      },

      // Estado desabilitado
      '&.Mui-disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,

        '& .MuiSwitch-thumb': {
          backgroundColor: 'var(--gray-40, #999999)',
        },

        '& .MuiSwitch-track': {
          backgroundColor: 'var(--gray-20, #cccccc)',
          borderColor: 'var(--gray-30, #bbbbbb)',
        },
      },

      // Hover effect
      '&:hover:not(.Mui-disabled)': {
        '& .MuiSwitch-track': {
          backgroundColor: 'var(--gray-10, #eeeeee)',
        },

        '&.Mui-checked .MuiSwitch-track': {
          backgroundColor: 'var(--interactive, #1351B4)',
        },
      },
    },

    // Thumb (bolinha que desliza)
    thumb: {
      backgroundColor: 'var(--gray-60, #777777)', // Cinza quando desligado
      height: '22px',
      width: '22px',
      borderRadius: '50%',
      transition: 'all 0.3s ease-in-out',
      boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',

      // Ícone dentro do thumb (opcional)
      '&::before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
      },
    },

    // Track (trilha de fundo)
    track: {
      backgroundColor: 'var(--gray-20, #cccccc)', // Fundo cinza quando desligado
      border: '1px solid var(--gray-40, #999999)',
      borderRadius: '15px',
      height: '30px',
      width: '52px',
      opacity: 1, // Remove opacidade padrão do MUI
      transition: 'all 0.3s ease-in-out',

      // Remove sombra interna padrão do MUI
      '&::before, &::after': {
        display: 'none',
      },
    },

    // Configuração do input (hidden)
    switchBase: {
      padding: '4px',
      margin: 0,

      '&.Mui-checked': {
        transform: 'translateX(22px)',

        '& + .MuiSwitch-track': {
          backgroundColor: 'var(--interactive-rgb, #5992ed)',
          borderColor: 'var(--interactive, #1351B4)',
        },
      },

      '&.Mui-disabled': {
        '& + .MuiSwitch-track': {
          backgroundColor: 'var(--gray-20, #cccccc)',
          borderColor: 'var(--gray-30, #bbbbbb)',
        },
      },
    },
  },

  variants: [
    // Variante de sucesso
    {
      props: { color: 'success' },
      style: {
        '&.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--feedback-success-vivid, #168821)',
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'var(--feedback-success-light, #7ED788)',
            borderColor: 'var(--feedback-success-vivid, #168821)',
          },
        },
      },
    },

    // Variante de erro
    {
      props: { color: 'error' },
      style: {
        '&.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--feedback-error-vivid, #D04F4F)',
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'var(--feedback-error-light, #F8A8A8)',
            borderColor: 'var(--feedback-error-vivid, #D04F4F)',
          },
        },
      },
    },

    // Variante de aviso
    {
      props: { color: 'warning' },
      style: {
        '&.Mui-checked': {
          '& .MuiSwitch-thumb': {
            backgroundColor: 'var(--feedback-warning-vivid, #F29F05)',
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'var(--feedback-warning-light, #FFD966)',
            borderColor: 'var(--feedback-warning-vivid, #F29F05)',
          },
        },
      },
    },
  ],
}
