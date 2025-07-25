import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import classNames from 'classnames'
import { mapMuiColorToGovbrClass } from 'src/helper/MuiColorToGovBRClass'
import { GovBRClearBlock } from 'src/types/GovBRTypes'

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
export interface GovBRButtonProps extends ButtonProps {
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

/**
 * Componente de botão padronizado conforme o Design System GovBR.
 *
 * @remarks
 * Este componente encapsula o botão do Material UI, aplicando estilos e comportamentos do padrão GovBR.
 *
 * @param props - Propriedades para configuração do botão, incluindo as propriedades do Material UI e as adicionais do GovBR.
 * @returns Um botão estilizado conforme o padrão GovBR.
 *
 * @example
 * ```tsx
 * <GovBRButton color="primary" block>
 *   Clique aqui
 * </GovBRButton>
 * ```
 */
export const GovBRButton: React.FC<Readonly<GovBRButtonProps>> = ({
  children,
  circle,
  block,
  inverted,
  loading,
  clearBlock,
  color,
  className,
  sx,
  ...rest
}) => {
  const govbrColorClass = mapMuiColorToGovbrClass(color)

  // Estilos que dependem das props do componente
  const dynamicSx = {
    // Se for circular, o padding horizontal é 0, senão é 3
    px: circle ? 0 : 3,
    // Se for circular, aplica todos os estilos de círculo
    ...(circle && {
      width: 'var(--button-size)',
      height: 'var(--button-size)',
      minWidth: 'var(--button-size)',
      minHeight: 'var(--button-size)',
      padding: 0,
      borderRadius: '50%', // <- O borderRadius para o círculo
      lineHeight: 1,
    }),
  }

  return (
    <Button
      className={classNames(
        'br-button',
        govbrColorClass,
        {
          circle,
          block,
          inverted,
          loading,
          [`auto-${clearBlock}`]: !!clearBlock,
        },
        className
      )}
      // As props sx são mescladas. A `sx` passada pelo usuário tem prioridade.
      sx={{ ...dynamicSx, ...sx }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GovBRButton
