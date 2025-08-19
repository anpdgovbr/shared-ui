// src/theme/components/Chip.ts
import type { Components } from '@mui/material/styles'

export const MuiChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: {
      // Estilo base da tag Gov.br
      borderRadius: '4px',
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.4,
      height: 'auto',
      minHeight: '32px',
      padding: '0.25rem 0.75rem',

      // Border e spacing
      border: '1px solid transparent',

      // Estilo padrão (filled)
      '&.MuiChip-filled': {
        backgroundColor: '#e8f4fd', // Light blue
        color: '#333333',
        border: '1px solid #b3d9f7',

        '&:hover': {
          backgroundColor: '#d4e9fb',
        },

        '&:focus': {
          backgroundColor: '#d4e9fb',
          outline: '2px solid #1351b4',
          outlineOffset: '2px',
        },
      },

      // Estilo outlined
      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#1351b4',
        border: '1px solid #1351b4',

        '&:hover': {
          backgroundColor: '#e8f4fd',
        },

        '&:focus': {
          backgroundColor: '#e8f4fd',
          outline: '2px solid #1351b4',
          outlineOffset: '2px',
        },
      },

      // Estados
      '&.Mui-disabled': {
        backgroundColor: '#f0f0f0',
        color: '#999999',
        border: '1px solid #cccccc',
        opacity: 1,
      },

      // Chip clicável
      '&.MuiChip-clickable': {
        cursor: 'pointer',
        transition: 'all 0.2s ease',

        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },

        '&:active': {
          transform: 'translateY(0)',
        },
      },
    },

    // Variantes de cor
    colorPrimary: {
      backgroundColor: '#1351b4',
      color: '#ffffff',
      border: '1px solid #1351b4',

      '&:hover': {
        backgroundColor: '#0c326f',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#1351b4',
        border: '1px solid #1351b4',

        '&:hover': {
          backgroundColor: '#e8f4fd',
        },
      },
    },

    colorSecondary: {
      backgroundColor: '#ffd200',
      color: '#000000',
      border: '1px solid #ffd200',

      '&:hover': {
        backgroundColor: '#ddaa01',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#ddaa01',
        border: '1px solid #ddaa01',

        '&:hover': {
          backgroundColor: '#fef0c8',
        },
      },
    },

    colorSuccess: {
      backgroundColor: '#168821',
      color: '#ffffff',
      border: '1px solid #168821',

      '&:hover': {
        backgroundColor: '#154c21',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#168821',
        border: '1px solid #168821',

        '&:hover': {
          backgroundColor: '#e3f5e1',
        },
      },
    },

    colorError: {
      backgroundColor: '#d04f4f',
      color: '#ffffff',
      border: '1px solid #d04f4f',

      '&:hover': {
        backgroundColor: '#800610',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#d04f4f',
        border: '1px solid #d04f4f',

        '&:hover': {
          backgroundColor: '#fef0f0',
        },
      },
    },

    colorWarning: {
      backgroundColor: '#f29f05',
      color: '#000000',
      border: '1px solid #f29f05',

      '&:hover': {
        backgroundColor: '#c05600',
        color: '#ffffff',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#f29f05',
        border: '1px solid #f29f05',

        '&:hover': {
          backgroundColor: '#fef2e4',
        },
      },
    },

    colorInfo: {
      backgroundColor: '#0d7ea2',
      color: '#ffffff',
      border: '1px solid #0d7ea2',

      '&:hover': {
        backgroundColor: '#074b69',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: '#0d7ea2',
        border: '1px solid #0d7ea2',

        '&:hover': {
          backgroundColor: '#e1f3f8',
        },
      },
    },

    // Ícone
    icon: {
      fontSize: '1rem',
      margin: '0 0.25rem 0 0',

      '&.MuiChip-iconSmall': {
        fontSize: '0.875rem',
      },
    },

    // Avatar
    avatar: {
      margin: '0 0.25rem 0 0',
      width: '24px',
      height: '24px',
      fontSize: '0.75rem',
    },

    // Label
    label: {
      padding: 0,
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },

    // Botão de delete
    deleteIcon: {
      fontSize: '1rem',
      margin: '0 0 0 0.25rem',
      color: 'currentColor',
      opacity: 0.7,

      '&:hover': {
        opacity: 1,
        color: 'currentColor',
      },

      '&.MuiChip-deleteIconSmall': {
        fontSize: '0.875rem',
      },
    },
  },

  variants: [
    // Tamanho pequeno
    {
      props: { size: 'small' },
      style: {
        minHeight: '24px',
        fontSize: '0.75rem',
        padding: '0.125rem 0.5rem',
      },
    },

    // Tag de status (sem texto, apenas cor)
    {
      props: { variant: 'filled', size: 'small' } as const,
      style: {
        '&.chip-status': {
          width: '12px',
          height: '12px',
          minHeight: '12px',
          borderRadius: '50%',
          padding: 0,

          '& .MuiChip-label': {
            display: 'none',
          },

          '&.large': {
            width: '16px',
            height: '16px',
          },

          '&.small': {
            width: '8px',
            height: '8px',
          },
        },
      },
    },
  ],
}
