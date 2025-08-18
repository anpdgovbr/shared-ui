import type { FormControlLabelProps } from '@mui/material/FormControlLabel'
import type { RadioProps } from '@mui/material/Radio'
import type { InputHTMLAttributes } from 'react'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRRadioBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<input>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Radio do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean
}

// Props para o modo ESTRITO (baseado em input HTML)
export type GovBRRadioStrictProps = InputHTMLAttributes<HTMLInputElement> &
  GovBRRadioBaseProps & {
    strictgovbr: true
    label?: React.ReactNode
  }

// Props para o modo PADRÃO (baseado em Radio do MUI)
export type GovBRRadioMuiProps = Omit<FormControlLabelProps, 'control'> &
  GovBRRadioBaseProps & {
    strictgovbr?: false
    radioProps?: RadioProps
  }

// O tipo final é uma união dos dois modos.
export type GovBRRadioProps = GovBRRadioStrictProps | GovBRRadioMuiProps
