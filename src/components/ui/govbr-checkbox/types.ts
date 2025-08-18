import type { CheckboxProps } from '@mui/material/Checkbox'
import type { FormControlLabelProps } from '@mui/material/FormControlLabel'
import type { InputHTMLAttributes } from 'react'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRCheckboxBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<input>` padrão
   * com as classes CSS do GovBR-DS, em vez de um Checkbox do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean
}

// Props para o modo ESTRITO (baseado em input HTML)
export type GovBRCheckboxStrictProps = InputHTMLAttributes<HTMLInputElement> &
  GovBRCheckboxBaseProps & {
    strictgovbr: true
    // No modo estrito, o label é apenas uma string ou um nó React
    label?: React.ReactNode
  }

// Props para o modo PADRÃO (baseado em Checkbox do MUI)
// Herda as props do FormControlLabel para controlar o rótulo e seu posicionamento
export type GovBRCheckboxMuiProps = Omit<FormControlLabelProps, 'control'> &
  GovBRCheckboxBaseProps & {
    strictgovbr?: false
    // Inclui as props do Checkbox do MUI para controle fino
    checkboxProps?: CheckboxProps
  }

// O tipo final é uma união dos dois modos.
export type GovBRCheckboxProps = GovBRCheckboxStrictProps | GovBRCheckboxMuiProps
