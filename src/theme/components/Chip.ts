// src/theme/components/Chip.ts
import { alpha, type Components, type Theme } from '@mui/material/styles'

/**
 * Overrides para o componente Chip do MUI
 *
 * @security Usa tokens CSS com fallbacks seguros e tema dinâmico
 * @resilience Estados visuais consistentes para tags e badges
 */

type PaletteColorKey = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'

type OverrideCallbackProps = { theme: unknown } & Record<string, unknown>

const createColorOverride =
  (colorKey: PaletteColorKey) =>
  ({ theme }: OverrideCallbackProps) => {
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
      fontWeight: muiTheme.typography.fontWeightBold,

      '&:hover': {
        backgroundColor: hoverColor,
        boxShadow: muiTheme.shadows[2],
      },

      '&:focus-visible': {
        outline: `2px solid ${paletteColor.main}`,
        outlineOffset: '2px',
      },

      '&.MuiChip-outlined': {
        backgroundColor: 'transparent',
        color: paletteColor.main,
        border: `2px solid ${paletteColor.main}`,
        fontWeight: muiTheme.typography.fontWeightBold,

        '&:hover': {
          backgroundColor: outlinedHoverColor,
          borderWidth: '2px',
        },

        '&:focus-visible': {
          outline: `2px solid ${paletteColor.main}`,
          outlineOffset: '2px',
        },
      },
    }
  }

export const MuiChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ theme }: OverrideCallbackProps) => {
      const muiTheme = theme as Theme

      return {
        // Formato de pílula Gov.br
        borderRadius: '100em',

        // Tipografia usando tema dinâmico
        fontSize: muiTheme.typography.body2.fontSize,
        fontWeight: muiTheme.typography.fontWeightMedium,
        fontFamily: muiTheme.typography.fontFamily,
        lineHeight: 1.5,

        // Espaçamento usando tema
        height: 'auto',
        minHeight: muiTheme.spacing(4), // 32px
        padding: `${muiTheme.spacing(0.5)} ${muiTheme.spacing(2)}`, // 4px 16px
        border: '1px solid transparent',

        // Transições
        transition: muiTheme.transitions.create(
          ['background-color', 'box-shadow', 'border-color'],
          {
            duration: muiTheme.transitions.duration.short,
          },
        ),

        '&.MuiChip-filled': {
          backgroundColor: muiTheme.palette.action.selected,
          color: muiTheme.palette.text.primary,
          border: `1px solid ${muiTheme.palette.divider}`,

          '&:hover': {
            backgroundColor: muiTheme.palette.action.hover,
            boxShadow: muiTheme.shadows[1],
          },

          '&:focus-visible': {
            outline: `2px solid ${muiTheme.palette.primary.main}`,
            outlineOffset: '2px',
          },
        },

        '&.MuiChip-outlined': {
          backgroundColor: 'transparent',
          color: muiTheme.palette.text.primary,
          border: `1px solid ${muiTheme.palette.divider}`,

          '&:hover': {
            backgroundColor: muiTheme.palette.action.hover,
            borderColor: muiTheme.palette.text.secondary,
          },

          '&:focus-visible': {
            outline: `2px solid ${muiTheme.palette.primary.main}`,
            outlineOffset: '2px',
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
    icon: ({ theme }: OverrideCallbackProps) => {
      const muiTheme = theme as Theme
      return {
        fontSize: '1.25rem', // 20px
        marginLeft: muiTheme.spacing(-0.5),
        marginRight: muiTheme.spacing(0.5),
        color: 'currentColor',

        '&.MuiChip-iconSmall': {
          fontSize: '1rem', // 16px
          marginLeft: muiTheme.spacing(-0.25),
          marginRight: muiTheme.spacing(0.25),
        },
      }
    },

    // Avatar
    avatar: ({ theme }: OverrideCallbackProps) => {
      const muiTheme = theme as Theme
      return {
        marginLeft: muiTheme.spacing(-0.5),
        marginRight: muiTheme.spacing(0.5),
        width: 24,
        height: 24,
        fontSize: '0.75rem',

        '&.MuiChip-avatarSmall': {
          width: 18,
          height: 18,
          marginLeft: muiTheme.spacing(-0.25),
          marginRight: muiTheme.spacing(0.25),
        },
      }
    },

    // Label
    label: {
      padding: 0,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: 'inherit',
    },

    // Botão de delete
    deleteIcon: ({ theme }: OverrideCallbackProps) => {
      const muiTheme = theme as Theme
      return {
        fontSize: '1.25rem', // 20px
        marginLeft: muiTheme.spacing(0.5),
        marginRight: muiTheme.spacing(-0.5),
        color: 'currentColor',
        opacity: 0.7,
        transition: muiTheme.transitions.create('opacity', {
          duration: muiTheme.transitions.duration.short,
        }),

        '&:hover': {
          opacity: 1,
          color: 'currentColor',
        },

        '&.MuiChip-deleteIconSmall': {
          fontSize: '1rem', // 16px
          marginLeft: muiTheme.spacing(0.25),
          marginRight: muiTheme.spacing(-0.25),
        },
      }
    },
  },

  variants: [
    // Tamanho pequeno
    {
      props: { size: 'small' },
      style: ({ theme }: OverrideCallbackProps) => {
        const muiTheme = theme as Theme
        return {
          minHeight: muiTheme.spacing(3), // 24px
          fontSize: muiTheme.typography.caption.fontSize, // ~12px
          padding: `${muiTheme.spacing(0.25)} ${muiTheme.spacing(1)}`, // 2px 8px
          borderRadius: '100em',
        }
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
