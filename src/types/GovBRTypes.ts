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
