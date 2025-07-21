import { govbrTheme } from "src/theme/govbrTheme"
import { GovBRRadioProps } from "./types"
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { useState } from "react";

export const GovBRRadio: React.FC<GovBRRadioProps> = ({
  label,
  helpText,
  text,
  disabled,
  checked,
  error,
  valid,
  onChange
}) => {

  return (
    <>
    <FormControl disabled={disabled}>
      {label && (
        <FormLabel>
          <Typography sx={{marginBottom: 0, fontWeight: 'bold'}} >{label}</Typography>
        </FormLabel>
      )}
      {helpText && <Typography >{helpText}</Typography>}

      <FormControlLabel 
      control={
      <Radio
      checked={checked}
      onChange={onChange}
      sx={{
        color: error
                ? 'error.main'
                : valid
                ? 'success.main'
                : 'primary.main',
              '&.Mui-checked': {
                color: error
                  ? 'error.main'
                  : valid
                  ? 'success.main'
                  : 'gray.1'
              }
      }}
      />} label={text}/>
    </FormControl>

    {/* <div className={radioClass}>
      {label && <p className="label">{label}</p>}
      {helpText && <p className="help-text">{helpText}</p>}
      <input id={id} type="radio" disabled={disabled} {...props}/>
      <label htmlFor={id}>{text}</label>
    </div> */}
    </>
  )
}