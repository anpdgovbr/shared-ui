// src/theme/components/LinearProgress.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para o componente LinearProgress do MUI
 * Barras de progresso baseadas no GovBR Design System
 */
export const MuiLinearProgressOverrides: Components['MuiLinearProgress'] = {
  styleOverrides: {
    root: {
      height: 'var(--spacing-scale-base, 1rem)', // 8px
      borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px
      backgroundColor: 'var(--gray-20, #cccccc)', // Cor de fundo da track
      overflow: 'hidden',

      // Variações de altura
      '&.MuiLinearProgress-determinate': {
        backgroundColor: 'var(--gray-20, #cccccc)',
      },

      '&.MuiLinearProgress-indeterminate': {
        backgroundColor: 'var(--gray-20, #cccccc)',
      },
    },

    // Barra de progresso
    bar: {
      backgroundColor: 'var(--interactive, #1351B4)', // Azul GovBR
      borderRadius: 'var(--surface-rounder-sm, 4px)', // 4px

      // Animação para progresso indeterminado
      '&.MuiLinearProgress-barColorPrimary': {
        backgroundColor: 'var(--interactive, #1351B4)',
      },

      '&.MuiLinearProgress-barColorSecondary': {
        backgroundColor: 'var(--yellow-vivid-20, #FFD200)',
      },
    },

    // Barra 1 (para progresso indeterminado)
    bar1Indeterminate: {
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
    },

    // Barra 2 (para progresso indeterminado)
    bar2Indeterminate: {
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite',
    },

    // Buffer para progresso com buffer
    dashed: {
      backgroundImage: `radial-gradient(var(--gray-40, #999999) 0%, var(--gray-40, #999999) 16%, transparent 42%)`,
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px',
    },

    bar1Buffer: {
      backgroundColor: 'var(--interactive, #1351B4)',
    },

    bar2Buffer: {
      backgroundColor: 'var(--gray-10, #eeeeee)',
    },
  },

  variants: [
    // Variante de sucesso
    {
      props: { color: 'success' },
      style: {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'var(--feedback-success-vivid, #168821)',
        },
      },
    },

    // Variante de erro
    {
      props: { color: 'error' },
      style: {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'var(--feedback-error-vivid, #D04F4F)',
        },
      },
    },

    // Variante de aviso
    {
      props: { color: 'warning' },
      style: {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'var(--feedback-warning-vivid, #F29F05)',
        },
      },
    },

    // Variante de informação
    {
      props: { color: 'info' },
      style: {
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'var(--blue-cool-vivid-50, #007FA3)',
        },
      },
    },

    // Variante fina
    {
      props: { variant: 'determinate' },
      style: {
        '&.MuiLinearProgress-heightThin': {
          height: 'var(--spacing-scale-half, 0.5rem)', // 4px
        },
      },
    },

    // Variante grossa
    {
      props: { variant: 'determinate' },
      style: {
        '&.MuiLinearProgress-heightThick': {
          height: 'var(--spacing-scale-1xh, 0.75rem)', // 12px
        },
      },
    },
  ],
}
