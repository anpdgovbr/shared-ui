import classNames from "classnames"
import { GovBRRadioProps } from "./types"

export const GovBRRadio: React.FC<GovBRRadioProps> = ({
  id,
  label,
  helpText,
  text,
  status,
  ...props
}) => {

  const radioClass = classNames(
    'br-radio',
    status,
  )
    
  return (
    <div className={radioClass}>
      {label && <p className="label">{label}</p>}
      {helpText && <p className="help-text">{helpText}</p>}
      <input id={id} type="radio" {...props}/>
      <label htmlFor={id}>{text}</label>
    </div>
  )
}