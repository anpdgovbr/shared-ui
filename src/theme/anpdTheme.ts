import { createTheme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { govbrTheme } from 'src/theme/govbrTheme'

// Cores institucionais da ANPD
export const anpdColors = {
  primary: {
    main: '#307244', // Verde ANPD (cor principal)
    light: '#4C9A61', // Versão mais clara para hover e destaque
    dark: '#20502E', // Versão mais escura para contraste
    contrastText: '#FFFFFF', // Texto branco para legibilidade
  },
  secondary: {
    main: '#00AEEF', // Azul ANPD
    light: '#5FCCFF',
    dark: '#0079B0',
    contrastText: '#000000',
  },
  accent: {
    main: '#FAA61A', // Laranja ANPD para destaques e alertas
    light: '#FFC260',
    dark: '#C77900',
    contrastText: '#000000',
  },
  background: {
    default: '#F5F5F5', // Fundo claro, padrão do GOV.BR DS
    paper: '#FFFFFF', // Fundo de cartões e diálogos
  },
  text: {
    primary: '#212121', // Preto suave para textos principais
    secondary: '#4F4F4F', // Cinza escuro para textos secundários
  },
  error: {
    main: 'rgba(194, 24, 7, 0.85)', // Vermelho GOV.BR para erros
  },
  warning: {
    main: '#FAA61A', // Usando o Laranja ANPD para alertas
  },
  info: {
    main: '#00AEEF', // Azul ANPD para informações
  },
  success: {
    main: '#2E7D32', // Verde GOV.BR para sucessos
  },
}

// Configuração do tema base MUI com cores ANPD
const baseTheme = createTheme({
  palette: {
    primary: anpdColors.primary,
    secondary: anpdColors.secondary,
    background: anpdColors.background,
    text: anpdColors.text,
    error: anpdColors.error,
    warning: anpdColors.warning,
    info: anpdColors.info,
    success: anpdColors.success,
    // @ts-expect-error - accent não é uma cor padrão do MUI
    accent: anpdColors.accent,
  },
  shape: {
    borderRadius: 8, // Bordas arredondadas padrão do GOV.BR DS
  },
  components: {
    // Correção global do marginBottom em componentes de texto
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
        body1: {
          marginBottom: 0,
        },
        body2: {
          marginBottom: 0,
        },
      },
    },
  },
})

// ANPD overrides (componentes e ajustes específicos)
const anpdOverrides = {
  palette: baseTheme.palette,
  shape: baseTheme.shape,
  components: {
    MuiDataGrid: {
      defaultProps: {
        disableColumnMenu: true,
        density: 'comfortable',
      },
      styleOverrides: {
        root: {
          border: `1px solid ${baseTheme.palette.divider}`,
          borderRadius: baseTheme.shape.borderRadius,
          boxShadow: baseTheme.shadows[1],
          backgroundColor: baseTheme.palette.background.paper,
          overflow: 'hidden',
          '& .MuiDataGrid-cell:focus:not(:focus-visible), & .MuiDataGrid-columnHeader:focus:not(:focus-visible), & .MuiDataGrid-row:focus:not(:focus-visible)':
            {
              outline: 'none',
              boxShadow: 'none',
            },
          '& .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
        columnHeaders: {
          backgroundColor: baseTheme.palette.grey[100],
          borderBottom: `2px solid ${baseTheme.palette.primary.main}`,
        },
        columnHeaderTitle: {
          fontWeight: 'bold',
          color: baseTheme.palette.text.primary,
        },
        main: {
          borderRadius: baseTheme.shape.borderRadius,
          overflow: 'hidden',
        },
        cell: {
          borderBottom: `1px solid ${baseTheme.palette.divider}`,
        },
        footerContainer: {
          borderTop: `1px solid ${baseTheme.palette.divider}`,
          backgroundColor: baseTheme.palette.grey[50],
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.07)',
        },
      },
    },
  },
}

/**
 * Ordem de precedência explicada:
 * - vamos mesclar `govbrTheme` com `anpdOverrides` usando `deepmerge` do MUI.
 * - chamada: deepmerge(govbrTheme, anpdOverrides)
 * - em caso de conflito, as chaves de `anpdOverrides` vencem (ANPD sobrescreve govbrTheme)
 *
 * Benefícios desta abordagem:
 * - elimina chamadas repetidas a `createTheme`
 * - deixa explícito qual tema tem prioridade
 * - mantém merge profundo para objetos (styleOverrides, components, palette)
 */
const merged = deepmerge(govbrTheme, anpdOverrides)
export const anpdTheme = createTheme(merged)
