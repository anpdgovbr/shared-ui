// src/theme/components/CircularProgress.ts
import type { Components } from '@mui/material/styles'

export const MuiCircularProgressOverrides: Components['MuiCircularProgress'] = {
  styleOverrides: {
    root: {
      // Cores base conforme Gov.br
      color: '#1351b4', // Interactive color

      // Tamanhos padronizados
      '&.MuiCircularProgress-colorPrimary': {
        color: '#1351b4',
      },

      '&.MuiCircularProgress-colorSecondary': {
        color: '#ffd200', // Yellow vivid
      },

      // Estados de feedback
      '&.MuiCircularProgress-colorSuccess': {
        color: '#168821', // Success color
      },

      '&.MuiCircularProgress-colorError': {
        color: '#d04f4f', // Error color
      },

      '&.MuiCircularProgress-colorWarning': {
        color: '#f29f05', // Warning color
      },

      '&.MuiCircularProgress-colorInfo': {
        color: '#0d7ea2', // Info color
      },
    },

    circle: {
      // Customização do círculo
      strokeLinecap: 'round',

      // Animação suave
      transition: 'stroke-dashoffset 0.3s ease',
    },

    // Variante determinada
    determinate: {
      transition: 'transform 0.2s ease',
    },

    // Variante indeterminada
    indeterminate: {
      animation: 'circular-rotate 1.4s linear infinite',

      '& .MuiCircularProgress-circle': {
        animation: 'circular-dash 1.4s ease-in-out infinite',
      },
    },
  },

  variants: [
    // Tamanho pequeno (24px)
    {
      props: { size: 'small' },
      style: {
        width: '24px',
        height: '24px',
      },
    },

    // Tamanho médio (40px) - padrão
    {
      props: { size: 'medium' },
      style: {
        width: '40px',
        height: '40px',
      },
    },

    // Tamanho grande (56px)
    {
      props: { size: 'large' },
      style: {
        width: '56px',
        height: '56px',
      },
    },
  ],
}
