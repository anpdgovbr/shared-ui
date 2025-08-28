'use client'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import classNames from 'classnames'

import type { GovBRRadioProps } from './types'

/**
 * Componente de Radio Button que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<FormControlLabel>` com um `<Radio>` do Material-UI, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<input type="radio">` padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRRadio(props: Readonly<GovBRRadioProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    const { id, label, className, style, ...rest } = props

    return (
      <div
        className={classNames('br-radio', className)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-scale-half, 0.5rem)',
          ...style,
        }}
      >
        <input id={id} type="radio" {...rest} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { radioProps, ...formControlLabelProps } = props

  return <FormControlLabel control={<Radio {...radioProps} />} {...formControlLabelProps} />
}
