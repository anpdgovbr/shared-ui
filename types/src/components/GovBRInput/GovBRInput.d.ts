import React from 'react'
import type { InputHTMLAttributes } from 'react'
import type { GovBRSize, GovBRStatus, GovBRClearBlock } from 'src/types/GovBRTypes'
/**
 * Propriedades do componente GovBRInput.
 */
export type GovBRInputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Tamanho do input, seguindo os padrões do GovBR.
   * - `small`: Pequeno
   * - `medium`: Médio (padrão)
   * - `large`: Grande
   * @default 'medium'
   * @example
   * ```tsx
   * <GovBRInput govbrSize="small" placeholder="Digite algo" />
   * ```
   * @remarks
   * O tamanho do input é utilizado para definir a altura e o espaçamento interno do campo, garantindo consistência visual com outros componentes do GovBR.
   */
  govbrSize?: GovBRSize
  /**
   * Status visual do input, utilizado para indicar estados como sucesso, erro, informação ou aviso.
   * - `success`: Sucesso
   * - `danger`: Erro
   * - `info`: Informação
   * - `warning`: Aviso
   * @example
   * ```tsx
   * <GovBRInput status="danger" feedbackMessage="Campo obrigatório" />
   * ```
   */
  status?: GovBRStatus
  /**
   * Define se o bloco de limpeza (clear) será exibido automaticamente.
   * @remarks
   * Útil para inputs que precisam de um botão para limpar o conteúdo.
   */
  clearBlock?: GovBRClearBlock
  /**
   * Rótulo do campo de input.
   * @example
   * ```tsx
   * <GovBRInput label="Nome completo" />
   * ```
   */
  label?: React.ReactNode
  /**
   * Mensagem de feedback exibida abaixo do input, geralmente usada para erros ou validações.
   * @example
   * ```tsx
   * <GovBRInput feedbackMessage="Campo obrigatório" status="danger" />
   * ```
   */
  feedbackMessage?: string
  /**
   * Texto auxiliar exibido abaixo do input, normalmente usado para instruções ou dicas.
   * @example
   * ```tsx
   * <GovBRInput helperText="Digite seu nome completo" />
   * ```
   */
  helperText?: string
  /**
   * Destaca visualmente o input.
   * @default false
   */
  highlight?: boolean
  /**
   * Exibe o input em linha (inline) com o rótulo.
   * @default false
   */
  inline?: boolean
  /**
   * Ícone exibido no início do campo de input.
   * @example
   * ```tsx
   * <GovBRInput startIcon={<UserIcon />} />
   * ```
   */
  startIcon?: React.ReactNode
  /**
   * Ícone do botão exibido ao final do input.
   * @example
   * ```tsx
   * <GovBRInput endButtonIcon={<ClearIcon />} onEndButtonClick={handleClear} />
   * ```
   */
  endButtonIcon?: React.ReactNode
  /**
   * Função chamada ao clicar no botão de final do input.
   * @example
   * ```tsx
   * <GovBRInput endButtonIcon={<ClearIcon />} onEndButtonClick={handleClear} />
   * ```
   */
  onEndButtonClick?: () => void
}
export declare const GovBRInput: React.FC<Readonly<GovBRInputProps>>
export default GovBRInput
//# sourceMappingURL=GovBRInput.d.ts.map
