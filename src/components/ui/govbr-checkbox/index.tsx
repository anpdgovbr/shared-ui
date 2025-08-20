'use client'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import classNames from 'classnames'

import type { GovBRCheckboxProps } from './types'

export type { GovBRCheckboxProps } from './types' // Adicionando a exportação do tipo

/**
 * Componente de Checkbox que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<FormControlLabel>` com um `<Checkbox>` do Material-UI, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<input type="checkbox">` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRCheckbox(props: Readonly<GovBRCheckboxProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { id, label, className, ...rest } = props

    return (
      <div className={classNames('br-checkbox', className)}>
        <input id={id} type="checkbox" {...rest} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { checkboxProps, ...formControlLabelProps } = props

  return <FormControlLabel control={<Checkbox {...checkboxProps} />} {...formControlLabelProps} />
}
