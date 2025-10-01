/**
 * Props comuns a todos os componentes do @anpdgovbr/shared-ui
 * permitindo forçar estritamente o govbr-ds.
 */
export interface SharedUIComponentProps {
  /**
   * Caso true, aplica estilos estritamente compatíveis
   * com o Design System do govbr-ds, bloqueando
   * customizações adicionais do componente.
   *
   * @remarks
   * Quando ativado, força o uso dos estilos CSS vindos do core do govbr-ds,
   * garantindo máxima compatibilidade com as diretrizes oficiais.
   *
   * @default false
   */
  strictgovbr?: boolean

  /**
   * Classes CSS adicionais para personalização
   */
  className?: string

  /**
   * Identificador único do componente
   */
  id?: string
}

/**
 * Tipo utilitário para garantir que componentes GovBR sempre
 * herdem as props compartilhadas.
 *
 * @template T - Tipo base do componente
 * @example
 * ```ts
 * interface MyGovBRComponentProps extends GovBRComponentProps<BaseProps> {
 *   // props específicas do componente
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type GovBRComponentProps<T = {}> = T & SharedUIComponentProps
