// src/theme/components/Dialog.ts
import type { Components, Theme } from '@mui/material/styles'

/**
 * Overrides para componentes Dialog (Modal) do MUI
 * Baseado nos padrões do GovBR Design System
 *
 * @security Usa tokens CSS com fallbacks seguros
 * @resilience Valores responsivos para prevenir overflow em dispositivos móveis
 */

export const MuiDialogOverrides: Components['MuiDialog'] = {
  styleOverrides: {
    root: {
      // ✅ Backdrop com estilo Gov.br
      '& .MuiBackdrop-root': {
        backgroundColor: 'var(--surface-overlay, rgba(0, 0, 0, 0.5))', // Scrim com token
        transition: 'opacity var(--duration-base, 250ms) ease',
      },
    },

    paper: {
      // ✅ Container do modal com estilo Gov.br
      borderRadius: 'var(--surface-rounder-md, 8px)',
      boxShadow: 'var(--shadow-level-8, 0px 8px 32px rgba(0, 0, 0, 0.24))',
      margin: 'var(--spacing-scale-2x, 2rem)',
      maxWidth: 'calc(100vw - var(--spacing-scale-4x, 4rem))',

      // ✅ Tamanhos responsivos
      '@media (max-width: 600px)': {
        margin: 'var(--spacing-scale-base, 1rem)',
        maxWidth: 'calc(100vw - var(--spacing-scale-2x, 2rem))',
      },
    },

    paperScrollPaper: {
      maxHeight: 'calc(100vh - var(--spacing-scale-4x, 4rem))',

      '@media (max-width: 600px)': {
        maxHeight: 'calc(100vh - var(--spacing-scale-2x, 2rem))',
      },
    },

    paperFullWidth: {
      width: '100%',
    },

    paperFullScreen: {
      margin: 0,
      maxWidth: '100vw',
      maxHeight: '100vh',
      borderRadius: 0,
    },
  },
}

export const MuiDialogTitleOverrides: Components['MuiDialogTitle'] = {
  styleOverrides: {
    root: {
      // ✅ Header do modal estilo Gov.br
      padding:
        'var(--spacing-scale-1xh, 1.5rem) var(--spacing-scale-1xh, 1.5rem) var(--spacing-scale-base, 1rem) var(--spacing-scale-1xh, 1.5rem)',
      borderBottom: '1px solid var(--gray-20, #e6e7e8)',
      backgroundColor: 'var(--background, #ffffff)',

      // ✅ Tipografia do título
      fontSize: 'var(--font-size-scale-up-02, 1.25rem)', // 20px
      fontWeight: 'var(--font-weight-semi-bold, 600)',
      lineHeight: 'var(--font-line-height-low, 1.4)',
      color: 'var(--color, #333333)',
      fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

      // Com botão de fechar
      '&.MuiDialogTitle-withCloseButton': {
        paddingRight: 'var(--spacing-scale-3x, 3rem)', // Espaço para o botão
      },
    },
  },
}

export const MuiDialogContentOverrides: Components['MuiDialogContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // ✅ Conteúdo do modal
      padding: 'var(--spacing-scale-1xh, 1.5rem)',
      backgroundColor: 'var(--background, #ffffff)',

      // ✅ Tipografia do conteúdo
      '& .MuiTypography-root': {
        fontSize: 'var(--font-size-scale-base, 1rem)',
        lineHeight: 'var(--font-line-height-medium, 1.6)',
        color: 'var(--color, #333333)',
        fontFamily: 'var(--font-family-base, "Rawline", "Raleway", sans-serif)',

        '&:first-of-type': {
          marginTop: 0,
        },

        '&:last-of-type': {
          marginBottom: 0,
        },
      },

      // ✅ Links no conteúdo - dinâmico por tema
      '& a': {
        color: (theme as Theme).palette.primary.main,
        textDecoration: 'none',
        transition: 'all var(--duration-quick, 150ms) ease',

        '&:hover': {
          textDecoration: 'underline',
          color: (theme as Theme).palette.primary.dark,
        },

        '&:focus-visible': {
          outline: `2px dashed ${(theme as Theme).palette.primary.main}`,
          outlineOffset: '2px',
          borderRadius: 'var(--surface-rounder-sm, 2px)',
        },
      },
    }),

    dividers: {
      borderTop: '1px solid var(--gray-20, #e6e7e8)',
      borderBottom: '1px solid var(--gray-20, #e6e7e8)',
      padding: 'var(--spacing-scale-1xh, 1.5rem)',
    },
  },
}

export const MuiDialogActionsOverrides: Components['MuiDialogActions'] = {
  styleOverrides: {
    root: {
      // ✅ Footer com ações do modal
      padding:
        'var(--spacing-scale-base, 1rem) var(--spacing-scale-1xh, 1.5rem) var(--spacing-scale-1xh, 1.5rem) var(--spacing-scale-1xh, 1.5rem)',
      borderTop: '1px solid var(--gray-20, #e6e7e8)',
      backgroundColor: 'var(--background, #ffffff)',
      gap: 'var(--spacing-scale-3quarter, 0.75rem)',

      // Alinhamento das ações
      justifyContent: 'flex-end',

      // ✅ Em mobile, empilhar botões para melhor UX
      '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'stretch',

        '& .MuiButton-root': {
          width: '100%',
        },
      },
    },

    spacing: {
      '& > :not(:first-of-type)': {
        marginLeft: 'var(--spacing-scale-3quarter, 0.75rem)',

        '@media (max-width: 600px)': {
          marginLeft: 0,
          marginTop: 'var(--spacing-scale-3quarter, 0.75rem)',
        },
      },
    },
  },
}
