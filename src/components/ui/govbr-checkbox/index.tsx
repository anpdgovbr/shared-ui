import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import type { GovBRCheckboxProps } from './types'

export function GovBRCheckbox({
  id,
  label,
  status,
  indeterminate = false,
  hiddenLabel = false,
  className,
  disabled,
  ...props
}: GovBRCheckboxProps) {
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
    className,
  )

  return (
    <div className={componentClass}>
      <input ref={inputRef} id={id} type="checkbox" disabled={disabled} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
