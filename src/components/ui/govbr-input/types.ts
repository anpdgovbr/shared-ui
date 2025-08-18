import type { InputHTMLAttributes, ReactNode } from 'react'

import type { GovBRClearBlock, GovBRSize, GovBRStatus } from '../../../types/GovBRTypes'
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'

/**
 * Propriedades do componente GovBRInput.
 */
export type GovBRInputProps = InputHTMLAttributes<HTMLInputElement> &
  SharedUIComponentProps & {
    /**
     * Tamanho do input, seguindo os padrões do GovBR.
     * @default 'medium'
     */
    govbrSize?: GovBRSize

    /**
     * Status visual do input.
     */
    status?: GovBRStatus

    /**
     * Define se o bloco de limpeza será exibido.
     */
    clearBlock?: GovBRClearBlock

    /**
     * Rótulo do campo de input.
     */
    label?: ReactNode

    /**
     * Mensagem de feedback exibida abaixo do input.
     */
    feedbackMessage?: string

    /**
     * Texto auxiliar exibido abaixo do input.
     */
    helperText?: string

    /**
     * Define estado de erro no input.
     * Quando true, sobrescreve o status para 'danger'.
     * @default false
     */
    error?: boolean

    /**
     * Destaca visualmente o input.
     * @default false
     */
    highlight?: boolean

    /**
     * Exibe o input em linha com o rótulo.
     * @default false
     */
    inline?: boolean

    /**
     * Ícone exibido no início do campo.
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

    /**
     * Tipo do botão final.
     * @default 'button'
     */
    endButtonType?: 'button' | 'submit' | 'reset'

    /**
     * Tooltip para o botão final.
     */
    endButtonTooltip?: string
  }
