import type { TextFieldProps } from '@mui/material/TextField'
import type { InputHTMLAttributes, ReactNode } from 'react'

import { GovBRStatus } from '../../../types/GovBRTypes'

// Props customizadas que são compartilhadas entre os dois modos
interface GovBRInputBaseProps {
  /**
   * Ativa o modo de renderização estrito, que usa um elemento `<input>` padrão
   * com as classes CSS do GovBR-DS, em vez de um TextField do MUI estilizado pelo tema.
   * Garante máxima fidelidade visual ao GovBR-DS.
   * @default false
   */
  strictgovbr?: boolean

  /**
   * O rótulo de texto a ser exibido acima do campo de entrada.
   */
  label?: ReactNode

  /**
   * Ícone exibido no início do campo (Apenas modo MUI).
   */
  startIcon?: ReactNode

  /**
   * Ícone do botão exibido ao final do input.
   */
  endButtonIcon?: ReactNode

  /**
   * Função executada quando o botão final é clicado.
   */
  onEndButtonClick?: () => void
}

// Props para o modo ESTRITO (baseado em input HTML)
// Herda os atributos de um <input> e adiciona as props base.
export type GovBRInputStrictProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color' // Omitimos 'size' e 'color' do HTML para evitar conflito com o nosso
> &
  GovBRInputBaseProps & {
    strictgovbr: true
    govbrSize?: 'small' | 'medium' | 'large' // Prop de tamanho para as classes do Gov.br
    status?: GovBRStatus
    error?: boolean
    feedbackMessage?: string
    highlight?: boolean
    inline?: boolean
    /**
     * Configuração do bloco de limpeza automática (used in GovBR strict mode).
     * Valores permitidos seguem a nomenclatura do Gov.br DS.
     */
    clearBlock?: 'sm' | 'md' | 'lg' | 'xl'
  }

// Props para o modo PADRÃO (baseado em TextField do MUI)
// Herda as props do TextField e adiciona as props base.
export type GovBRInputMuiProps = TextFieldProps &
  GovBRInputBaseProps & {
    strictgovbr?: false
    govbrSize?: 'small' | 'medium' | 'large' // Prop de tamanho também disponível no modo MUI
  }

// O tipo final é uma união dos dois modos.
// O TypeScript irá inferir qual conjunto de props é válido com base na prop `strictgovbr`.
export type GovBRInputProps = GovBRInputStrictProps | GovBRInputMuiProps
