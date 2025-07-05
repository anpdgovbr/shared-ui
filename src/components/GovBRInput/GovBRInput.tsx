import React from 'react'
import type { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import type { GovBRSize, GovBRStatus, GovBRClearBlock } from 'src/types/GovBRTypes.js'
import { mapMuiColorToGovbrClass } from 'src/helper/MuiColorToGovBRClass.js'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import GovBRButton from '../GovBRButton/GovBRButton.js' // ajuste para o seu caminho real

export type GovBRInputProps = InputHTMLAttributes<HTMLInputElement> & {
  govbrSize?: GovBRSize
  status?: GovBRStatus
  clearBlock?: GovBRClearBlock
  label?: React.ReactNode
  feedbackMessage?: string
  helperText?: string
  highlight?: boolean
  inline?: boolean
  startIcon?: React.ReactNode
  endButtonIcon?: React.ReactNode
  onEndButtonClick?: () => void
}

export const GovBRInput: React.FC<Readonly<GovBRInputProps>> = ({
  govbrSize = 'medium',
  status,
  clearBlock,
  id,
  label,
  feedbackMessage,
  helperText,
  disabled,
  highlight,
  inline,
  startIcon,
  endButtonIcon,
  onEndButtonClick,
  className,
  placeholder,
  ...props
}) => {
  const govbrColorClass = mapMuiColorToGovbrClass()
  const feedbackId = id ? `${id}-feedback` : undefined

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
        status,
        govbrColorClass,
        { [`auto-${clearBlock}`]: !!clearBlock },
        { 'input-highlight': highlight, 'input-inline': inline },
        className
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
          className={classNames('feedback', status)}
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
          {status && iconMap[status]} {feedbackMessage ?? helperText}
        </span>
      )}
    </div>
  )
}

export default GovBRInput
