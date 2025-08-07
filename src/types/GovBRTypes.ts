/**
 * Define os tamanhos disponíveis para componentes do GovBR.
 *
 * @remarks
 * Use este tipo para padronizar o tamanho de componentes conforme as diretrizes do GovBR.
 *
 * @example
 * ```ts
 * const tamanho: GovBRSize = 'medium';
 * ```
 */
export type GovBRSize = 'small' | 'medium' | 'large'

/**
 * Define os status disponíveis para componentes do GovBR.
 *
 * @remarks
 * Utilizado para indicar o estado de um componente, como sucesso, aviso, erro ou informação.
 *
 * @example
 * ```ts
 * const status: GovBRStatus = 'success';
 * ```
 */
export type GovBRStatus = 'success' | 'warning' | 'danger' | 'info'

/**
 * Define as cores primárias para componentes do GovBR.
 *
 * @remarks
 * Cores básicas seguindo a paleta oficial do Design System GovBR.
 *
 * @example
 * ```ts
 * const cor: GovBRColor = 'primary';
 * ```
 */
export type GovBRColor = 'default' | 'primary' | 'secondary'

/**
 * Define as cores semânticas extendidas para componentes do GovBR.
 *
 * @remarks
 * Inclui cores de status e feedback visual seguindo diretrizes do GovBR-DS.
 * Consistente com GovBRStatus para evitar conflitos.
 *
 * @example
 * ```ts
 * const cor: GovBRSemanticColor = 'success';
 * ```
 */
export type GovBRSemanticColor = GovBRColor | 'success' | 'warning' | 'danger' | 'info'

/**
 * Define os tamanhos de espaçamento para o bloco de limpeza (clear block) do GovBR.
 *
 * @remarks
 * Usado para especificar o espaçamento entre blocos em componentes visuais.
 *
 * @example
 * ```ts
 * const clearBlock: GovBRClearBlock = 'md';
 * ```
 */
export type GovBRClearBlock = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Define as variações visuais para componentes do GovBR.
 *
 * @remarks
 * Baseado nas variações do Material-UI, mas seguindo nomenclatura GovBR.
 *
 * @example
 * ```ts
 * const variacao: GovBRVariant = 'outlined';
 * ```
 */
export type GovBRVariant = 'text' | 'outlined' | 'contained'
