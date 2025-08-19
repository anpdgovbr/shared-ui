'use client'
import Avatar from '@mui/material/Avatar'
import classNames from 'classnames'

import type { GovBRAvatarProps } from './types'

/**
 * Componente de Avatar que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<Avatar>` do Material-UI, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<div>` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRAvatar(props: Readonly<GovBRAvatarProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { density, letter, tooltip, className, ...rest } = props
    // Evitar prop `strictgovbr` sendo escrita no DOM
    const cleanedRest = { ...(rest as Record<string, unknown>) }
    delete cleanedRest.strictgovbr

    return (
      <div
        className={classNames('br-avatar', { [`${density}`]: density }, className)}
        title={tooltip}
        {...cleanedRest}
      >
        {letter && <span className="letter">{letter}</span>}
        <span className="notification" />
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { children, ...rest } = props

  return <Avatar {...rest}>{children}</Avatar>
}
