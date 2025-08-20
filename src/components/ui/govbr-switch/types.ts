import type { FormControlLabelProps } from '@mui/material/FormControlLabel'
import type { SwitchProps } from '@mui/material/Switch'
import type { InputHTMLAttributes } from 'react'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRSwitchBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<input>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Switch do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean
}

// Props para o modo ESTRITO (baseado em input HTML)
export type GovBRSwitchStrictProps = InputHTMLAttributes<HTMLInputElement> &
  GovBRSwitchBaseProps & {
    strictgovbr: true
    label?: React.ReactNode
  }

// Props para o modo PADRÃO (baseado em Switch do MUI)
export type GovBRSwitchMuiProps = Omit<FormControlLabelProps, 'control'> &
  GovBRSwitchBaseProps & {
    strictgovbr?: false
    switchProps?: SwitchProps
  }

// O tipo final é uma união dos dois modos.
export type GovBRSwitchProps = GovBRSwitchStrictProps | GovBRSwitchMuiProps
