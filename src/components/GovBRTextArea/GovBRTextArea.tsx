import React, { useState, useEffect } from 'react'
import { Box, FormLabel, TextareaAutosize, Typography } from '@mui/material'
import { GovBRTextAreaProps } from './types'
import { CheckCircle, Error, Warning, Info } from '@mui/icons-material'

const statusMap = {
  success: {
    icon: <CheckCircle />,
    color: 'var(--success)',
  },
  danger: {
    icon: <Error />,
    color: 'var(--danger)',
  },
  warning: {
    icon: <Warning />,
    color: 'var(--warning)',
  },
  info: {
    icon: <Info />,
    color: 'var(--info)',
  },
}

export const GovBRTextArea: React.FC<GovBRTextAreaProps> = ({
  id,
  label,
  placeholder,
  disabled = false,
  status,
  helperText,
  maxLength,
  rows = 4,
  cols,
  value,
  onChange,
}) => {
  const [charCount, setCharCount] = useState(value ? value.length : 0)

  useEffect(() => {
    if (value) {
      setCharCount(value.length)
    }
  }, [value])

  const handleCharChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length)
    if (onChange) {
      onChange(event)
    }
  }

  const statusInfo = status ? statusMap[status] : null

  return (
    <Box
      className={`br-textarea ${status ? status : ''}`}
      sx={{
        '--textarea-padding': 'var(--spacing-scale-baseh)',
        color: 'var(--color)',
        '&.success textarea': {
          borderColor: 'var(--success)',
          borderWidth: '2px',
        },
        '&.danger textarea': {
          borderColor: 'var(--danger)',
          borderWidth: '2px',
        },
        '&.warning textarea': {
          borderColor: 'var(--warning)',
          borderWidth: '2px',
        },
        '&.info textarea': {
          borderColor: 'var(--info)',
          borderWidth: '2px',
        },
      }}
    >
      <FormLabel
        htmlFor={id}
        sx={{
          display: 'inline-block',
          marginBottom: 'var(--spacing-scale-half)',
        }}
      >
        {label}
      </FormLabel>
      <TextareaAutosize
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        minRows={rows}
        cols={cols}
        value={value}
        onChange={handleCharChange}
        style={{
          background: 'var(--background-light)',
          border: '1px solid var(--border-color-alternative)',
          borderRadius: '6px',
          color: 'var(--color)',
          display: 'block',
          fontSize: 'var(--font-size-scale-up-01)',
          fontWeight: 'var(--font-weight-medium)',
          padding: 'var(--textarea-padding)',
          width: '100%',
        }}
      />
      {helperText && (
        <Typography
          variant="body2"
          sx={{
            marginTop: 1,
            display: 'flex',
            alignItems: 'center',
            color: statusInfo?.color,
          }}
        >
          {statusInfo && <span style={{ marginRight: '8px' }}>{statusInfo.icon}</span>}
          {helperText}
        </Typography>
      )}
      {maxLength && (
        <Typography
          variant="body2"
          sx={{
            marginTop: 1,
          }}
        >
          <span className="limit" aria-live="polite">
            {`Limite máximo de ${maxLength} caracteres`}
          </span>
          <span className="current" aria-live="polite" role="status">
            {` | Restam ${maxLength - charCount} caracteres`}
          </span>
        </Typography>
      )}
    </Box>
  )
}

export default GovBRTextArea
