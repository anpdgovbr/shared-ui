// src/theme/foundations/colorMapping.ts

import { govbrColors } from './paletteValues'

/**
 * Mapeamento de CSS variables para valores HEX diretos
 * Para uso na substituição em massa de variáveis nos componentes
 */
export const cssVariableToHex = {
  // Cores principais
  'var(--interactive, #1351B4)': govbrColors.blueWarmVivid[70], // #1351b4
  'var(--interactive-light, #5992ed)': govbrColors.blueWarmVivid[40], // #5992ed
  'var(--interactive-dark, #0c326f)': govbrColors.blueWarmVivid[80], // #0c326f

  // Cores de texto
  'var(--color, #333333)': govbrColors.gray[80], // #333333
  'var(--color-dark, #000000)': govbrColors.pure[100], // #000000
  'var(--color-lightest, #ffffff)': govbrColors.pure[0], // #ffffff

  // Grays
  'var(--gray-10, #eeeeee)': govbrColors.gray[20], // #eeeeee
  'var(--gray-20, #cccccc)': govbrColors.gray[40], // #cccccc
  'var(--gray-40, #999999)': govbrColors.gray[50], // #999999
  'var(--gray-60, #777777)': govbrColors.gray[60], // #757575
  'var(--gray-70, #666666)': govbrColors.gray[70], // #666666
  'var(--gray-80, #333333)': govbrColors.gray[80], // #333333

  // Background
  'var(--background, #ffffff)': govbrColors.pure[0], // #ffffff
  'var(--background-light, #f8f8f8)': govbrColors.gray[5], // #fafafa

  // Feedback colors - Error
  'var(--feedback-error-vivid, #D04F4F)': govbrColors.redVivid[50], // #d04f4f
  'var(--feedback-error-dark, #B73E3E)': govbrColors.redVivid[70], // #800610
  'var(--feedback-error-darker, #9E2B2B)': govbrColors.redVivid[80], // #540b0e
  'var(--feedback-error-light, #F8A8A8)': govbrColors.redVivid[20], // #f8a8a8

  // Feedback colors - Success
  'var(--feedback-success-vivid, #168821)': govbrColors.greenCoolVivid[50], // #168821
  'var(--feedback-success-dark, #0F5E1A)': govbrColors.greenCoolVivid[70], // #154c21
  'var(--feedback-success-darker, #0A4A15)': govbrColors.greenCoolVivid[80], // #19311e

  // Feedback colors - Warning
  'var(--feedback-warning-vivid, #F29F05)': govbrColors.orangeVivid[30], // #f29f05
  'var(--feedback-warning-dark, #C8850A)': govbrColors.orangeVivid[50], // #c05600
  'var(--feedback-warning-darker, #9F6B08)': govbrColors.orangeVivid[60], // #a54c00
  'var(--feedback-warning-light, #FFD966)': govbrColors.orangeVivid[20], // #ffbc78

  // Yellow vivid
  'var(--yellow-vivid-20, #FFD200)': govbrColors.yellowVivid[20], // #ffd200
  'var(--yellow-vivid-10, #ffe396)': govbrColors.yellowVivid[10], // #ffe396
  'var(--yellow-vivid-30, #ddaa01)': govbrColors.yellowVivid[30], // #ddaa01

  // Blue cool vivid
  'var(--blue-cool-vivid-50, #007FA3)': govbrColors.blueCoolVivid[50], // #0d7ea2
  'var(--blue-cool-vivid-60, #074b69)': govbrColors.blueCoolVivid[70], // #074b69
} as const
