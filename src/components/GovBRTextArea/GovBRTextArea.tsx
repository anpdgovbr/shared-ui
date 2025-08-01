import React, { useState, useCallback } from 'react'
import { Box, Stack, Typography, InputLabel } from '@mui/material'
import classNames from 'classnames'
import { mapMuiColorToGovbrClass } from 'src/helper/MuiColorToGovBRClass'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import type { GovBRTextAreaProps } from './types'

/**
 * Componente de textarea seguindo o padrão do Design System Gov.br.
 * Oferece funcionalidades como contador de caracteres, diferentes tamanhos, status de validação e suporte a tema escuro.
 *
 * @param {GovBRTextAreaProps} props - As propriedades do componente.
 * @example
 * ```tsx
 * <GovBRTextArea
 *   label="Observações"
 *   placeholder="Digite suas observações"
 *   maxLength={500}
 *   showCharacterCount
 *   govbrSize="medium"
 * />
 * ```
 */
export const GovBRTextArea: React.FC<Readonly<GovBRTextAreaProps>> = ({
  govbrSize = 'medium',
  status,
  clearBlock,
  id,
  label,
  feedbackMessage,
  helperText,
  disabled = false,
  highlight = false,
  inline = false,
  maxLength,
  showCharacterCount = false,
  darkMode = false,
  className = 'br-textarea',
  value,
  defaultValue,
  onChange,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    (value ?? defaultValue ?? '').toString()
  )

  const govbrColorClass = mapMuiColorToGovbrClass()
  const feedbackId = id ? `${id}-feedback` : undefined
  const currentValue = value !== undefined ? value.toString() : internalValue
  const characterCount = currentValue.length

  const iconMap = {
    success: <CheckCircleIcon fontSize="small" />,
    danger: <ErrorIcon fontSize="small" />,
    info: <InfoIcon fontSize="small" />,
    warning: <WarningIcon fontSize="small" />,
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value

      // Se há limite de caracteres, verificar antes de atualizar
      if (maxLength && newValue.length > maxLength) {
        return
      }

      if (value === undefined) {
        setInternalValue(newValue)
      }

      onChange?.(event)
    },
    [maxLength, onChange, value]
  )

  const renderCharacterCounter = () => {
    if (!showCharacterCount) return null

    if (maxLength) {
      // Com limite de caracteres
      const remainingChars = maxLength - characterCount
      if (characterCount === 0) {
        return (
          <Typography
            variant="body2"
            component="span"
            sx={{ mt: 1, display: 'block' }}
            aria-live="polite"
          >
            Limite máximo de <strong>{maxLength}</strong> caracteres
          </Typography>
        )
      } else {
        return (
          <Typography
            variant="body2"
            component="span"
            sx={{ mt: 1, display: 'block' }}
            aria-live="polite"
          >
            Restam <strong>{remainingChars}</strong> caracteres
          </Typography>
        )
      }
    } else {
      // Sem limite de caracteres
      return (
        <Typography variant="body2" component="span" sx={{ mt: 1, display: 'block' }}>
          <strong>{characterCount}</strong> caracteres digitados
        </Typography>
      )
    }
  }

  const renderContent = () => {
    const textareaElement = (
      <Box
        component="textarea"
        id={id}
        disabled={disabled}
        aria-describedby={feedbackId}
        value={currentValue}
        maxLength={maxLength}
        onChange={handleChange}
        sx={{
          background: 'var(--background-light)',
          border: '1px solid var(--border-color-alternative)',
          borderRadius: '6px',
          color: 'var(--color)',
          display: 'block',
          fontSize: 'var(--font-size-scale-up-01)',
          fontWeight: 'var(--font-weight-medium)',
          padding: 'var(--textarea-padding)',
          width: '100%',
          fontFamily: 'inherit',
          resize: 'vertical',
          minHeight: '80px',
          '&:focus, &:focus-visible': {
            borderColor: 'var(--focus) !important',
            boxShadow: '0 0 0 var(--surface-width-md) var(--focus)',
            outline: 'none',
          },
          '&:hover:not(:disabled)': {
            backgroundImage:
              'linear-gradient(rgba(var(--color-rgb), var(--hover)), rgba(var(--color-rgb), var(--hover)))',
          },
          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.45,
          },
        }}
        {...props}
      />
    )

    if (inline) {
      return (
        <Stack direction="row" spacing={2} alignItems="flex-start">
          <InputLabel
            htmlFor={id}
            sx={{
              display: 'inline-block',
              marginBottom: 'var(--spacing-scale-half)',
              whiteSpace: 'nowrap',
              minWidth: 'fit-content',
            }}
          >
            {label}
          </InputLabel>
          <Stack sx={{ flex: 1 }}>
            {textareaElement}
            {renderCharacterCounter()}
          </Stack>
        </Stack>
      )
    }

    return (
      <Stack spacing={0}>
        {label && (
          <InputLabel
            htmlFor={id}
            sx={{
              display: 'inline-block',
              marginBottom: 'var(--spacing-scale-half)',
            }}
          >
            {label}
          </InputLabel>
        )}
        {textareaElement}
        {renderCharacterCounter()}
      </Stack>
    )
  }

  return (
    <Box
      className={classNames(
        'br-textarea',
        govbrSize,
        status,
        govbrColorClass,
        {
          [`auto-${clearBlock}`]: !!clearBlock,
          'input-highlight': highlight,
          'input-inline': inline,
          'dark-mode': darkMode,
          inverted: darkMode,
          'has-character-count': showCharacterCount,
        },
        className
      )}
      sx={{
        '--textarea-padding': 'var(--textarea-medium)',
        '--textarea-small': 'var(--spacing-scale-base)',
        '--textarea-medium': 'var(--spacing-scale-baseh)',
        '--textarea-large': 'var(--spacing-scale-2x)',
        color: 'var(--color)',

        // Tamanhos
        '&.small textarea, &[data-small] textarea': {
          '--textarea-padding': 'var(--textarea-small)',
        },
        '&.medium textarea, &[data-medium] textarea': {
          '--textarea-padding': 'var(--textarea-medium)',
        },
        '&.large textarea, &[data-large] textarea': {
          '--textarea-padding': 'var(--textarea-large)',
        },

        // Status
        '&.success textarea, &[data-success] textarea': {
          borderColor: 'var(--success)',
          borderWidth: '2px',
        },
        '&.danger textarea, &[data-danger] textarea': {
          borderColor: 'var(--danger)',
          borderWidth: '2px',
        },
        '&.warning textarea, &[data-warning] textarea': {
          borderColor: 'var(--warning)',
          borderWidth: '2px',
        },
        '&.info textarea, &[data-info] textarea': {
          borderColor: 'var(--info)',
          borderWidth: '2px',
        },

        // Tema escuro
        '&.inverted, &.inverted label, &.dark-mode, &.dark-mode label': {
          '--color': 'var(--color-dark)',
          '--focus-color': 'var(--focus-color-dark)',
        },
        '&.inverted textarea, &.dark-mode textarea': {
          color: 'var(--color-light)',
        },
      }}
    >
      {renderContent()}

      {(feedbackMessage || helperText) && (
        <Typography
          component="span"
          variant="body2"
          className={classNames('feedback', status)}
          role="alert"
          id={feedbackId}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            width: 'auto',
            marginTop: '0.25rem',
            padding: '0.2rem var(--spacing-scale-2x)',
            lineHeight: '1.2',
          }}
        >
          {status && iconMap[status]} {feedbackMessage ?? helperText}
        </Typography>
      )}
    </Box>
  )
}

GovBRTextArea.displayName = 'GovBRTextArea'

export default GovBRTextArea
