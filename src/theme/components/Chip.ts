// src/theme/components/Chip.ts
import { alpha, type Components, type Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Chip do MUI
 *
 * @security Usa tokens CSS com fallbacks seguros e tema dinâmico
 * @resilience Estados visuais consistentes para tags e badges
 */

type PaletteColorKey = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'

const createColorOverride =
  (colorKey: PaletteColorKey) =>
  ({ theme }: { theme: Theme }) => {
    const muiTheme = theme as Theme
    const paletteColor = muiTheme.palette[colorKey]
    const hoverColor = paletteColor.dark ?? paletteColor.main
    const outlinedHoverBase = paletteColor.light ?? paletteColor.main
    const outlinedHoverOpacity = muiTheme.palette.mode === 'light' ? 0.12 : 0.24
    const outlinedHoverColor = alpha(outlinedHoverBase, outlinedHoverOpacity)

    return {
      backgroundColor: paletteColor.main,
      color: paletteColor.contrastText,
      border: `1px solid ${paletteColor.main}`,
      '&:hover': {
        backgroundColor: hoverColor,
      },
      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: paletteColor.main,
        border: `1px solid ${paletteColor.main}`,
        '&:hover': {
          backgroundColor: outlinedHoverColor,
        },
      },
    }
  }

export const MuiChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }) => {
      const muiTheme = theme as Theme
      const focusOutlineColor = alpha(muiTheme.palette.primary.main, 0.4)

      return {
        borderRadius: muiTheme.shape.borderRadius,
        fontSize: muiTheme.typography.body2.fontSize,
        fontWeight: muiTheme.typography.fontWeightMedium,
        lineHeight: muiTheme.typography.body2.lineHeight ?? 1.4,
        height: 'auto',
        minHeight: muiTheme.spacing(4),
        padding: muiTheme.spacing(0.5, 1.5),
        border: '1px solid transparent',

        '&.MuiChip-filled': {
          backgroundColor: muiTheme.palette.action.selected,
          color: muiTheme.palette.text.primary,
          '&:hover': {
            backgroundColor:
              muiTheme.palette.mode === 'light'
                ? muiTheme.palette.grey[200]
                : muiTheme.palette.grey[700],
          },
          '&:focus-visible': {
            outline: `2px solid ${focusOutlineColor}`,
            outlineOffset: 2,
          },
        },

        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          color: muiTheme.palette.text.primary,
          borderColor: muiTheme.palette.divider,
          '&:hover': {
            backgroundColor: muiTheme.palette.action.hover,
          },
          '&:focus-visible': {
            outline: `2px solid ${focusOutlineColor}`,
            outlineOffset: 2,
          },
        },

        '&.Mui-disabled': {
          backgroundColor: muiTheme.palette.action.disabledBackground,
          color: muiTheme.palette.action.disabled,
          borderColor: muiTheme.palette.action.disabledBackground,
          opacity: 1,
        },
      }
    },

    colorPrimary: createColorOverride('primary'),
    colorSecondary: createColorOverride('secondary'),
    colorSuccess: createColorOverride('success'),
    colorError: createColorOverride('error'),
    colorWarning: createColorOverride('warning'),
    colorInfo: createColorOverride('info'),

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
