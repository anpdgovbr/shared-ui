import { GovBRRadioProps } from "./types"
import {Radio, Stack, Typography } from "@mui/material"


export const GovBRRadio: React.FC<GovBRRadioProps> = ({
  name,
  value,
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
    <Stack>
      <Typography className="br-label">{label}</Typography>
      <Typography className="br-text-small">{helpText}</Typography>
    </Stack>
    <Stack direction="row" alignItems="center" spacing={-0.5}>
      <Radio 
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        sx={{
          color: 'gray.500',
          '&.Mui-checked': {
            color: 'gray.500', 
          },
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
          ...(error && {
            color: 'error.main',
            '&.Mui-checked': {
              color: 'error.main',
            },
          }),
          ...(valid && !error && {
            color: 'success.main',
            '&.Mui-checked': {
              color: 'success.main',
            },
          }),
          gap: 1
        }}
      />
      <Typography className="br-text" sx={{
          color: disabled ? 'text.disabled' : 'text.primary',
        }}>
          {text}
      </Typography>
    </Stack>

    </>
  )
}
