import classNames from 'classnames'
import { GovBRRadioProps } from './types'

export const GovBRRadio: React.FC<GovBRRadioProps> = ({
  id,
  label,
  helpText,
  text,
  disabled,
  status,
  ...props
}) => {
  const radioClass = classNames('br-radio', status, disabled)

  return (
    <div className={radioClass}>
      {label && <p className="label">{label}</p>}
      {helpText && <p className="help-text">{helpText}</p>}
      <input id={id} type="radio" disabled={disabled} {...props} />
      <label htmlFor={id}>{text}</label>
    </div>
  )
}
