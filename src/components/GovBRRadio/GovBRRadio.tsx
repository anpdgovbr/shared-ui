import { SharedUIComponentProps } from "src/types/SharedUIComponentProps.js";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export interface GovBRRadioProps extends 
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, SharedUIComponentProps {
  label?: string
  helpText?: string
  text?: string
  disable?: boolean | undefined
  status?: 'valid' | 'invalid'
  checked?: boolean | undefined
}

export const GovBRRadio: React.FC<Readonly<GovBRRadioProps>> = ({
  id,
  label,
  helpText,
  text,
  disabled,
  status,
  ...props
}) => {

  const radioClass = classNames(
    'br-radio',
    status,
    disabled
  )
    
  return (
    <div className={radioClass}>
      {label && <p className="label">{label}</p>}
      {helpText && <p className="help-text">{helpText}</p>}
      <input id={id} type="radio" disabled={disabled} {...props}/>
      <label htmlFor={id}>{text}</label>
    </div>
  )
}