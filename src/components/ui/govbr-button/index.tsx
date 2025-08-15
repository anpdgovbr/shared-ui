'use client'
import React from 'react'
import Button from '@mui/material/Button'
import classNames from 'classnames'
import { mapMuiColorToGovbrClass } from '@helpers/muiColorToGovbrClass'
import type { GovBRButtonProps } from './types'

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
export function GovBRButton({
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
}: Readonly<GovBRButtonProps>) {
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
        className,
      )}
      // As props sx são mescladas. A `sx` passada pelo usuário tem prioridade.
      sx={{ ...dynamicSx, ...sx }}
      {...rest}
    >
      {children}
    </Button>
  )
}
