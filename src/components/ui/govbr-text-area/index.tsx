'use client'

import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import classnames from 'classnames'
import React from 'react'

import type { GovBRTextAreaProps } from './types'

/**
 * Componente GovBRTextArea seguindo arquitetura híbrida da ANPD
 *
 * Implementa dois modos:
 * - Modo Padrão (strictgovbr=false): MUI TextField estilizado pelo govbrTheme
 * - Modo Estrito (strictgovbr=true): HTML textarea puro com classes Gov.br DS
 *
 * @see https://www.gov.br/ds/components/textarea?tab=desenvolvedor
 */
export const GovBRTextArea: React.FC<GovBRTextAreaProps> = ({
  strictgovbr = false,
  label,
  id,
  placeholder,
  disabled = false,
  status,
  helperText,
  maxLength,
  rows = 4,
  cols,
  value,
  onChange,
  showCounter = false,
  required = false,
  className,
  ...textareaProps
}) => {
  // Calcular contador de caracteres
  const currentLength = value?.length || 0
  const shouldShowCounter = showCounter || maxLength
  const isOverLimit = maxLength ? currentLength > maxLength : false

  // ===== MODO ESTRITO: HTML puro com classes Gov.br DS =====
  if (strictgovbr) {
    const wrapperClasses = classnames('br-textarea', className, {
      'is-invalid': status === 'danger',
      'is-valid': status === 'success',
      'is-warning': status === 'warning',
      'is-info': status === 'info',
    })

    const textareaClasses = classnames('form-control', {
      'is-invalid': status === 'danger',
      'is-valid': status === 'success',
    })

    return (
      <div className={wrapperClasses}>
        <label className="text-nowrap" htmlFor={id}>
          {label}
          {required && <span className="text-danger"> *</span>}
        </label>

        <textarea
          id={id}
          className={textareaClasses}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows}
          cols={cols}
          value={value}
          onChange={onChange}
          required={required}
          {...textareaProps}
        />

        {/* Helper Text */}
        {helperText && (
          <div
            className={classnames('feedback', {
              'valid-feedback': status === 'success',
              'invalid-feedback': status === 'danger',
              'warning-feedback': status === 'warning',
              'info-feedback': status === 'info',
            })}
          >
            {helperText}
          </div>
        )}

        {/* Contador de Caracteres */}
        {shouldShowCounter && (
          <small
            className={classnames('form-text', {
              'text-danger': isOverLimit,
              'text-muted': !isOverLimit,
            })}
          >
            {maxLength ? `${currentLength}/${maxLength} caracteres` : `${currentLength} caracteres`}
          </small>
        )}
      </div>
    )
  }

  // ===== MODO PADRÃO: MUI estilizado pelo govbrTheme =====

  // Mapear status para cor do MUI
  const getTextFieldColor = () => {
    switch (status) {
      case 'success':
        return 'success'
      case 'danger':
        return 'error'
      case 'warning':
        return 'warning'
      case 'info':
        return 'info'
      default:
        return 'primary'
    }
  }

  const textFieldColor = getTextFieldColor()
  const hasError = status === 'danger'

  return (
    <Box className={className} sx={{ width: '100%' }}>
      <TextField
        id={id}
        label={
          <Box component="span">
            {label}
            {required && (
              <Typography
                component="span"
                sx={{
                  color: 'var(--danger, #D93026)',
                  marginLeft: 'var(--spacing-scale-half, 4px)',
                }}
              >
                *
              </Typography>
            )}
          </Box>
        }
        placeholder={placeholder}
        disabled={disabled}
        multiline
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        error={hasError}
        color={textFieldColor}
        variant="outlined"
        fullWidth
        inputProps={{
          maxLength,
          ...textareaProps,
        }}
        sx={{
          // Usar tokens CSS do Gov.br DS
          '& .MuiOutlinedInput-root': {
            borderRadius: 'var(--surface-rounder-sm, 4px)',
            backgroundColor: 'var(--background, #FFFFFF)',

            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--interactive-light, #1976D2)',
            },

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--interactive, #1351B4)',
              borderWidth: 'var(--surface-width-md, 2px)',
            },

            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--danger, #D93026)',
            },
          },

          '& .MuiInputLabel-root': {
            color: 'var(--gray-80, #636363)',
            fontWeight: 'var(--font-weight-semi-bold, 600)',

            '&.Mui-focused': {
              color: 'var(--interactive, #1351B4)',
            },

            '&.Mui-error': {
              color: 'var(--danger, #D93026)',
            },
          },

          '& .MuiOutlinedInput-input': {
            color: 'var(--gray-80, #636363)',
            fontSize: 'var(--font-size-scale-up-01, 16px)',
            lineHeight: 'var(--line-height-medium, 1.5)',
          },
        }}
      />

      {/* Helper Text */}
      {helperText && (
        <FormHelperText
          error={hasError}
          sx={{
            marginTop: 'var(--spacing-scale-half, 4px)',
            fontSize: 'var(--font-size-scale-down-01, 14px)',
            color: hasError ? 'var(--danger, #D93026)' : 'var(--gray-60, #7D7D7D)',
          }}
        >
          {helperText}
        </FormHelperText>
      )}

      {/* Contador de Caracteres */}
      {shouldShowCounter && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            marginTop: 'var(--spacing-scale-half, 4px)',
            fontSize: 'var(--font-size-scale-down-01, 14px)',
            color: isOverLimit ? 'var(--danger, #D93026)' : 'var(--gray-60, #7D7D7D)',
            textAlign: 'right',
          }}
        >
          {maxLength ? `${currentLength}/${maxLength} caracteres` : `${currentLength} caracteres`}
        </Typography>
      )}
    </Box>
  )
}

// ===== EXPORTS PARA TREE SHAKING =====
export default GovBRTextArea
export type { GovBRTextAreaProps } from './types'
