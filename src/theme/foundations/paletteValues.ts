// src/theme/foundations/paletteValues.ts

/**
 * Valores de cores estáticos baseados no GovBR Design System
 *
 * @security Valores HEX fixos previnem erros de runtime quando CSS variables falham
 * @resilience Paleta completa com múltiplas tonalidades garante flexibilidade sem quebrar acessibilidade
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
 * Cores institucionais da ANPD baseadas no padrão visual da Autoridade Nacional de Proteção de Dados
 * Seguindo a mesma estrutura de variações do govbrColors
 */
export const anpdColors = {
  // Green ANPD (Primary) - Verde institucional da ANPD
  greenAnpd: {
    90: '#0a1f13',
    80: '#20502e', // Dark variant
    70: '#2a6939',
    60: '#307244', // Main - cor principal da ANPD
    50: '#3d8b54',
    40: '#4c9a61', // Light variant
    30: '#6bb37e',
    20: '#92c9a3',
    10: '#b8ddc4',
    5: '#e0f2e6',
  },

  // Blue ANPD (Secondary) - Azul complementar da ANPD
  blueAnpd: {
    90: '#002838',
    80: '#004d66',
    70: '#0079b0', // Dark variant
    60: '#008dc4',
    50: '#00aeef', // Main - azul ANPD
    40: '#33bff2',
    30: '#5fccff', // Light variant
    20: '#8ddbff',
    10: '#b8e8ff',
    5: '#e0f5ff',
  },

  // Orange ANPD (Accent) - Laranja para destaques e alertas
  orangeAnpd: {
    90: '#4d2600',
    80: '#6b3600',
    70: '#c77900', // Dark variant
    60: '#e08a00',
    50: '#faa61a', // Main - laranja ANPD
    40: '#fbb847',
    30: '#fcc670', // Light variant
    20: '#fdd699',
    10: '#fee5c2',
    5: '#fff4e5',
  },

  // Green Cool (Success) - Mantendo padrão Gov.br para success
  greenCoolAnpd: {
    80: '#19311e',
    70: '#154c21',
    60: '#216e1f',
    50: '#2e7d32', // Main - verde para sucessos
    40: '#4caf50',
    30: '#66bb6a',
    20: '#81c784',
    10: '#a5d6a7',
    5: '#c8e6c9',
  },

  // Gray Scale (mesma do Gov.br para consistência)
  gray: {
    90: '#101820',
    80: '#212121', // Text primary ANPD
    70: '#4f4f4f', // Text secondary ANPD
    60: '#757575',
    50: '#999999',
    40: '#cccccc',
    30: '#dddddd',
    20: '#eeeeee',
    10: '#f5f5f5', // Background ANPD
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
export const govbrPalette = {
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

/**
 * Paleta de cores ANPD para o MUI usando valores HEX diretos
 * Baseada nas cores institucionais da ANPD com estrutura compatível com MUI
 */
export const anpdPalette = {
  primary: {
    main: anpdColors.greenAnpd[60], // #307244
    light: anpdColors.greenAnpd[40], // #4c9a61
    dark: anpdColors.greenAnpd[80], // #20502e
    contrastText: anpdColors.pure[0], // #ffffff
  },

  secondary: {
    main: anpdColors.blueAnpd[50], // #00aeef
    light: anpdColors.blueAnpd[30], // #5fccff
    dark: anpdColors.blueAnpd[70], // #0079b0
    contrastText: anpdColors.pure[0], // #ffffff
  },

  success: {
    main: anpdColors.greenCoolAnpd[50], // #2e7d32
    light: anpdColors.greenCoolAnpd[20], // #81c784
    dark: anpdColors.greenCoolAnpd[70], // #154c21
    contrastText: anpdColors.pure[0], // #ffffff
  },

  warning: {
    main: anpdColors.orangeAnpd[50], // #faa61a
    light: anpdColors.orangeAnpd[30], // #fcc670
    dark: anpdColors.orangeAnpd[70], // #c77900
    contrastText: anpdColors.pure[100], // #000000
  },

  info: {
    main: anpdColors.blueAnpd[50], // #00aeef
    light: anpdColors.blueAnpd[30], // #5fccff
    dark: anpdColors.blueAnpd[70], // #0079b0
    contrastText: anpdColors.pure[0], // #ffffff
  },

  error: {
    main: 'rgba(194, 24, 7, 0.85)', // Vermelho Gov.br (mantendo padrão)
    light: govbrColors.redVivid[30], // #fd8ba0
    dark: govbrColors.redVivid[70], // #800610
    contrastText: anpdColors.pure[0], // #ffffff
  },

  grey: {
    50: anpdColors.gray[5], // #fafafa
    100: anpdColors.gray[10], // #f5f5f5
    200: anpdColors.gray[20], // #eeeeee
    300: anpdColors.gray[30], // #dddddd
    400: anpdColors.gray[40], // #cccccc
    500: anpdColors.gray[50], // #999999
    600: anpdColors.gray[60], // #757575
    700: anpdColors.gray[70], // #4f4f4f
    800: anpdColors.gray[80], // #212121
    900: anpdColors.gray[90], // #101820
    A100: anpdColors.gray[10], // #f5f5f5
    A200: anpdColors.gray[20], // #eeeeee
    A400: anpdColors.gray[40], // #cccccc
    A700: anpdColors.gray[70], // #4f4f4f
  },

  text: {
    primary: anpdColors.gray[80], // #212121
    secondary: anpdColors.gray[70], // #4f4f4f
    disabled: anpdColors.gray[50], // #999999
  },

  divider: anpdColors.gray[30], // #dddddd

  background: {
    default: anpdColors.gray[10], // #f5f5f5
    paper: anpdColors.pure[0], // #ffffff
  },

  action: {
    active: anpdColors.greenAnpd[60], // #307244
    hover: anpdColors.gray[10], // #f5f5f5
    selected: anpdColors.greenAnpd[10], // #b8ddc4
    disabled: anpdColors.gray[40], // #cccccc
    disabledBackground: anpdColors.gray[20], // #eeeeee
  },
} as const
