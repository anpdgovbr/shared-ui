import type { ButtonProps } from '@mui/material/Button'

import { GovBRClearBlock } from '../../../types/GovBRTypes'
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

// Augment the ButtonProps variant to include our custom variants for MUI mode
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    circle: true
    inverted: true
  }
}

/**
 * Propriedades para o componente GovBRButton.
 *
 * @remarks
 * Extende as propriedades do `Button` do Material UI, adicionando opções específicas do GovBR Design System.
 * Este contrato tem duas rotas de renderização:
 * - Modo padrão (MUI): use as props do MUI como `variant`, `color`, `size`, e em particular
 *   prefira `variant="inverted"` ou `variant="circle"` quando quiser as variações visuais GovBR no tema.
 * - Modo estrito (`strictgovbr`): usa um elemento `<button>` puro aplicando classes do GovBR (`.br-button`).
 *
 * Tokens CSS relevantes (fallbacks usados internamente):
 * - `var(--interactive)` (cor principal/interativa)
 * - `var(--interactive-light)` (hover)
 * - `var(--color-lightest)` (fundo claro)
 * - `var(--button-radius)` / `var(--surface-rounder-*)` (bordas)
 *
 * Contrato (resumido):
 * - Inputs: `GovBRButtonProps` (extende `@mui/material/Button` props)
 * - Saída: JSX.Element
 * - Erros: não lança; validações leves (ex: props inválidas) são ignoradas e não repassadas ao DOM
 *
 * @example Uso (modo MUI - preferencial)
 * <GovBRButton variant="inverted" color="primary">Cancelar</GovBRButton>
 *
 * @example Uso (modo estrito GovBR)
 * <GovBRButton strictgovbr inverted>Cancelar</GovBRButton>
 */
export interface GovBRButtonProps extends ButtonProps, SharedUIComponentProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<button>` padrão
   * com as classes CSS do GovBR-DS, em vez de um botão MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean

  /**
   * **Formato circular**
   *
   * - No modo estrito (`strictgovbr`): `circle={true}` adiciona a classe GovBR `.circle` que renderiza
   *   um botão visualmente circular (útil para ações com ícone apenas).
   * - No modo MUI (padrão): prefira `variant="circle"` que ativa a variante registrada no tema.
   * @default false
   */
  circle?: boolean

  /**
   * Estilo "inverted" (cores invertidas)
   *
   * - No modo estrito (`strictgovbr`): `inverted={true}` adiciona a classe GovBR `.inverted`.
   * - No modo MUI (padrão): não use `inverted={true}` — em vez disso use `variant="inverted"`.
   *   O componente evita passar `inverted` como atributo booleano para o DOM.
   *
   * Tokens: `background: var(--color-lightest)`, `color: var(--interactive)`, `border-color: var(--interactive)`.
   * @default false
   */
  inverted?: boolean

  /**
   * Estado de carregamento
   *
   * - Quando `loading={true}` o botão exibe um spinner interno (MUI `CircularProgress`) e fica `disabled`.
   * - No modo estrito, a classe `.loading` é adicionada para permitir estilização via GovBR classes.
   * @default false
   */
  loading?: boolean

  /**
   * Controla o comportamento de limpeza automática de blocos.
   * @default undefined
   */
  clearBlock?: GovBRClearBlock
}
