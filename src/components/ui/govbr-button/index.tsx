'use client'
import Button from '@mui/material/Button'
import classNames from 'classnames'

import type { GovBRButtonProps } from './types'

/**
 * Componente de botão que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<Button>` do Material-UI, estilizado via `govbrTheme`.
 *     Use as props padrão do MUI como `variant`, `color`, `fullWidth`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<button>` HTML padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRButton(props: Readonly<GovBRButtonProps>) {
  const { strictgovbr, className, children, ...rest } = props

  if (strictgovbr) {
    // MODO ESTRITO: Renderiza um <button> padrão com classes CSS do GovBR-DS.
    const {
      color,
      //variant, TODO: descobrir senão é necessário ou se o componente está mal desenvolvido
      size,
      fullWidth,
      inverted,
      circle,
      loading,
      //clearBlock, TODO: descobrir senão é necessário ou se o componente está mal desenvolvido
      ...nativeButtonProps
    } = rest

    const govbrClasses = classNames(
      'br-button',
      { [color || '']: !!color },
      { inverted: inverted },
      { circle: circle },
      { block: fullWidth },
      { [size || '']: !!size },
      { loading: loading },
      className,
    )

    return (
      <button className={govbrClasses} {...nativeButtonProps}>
        {children}
      </button>
    )
  } else {
    // MODO PADRÃO: Renderiza um Button do MUI e deixa o tema cuidar do estilo.
    return (
      <Button className={className} {...rest}>
        {children}
      </Button>
    )
  }
}
