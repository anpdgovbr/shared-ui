import type { ButtonProps } from '@mui/material/Button'
// src\helper\MuiColorToGovBRClass.ts

/**
 * Mapeia a propriedade `color` do MUI para a classe correspondente do Design System GovBR.
 *
 * @param color Cor do botão conforme o MUI.
 * @returns Classe de cor correspondente ao padrão GovBR.
 *
 * @security Validação de tipo com type guard para prevenir valores inválidos
 * @resilience Retorna fallback seguro para casos não mapeados
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
 *
 */

// ✅ Type safety: valores válidos conhecidos
const VALID_MUI_COLORS = ['primary', 'secondary', 'success', 'warning', 'info', 'error'] as const
type ValidMuiColor = (typeof VALID_MUI_COLORS)[number]

// ✅ Type guard: validar se valor é uma cor MUI válida
function isValidMuiColor(color: unknown): color is ValidMuiColor {
  return typeof color === 'string' && VALID_MUI_COLORS.includes(color as ValidMuiColor)
}

export function mapMuiColorToGovbrClass(color?: ButtonProps['color']): string {
  // ✅ Resiliência: early return para valores undefined/null
  if (!color) {
    return 'primary' // Fallback padrão seguro
  }

  // ✅ Segurança: validar tipo antes do switch
  if (!isValidMuiColor(color)) {
    console.warn(
      `[mapMuiColorToGovbrClass] Cor MUI inválida recebida: "${color}". Usando fallback "primary".`,
    )
    return 'primary'
  }

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
      // ✅ Type safety: TypeScript garante exaustividade do switch
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustive: never = color
      return 'primary' // Fallback final por segurança
  }
}
