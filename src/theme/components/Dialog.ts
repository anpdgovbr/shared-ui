// src/theme/components/Dialog.ts
import type { Components } from '@mui/material/styles'

export const MuiDialogOverrides: Components['MuiDialog'] = {
  styleOverrides: {
    root: {
      // Backdrop com estilo Gov.br
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Scrim padrão
      },
    },

    paper: {
      // Container do modal com estilo Gov.br
      borderRadius: '8px',
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.24)',
      margin: '2rem',
      maxWidth: 'calc(100vw - 4rem)',

      // Tamanhos responsivos
      '@media (max-width: 600px)': {
        margin: '1rem',
        maxWidth: 'calc(100vw - 2rem)',
      },
    },

    paperScrollPaper: {
      maxHeight: 'calc(100vh - 4rem)',

      '@media (max-width: 600px)': {
        maxHeight: 'calc(100vh - 2rem)',
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
      // Header do modal estilo Gov.br
      padding: '1.5rem 1.5rem 1rem 1.5rem',
      borderBottom: '1px solid #e6e7e8',
      backgroundColor: '#ffffff',

      // Tipografia do título
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#333333',

      // Com botão de fechar
      '&.MuiDialogTitle-withCloseButton': {
        paddingRight: '3rem', // Espaço para o botão
      },
    },
  },
}

export const MuiDialogContentOverrides: Components['MuiDialogContent'] = {
  styleOverrides: {
    root: {
      // Conteúdo do modal
      padding: '1.5rem',
      backgroundColor: '#ffffff',

      // Tipografia do conteúdo
      '& .MuiTypography-root': {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#333333',

        '&:first-of-type': {
          marginTop: 0,
        },

        '&:last-of-type': {
          marginBottom: 0,
        },
      },

      // Links no conteúdo
      '& a': {
        color: '#1351b4',
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
          color: '#0c326f',
        },

        '&:focus': {
          outline: '2px solid #1351b4',
          outlineOffset: '2px',
          borderRadius: '2px',
        },
      },
    },

    dividers: {
      borderTop: '1px solid #e6e7e8',
      borderBottom: '1px solid #e6e7e8',
      padding: '1.5rem',
    },
  },
}

export const MuiDialogActionsOverrides: Components['MuiDialogActions'] = {
  styleOverrides: {
    root: {
      // Footer com ações do modal
      padding: '1rem 1.5rem 1.5rem 1.5rem',
      borderTop: '1px solid #e6e7e8',
      backgroundColor: '#ffffff',
      gap: '0.75rem',

      // Alinhamento das ações
      justifyContent: 'flex-end',

      // Em mobile, empilhar botões
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
        marginLeft: '0.75rem',

        '@media (max-width: 600px)': {
          marginLeft: 0,
          marginTop: '0.75rem',
        },
      },
    },
  },
}
