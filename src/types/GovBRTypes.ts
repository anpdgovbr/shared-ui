/**
 * Tipos padronizados para componentes GovBR Design System
 *
 * @security Tipos literais previnem valores inválidos em runtime
 * @resilience Union types garantem compatibilidade com diferentes frameworks
 *
 * @remarks
 * Este módulo centraliza todos os tipos de valores semânticos do Gov.br DS,
 * garantindo consistência entre componentes e compatibilidade com as diretrizes oficiais.
 */

/**
 * Define os tamanhos disponíveis para componentes do GovBR.
 *
 * @security Tipo literal previne valores arbitrários que quebrariam o design system
 * @resilience Valores padronizados garantem consistência visual
 *
 * @remarks
 * Use este tipo para padronizar o tamanho de componentes conforme as diretrizes do GovBR.
 * Mapeamento com MUI: small → small, medium → medium, large → large
 *
 * @example
 * ```ts
 * const tamanho: GovBRSize = 'medium' // ✅ Correto
 * const invalido: GovBRSize = 'tiny' // ❌ Erro de compilação
 * ```
 */
export type GovBRSize = 'small' | 'medium' | 'large'

/**
 * Define os status disponíveis para componentes do GovBR.
 *
 * @security Alinhado com WCAG 2.1 para feedback visual acessível
 * @resilience Mapeamento semântico previne erros de interpretação
 *
 * @remarks
 * Utilizado para indicar o estado de um componente, como sucesso, aviso, erro ou informação.
 * Cores correspondentes:
 * - success: verde (#168821)
 * - warning: laranja (#F29F05)
 * - danger: vermelho (#D04F4F)
 * - info: azul claro (#007FA3)
 *
 * @example
 * ```ts
 * const status: GovBRStatus = 'success' // ✅ Feedback positivo
 * const alerta: GovBRStatus = 'warning' // ⚠️ Atenção necessária
 * ```
 */
export type GovBRStatus = 'success' | 'warning' | 'danger' | 'info'

/**
 * Define as cores primárias para componentes do GovBR.
 *
 * @security Paleta limitada previne uso incorreto de cores não-acessíveis
 * @resilience Cores padronizadas garantem contraste WCAG AA mínimo
 *
 * @remarks
 * Cores básicas seguindo a paleta oficial do Design System GovBR.
 * - default: cinza neutro (#333333)
 * - primary: azul GovBR (#1351B4) ou verde ANPD (#168821) conforme tema ativo
 * - secondary: amarelo GovBR (#FFD200) ou azul ANPD (#1351B4) conforme tema ativo
 *
 * @example
 * ```ts
 * const cor: GovBRColor = 'primary' // ✅ Cor principal do tema ativo
 * ```
 */
export type GovBRColor = 'default' | 'primary' | 'secondary'

/**
 * Define as cores semânticas extendidas para componentes do GovBR.
 *
 * @security Consistente com GovBRStatus para prevenir conflitos semânticos
 * @resilience Union type permite uso intercambiável com GovBRColor ou GovBRStatus
 *
 * @remarks
 * Inclui cores de status e feedback visual seguindo diretrizes do GovBR-DS.
 * Combina cores básicas (GovBRColor) com cores de status (GovBRStatus).
 *
 * @example
 * ```ts
 * const cor: GovBRSemanticColor = 'success' // ✅ Válido (status)
 * const cor2: GovBRSemanticColor = 'primary' // ✅ Válido (cor básica)
 * ```
 */
export type GovBRSemanticColor = GovBRColor | 'success' | 'warning' | 'danger' | 'info'

/**
 * Define os tamanhos de espaçamento para o bloco de limpeza (clear block) do GovBR.
 *
 * @security Valores fixos previnem espaçamentos inconsistentes
 * @resilience Escala padronizada facilita composição de layouts
 *
 * @remarks
 * Usado para especificar o espaçamento entre blocos em componentes visuais.
 * Mapeamento com tokens CSS:
 * - sm: var(--spacing-scale-base, 1rem) - 16px
 * - md: var(--spacing-scale-2x, 2rem) - 32px
 * - lg: var(--spacing-scale-3x, 3rem) - 48px
 * - xl: var(--spacing-scale-4x, 4rem) - 64px
 *
 * @example
 * ```ts
 * const clearBlock: GovBRClearBlock = 'md' // 32px de espaçamento
 * ```
 */
export type GovBRClearBlock = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Define as variações visuais para componentes do GovBR.
 *
 * @security Variantes limitadas previnem estilos não-padronizados
 * @resilience Compatível com variantes do Material-UI para intercambiabilidade
 *
 * @remarks
 * Baseado nas variações do Material-UI, mas seguindo nomenclatura GovBR.
 * - text: Sem fundo, apenas texto (mais sutil)
 * - outlined: Com borda, fundo transparente (médio destaque)
 * - contained: Com fundo preenchido (máximo destaque)
 *
 * @example
 * ```ts
 * const variacao: GovBRVariant = 'outlined' // ✅ Botão com borda
 * ```
 */
export type GovBRVariant = 'text' | 'outlined' | 'contained'
