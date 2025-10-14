// src/theme/components/Card.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para componentes de Card do MUI
 * Baseado nos padrões do GovBR Design System
 */

export const MuiCardOverrides: Components['MuiCard'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--background, #ffffff)',
      border: '1px solid var(--gray-20, #cccccc)',
      borderRadius: 'var(--surface-rounder-md, 8px)',
      boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))',
      color: 'var(--color, #333333)',
      marginBottom: 'var(--spacing-scale-2x, 2rem)',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        backgroundColor: 'var(--gray-5, #f6f6f6)',
        boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',
        transform: 'translateY(-1px)',
      },

      '&.MuiCard-clickable': {
        cursor: 'pointer',

        '&:active': {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))',
        },
      },

      '&.MuiCard-highlighted': {
        borderColor: 'var(--interactive, #1351B4)',
        borderWidth: '2px',

        '&:hover': {
          backgroundColor: 'var(--interactive-light, #5992ed)',
        },
      },
    },
  },
}

export const MuiCardHeaderOverrides: Components['MuiCardHeader'] = {
  styleOverrides: {
    root: {
      padding:
        'var(--spacing-scale-2x, 2rem) var(--spacing-scale-2x, 2rem) var(--spacing-scale-2x, 2rem)',
      borderBottom: 'none',
      marginBottom: 0,

      '& .MuiCardHeader-subheader': {
        marginTop: 0,
      },
    },

    title: {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)',
      fontWeight: 'var(--font-weight-bold, 700)',
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      lineHeight: 'var(--font-line-height-low, 1.15)',
      marginBottom: 0,
    },

    subheader: {
      fontSize: 'var(--font-size-scale-base, 1rem)',
      fontWeight: 'var(--font-weight-regular, 400)',
      color: 'var(--gray-70, #666666)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginTop: 0,
      marginBottom: 0,
    },

    avatar: {
      marginRight: 'var(--spacing-scale-2x, 2rem)',
    },

    action: {
      margin: 0,
      alignSelf: 'flex-start',
    },
  },
}

export const MuiCardContentOverrides: Components['MuiCardContent'] = {
  styleOverrides: {
    root: {
      padding: 'var(--spacing-scale-3x, 3rem)',

      '&:last-child': {
        paddingBottom: 'var(--spacing-scale-3x, 3rem)',
      },

      '& > p:first-of-type': {
        marginTop: 0,
      },

      '& > p:last-of-type': {
        marginBottom: 0,
      },
    },
  },
}

export const MuiCardActionsOverrides: Components['MuiCardActions'] = {
  styleOverrides: {
    root: {
      padding: '0 var(--spacing-scale-3x, 3rem) var(--spacing-scale-3x, 3rem)',
      borderTop: 'none',
      marginTop: 'var(--spacing-scale-2x, 2rem)',
      gap: 'var(--spacing-scale-base, 1rem)',

      '& .MuiButton-root': {
        marginLeft: 0,
      },
    },

    spacing: {
      '& > :not(:first-of-type)': {
        marginLeft: 'var(--spacing-scale-base, 1rem)',
      },
    },
  },
}

export const MuiCardMediaOverrides: Components['MuiCardMedia'] = {
  styleOverrides: {
    root: {
      borderRadius: 'var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px) 0 0',

      '.MuiCard-root > &:first-child': {
        borderRadius: 'var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px) 0 0',
      },

      '.MuiCard-root > &:last-child': {
        borderRadius: '0 0 var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px)',
      },

      '.MuiCard-root > &:only-child': {
        borderRadius: 'var(--surface-rounder-md, 8px)',
      },
    },

    img: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
  },
}
