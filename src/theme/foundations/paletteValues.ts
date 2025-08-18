// src/theme/foundations/paletteValues.ts

/**
 * Valores de cores estáticos baseados no GovBR Design System
 *
 * Esta versão usa valores HEX diretos em vez de CSS variables
 * para evitar erros no Storybook e outras situações onde o MUI
 * precisa processar as cores com suas funções (alpha, lighten, etc.)
 */

export const govbrColors = {
  // Blue Warm Vivid (Primary)
  blueWarmVivid: {
    90: '#071d41',
    80: '#0c326f',
    70: '#1351b4', // Interactive main
    60: '#155bcb',
    50: '#2670e8',
    40: '#5992ed', // Interactive light
    30: '#81aefc',
    20: '#adcdff',
    10: '#d4e5ff',
    5: '#edf5ff',
  },

  // Yellow Vivid (Secondary)
  yellowVivid: {
    40: '#c2850c',
    30: '#ddaa01', // Secondary dark
    20: '#ffd200', // Secondary main
    10: '#ffe396', // Secondary light
    5: '#fef0c8',
  },

  // Green Cool Vivid (Success)
  greenCoolVivid: {
    80: '#19311e',
    70: '#154c21', // Success dark
    60: '#216e1f',
    50: '#168821', // Success main
    40: '#00a91c',
    30: '#21c834',
    20: '#70e17b', // Success light
    10: '#b7f5bd',
    5: '#e3f5e1',
  },

  // Orange Vivid (Warning)
  orangeVivid: {
    70: '#8f4700',
    60: '#a54c00',
    50: '#c05600', // Warning dark
    40: '#d66d00',
    30: '#f29f05', // Warning main
    20: '#ffbc78', // Warning light
    10: '#fdd4a6',
    5: '#fef2e4',
  },

  // Blue Cool Vivid (Info)
  blueCoolVivid: {
    80: '#002d3f',
    70: '#074b69', // Info dark
    60: '#07648d',
    50: '#0d7ea2', // Info main
    40: '#28a0cb',
    30: '#59b9de', // Info light
    20: '#97d4ea',
    10: '#c3ebfa',
    5: '#e1f3f8',
  },

  // Red Vivid (Error)
  redVivid: {
    80: '#540b0e',
    70: '#800610',
    60: '#a91920',
    50: '#d04f4f', // Error main
    40: '#e85d64',
    30: '#fd8ba0', // Error light
    20: '#f8a8a8',
    10: '#f9dede',
    5: '#fef0f0',
  },

  // Gray Scale
  gray: {
    90: '#101820',
    80: '#333333',
    70: '#666666',
    60: '#757575',
    50: '#999999',
    40: '#cccccc',
    30: '#dddddd',
    20: '#eeeeee',
    10: '#f6f6f6',
    5: '#fafafa',
  },

  // Pure colors
  pure: {
    100: '#000000',
    0: '#ffffff',
  },
} as const

/**
 * Paleta de cores para o MUI usando valores HEX diretos
 * Esta versão será usada nos overrides de componentes onde o MUI
 * precisa processar as cores com suas funções internas.
 */
export const muiPalette = {
  primary: {
    main: govbrColors.blueWarmVivid[70], // #1351b4
    light: govbrColors.blueWarmVivid[40], // #5992ed
    dark: govbrColors.blueWarmVivid[80], // #0c326f
    contrastText: govbrColors.pure[0], // #ffffff
  },

  secondary: {
    main: govbrColors.yellowVivid[20], // #ffd200
    light: govbrColors.yellowVivid[10], // #ffe396
    dark: govbrColors.yellowVivid[30], // #ddaa01
    contrastText: govbrColors.gray[80], // #333333
  },

  success: {
    main: govbrColors.greenCoolVivid[50], // #168821
    light: govbrColors.greenCoolVivid[20], // #70e17b
    dark: govbrColors.greenCoolVivid[70], // #154c21
    contrastText: govbrColors.pure[0], // #ffffff
  },

  warning: {
    main: govbrColors.orangeVivid[30], // #f29f05
    light: govbrColors.orangeVivid[20], // #ffbc78
    dark: govbrColors.orangeVivid[50], // #c05600
    contrastText: govbrColors.gray[80], // #333333
  },

  info: {
    main: govbrColors.blueCoolVivid[50], // #0d7ea2
    light: govbrColors.blueCoolVivid[30], // #59b9de
    dark: govbrColors.blueCoolVivid[70], // #074b69
    contrastText: govbrColors.pure[0], // #ffffff
  },

  error: {
    main: govbrColors.redVivid[50], // #d04f4f
    light: govbrColors.redVivid[30], // #fd8ba0
    dark: govbrColors.redVivid[70], // #800610
    contrastText: govbrColors.pure[0], // #ffffff
  },

  grey: {
    50: govbrColors.gray[5], // #fafafa
    100: govbrColors.gray[10], // #f6f6f6
    200: govbrColors.gray[20], // #eeeeee
    300: govbrColors.gray[30], // #dddddd
    400: govbrColors.gray[40], // #cccccc
    500: govbrColors.gray[50], // #999999
    600: govbrColors.gray[60], // #757575
    700: govbrColors.gray[70], // #666666
    800: govbrColors.gray[80], // #333333
    900: govbrColors.gray[90], // #101820
    A100: govbrColors.gray[10], // #f6f6f6
    A200: govbrColors.gray[20], // #eeeeee
    A400: govbrColors.gray[40], // #cccccc
    A700: govbrColors.gray[70], // #666666
  },

  text: {
    primary: govbrColors.gray[80], // #333333
    secondary: govbrColors.gray[60], // #757575
    disabled: govbrColors.gray[50], // #999999
  },

  divider: govbrColors.gray[30], // #dddddd

  background: {
    default: govbrColors.pure[0], // #ffffff
    paper: govbrColors.pure[0], // #ffffff
  },

  action: {
    active: govbrColors.blueWarmVivid[70], // #1351b4
    hover: govbrColors.gray[10], // #f6f6f6
    selected: govbrColors.blueWarmVivid[10], // #d4e5ff
    disabled: govbrColors.gray[40], // #cccccc
    disabledBackground: govbrColors.gray[20], // #eeeeee
  },
} as const
