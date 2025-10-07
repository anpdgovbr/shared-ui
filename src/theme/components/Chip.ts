// src/theme/components/Chip.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Chip do MUI
 *
 * @security Usa tokens CSS com fallbacks seguros e tema dinâmico
 * @resilience Estados visuais consistentes para tags e badges
 */
export const MuiChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // Estilo base da tag Gov.br
      borderRadius: 'var(--surface-rounder-sm, 4px)',
      fontSize: 'var(--font-size-scale-down-01, 0.875rem)',
      fontWeight: 'var(--font-weight-medium, 500)',
      lineHeight: 'var(--font-line-height-medium, 1.4)',
      height: 'auto',
      minHeight: 'var(--button-small, 32px)',
      padding: 'var(--spacing-scale-quarter, 0.25rem) var(--spacing-scale-1xh, 0.75rem)',

      // Border e spacing
      border: '1px solid transparent',

      // Estilo padrão (filled)
      '&.MuiChip-filled': {
        backgroundColor: 'var(--interactive-light, #e8f4fd)',
        color: 'var(--color, #333333)',
        border: '1px solid var(--interactive-lighter, #b3d9f7)',

        '&:hover': {
          backgroundColor: 'var(--interactive-lighter, #d4e9fb)',
        },

        '&:focus': {
          backgroundColor: 'var(--interactive-lighter, #d4e9fb)',
          outline: `2px solid ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
        },
      },

      // Estilo outlined
      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.primary.main,
        border: `1px solid ${(theme as Theme).palette.primary.main}`,

        '&:hover': {
          backgroundColor: 'var(--interactive-light, #e8f4fd)',
        },

        '&:focus': {
          backgroundColor: 'var(--interactive-light, #e8f4fd)',
          outline: `2px solid ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
        },
      },

      // Estados
      '&.Mui-disabled': {
        backgroundColor: 'var(--gray-10, #f0f0f0)',
        color: 'var(--gray-40, #999999)',
        border: '1px solid var(--gray-20, #cccccc)',
        opacity: 1,
      },

      // Chip clicável
      '&.MuiChip-clickable': {
        cursor: 'pointer',
        transition: 'all var(--duration-quick, 0.2s) ease',

        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))',
        },

        '&:active': {
          transform: 'translateY(0)',
        },
      },
    }),

    // Variantes de cor - usar tema dinâmico
    colorPrimary: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.primary.main,
      color: (theme as Theme).palette.primary.contrastText,
      border: `1px solid ${(theme as Theme).palette.primary.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.primary.dark,
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.primary.main,
        border: `1px solid ${(theme as Theme).palette.primary.main}`,

        '&:hover': {
          backgroundColor:
            (theme as Theme).palette.primary.light || 'var(--interactive-light, #e8f4fd)',
        },
      },
    }),

    colorSecondary: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.secondary.main,
      color: (theme as Theme).palette.secondary.contrastText,
      border: `1px solid ${(theme as Theme).palette.secondary.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.secondary.dark,
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.secondary.main,
        border: `1px solid ${(theme as Theme).palette.secondary.main}`,

        '&:hover': {
          backgroundColor:
            (theme as Theme).palette.secondary.light || 'var(--yellow-vivid-5, #fef0c8)',
        },
      },
    }),

    colorSuccess: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.success.main,
      color: (theme as Theme).palette.success.contrastText || 'var(--color-lightest, #ffffff)',
      border: `1px solid ${(theme as Theme).palette.success.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.success.dark,
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.success.main,
        border: `1px solid ${(theme as Theme).palette.success.main}`,

        '&:hover': {
          backgroundColor:
            (theme as Theme).palette.success.light || 'var(--green-cool-vivid-5, #e3f5e1)',
        },
      },
    }),

    colorError: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.error.main,
      color: (theme as Theme).palette.error.contrastText || 'var(--color-lightest, #ffffff)',
      border: `1px solid ${(theme as Theme).palette.error.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.error.dark,
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.error.main,
        border: `1px solid ${(theme as Theme).palette.error.main}`,

        '&:hover': {
          backgroundColor: (theme as Theme).palette.error.light || 'var(--red-vivid-5, #fef0f0)',
        },
      },
    }),

    colorWarning: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.warning.main,
      color: (theme as Theme).palette.warning.contrastText || 'var(--gray-80, #000000)',
      border: `1px solid ${(theme as Theme).palette.warning.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.warning.dark,
        color: (theme as Theme).palette.warning.contrastText || 'var(--color-lightest, #ffffff)',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.warning.main,
        border: `1px solid ${(theme as Theme).palette.warning.main}`,

        '&:hover': {
          backgroundColor:
            (theme as Theme).palette.warning.light || 'var(--orange-vivid-5, #fef2e4)',
        },
      },
    }),

    colorInfo: ({ theme }) => ({
      backgroundColor: (theme as Theme).palette.info.main,
      color: (theme as Theme).palette.info.contrastText || 'var(--color-lightest, #ffffff)',
      border: `1px solid ${(theme as Theme).palette.info.main}`,

      '&:hover': {
        backgroundColor: (theme as Theme).palette.info.dark,
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: (theme as Theme).palette.info.main,
        border: `1px solid ${(theme as Theme).palette.info.main}`,

        '&:hover': {
          backgroundColor:
            (theme as Theme).palette.info.light || 'var(--blue-cool-vivid-5, #e1f3f8)',
        },
      },
    }),

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
