// src/theme/govbrTheme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let govbrTheme = createTheme({
  // 1. Paleta de Cores (Palette)
  palette: {
    primary: {
      main: '#1351B4', // govbr: blue-warm-vivid-70
      light: '#5992ed', // govbr: blue-warm-vivid-40
      dark: '#0c326f', // govbr: blue-warm-vivid-80 (ajustado para ser um escuro mais profundo)
      contrastText: '#fff', // Cor do texto para contraste com a cor primária
    },
    secondary: {
      main: '#FFD200', // govbr: yellow-vivid-20 (adaptado para o seu secondary)
      light: '#ffe396', // govbr: yellow-vivid-10
      dark: '#ddaa01', // govbr: yellow-vivid-30 (um pouco mais escuro que o main)
      contrastText: '#333', // govbr: gray-80 ou color-secondary-08
    },
    success: {
      main: '#168821', // govbr: green-cool-vivid-50
      light: '#70e17b', // govbr: green-cool-vivid-20
      dark: '#154c21', // govbr: green-cool-vivid-70
      contrastText: '#fff',
    },
    warning: {
      main: '#F29F05', // govbr: orange-vivid-30 (ajustado para o seu warning)
      light: '#ffbc78', // govbr: orange-vivid-20
      dark: '#c05600', // govbr: orange-vivid-50
      contrastText: '#333',
    },
    info: {
      main: '#007FA3', // govbr: blue-cool-vivid-50
      light: '#59b9de', // govbr: blue-cool-vivid-30
      dark: '#074b69', // govbr: blue-cool-vivid-70
      contrastText: '#fff',
    },
    error: {
      main: '#D04F4F', // govbr: red-vivid-50 (ajustado para o seu danger)
      light: '#fd8ba0', // govbr: red-cool-vivid-30
      dark: '#b21d38', // govbr: red-cool-vivid-60
      contrastText: '#fff',
    },
    // Adicionando cores neutras baseadas no gray do GovBR-DS
    grey: {
      50: '#fcfcfc', // gray-1
      100: '#f8f8f8', // gray-2
      200: '#f6f6f6', // gray-3
      300: '#f0f0f0', // gray-5
      400: '#e6e6e6', // gray-10
      500: '#ccc', // gray-20
      600: '#adadad', // gray-30
      700: '#888', // gray-40
      800: '#757575', // gray-50
      900: '#333', // gray-80
      A100: '#1b1b1b', // gray-90 (usado para o mais escuro)
    },
    text: {
      primary: '#333', // govbr: gray-80
      secondary: '#555', // govbr: gray-70
      disabled: 'rgba(0, 0, 0, 0.38)', // Padrão MUI, pode ser ajustado
    },
    background: {
      default: '#fff', // govbr: pure-0 ou background-light
      paper: '#f8f8f8', // govbr: gray-2 ou background-alternative
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)', // Padrão MUI, pode ser ajustado
      hover: 'rgba(var(--interactive-rgb),0.16)', // Usando a variável CSS do hover
      selected: 'rgba(var(--blue-warm-vivid-50-rgb),1)', // govbr: selected
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(var(--gold-vivid-40-rgb),1)', // govbr: focus-color
    },
  },

  // 2. Tipografia (Typography)
  typography: {
    fontFamily: '"Rawline", "Raleway", sans-serif',
    fontSize: 14, // govbr: font-size-scale-base
    fontWeightLight: 300, // govbr: font-weight-light
    fontWeightRegular: 400, // govbr: font-weight-regular
    fontWeightMedium: 500, // govbr: font-weight-medium
    fontWeightBold: 700, // govbr: font-weight-bold
    h1: {
      fontSize: '2.036rem', // govbr: font-size-scale-up-04 (29.036px / 14px)
      fontWeight: 500, // govbr: font-weight-medium
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.714rem', // govbr: spacing-scale-2xh (24px / 14px)
      '@media (min-width:576px)': {
        fontSize: '2.986rem', // govbr: font-size-scale-up-06 (41.804px / 14px)
        fontWeight: 300, // govbr: font-weight-light
        marginBottom: '2.857rem', // govbr: spacing-scale-4x (40px / 14px)
      },
    },
    h2: {
      fontSize: '1.728rem', // govbr: font-size-scale-up-03 (24.192px / 14px)
      fontWeight: 600, // govbr: font-weight-semi-bold
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.714rem', // govbr: spacing-scale-2xh
      marginTop: '2rem', // govbr: spacing-scale-3xh (28px / 14px)
      paddingBottom: '1.714rem', // govbr: spacing-scale-2xh
      '@media (min-width:576px)': {
        fontSize: '2.488rem', // govbr: font-size-scale-up-05 (34.832px / 14px)
        fontWeight: 400, // govbr: font-weight-regular
      },
    },
    h3: {
      fontSize: '1.44rem', // govbr: font-size-scale-up-02 (20.16px / 14px)
      fontWeight: 700, // govbr: font-weight-bold
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.714rem', // govbr: spacing-scale-2xh
      marginTop: '2rem', // govbr: spacing-scale-3xh
      '@media (min-width:576px)': {
        fontSize: '2.036rem', // govbr: font-size-scale-up-04
        fontWeight: 500, // govbr: font-weight-medium
      },
    },
    h4: {
      fontSize: '1.2rem', // govbr: font-size-scale-up-01 (16.8px / 14px)
      fontWeight: 700, // govbr: font-weight-bold
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.714rem', // govbr: spacing-scale-2xh
      marginTop: '1.142rem', // govbr: spacing-scale-2x (16px / 14px)
      '@media (min-width:576px)': {
        fontSize: '1.728rem', // govbr: font-size-scale-up-03
        fontWeight: 600, // govbr: font-weight-semi-bold
        marginTop: '2rem', // govbr: spacing-scale-3xh
      },
    },
    h5: {
      fontSize: '1rem', // govbr: font-size-scale-base
      fontWeight: 800, // govbr: font-weight-extra-bold
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.142rem', // govbr: spacing-scale-2x
      marginTop: '1.142rem', // govbr: spacing-scale-2x
      paddingBottom: '0.571rem', // govbr: spacing-scale-base (8px / 14px)
      textTransform: 'uppercase',
      '@media (min-width:576px)': {
        fontSize: '1.44rem', // govbr: font-size-scale-up-02
        fontWeight: 700, // govbr: font-weight-bold
        marginTop: '2rem', // govbr: spacing-scale-3xh
      },
    },
    h6: {
      fontSize: '0.833rem', // govbr: font-size-scale-down-01 (11.662px / 14px)
      fontWeight: 800, // govbr: font-weight-extra-bold
      lineHeight: 1.15, // govbr: font-line-height-low
      marginBottom: '1.142rem', // govbr: spacing-scale-2x
      marginTop: '1.142rem', // govbr: spacing-scale-2x
      paddingBottom: '0.571rem', // govbr: spacing-scale-base
      textTransform: 'uppercase',
      '@media (min-width:576px)': {
        fontSize: '1.2rem', // govbr: font-size-scale-up-01
        fontWeight: 800, // govbr: font-weight-extra-bold
        marginTop: '2rem', // govbr: spacing-scale-3xh
      },
    },
    body1: {
      fontSize: '1rem', // govbr: font-size-scale-base
      fontWeight: 400, // govbr: font-weight-regular
      lineHeight: 1.45, // govbr: font-line-height-medium
      marginBottom: '1.142rem', // govbr: spacing-scale-2x
    },
    // Adicione outras variantes de texto conforme necessário
  },

  // 3. Espaçamento (Spacing) - O MUI usa múltiplos de 8px por padrão, então vamos mapear.
  spacing: (factor: number) => {
    const spacingMap = {
      0: 0, // --spacing-scale-default
      0.5: 4, // --spacing-scale-half
      1: 8, // --spacing-scale-base
      1.5: 12, // --spacing-scale-baseh
      2: 16, // --spacing-scale-2x
      2.5: 20, // --spacing-scale-2xh
      3: 24, // --spacing-scale-3x
      3.5: 28, // --spacing-scale-3xh
      4: 32, // --spacing-scale-4x
      4.5: 36, // --spacing-scale-4xh
      5: 40, // --spacing-scale-5x
      5.5: 44, // --spacing-scale-5xh
      6: 48, // --spacing-scale-6x
      6.5: 52, // --spacing-scale-6xh
      7: 56, // --spacing-scale-7x
      7.5: 60, // --spacing-scale-7xh
      8: 64, // --spacing-scale-8x
      8.5: 68, // --spacing-scale-8xh
      9: 72, // --spacing-scale-9x
      9.5: 76, // --spacing-scale-9xh
      10: 80, // --spacing-scale-10x
      10.5: 84, // --spacing-scale-10xh
    }
    return (spacingMap as any)[factor] || factor * 8 // Fallback para o padrão MUI se não mapeado
  },

  // 4. Quebras de Layout (Breakpoints)
  breakpoints: {
    values: {
      xs: 0, // govbr: grid-breakpoint-xs
      sm: 576, // govbr: grid-breakpoint-sm
      md: 992, // govbr: grid-breakpoint-md
      lg: 1280, // govbr: grid-breakpoint-lg
      xl: 1600, // govbr: grid-breakpoint-xl
    },
  },

  // 5. Sombras (Shadows)
  shadows: [
    'none', // Padrão MUI para index 0
    '0px 1px 6px rgba(0, 0, 0, 0.16)', // Exemplo de surface-shadow-sm
    '0px 3px 6px rgba(0, 0, 0, 0.16)', // Exemplo de surface-shadow-md
    '0px 6px 6px rgba(0, 0, 0, 0.16)', // Exemplo de surface-shadow-lg
    '0px 9px 6px rgba(0, 0, 0, 0.16)', // Exemplo de surface-shadow-xl
    ...Array(20).fill('none'), // Preenche o restante com 'none' ou defina mais se precisar
  ] as any, // Cast para any para evitar erro de tipo com menos de 25 sombras

  // 6. Formas (Shape - para border-radius)
  shape: {
    borderRadius: 4, // govbr: surface-rounder-sm. Use uma unidade base e multiplique
    // Defina outras formas aqui se necessário (ex: para elementos específicos)
  },

  // 7. Transições (Transitions)
  transitions: {
    easing: {
      easeIn: 'cubic-bezier(0.42,0,1,1)', // govbr: animation-ease-in
      easeOut: 'cubic-bezier(0,0,0.58,1)', // govbr: animation-ease-out
      easeInOut: 'cubic-bezier(0.42,0,0.58,1)', // govbr: animation-ease-in-out
    },
    duration: {
      shortest: 100, // Aproximado
      shorter: 150, // Aproximado
      short: 200, // Aproximado
      standard: 300, // govbr: duration-fast (300ms)
      complex: 500, // govbr: duration-moderate (500ms)
      enteringScreen: 800, // govbr: duration-slow (800ms)
      leavingScreen: 1000, // govbr: duration-very-slow (1000ms)
    },
  },

  // 8. Sobrescritas de Componentes (Component Overrides)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100em', // govbr: button-radius
          height: '40px', // govbr: button-medium
          fontSize: '1.2rem', // govbr: font-size-scale-up-01
          fontWeight: 600, // govbr: font-weight-semi-bold
          padding: '0 24px', // govbr: spacing-scale-3x
          textTransform: 'none', // Remove uppercase padrão do MUI
          '&:focus': {
            outline: 'none',
          },
          '&.Mui-focusVisible': {
            outlineColor: '#F29F05', // govbr: focus-color-light (gold-vivid-40)
            outlineOffset: '4px', // govbr: focus-offset
            outlineStyle: 'dashed', // govbr: focus-style
            outlineWidth: '4px', // govbr: focus-width
          },
          '&:hover': {
            backgroundImage:
              'linear-gradient(rgba(var(--interactive-rgb),0.16),rgba(var(--interactive-rgb),0.16))',
          },
          '&:active': {
            backgroundImage:
              'linear-gradient(rgba(var(--interactive-rgb),0.45),rgba(var(--interactive-rgb),0.45))',
          },
        },
        containedPrimary: {
          backgroundColor: '#1351B4', // govbr: interactive-light
          color: '#fff', // govbr: color-dark (para contraste)
          '&:hover': {
            backgroundColor: '#1351B4', // Manter a cor base e aplicar o hover effect
          },
        },
        outlinedPrimary: {
          borderColor: '#1351B4', // govbr: interactive
          color: '#1351B4', // govbr: interactive
          '&:hover': {
            backgroundColor: 'transparent', // Manter a cor base e aplicar o hover effect
          },
        },
        containedSecondary: {
          backgroundColor: '#FFD200',
          color: '#333',
          '&:hover': {
            backgroundColor: '#FFD200', // Manter a cor base e aplicar o hover effect
          },
        },
        textPrimary: {
          color: '#1351B4', // govbr: interactive
        },
        // Adicione outros estilos para variantes e tamanhos (small, large) conforme GovBR-DS
        sizeSmall: {
          height: '32px', // govbr: button-small
        },
        sizeLarge: {
          height: '48px', // govbr: button-large
        },
      },
    },
    MuiInputBase: {
      // Para todos os inputs (TextField, Select, etc.)
      styleOverrides: {
        root: {
          backgroundColor: '#fff', // govbr: background-light
          borderColor: '#ccc', // govbr: border-color-alternative
          borderRadius: '4px', // govbr: surface-rounder-sm
          borderStyle: 'solid', // govbr: border-style
          borderWidth: '1px', // govbr: border-width
          color: '#757575', // govbr: color-light (para o texto do input)
          fontSize: '1.2rem', // govbr: font-size-scale-up-01
          fontWeight: 500, // govbr: font-weight-medium
          height: '40px', // govbr: input-medium
          padding: '0 16px', // govbr: spacing-scale-2x
          '&:hover': {
            backgroundImage:
              'linear-gradient(rgba(var(--gray-80-rgb),0.16),rgba(var(--gray-80-rgb),0.16))', // Usar gray-80 para o hover em inputs neutros
          },
          '&.Mui-focused': {
            borderColor: '#F29F05', // govbr: focus-color-light (gold-vivid-40)
            boxShadow: '0 0 0 2px #F29F05', // govbr: focus-width, focus-offset
            outline: 'none',
          },
          '&.Mui-error': {
            borderColor: '#D04F4F', // govbr: danger
            borderWidth: '2px',
          },
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            opacity: 0.45, // govbr: disabled
          },
        },
      },
    },
    MuiInputLabel: {
      // Labels para inputs
      styleOverrides: {
        root: {
          color: '#333', // govbr: color (text-color)
          fontSize: '1rem', // govbr: font-size-scale-base
          fontWeight: 600, // govbr: font-weight-semi-bold
          marginBottom: '4px', // govbr: spacing-scale-half
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ccc', // govbr: gray-20 (cor da borda antes de checked)
          '&.Mui-checked': {
            color: '#1351B4', // govbr: selected (para o ícone de checked)
          },
          '&.Mui-disabled': {
            color: 'rgba(57,57,57,.1)', // govbr: flatpickr-day.flatpickr-disabled
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#ccc', // govbr: gray-20
          '&.Mui-checked': {
            color: '#1351B4', // govbr: selected
          },
          '&.Mui-disabled': {
            color: 'rgba(57,57,57,.1)', // govbr: flatpickr-day.flatpickr-disabled
          },
        },
      },
    },
    MuiLinearProgress: {
      // Exemplo para barras de progresso
      styleOverrides: {
        root: {
          backgroundColor: '#e6e6e6', // govbr: gray-10 (track color)
        },
        bar: {
          backgroundColor: '#1351B4', // govbr: primary
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#155bcb', // govbr: color-info
          borderRadius: '4px', // govbr: surface-rounder-sm
          boxShadow: '0 3px 6px rgba(0,0,0,.16)', // govbr: br-tooltip box-shadow
          color: '#fff', // govbr: color-secondary-01
          fontSize: '0.833rem', // govbr: font-size-scale-down-01
          fontWeight: 500, // govbr: font-weight-medium
          maxWidth: '240px',
          padding: '16px', // govbr: spacing-scale-2x
        },
        arrow: {
          color: '#155bcb', // govbr: color-info
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#0076d6', // govbr: blue-vivid-50 (interactive-light no body)
          textDecoration: 'none',
          '&:hover': {
            backgroundImage: 'linear-gradient(rgba(0,118,214,0.16),rgba(0,118,214,0.16))', // Usar RGB do interactive-light com hover opacity
          },
          '&:focus-visible': {
            outlineColor: '#F29F05', // govbr: focus-color-light
            outlineOffset: '4px', // govbr: focus-offset
            outlineStyle: 'dashed', // govbr: focus-style
            outlineWidth: '4px', // govbr: focus-width
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
          width: '100%',
          '& th': {
            backgroundColor: '#f0f0f0', // govbr: background-alternative (gray-5)
            fontWeight: 600, // govbr: table-th-font-weight
            padding: '16px 24px', // govbr: table-row-size (spacing-scale-2x) e table-padding (spacing-scale-3x)
            textAlign: 'left',
          },
          '& td': {
            fontWeight: 500, // govbr: table-font-weight
            padding: '16px 24px', // govbr: table-row-size e table-padding
            borderBottom: '1px solid #e6e6e6', // govbr: table-border-width, table-border-style, table-border-color
          },
          '& tr:hover td': {
            backgroundImage: 'linear-gradient(rgba(51,51,51,0.16),rgba(51,51,51,0.16))', // Usar gray-80-rgb (color-rgb) com hover opacity
          },
          '& tr.Mui-selected': {
            backgroundColor: '#4a77b4', // govbr: selected (blue-warm-50)
            color: '#fff', // govbr: color-dark
            '& td': {
              color: '#fff',
            },
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          // Estilo padrão para parágrafos
          // Mapeando p do CSS, que é body1 por padrão no MUI
          marginBottom: 'var(--spacing-scale-2x)',
          marginTop: 0,
          '& a': {
            textDecoration: 'underline',
          },
        },
        // Mapeamento para as variantes de texto do GovBR-DS (se precisar além dos H1-H6)
        body1: {
          // Exemplo para o body1 do MUI (que é o padrão do <p>)
          fontSize: 'var(--font-size-scale-base)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--font-line-height-medium)',
          // Adicione breakpoints se o body1 tiver tamanhos diferentes em telas maiores
          '@media (min-width:576px)': {
            // Se o body1 mudar em sm, como o <p> no CSS do GovBR-DS
            // fontSize: 'var(--font-size-scale-up-01)',
          },
        },
        // Você pode continuar mapeando outras variantes de texto aqui, como body2, caption, etc.
        // Exemplo para um texto pequeno do GovBR-DS (text-down-01)
        caption: {
          fontSize: 'var(--font-size-scale-down-01)',
          fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--font-line-height-medium)',
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          // Baseado em .br-switch
          minHeight: 'var(--switch-height-medium)', // Ex: 30px
          // Ajuste para posicionamento da label se necessário

          // Estilos para MuiSwitch-sizeSmall
          '&.MuiSwitch-sizeSmall': {
            '& .MuiSwitch-track': {
              height: 'var(--switch-height-small)', // 24px
              width: 'var(--switch-width-small)', // 40px
            },
            '& .MuiSwitch-thumb': {
              height: 'var(--switch-toggle-small)', // 16px
              width: 'var(--switch-toggle-small)', // 16px
              '&:after': {
                fontSize: 'var(--switch-icon-small)', // 8px
              },
            },
          },
          // Estilos para MuiSwitch-sizeLarge
          '&.MuiSwitch-sizeLarge': {
            '& .MuiSwitch-track': {
              height: 'var(--switch-height-large)', // 36px
              width: 'var(--switch-width-large)', // 64px
            },
            '& .MuiSwitch-thumb': {
              height: 'var(--switch-toggle-large)', // 28px
              width: 'var(--switch-toggle-large)', // 28px
              '&:after': {
                fontSize: 'var(--switch-icon-large)', // 16px
              },
            },
          },
          // Estilos de foco (.Mui-focusVisible)
          '&.Mui-focusVisible': {
            '& .MuiSwitch-track': {
              borderColor: 'var(--focus) !important', // Bordas
              boxShadow: '0 0 0 var(--surface-width-md) var(--focus)', // Sombra de foco
              outline: 'none',
            },
          },

          // Estiliza o estado checked
          '&.Mui-checked': {
            // Mova checked para dentro de root
            '& .MuiSwitch-thumb': {
              backgroundColor: 'var(--on)', // Cor do "toggle" quando on
              '&:after': {
                content: '"\\f00c"', // Icone de "check" para on
              },
            },
            // Note: O track do GovBR-DS não muda de cor substancialmente no checked, apenas o thumb
          },

          // Estiliza o estado disabled
          '&.Mui-disabled': {
            // Mova disabled para dentro de root
            cursor: 'not-allowed',
            opacity: 'var(--disabled)', // 0.45
            '& *': {
              pointerEvents: 'none',
            },
          },

          // Mova os estilos de hover para cá, dentro de root
          '&:hover': {
            '& .MuiSwitch-track': {
              backgroundImage:
                'linear-gradient(rgba(var(--interactive-rgb),var(--hover)),rgba(var(--interactive-rgb),var(--hover)))',
            },
            // E para o estado checked no hover
            // Aqui você deve usar &.Mui-checked para combinar com o hover
            '&.Mui-checked .MuiSwitch-track': {
              backgroundImage:
                'linear-gradient(rgba(var(--on-rgb),var(--hover)),rgba(var(--on-rgb),var(--hover)))',
            },
          },
        },

        // Eles devem estar aninhados dentro de 'root' ou em seus próprios slots (thumb, track, se aplicável)
        thumb: {
          // Este é um slot válido, pode permanecer
          backgroundColor: 'var(--off)', // Cor do "toggle" quando off
          height: 'var(--switch-toggle-medium)', // Ex: 22px
          width: 'var(--switch-toggle-medium)', // Ex: 22px
          transition: 'all .3s ease-in-out',
          '&:after': {
            // Ícone de "X" ou "check" dentro do thumb
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            fontFamily: 'Font Awesome\\ 5 Free,sans-serif',
            fontSize: 'var(--switch-icon-medium)', // Ex: 12px
            fontWeight: 'var(--font-weight-black)', // 900
            color: 'var(--color-dark)', // Cor do ícone
            content: '"\\f00d"', // Icone de "X" para off
          },
        },
        track: {
          // Este é um slot válido, pode permanecer
          backgroundColor: 'var(--background-light)', // Cor do fundo da trilha
          border: '1px solid var(--border-color)', // Borda da trilha
          borderRadius: '100em',
          height: 'var(--switch-height-medium)', // Ex: 30px
          width: 'var(--switch-width-medium)', // Ex: 52px
          opacity: 1, // Remover opacidade padrão do MUI
        },
        // ... (resto do seu código)
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--background)', // govbr: background
          boxShadow: 'var(--surface-shadow-sm)',
          color: 'var(--color)',
          marginBottom: 'var(--spacing-scale-2x)',
          // Adicionar estilos para variações .h-fixed
          // É mais complexo fazer diretamente no MuiCard, pode precisar de uma prop customizada ou um componente wrapper.
          // Exemplo (conceitual):
          // '&.h-fixed': {
          //   '& .MuiCardContent-root': {
          //     maxHeight: 'var(--card-height-fixed)',
          //     overflowY: 'auto',
          //   },
          // },
        },
        // Estilos para as áreas do Card
        // As classes do GovBR-DS são .card-header, .card-content, .card-footer
        // No MUI, são MuiCardHeader, MuiCardContent, MuiCardActions ou MuiCardMedia
        // Você pode aplicar padding aqui, ou no componente específico (MuiCardContent, MuiCardHeader)
        // para maior controle. Exemplo:
        // MuiCardContent: {
        //   root: {
        //     padding: 'var(--card-padding)',
        //     '&:last-child': {
        //       paddingBottom: 'var(--card-padding)', // Garante que o último elemento tenha padding inferior
        //     },
        //   },
        // },
        // MuiCardHeader: {
        //   root: {
        //     padding: 'var(--card-padding) var(--card-padding) 0',
        //   },
        // },
        // MuiCardActions: { // Ou um div dentro do card para footer
        //   root: {
        //     padding: '0 var(--card-padding) var(--card-padding)',
        //   },
        // },
        // Estilo para o hover
        '&:hover': {
          // O GovBR-DS usa background-image linear-gradient com rgba do color-rgb
          backgroundImage:
            'linear-gradient(rgba(var(--color-rgb),var(--hover)),rgba(var(--color-rgb),var(--hover)))',
          backgroundColor: 'transparent', // Remover background-color padrão do MUI no hover
        },
      } as any,
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'var(--border-color)',
          borderStyle: 'solid',
          borderWidth: 0,
          borderTopWidth: 'var(--surface-width-sm)', // Default
          display: 'block',
          margin: 'var(--spacing-scale-2x) 0', // Baseado em hr do GovBR-DS
          // Variações de tamanho e estilo
          '&.MuiDivider-light': {
            // Para sm
            borderTopWidth: 'var(--surface-width-sm)', // 1px
          },
          '&.MuiDivider-middle': {
            // Para md
            borderTopWidth: 'var(--surface-width-md)', // 2px
          },
          '&.MuiDivider-heavy': {
            // Para lg
            borderTopWidth: 'var(--surface-width-lg)', // 4px
          },
          '&.MuiDivider-flexItem': {
            // Para vertical (MuiDivider-vertical)
            borderRightWidth: 'var(--surface-width-sm)',
            borderTopWidth: 0,
            alignSelf: 'stretch', // Para ocupar a altura total
          },
          '&.MuiDivider-dashed': {
            borderStyle: 'dashed',
          },
        },
        // O MuiDivider-withChildren do MUI é para conteúdo no meio
        // O GovBR-DS usa .br-divider.content
        // &::before e &::after são usados para as linhas.
        // Pode ser necessário usar uma prop customizada no MUI para ativar esse estilo ou
        // um componente wrapper para MuiDivider.
      },
    },

    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--background)',
          // Adicionar box-shadow quando a lista for usada como dropdown/menu,
          // o que geralmente é feito via um MuiPopover ou MuiMenu.
          // Aqui é mais genérico, então cuidado para não aplicar em todas as listas.
          // box-shadow: 'var(--select-shadow)', // ou var(--surface-shadow-md)
          margin: 0,
          padding: 0,
          listStyle: 'none',
          // Estilo para .br-list.horizontal
          '&.horizontal': {
            display: 'flex',
            flexWrap: 'wrap',
          },
          // Estilos para .br-menu (background-submenu)
          // Em um MuiMenu/MuiPopover, pode-se usar paperProps para customizar o Paper que envolve a lista.
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--background)',
          border: 0,
          color: 'var(--color)',
          display: 'block', // ou flex, dependendo do conteúdo
          fontWeight: 'var(--font-weight-regular)', // Padrão
          padding: 'var(--spacing-scale-base) var(--spacing-scale-2x)', // Ex: 8px 16px (item-padding)
          textAlign: 'left',
          width: '100%',
          // Estilos para .br-item.selected, .br-item.active
          '&.Mui-selected': {
            backgroundColor: 'var(--selected)',
            color: 'var(--color-dark)',
            '& .MuiListItemText-primary': {
              // Se usar ListItemText
              color: 'var(--color-dark)',
            },
            '& .MuiListItemText-secondary': {
              color: 'var(--color-dark)',
            },
          },
          '&.Mui-focusVisible': {
            outlineColor: 'var(--focus)',
            outlineOffset: 'calc(var(--focus-width) * -1)', // -4px para o br-item
            outlineStyle: 'var(--focus-style)',
            outlineWidth: 'var(--focus-width)',
          },
          '&:hover': {
            backgroundImage:
              'linear-gradient(rgba(var(--color-rgb),var(--hover)),rgba(var(--color-rgb),var(--hover)))',
            backgroundColor: 'transparent',
          },
          // Estilos para .br-item[data-toggle]
          cursor: 'pointer',
          // Adicione aqui estilos para MuiListItemText, MuiListItemIcon se usados dentro
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          // Baseado em .br-breadcrumb
          display: 'inline-grid',
          fontSize: 'var(--font-size-scale-down-01)',
          fontWeight: 'var(--font-weight-medium)',
          minHeight: 'var(--spacing-scale-7x)', // 56px
          position: 'relative',
        },
        li: {
          // Estilos para cada item (crumb)
          alignItems: 'center',
          display: 'flex',
          height: 'var(--spacing-scale-5x)', // 40px
          // Estilos para o ícone separador do GovBR-DS
          // O MUI usa MuiBreadcrumbs-separator.
          '& .MuiBreadcrumbs-separator': {
            color: 'var(--border-color)',
            fontSize: 'var(--icon-size-sm)',
            marginRight: '-6px', // Espaçamento negativo do GovBR-DS
          },
          '& a': {
            maxWidth: '180px',
            overflow: 'hidden',
            textDecoration: 'none',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            margin: '0 var(--spacing-scale-base)', // 8px para cada lado
          },
          '&:last-child span': {
            // Para o último item, que é o ativo
            fontWeight: 'var(--font-weight-medium)',
            margin: '0 var(--spacing-scale-2x) 0 var(--spacing-scale-base)', // 16px 0 0 8px
            whiteSpace: 'nowrap',
          },
        },
        separator: {
          // Já configurado acima dentro do li
        },
        // Estilos para menus mobile do breadcrumb (br-card dentro)
        // Isso seria mais complexo e provavelmente exigiria um slot customizado ou um componente wrapper.
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          // Baseado em .br-header
          backgroundColor: 'var(--background)',
          boxShadow: 'var(--surface-shadow-sm)',
          padding: 'var(--header-padding-medium) 0', // 16px 0
          position: 'relative',
          display: 'flex', // MUI já é flex por padrão
          flexDirection: 'column', // Para alinhar header-top e header-bottom
          // Se tiver data-sticky
          '&[data-sticky="true"]': {
            position: 'sticky',
            top: 0,
            zIndex: 'var(--z-index-layer-2)',
            transition: 'all .15s ease', // Transição do GovBR-DS
            // Estilos para logo, menu-trigger, title em data-sticky
            '& .MuiTypography-h6': {
              // Exemplo para o título
              transition: 'all .15s ease',
            },
            '& .MuiButtonBase-root': {
              // Para botões como menu-trigger
              transition: 'all .15s ease',
            },
            // ... e outros elementos que fazem transição ao ficar sticky
          },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          // Mapeando a estrutura interna do .br-header
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', // Para header-bottom padrão
          // Para header-top e header-bottom separadamente, talvez precise de divs internas ou prop 'variant'
          // Exemplo para um `header-top` (justify-content-flex-end)
          '&.MuiToolbar-gutters:first-of-type': {
            // Assumindo o primeiro toolbar é o top
            justifyContent: 'flex-end',
          },
          // Exemplo para um `header-bottom` (justify-content-space-between)
          '&.MuiToolbar-gutters:last-of-type': {
            // Assumindo o último toolbar é o bottom
            justifyContent: 'space-between',
            marginTop: 'var(--header-padding-small)', // 8px
          },
        },
      },
    },
  },
})

// Para garantir que as fontes responsivas do MUI funcionem bem com o sistema de tamanhos do GovBR
govbrTheme = responsiveFontSizes(govbrTheme)

export { govbrTheme }
