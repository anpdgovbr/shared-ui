'use client'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { GovBRItemProps } from './types'

/**Componente de Item para conter outros componentes
 * 1. **Modo Padrão (default):** Renderiza um `<Stack>` do Material-UI, estilizado via `govbrTheme`.
 * 2. **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<div>` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRItem(props: Readonly<GovBRItemProps>) {
  const { estado, divider, children } = props

  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    return (
      <>
        <div className={`br-item ${estado}`}>{children}</div>
        {divider && <hr />}
      </>
    )
  }

  // --- MODO MUI ---
  return (
    <Stack
      sx={{
        opacity: estado === 'disabled' ? 0.5 : 1,
        backgroundColor: estado === 'selected' ? 'action.selected' : 'transparent',
        p: 1,
        ...(estado === 'disabled' && { pointerEvents: 'none' }),
        ...props.sx,
      }}
    >
      {children}
      {divider && <Divider />}
    </Stack>
  )
}
