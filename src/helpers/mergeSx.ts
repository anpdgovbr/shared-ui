import type { SxProps, Theme } from '@mui/material/styles'

/**
 * Mescla props `sx` do Material-UI de forma segura.
 *
 * Combina um estilo base com estilos customizados, preservando a funcionalidade
 * de ambos. Suporta tanto objetos quanto arrays de estilos.
 *
 * @param base - Estilo base a ser aplicado
 * @param custom - Estilos customizados opcionais para sobrescrever/adicionar ao base
 * @returns Props `sx` mescladas de forma segura
 *
 * @example
 * ```tsx
 * // Mesclando estilos simples
 * const mergedSx = mergeSx(
 *   { padding: 2, color: 'primary.main' },
 *   { marginTop: 1 }
 * )
 * // Resultado: { padding: 2, color: 'primary.main', marginTop: 1 }
 *
 * // Mesclando com função de tema
 * const mergedSx = mergeSx(
 *   (theme) => ({ padding: theme.spacing(2) }),
 *   { marginTop: 1 }
 * )
 *
 * // Mesclando com arrays
 * const mergedSx = mergeSx(
 *   { padding: 2 },
 *   [{ marginTop: 1 }, { color: 'secondary.main' }]
 * )
 * ```
 *
 * @remarks
 * - Se `custom` for `undefined`, retorna apenas o `base`
 * - Se `custom` for um array, combina `base` com todos os elementos do array
 * - Estilos posteriores sobrescrevem propriedades conflitantes dos anteriores
 * - Compatível com todas as formas de `sx` do MUI: objetos, funções e arrays
 *
 * @public
 */
export function mergeSx(base: SxProps<Theme>, custom?: SxProps<Theme>): SxProps<Theme> {
  if (!custom) {
    return base
  }
  if (Array.isArray(custom)) {
    return [base, ...custom] as SxProps<Theme>
  }
  return [base, custom] as SxProps<Theme>
}
