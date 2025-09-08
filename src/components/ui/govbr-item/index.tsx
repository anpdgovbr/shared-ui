'use client'

import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import { GovBRItemProps } from './types'

export function GovBRItem(props: Readonly<GovBRItemProps>) {
  const { estado, divider, children } = props

  if (props.strictgovbr) {
    // --- MODO ESTRITO ---
    return estado ? (
      <>
        <div className={`br-item ${estado}`}>{children}</div>
        {divider && <hr />}
      </>
    ) : (
      <>
        <div className="br-item">{children}</div>
        {divider && <hr />}
      </>
    )
  }

  // --- MODO PADRÃO (MUI) ---

  return estado ? (
    <Stack direction="column" spacing={0} divider={divider ? <Divider /> : undefined}>
      {children}
    </Stack>
  ) : (
    <Stack direction="column" spacing={0} divider={divider ? <Divider /> : undefined}>
      {children}
    </Stack>
  )
}
