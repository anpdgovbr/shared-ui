import { SharedUIComponentProps } from "src/types/SharedUIComponentProps"

/**
 * @property id - Define o identificador do componente
 * @property label - Texto exibido no topo do componente
 * @property helpText - Texto  para informações adicionais
 * @property text - Texto da opção 
 * @property status - Define se o campo de radio é válido ou inválido
 */

export interface GovBRRadioProps extends SharedUIComponentProps {
  id?: string
  label?: string
  helpText?: string
  text?: string
  status?: 'valid' | 'invalid'
}