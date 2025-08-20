'use client'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import classNames from 'classnames'

import type { GovBRSwitchProps } from './types'

/**
 * Componente de Switch que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<FormControlLabel>` com um `<Switch>` do Material-UI, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<input type="checkbox">` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRSwitch(props: Readonly<GovBRSwitchProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { id, label, className, ...rest } = props
    const cleanedRest = { ...(rest as Record<string, unknown>) }
    delete cleanedRest.strictgovbr

    return (
      <div className={classNames('br-switch', className)}>
        <input id={id} type="checkbox" {...cleanedRest} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { switchProps, ...formControlLabelProps } = props

  return <FormControlLabel control={<Switch {...switchProps} />} {...formControlLabelProps} />
}
