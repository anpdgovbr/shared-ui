'use client'
import Button from '@mui/material/Button'
import classNames from 'classnames'
import type { ButtonHTMLAttributes } from 'react'

import type { GovBRButtonProps } from './types'

/**
 * Componente de botão que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<Button>` do Material-UI, estilizado via `govbrTheme`.
 *     Use as props padrão do MUI como `variant`, `color`, `fullWidth`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<button>` HTML padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRButton(props: Readonly<GovBRButtonProps>) {
  const {
    strictgovbr,
    className,
    children,
    // props que mapeamos para classes GovBR no modo estrito
    variant,
    color,
    size,
    fullWidth,
    inverted,
    circle,
    loading,
    // resto pode incluir aria-*/on* e outros atributos que queremos repassar ao <button>
    ...rest
  } = props

  if (strictgovbr) {
    // Converter rest para atributos nativos de button de forma tipada
    const nativeButtonProps: ButtonHTMLAttributes<HTMLButtonElement> =
      rest as unknown as ButtonHTMLAttributes<HTMLButtonElement>

    // mapear variant -> classes GovBR: contained -> primary, outlined -> secondary, text/undefined -> terciário (sem classe)
    let colorClass = ''
    if (variant === 'contained') colorClass = 'primary'
    else if (variant === 'outlined') colorClass = 'secondary'
    else if (variant === 'text' || variant == null) colorClass = '' // terciário = sem classe

    // se não veio variant, aceitar color direto (ex: success, warning, info, primary, secondary...)
    if (!variant && color) {
      const allowed = ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'danger']
      if (allowed.includes(String(color))) colorClass = String(color)
    }

    const govbrClasses = classNames(
      'br-button',
      colorClass || null,
      { block: !!fullWidth },
      { inverted: !!inverted },
      { circle: !!circle },
      { loading: !!loading },
      { [size || '']: !!size },
      className,
    )

    return (
      <button className={govbrClasses} {...nativeButtonProps}>
        {children}
      </button>
    )
  } else {
    // MODO PADRÃO: Renderiza um Button do MUI e deixa o tema cuidar do estilo.
    const mergedClassName = classNames(className)
    return (
      <Button {...rest} className={mergedClassName}>
        {children}
      </Button>
    )
  }
}
