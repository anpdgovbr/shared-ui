import { ButtonProps } from '@mui/material'
// src\helper\MuiColorToGovBRClass.ts

/**
 * Mapeia a propriedade `color` do MUI para a classe correspondente do Design System GovBR.
 *
 * @param color Cor do botão conforme o MUI.
 * @returns Classe de cor correspondente ao padrão GovBR.
 *
 * @remarks
 * O Design System GovBR utiliza as seguintes classes de cor:
 * - `primary`
 * - `secondary`
 * - `success`
 * - `warning`
 * - `danger`
 *
 * Diferenças principais:
 * - O MUI utiliza `error`, enquanto o GovBR utiliza `danger`.
 * - O MUI possui `info`, que não é explicitamente utilizado no GovBR, mas pode ser mapeado para `info` para casos de uso específicos.
 *
 * @example
 * // Mapeando a cor 'primary' do MUI para a classe 'primary'
 *
 * const govbrClass = mapMuiColorToGovbrClass('primary'); // retorna 'primary'
 */
export function mapMuiColorToGovbrClass(color?: ButtonProps['color']): string {
  switch (color) {
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'success':
      return 'success'
    case 'warning':
      return 'warning'
    // O GovBR não possui 'info' explicitamente, mas pode ser tratado conforme necessidade.
    case 'info':
      return 'info'
    // O padrão GovBR utiliza 'danger' no lugar de 'error'.
    case 'error':
      return 'danger'
    default:
      return ''
  }
}
