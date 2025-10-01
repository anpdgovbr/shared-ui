// src/theme/components/CircularProgress.ts
import type { Components, Theme } from '@mui/material/styles'

export const MuiCircularProgressOverrides: Components['MuiCircularProgress'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // Cores base conforme paleta do tema ativo
      color: (theme as Theme).palette.primary.main, // Dinâmico: azul GovBR ou verde ANPD

      // Tamanhos padronizados
      '&.MuiCircularProgress-colorPrimary': {
        color: (theme as Theme).palette.primary.main, // Dinâmico
      },

      '&.MuiCircularProgress-colorSecondary': {
        color: (theme as Theme).palette.secondary.main, // Dinâmico: amarelo GovBR ou azul ANPD
      },

      // Estados de feedback
      '&.MuiCircularProgress-colorSuccess': {
        color: (theme as Theme).palette.success.main, // Dinâmico
      },

      '&.MuiCircularProgress-colorError': {
        color: (theme as Theme).palette.error.main, // Dinâmico
      },

      '&.MuiCircularProgress-colorWarning': {
        color: (theme as Theme).palette.warning.main, // Dinâmico
      },

      '&.MuiCircularProgress-colorInfo': {
        color: (theme as Theme).palette.info.main, // Dinâmico
      },
      // Keyframes necessários para animação indeterminada do spinner
      '@keyframes circular-rotate': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },

      '@keyframes circular-dash': {
        '0%': {
          strokeDasharray: '1, 200',
          strokeDashoffset: '0',
        },
        '50%': {
          strokeDasharray: '89, 200',
          strokeDashoffset: '-35px',
        },
        '100%': {
          strokeDasharray: '89, 200',
          strokeDashoffset: '-124px',
        },
      },
    }),

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
