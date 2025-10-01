'use client'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import classNames from 'classnames'

import type { GovBRSwitchProps } from './types'

/**
 * GovBRSwitch - Componente de Switch (Toggle) padronizado GovBR-DS
 *
 * Implementa o Design System GovBR de duas formas:
 * 1. **Modo Padrão (default):** Renderiza Switch do Material-UI estilizado via govbrTheme
 * 2. **Modo Estrito (`strictgovbr`):** Renderiza HTML puro com classes CSS do @govbr-ds/core
 *
 * Características:
 * - 🎨 Visual consistente com GovBR Design System
 * - 🔄 Dois modos de operação (MUI + tema | HTML puro)
 * - ♿ Acessível com labels apropriados e navegação por teclado
 * - 🎭 Estados visuais: hover, focus, checked, disabled
 * - 🔧 Flexível com suporte a customização via props
 * - ⚡ Type-safe com TypeScript e union types
 * - 📱 Responsivo e adaptável a diferentes contextos
 */
export function GovBRSwitch(props: Readonly<GovBRSwitchProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, label, className, strictgovbr: _unused, ...htmlProps } = props

    return (
      <div className={classNames('br-switch', className)}>
        <input id={id} type="checkbox" {...htmlProps} />
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { switchProps, ...formControlLabelProps } = props

  return <FormControlLabel control={<Switch {...switchProps} />} {...formControlLabelProps} />
}

// Export types para consumidores da biblioteca
export type { GovBRSwitchProps } from './types'
