'use client'
import React from 'react'
import classNames from 'classnames'
import { mapMuiColorToGovbrClass } from '@helpers/muiColorToGovbrClass'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import { GovBRButton } from '../govbr-button'
import type { GovBRInputProps } from './types'

export const GovBRInput: React.FC<Readonly<GovBRInputProps>> = ({
  govbrSize = 'medium',
  status = undefined,
  error = false,
  clearBlock,
  id,
  label = '',
  feedbackMessage = '',
  helperText = '',
  disabled = false,
  highlight = false,
  inline,
  startIcon,
  endButtonIcon,
  onEndButtonClick,
  className = 'br-input',
  placeholder,
  ...props
}) => {
  const govbrColorClass = mapMuiColorToGovbrClass()
  const feedbackId = id ? `${id}-feedback` : undefined

  // Se error é true, força status para 'danger'
  const effectiveStatus = error ? 'danger' : status

  const iconMap = {
    success: <CheckCircleIcon fontSize="small" />,
    danger: <ErrorIcon fontSize="small" />,
    info: <InfoIcon fontSize="small" />,
    warning: <WarningIcon fontSize="small" />,
  }

  return (
    <div
      className={classNames(
        'br-input',
        govbrSize,
        effectiveStatus,
        govbrColorClass,
        { [`auto-${clearBlock}`]: !!clearBlock },
        { 'input-highlight': highlight, 'input-inline': inline },
        className,
      )}
    >
      {inline ? (
        <>
          <div className="input-label">
            <label htmlFor={id} className="text-nowrap">
              {label}
            </label>
          </div>
          <div className="input-content">
            <div className="input-group">
              {startIcon && <div className="input-icon">{startIcon}</div>}
              <input
                id={id}
                placeholder={placeholder}
                disabled={disabled}
                aria-describedby={feedbackId}
                className={className}
                {...props}
              />
              {endButtonIcon && (
                <GovBRButton circle onClick={onEndButtonClick}>
                  {endButtonIcon}
                </GovBRButton>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {label && <label htmlFor={id}>{label}</label>}
          <div className="input-group">
            {startIcon && <div className="input-icon">{startIcon}</div>}
            <input
              id={id}
              placeholder={placeholder}
              disabled={disabled}
              aria-describedby={feedbackId}
              className={className}
              {...props}
            />
            {endButtonIcon && (
              <GovBRButton circle onClick={onEndButtonClick}>
                {endButtonIcon}
              </GovBRButton>
            )}
          </div>
        </>
      )}

      {(feedbackMessage || helperText) && (
        <span
          className={classNames('feedback', effectiveStatus)}
          role="alert"
          id={feedbackId}
          style={{
            display: 'inline-block',
            width: 'auto',
            marginTop: '0.25rem',
            padding: '0.2rem var(--spacing-scale-2x)',
            lineHeight: '1.2',
          }}
        >
          {effectiveStatus && iconMap[effectiveStatus]} {feedbackMessage ?? helperText}
        </span>
      )}
    </div>
  )
}

GovBRInput.displayName = 'GovBRInput'
