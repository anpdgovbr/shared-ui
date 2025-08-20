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
 * Extende as propriedades do `Button` do Material UI, adicionando opções específicas do padrão GovBR.
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
   * **[MODO ESTRITO]** Exibe o botão em formato circular.
   * @default false
   */
  circle?: boolean

  /**
   * **[MODO ESTRITO]** Aplica o estilo invertido do GovBR.
   * @default false
   */
  inverted?: boolean

  /**
   * Indica se o botão está em estado de carregamento.
   * @default false
   */
  loading?: boolean

  /**
   * Controla o comportamento de limpeza automática de blocos.
   * @default undefined
   */
  clearBlock?: GovBRClearBlock
}
