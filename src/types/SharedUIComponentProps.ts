/**
 * Props comuns a todos os componentes do @anpdgovbr/shared-ui
 * permitindo forçar estritamente o govbr-ds.
 *
 * @security Interface readonly garante contrato de API estável
 * @resilience Props opcionais com defaults previnem quebras de compatibilidade
 *
 * @remarks
 * Esta interface é a base da arquitetura híbrida da biblioteca:
 * - strictgovbr={false} (padrão): Componente MUI estilizado pelo govbrTheme.ts
 * - strictgovbr={true}: Elemento HTML puro com classes CSS oficiais do Gov.br DS
 *
 * @see {@link ../ARQUITETURA.md} - Documentação completa da arquitetura híbrida
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
   * **Modo Padrão (false):** Renderiza componente MUI com estilização do govbrTheme.ts
   * **Modo Estrito (true):** Renderiza elemento HTML puro com classes `.br-*` do Gov.br DS
   *
   * @default false
   * @security Modo estrito previne conflitos de CSS-in-JS vs classes globais
   * @resilience Fallback automático para modo padrão garante funcionamento mesmo sem Gov.br CSS
   */
  strictgovbr?: boolean

  /**
   * Classes CSS adicionais para personalização
   *
   * @remarks
   * Permite extensão de estilos sem quebrar a arquitetura base.
   * Classes são concatenadas usando a biblioteca `classnames` para segurança.
   *
   * @security Classes são sanitizadas automaticamente pelo React
   */
  className?: string

  /**
   * Identificador único do componente
   *
   * @remarks
   * Usado para acessibilidade (ARIA) e integração com testes automatizados.
   *
   * @security IDs únicos previnem colisões de seletores CSS
   * @resilience Componentes funcionam sem ID (geração automática quando necessário)
   */
  id?: string
}

/**
 * Tipo utilitário para garantir que componentes GovBR sempre
 * herdem as props compartilhadas.
 *
 * @security Type-safety garante que todos os componentes GovBR implementem a prop strictgovbr
 * @resilience Herança automática previne esquecimento de props essenciais
 *
 * @template T - Tipo base do componente (props específicas)
 *
 * @example
 * ```ts
 * // ✅ Uso correto - herda SharedUIComponentProps automaticamente
 * interface MyGovBRComponentProps extends GovBRComponentProps<BaseProps> {
 *   customProp: string
 * }
 *
 * // Resultado: MyGovBRComponentProps tem strictgovbr, className, id + customProp
 * ```
 *
 * @example
 * ```ts
 * // ✅ Componente sem props extras
 * interface SimpleGovBRProps extends GovBRComponentProps {
 *   // Apenas props compartilhadas (strictgovbr, className, id)
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type GovBRComponentProps<T = {}> = T & SharedUIComponentProps
