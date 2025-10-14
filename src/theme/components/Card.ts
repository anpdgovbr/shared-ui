// src/theme/components/Card.ts
import { Components } from '@mui/material/styles'

/**
 * Overrides para componentes de Card do MUI
 * Baseado nos padrões de card do GovBR Design System
 */

export const MuiCardOverrides: Components['MuiCard'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--background, #ffffff)', // Fundo branco
      border: '1px solid var(--gray-20, #cccccc)', // Borda sutil
      borderRadius: 'var(--surface-rounder-md, 8px)', // 8px
      boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))', // Sombra sutil
      color: 'var(--color, #333333)',
      marginBottom: 'var(--spacing-scale-base, 1rem)', // 16px
      transition: 'all 0.2s ease-in-out',

      // Hover effect
      '&:hover': {
        backgroundColor: 'var(--gray-5, #f6f6f6)',
        boxShadow: 'var(--shadow-level-2, 0px 4px 8px rgba(0, 0, 0, 0.12))',
        transform: 'translateY(-1px)',
      },

      // Card interativo (clicável)
      '&.MuiCard-clickable': {
        cursor: 'pointer',

        '&:active': {
          transform: 'translateY(0)',
          boxShadow: 'var(--shadow-level-1, 0px 2px 4px rgba(0, 0, 0, 0.1))',
        },
      },

      // Card destacado
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
      padding: 'var(--spacing-scale-3quarter, 0.75rem) var(--spacing-scale-3quarter, 0.75rem) 0', // 12px 12px 0
      borderBottom: '1px solid var(--gray-20, #cccccc)',
      marginBottom: 'var(--spacing-scale-half, 0.5rem)', // 8px
    },

    title: {
      fontSize: 'var(--font-size-scale-up-02, 1.44rem)', // 1.44rem
      fontWeight: 'var(--font-weight-bold, 700)', // 700
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      lineHeight: 'var(--font-line-height-low, 1.15)', // 1.15
    },

    subheader: {
      fontSize: 'var(--font-size-scale-base, 1rem)', // 1rem
      fontWeight: 'var(--font-weight-regular, 400)', // 400
      color: 'var(--gray-70, #666666)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',
      marginTop: 'var(--spacing-scale-half, 0.5rem)', // 4px
    },

    avatar: {
      marginRight: 'var(--spacing-scale-2x, 2rem)', // 16px
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
      padding: 'var(--spacing-scale-3quarter, 0.75rem)', // 12px

      '&:last-child': {
        paddingBottom: 'var(--spacing-scale-3quarter, 0.75rem)', // Mantém padding reduzido
      },

      // Primeiro parágrafo sem margin-top
      '& > p:first-of-type': {
        marginTop: 0,
      },

      // Último parágrafo sem margin-bottom
      '& > p:last-of-type': {
        marginBottom: 0,
      },
    },
  },
}

export const MuiCardActionsOverrides: Components['MuiCardActions'] = {
  styleOverrides: {
    root: {
      padding: '0 var(--spacing-scale-3quarter, 0.75rem) var(--spacing-scale-3quarter, 0.75rem)', // 0 12px 12px
      borderTop: '1px solid var(--gray-20, #cccccc)',
      marginTop: 'var(--spacing-scale-base, 1rem)', // 16px
      gap: 'var(--spacing-scale-half, 0.5rem)', // 8px entre ações

      // Botões nas ações
      '& .MuiButton-root': {
        marginLeft: 0, // Remove margin padrão do MUI
      },
    },

    // Ações alinhadas à direita
    spacing: {
      '& > :not(:first-of-type)': {
        marginLeft: 'var(--spacing-scale-half, 0.5rem)', // 8px
      },
    },
  },
}

export const MuiCardMediaOverrides: Components['MuiCardMedia'] = {
  styleOverrides: {
    root: {
      borderRadius: 'var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px) 0 0', // Arredonda só o topo

      // Se for a primeira child, remove border-radius inferior
      '.MuiCard-root > &:first-child': {
        borderRadius: 'var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px) 0 0',
      },

      // Se for a última child, remove border-radius superior
      '.MuiCard-root > &:last-child': {
        borderRadius: '0 0 var(--surface-rounder-md, 8px) var(--surface-rounder-md, 8px)',
      },

      // Se for o único elemento, mantém border-radius completo
      '.MuiCard-root > &:only-child': {
        borderRadius: 'var(--surface-rounder-md, 8px)',
      },
    },

    // Imagem responsiva
    img: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
  },
}
