'use client'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'
import React from 'react'

import { GovBRButton } from '../govbr-button'
import type { GovBRInputProps, GovBRInputStrictProps } from './types'

/**
 * Componente de Input que implementa o Design System GovBR de duas formas:
 * 1.  **Modo Padrão (default):** Renderiza um `<TextField>` do Material-UI, estilizado via `govbrTheme`.
 * 2.  **Modo Estrito (`strictgovbr`):** Renderiza um elemento `<input>` HTML padrão e aplica as classes CSS do
 *     `@govbr-ds/core` diretamente. Garante fidelidade visual máxima ao GovBR-DS.
 */
export function GovBRInput(props: Readonly<GovBRInputProps>) {
  // --- MODO ESTRITO ---
  if (props.strictgovbr) {
    // Type guard para garantir que as props são do tipo estrito
    const strictProps = props as GovBRInputStrictProps
    const {
      // Props específicas do modo estrito para serem usadas na lógica
      label = '',
      id,
      className,
      endButtonIcon,
      onEndButtonClick,
      // Props relacionadas ao comportamento/estado que não devem ser repassadas ao <input>
      govbrSize,
      status,
      error,
      feedbackMessage,
      // O resto são atributos HTML para o <input>
      ...nativeInputProps
    } = strictProps

    // Limpamos explicitamente props que podem ter vindo do consumer e não devem chegar ao DOM
    const cleanedNativeInputProps: Record<string, unknown> = { ...nativeInputProps }
    delete cleanedNativeInputProps.highlight
    delete cleanedNativeInputProps.inline
    delete cleanedNativeInputProps.strictgovbr

    const effectiveStatus = error ? 'danger' : status
    const feedbackId = id && feedbackMessage ? `${id}-feedback` : undefined

    return (
      <div
        className={classNames(
          'br-input',
          { [`${govbrSize}`]: !!govbrSize },
          effectiveStatus,
          className,
        )}
      >
        {label && <label htmlFor={id}>{label}</label>}
        <div className="input-group">
          <input id={id} aria-describedby={feedbackId} {...cleanedNativeInputProps} />
          {endButtonIcon && (
            <GovBRButton variant="circle" strictgovbr onClick={onEndButtonClick}>
              {endButtonIcon}
            </GovBRButton>
          )}
        </div>
        {feedbackMessage && (
          <span className={classNames('feedback', effectiveStatus)} role="alert" id={feedbackId}>
            {feedbackMessage}
          </span>
        )}
      </div>
    )
  }

  // --- MODO PADRÃO (MUI) ---
  const { label, endButtonIcon, onEndButtonClick, startIcon, variant = 'outlined' } = props
  // Criamos um objeto rest limpo sem a prop `strictgovbr` para não repassar ao TextField
  const rest: Record<string, unknown> = { ...(props as unknown as Record<string, unknown>) }
  delete rest.strictgovbr

  return (
    <TextField
      label={label}
      variant={variant}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : undefined,
        endAdornment: endButtonIcon ? (
          <InputAdornment position="end">
            <IconButton onClick={onEndButtonClick} edge="end">
              {endButtonIcon}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      {...rest}
    />
  )
}
