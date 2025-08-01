import type { TextareaHTMLAttributes } from 'react'
import type { GovBRSize, GovBRStatus, GovBRClearBlock } from 'src/types/GovBRTypes'
/**
 * Propriedades do componente GovBRTextArea.
 */
export interface GovBRTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Tamanho do textarea, seguindo os padrões do GovBR.
   * - `small`: Pequeno
   * - `medium`: Médio (padrão)
   * - `large`: Grande
   * @default 'medium'
   * @example
   * ```tsx
   * <GovBRTextArea govbrSize="small" placeholder="Digite sua mensagem" />
   * ```
   * @remarks
   * O tamanho do textarea é utilizado para definir a altura e o espaçamento interno do campo, garantindo consistência visual com outros componentes do GovBR.
   */
  govbrSize?: GovBRSize
  /**
   * Status visual do textarea, utilizado para indicar estados como sucesso, erro, informação ou aviso.
   * - `success`: Sucesso
   * - `danger`: Erro
   * - `info`: Informação
   * - `warning`: Aviso
   * @example
   * ```tsx
   * <GovBRTextArea status="danger" feedbackMessage="Campo obrigatório" />
   * ```
   */
  status?: GovBRStatus
  /**
   * Define se o bloco de limpeza (clear) será exibido automaticamente.
   * @remarks
   * Útil para textareas que precisam de um botão para limpar o conteúdo.
   */
  clearBlock?: GovBRClearBlock
  /**
   * Rótulo do campo de textarea.
   * @example
   * ```tsx
   * <GovBRTextArea label="Observações" />
   * ```
   */
  label?: React.ReactNode
  /**
   * Mensagem de feedback exibida abaixo do textarea, geralmente usada para erros ou validações.
   * @example
   * ```tsx
   * <GovBRTextArea feedbackMessage="Campo obrigatório" status="danger" />
   * ```
   */
  feedbackMessage?: string
  /**
   * Texto auxiliar exibido abaixo do textarea, normalmente usado para instruções ou dicas.
   * @example
   * ```tsx
   * <GovBRTextArea helperText="Digite suas observações aqui" />
   * ```
   */
  helperText?: string
  /**
   * Destaca visualmente o textarea.
   * @default false
   */
  highlight?: boolean
  /**
   * Exibe o textarea em linha (inline) com o rótulo.
   * @default false
   */
  inline?: boolean
  /**
   * Define o número máximo de caracteres permitidos.
   * Quando definido, exibe um contador de caracteres.
   * @example
   * ```tsx
   * <GovBRTextArea maxLength={500} showCharacterCount />
   * ```
   */
  maxLength?: number
  /**
   * Exibe o contador de caracteres.
   * @default false
   * @example
   * ```tsx
   * <GovBRTextArea showCharacterCount maxLength={500} />
   * ```
   */
  showCharacterCount?: boolean
  /**
   * Aplica o tema escuro ao componente.
   * @default false
   */
  darkMode?: boolean
}
//# sourceMappingURL=types.d.ts.map
