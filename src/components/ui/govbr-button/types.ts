import type { ButtonProps } from '@mui/material/Button'
import { GovBRClearBlock } from '../../../types/GovBRTypes'
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Propriedades adicionais para o componente GovBRButton.
 *
 * @remarks
 * Extende as propriedades do `Button` do Material UI, adicionando opções específicas do padrão GovBR.
 *
 * @property circle - Exibe o botão em formato circular.
 * @property block - Exibe o botão ocupando toda a largura do container.
 * @property inverted - Aplica o estilo invertido do GovBR.
 * @property loading - Indica se o botão está em estado de carregamento.
 * @property clearBlock - Controla o comportamento de limpeza automática de blocos, conforme o padrão GovBR.
 */
export interface GovBRButtonProps extends ButtonProps, SharedUIComponentProps {
  /**
   * Exibe o botão em formato circular.
   *
   * @remarks
   * Quando definido como `true`, o botão será renderizado com bordas arredondadas, formando um círculo perfeito.
   * Útil para ícones ou ações rápidas.
   *
   * @default false
   */
  circle?: boolean
  /**
   * Exibe o botão ocupando toda a largura do container.
   *
   * @remarks
   * Quando definido como `true`, o botão será expandido horizontalmente para preencher o espaço disponível.
   *
   * @default false
   */
  block?: boolean
  /**
   * Aplica o estilo invertido do GovBR.
   *
   * @remarks
   * Quando definido como `true`, o botão utilizará o esquema de cores invertido, conforme o padrão visual do GovBR.
   *
   * @default false
   */
  inverted?: boolean
  /**
   * Indica se o botão está em estado de carregamento.
   * - `true`: Exibe o botão com estilo de carregamento.
   * - `false`: Exibe o botão normalmente.
   * @default false
   * @example
   * ```tsx
   * <GovBRButton loading>Carregando...</GovBRButton>
   *
   */
  loading?: boolean
  /**
   * Controla o comportamento de limpeza automática de blocos.
   * - `sm`: Limpa blocos pequenos.
   * - `md`: Limpa blocos médios.
   * - `lg`: Limpa blocos grandes.
   * - `xl`: Limpa blocos extra grandes.
   * - `undefined`: Não aplica limpeza automática.
   * @default undefined
   * @example
   * ```tsx
   * <GovBRButton clearBlock="md">Limpar bloco médio</GovBRButton
   *
   */
  clearBlock?: GovBRClearBlock
}
