import { ButtonProps } from "@mui/material"
import { SharedUIComponentProps } from "src/types/SharedUIComponentProps"

/**
 * @propery helpText - Texto utilizado para informações adicionais
 * @property text - Texto exibido na opção de seleção
 * @property label - Texto exibido no topo do componente
 * @property disabled - Altera o estado do botão
 * @property checked - Altera o estado de seleção
 * @property error - Utilizado para demonstrar o estado de erro
 * @property valid - Utilizado para demonstrar o estado válido
 * @property onChange - função para alterar o estado da opção
 */

export interface GovBRRadioProps extends SharedUIComponentProps, ButtonProps {
  label?: string
  helpText?: string
  text?: string
  disabled?: boolean | undefined
  checked?: boolean | undefined 
  error?: boolean
  valid?: boolean
  onChange?: () => void
}