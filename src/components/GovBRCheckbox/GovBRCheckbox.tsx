import React, { useEffect, useRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import type { SharedUIComponentProps } from '../../types/SharedUIComponentProps.js'

export interface GovBRCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    SharedUIComponentProps {

  label?: string
 
  status?: 'valid' | 'invalid'
 
  indeterminate?: boolean
  
  hiddenLabel?: boolean
}

export const GovBRCheckbox: React.FC<GovBRCheckboxProps> = ({
  id,
  label,
  status,
  indeterminate = false,
  hiddenLabel = false,
  className,
  disabled,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const componentClass = classNames(
    'br-checkbox',
    status,
    {
      disabled,
      'hidden-label': hiddenLabel,
    },
    className
  )

  return (
    <div className={componentClass}>
      <input ref={inputRef} id={id} type="checkbox" disabled={disabled} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}